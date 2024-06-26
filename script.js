document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    
    if (validateEmail(email)) {
        fetch('submit_email.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `email=${encodeURIComponent(email)}`
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                document.getElementById('message').innerText = 'Thank you! You can now download the file.';
                document.getElementById('downloadLink').style.display = 'block';
            } else {
                document.getElementById('message').innerText = data.message;
            }
        });
    } else {
        document.getElementById('message').innerText = 'Please enter a valid email address.';
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
