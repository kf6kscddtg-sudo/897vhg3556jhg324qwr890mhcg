function toggleMobileMenu() {
    document.body.classList.toggle('mobile-menu-open');
}

document.addEventListener('DOMContentLoaded', () => {
    const mobileBtn = document.getElementById('mobileMenuBtn');
    if (mobileBtn) {
        mobileBtn.addEventListener('click', toggleMobileMenu);
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) {
            document.body.classList.remove('mobile-menu-open');
        }
    });
});