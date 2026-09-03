const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const nodemailer = require('nodemailer');
const app = express();

app.use(express.json());
app.use(express.static('.')); // Serves your static HTML, CSS, and JS files

// Initialize Database
const db = new sqlite3.Database('./database.db', (err) => {
    if (err) console.error('Database opening error: ', err.message);
});

db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstName TEXT,
    lastName TEXT,
    email TEXT UNIQUE,
    phone TEXT,
    passcode TEXT
)`);

// Configure Email Transporter (Use your SMTP provider or Gmail App Password)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-app-password'
    }
});

// Endpoint: Request Access
app.post('/api/request-access', (req, res) => {
    const { firstName, lastName, email, phone } = req.body;
    if (!firstName || !lastName || !email || !phone) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    // Generate a secure 6-digit random passcode
    const passcode = Math.floor(100000 + Math.random() * 900000).toString();

    const query = `INSERT INTO users (firstName, lastName, email, phone, passcode) VALUES (?, ?, ?, ?, ?)`;
    db.run(query, [firstName, lastName, email, phone, passcode], function(err) {
        if (err) {
            return res.status(400).json({ error: 'Email is already registered.' });
        }

        // Send Email notification to your inbox
        const mailOptions = {
            from: 'your-email@gmail.com',
            to: 'your-email@gmail.com',
            subject: 'New Portfolio Access Request',
            text: `New user requested access:\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nGenerated Passcode: ${passcode}`
        };

        transporter.sendMail(mailOptions, (mailErr) => {
            if (mailErr) console.error('Email send error:', mailErr);
        });

        res.json({ success: true, passcode });
    });
});

// Endpoint: Login
app.post('/api/login', (req, res) => {
    const { email, passcode } = req.body;
    if (!email || !passcode) {
        return res.status(400).json({ error: 'Email and passcode are required.' });
    }

    db.get(`SELECT * FROM users WHERE email = ? AND passcode = ?`, [email, passcode], (err, row) => {
        if (err) return res.status(500).json({ error: 'Database error.' });
        if (!row) return res.status(401).json({ error: 'Invalid email or passcode.' });

        res.json({ success: true, message: 'Authenticated successfully' });
    });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});