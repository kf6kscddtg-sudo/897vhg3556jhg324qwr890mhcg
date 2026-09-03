// Check if the user is already logged in when index.html loads
document.addEventListener('DOMContentLoaded', () => {
    const activeUser = localStorage.getItem('portfolioActiveUser');
    if (activeUser) {
        window.location.href = 'home.html';
    }
});

// Switch between Request Access and Login tabs
function switchTab(tabName) {
    const tabs = document.querySelectorAll('.tab-btn');
    const forms = document.querySelectorAll('.auth-form');

    tabs.forEach(btn => btn.classList.remove('active'));
    forms.forEach(form => form.classList.remove('active'));

    if (tabName === 'request') {
        tabs[0].classList.add('active');
        document.getElementById('requestForm').classList.add('active');
    } else if (tabName === 'login') {
        tabs[1].classList.add('active');
        document.getElementById('loginForm').classList.add('active');
    }
}

// Handle Access Request Generation (Saves Locally & Emails Admin)
function handleRequest(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim().toLowerCase();
    const phone = document.getElementById('phone').value.trim();
    const msgBox = document.getElementById('requestMessage');

    if (!firstName || !lastName || !email || !phone) {
        msgBox.className = 'message-box error';
        msgBox.innerText = 'Please fill out all required fields.';
        return;
    }

    if (localStorage.getItem('portfolioUser_' + email)) {
        msgBox.className = 'message-box error';
        msgBox.innerText = 'An account or request with this email already exists.';
        return;
    }

    const randomCode = 'PORT-' + Math.floor(1000 + Math.random() * 9000);
    
    // Save locally as pending
    const userData = { firstName, lastName, email, phone, passcode: randomCode, status: 'pending' };
    localStorage.setItem('portfolioUser_' + email, JSON.stringify(userData));

    msgBox.className = 'message-box success';
    msgBox.innerText = 'Submitting request to administrator...';

    // Email notification payload via Web3Forms
    const formData = {
        apikey: "YOUR_WEB3FORMS_ACCESS_KEY", // Replace with your key from web3forms.com
        subject: `New Portfolio Access Request: ${firstName} ${lastName}`,
        message: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nGenerated Passcode: ${randomCode}\n\nNote: To approve this user, add them to your preApprovedUsers array or update their status in local storage.`
    };

    fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            msgBox.className = 'message-box success';
            msgBox.innerHTML = `
                <strong>Request Submitted!</strong><br>
                Your access request has been sent to the administrator. Once approved, you can log in using your credentials.
            `;
            document.getElementById('requestForm').reset();
        } else {
            msgBox.className = 'message-box error';
            msgBox.innerText = 'Submission failed to send notification. Please try again.';
        }
    })
    .catch(error => {
        console.error("Error:", error);
        msgBox.className = 'message-box error';
        msgBox.innerText = 'Network error. Please check your connection.';
    });
}

// Handle Member Login Validation (Checks Hardcoded Whitelist & Local Storage properly)
function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value.trim().toLowerCase();
    const passcode = document.getElementById('passcode').value.trim();
    const msgBox = document.getElementById('loginMessage');

    // --- 1. HARDCODED PRE-APPROVED USERS (Whitelist) ---
    const preApprovedUsers = [
        { email: "your-email@gmail.com", passcode: "MASTER-01" },
        { email: "colleague@company.com", passcode: "PORT-5521" }
    ];

    // Check if email exists in hardcoded list first
    const hardcodedUser = preApprovedUsers.find(user => user.email === email);

    if (hardcodedUser) {
        if (hardcodedUser.passcode === passcode) {
            msgBox.className = 'message-box success';
            msgBox.innerText = 'Login successful! Redirecting...';
            localStorage.setItem('portfolioActiveUser', email);
            setTimeout(() => {
                window.location.href = 'home.html';
            }, 1200);
            return;
        } else {
            msgBox.className = 'message-box error';
            msgBox.innerText = 'Invalid passcode. Please check your credentials.';
            return;
        }
    }

    // --- 2. CHECK DYNAMIC REQUESTS (From localStorage) ---
    const savedRecord = localStorage.getItem('portfolioUser_' + email);

    if (!savedRecord) {
        msgBox.className = 'message-box error';
        msgBox.innerText = 'No account found for this email. Please request access first.';
        return;
    }

    const user = JSON.parse(savedRecord);

    // Block entry if admin hasn't approved them yet
    if (user.status !== 'approved') {
        msgBox.className = 'message-box error';
        msgBox.innerText = 'Your access request is still pending administrator approval.';
        return;
    }

    // Check passcode for local storage users
    if (user.passcode === passcode) {
        msgBox.className = 'message-box success';
        msgBox.innerText = 'Login successful! Redirecting...';
        localStorage.setItem('portfolioActiveUser', email);

        setTimeout(() => {
            window.location.href = 'home.html';
        }, 1200);
    } else {
        msgBox.className = 'message-box error';
        msgBox.innerText = 'Invalid passcode. Please check your credentials.';
    }
}