document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
        console.info('DOM loaded');
    }

    const logoutBtn = document.querySelector('#logout-btn');

    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();

            fetch('/api/users/logout', {
                method: 'POST',
            }).then((response) => {
                if (response.ok) {
                    document.location.replace('/');
                    // or whatever route you want to direct to after logout
                } else {
                    alert('Failed to log out');
                }
            });
        });
    }
});
