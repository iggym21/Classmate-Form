document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("classmateForm").addEventListener("submit", function(event){
        event.preventDefault();

        const formData = {
            firstName: document.getElementById("firstName").value,
            lastName: document.getElementById("lastName").value,
            mobile: document.getElementById("phone").value,
            email: document.getElementById("email").value,
            instagram: document.getElementById("instagram").value,
            linkedin: document.getElementById("linkedin").value,
            github: document.getElementById("github").value,
            address: document.getElementById("address").value,
        };

        localStorage.setItem("classmateData", JSON.stringify(formData));

        alert("Succesfully submitted form.");
    });
});