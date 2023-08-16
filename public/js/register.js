const signupForm = document.querySelector('form[action="/api/users/signup"]');

    signupForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const username = document.querySelector('#username').value.trim();
        const email = document.querySelector('#email').value.trim();
        const password = document.querySelector('#password').value.trim();

        const response = await fetch('/api/users/signup', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            alert('Successfully signed up! Redirecting to dashboard...');
            window.location.href = '/dashboard';
        } else {
            const errorData = await response.json();
            alert('Failed to sign up. ' + errorData.message);
        }
    });