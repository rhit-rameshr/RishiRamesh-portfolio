document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  // Function to show and hide popup
  window.showPopup = function (show) {
    document.getElementById('popup').style.visibility = show ? 'visible' : 'hidden';
  };
});

// Assuming you have jQuery included, if not, you can use vanilla JavaScript
$('#send-message-btn').click(function() {
    // Assuming you are using Formspree for this example
    // Replace 'your_formspree_email' with your actual Formspree email
    var formUrl = 'https://formspree.io/your_formspree_email';

    // Assuming you want to collect user information to send
    var message = prompt('Please enter your message:');
    var user = {
        name: prompt('Your name:'),
        email: prompt('Your email:')
    };

    // Prepare data to send
    var data = {
        name: user.name,
        replyto: user.email,
        message: message
    };

    // Send the message via Formspree
    $.ajax({
        type: 'POST',
        url: formUrl,
        data: data,
        dataType: 'json'
    })
    .done(function(response) {
        alert('Message sent successfully!');
    })
    .fail(function(error) {
        alert('Oops! Something went wrong. Please try again later.');
    });
});

