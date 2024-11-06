document.querySelector("form").addEventListener("submit", function(event) {
    // Prevent the form from submitting by default
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const number = document.getElementById("number").value.trim();
    const feedback = document.getElementById("feedback").value.trim();

    // Regex patterns for validation
    const namePattern = /^[a-zA-Z\s]+$/; // Allows only letters and spaces
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate name (only alphabets and spaces allowed)
    if (name === "" || !namePattern.test(name)) {
        alert("Please enter a valid name (letters and spaces only).");
        return;
    }

    // Validate email
    if (email === "" || !emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Validate phone number (basic validation)
    if (number === "" || isNaN(number)) {
        alert("Please enter a valid phone number.");
        return;
    }

    // Validate feedback
    if (feedback === "") {
        alert("Please provide your feedback.");
        return;
    }

    // If all fields are valid, submit the form
    alert("Form submitted successfully!");
    this.submit(); // Submit the form if validation passes
});
