document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 


    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

  
    var mailtoLink = 'mailto:your-email@example.com?subject=Contact%20Form%20Submission&body=' +
        encodeURIComponent('Name: ' + name + '\n') +
        encodeURIComponent('Email: ' + email + '\n') +
        encodeURIComponent('Message: ' + message);

    window.location.href = mailtoLink;
});