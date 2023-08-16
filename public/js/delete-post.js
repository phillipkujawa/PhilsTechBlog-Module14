async function deletePostHandler(event) {
    event.preventDefault();

    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
        console.log('Post deleted');
    } else {
        alert(response.statusText);
    }
}

// Get all the delete buttons
const deleteButtons = document.querySelectorAll('.delete-post-btn');

// Add event listener to each delete button
deleteButtons.forEach(button => {
    button.addEventListener('click', deletePostHandler);
});
