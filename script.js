document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let feedback = document.getElementById("feedback").value;

    if (name && email && feedback) {
        document.getElementById("message").innerText =
            "Thank you for your feedback, " + name + "!";

        document.getElementById("feedbackForm").reset();
    } else {
        document.getElementById("message").innerText =
            "Please fill all the fields.";
    }
});
