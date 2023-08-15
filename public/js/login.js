document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
        console.info('DOM loaded');
    }

    const loginForm = document.querySelector('#login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const userData = {
                username: document.querySelector('#username-input').value.trim(),
                password: document.querySelector('#password-input').value.trim(),
            };

            if (!userData.username || !userData.password) {
                return;
            }

            fetch('/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            }).then((response) => {
                if (response.ok) {
                    document.location.replace('/dashboard');
                    // or whatever route you want to direct to after login
                } else {
                    alert('Failed to log in');
                }
            });
        });
    }
});
