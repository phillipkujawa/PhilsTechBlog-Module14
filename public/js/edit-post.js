async function editPostHandler(event) {
    event.preventDefault();

    // Retrieve the post title and content from the form fields
    const post_title = document.querySelector('input[name="title"]').value.trim();
    const post_content = document.querySelector('textarea[name="content"]').value.trim();

    // Retrieve the post ID from the form's action attribute
    const post_id = event.target.action.split('/').pop();

    // If there's a title and content to submit
    if (post_title && post_content) {
        const response = await fetch(`/api/posts/${post_id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title: post_title,
                content: post_content
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // Redirect to the dashboard if the post edit was successful or display an error
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

// Attach the handler to the post edit form submit event
document.querySelector('form[action^="/api/posts/edit/"]').addEventListener('submit', editPostHandler);
