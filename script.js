document.getElementById('nicknameForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const messageDiv = document.getElementById('message');
    
    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            messageDiv.textContent = 'Thanks for submitting! We received your nickname.';
            messageDiv.className = 'message success';
            form.reset();
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        messageDiv.textContent = 'Oops! There was a problem submitting your form. Please try again.';
        messageDiv.className = 'message error';
        console.error('Error:', error);
    }
});
