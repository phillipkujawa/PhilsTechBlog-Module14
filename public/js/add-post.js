async function addPostHandler(event) {
    event.preventDefault();

    // Retrieve data for adding a post, adapt as necessary
    const title = document.querySelector('input[name="post-title"]').value.trim();
    const content = document.querySelector('textarea[name="post-content"]').value.trim();

    if (title && content) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ blogtitle: title, blogcontent: content }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            console.log("TEST"+response);
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.add-post-form').addEventListener('submit', addPostHandler);
