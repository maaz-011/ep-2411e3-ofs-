document.getElementById("togglePassword").addEventListener("click", function () {
    const passwordField = document.getElementById("password");
    const eyeIcon = document.getElementById("eyeIcon");
  
    if (passwordField.type === "password") {
      passwordField.type = "text"; // Show password
      eyeIcon.classList.remove("fa-eye");
      eyeIcon.classList.add("fa-eye-slash");
    } else {
      passwordField.type = "password"; // Hide password
      eyeIcon.classList.remove("fa-eye-slash");
      eyeIcon.classList.add("fa-eye");
    }
  });
  



(function() {
    function $(selector) {
        return document.querySelector(selector);
    }
  
    function on(event, selector, callback) {
        $(selector).addEventListener(event, callback);
    }
  
    // Validation logic
    on("submit", "#myForm", function(event) {
        let isValid = true;
  
        const name = $("#name").value.trim();
        const email = $("#email").value.trim();
        const password = $("#password").value.trim();
        const message = $("#message").value.trim();
  
        // Clear previous errors
        $("#nameError").textContent = "";
        $("#emailError").textContent = "";
        $("#passwordError").textContent = "";
        $("#messageError").textContent = "";
  
        // Name validation
        if (name === "") {
            $("#nameError").textContent = "Name is required.";
            isValid = false;
        }
  
        // Email validation
        if (email === "") {
            $("#emailError").textContent = "Email is required.";
            isValid = false;
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            $("#emailError").textContent = "Invalid email format.";
            isValid = false;
        }
  
        // Password validation
        if (password === "") {
            $("#passwordError").textContent = "Password is required.";
            isValid = false;
        } else if (password.length < 8) {
            $("#passwordError").textContent = "Password must be at least 8 characters long.";
            isValid = false;
        }
  
        // Message validation
        if (message === "") {
            $("#messageError").textContent = "Message is required.";
            isValid = false;
        }
  
        // Prevent form submission if invalid
        if (!isValid) {
            event.preventDefault();
        }
    });
  })();





  // Show/hide password for LOGIN form
document.getElementById("togglePassword").addEventListener("click", function () {
    const passwordField = document.getElementById("password");
    const eyeIcon = document.getElementById("eyeIcon");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    } else {
        passwordField.type = "password";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    }
});

(function () {
    function $(selector) {
        return document.querySelector(selector);
    }

    function on(event, selector, callback) {
        $(selector).addEventListener(event, callback);
    }

    // ✅ LOGIN form validation
    on("submit", "#myForm", function (event) {
        let isValid = true;

        const name = $("#name").value.trim();
        const email = $("#email").value.trim();
        const password = $("#password").value.trim();
        const message = $("#message").value.trim();

        $("#nameError").textContent = "";
        $("#emailError").textContent = "";
        $("#passwordError").textContent = "";
        $("#messageError").textContent = "";

        if (name === "") {
            $("#nameError").textContent = "Name is required.";
            isValid = false;
        }

        if (email === "") {
            $("#emailError").textContent = "Email is required.";
            isValid = false;
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            $("#emailError").textContent = "Invalid email format.";
            isValid = false;
        }

        if (password === "") {
            $("#passwordError").textContent = "Password is required.";
            isValid = false;
        } else if (password.length < 8) {
            $("#passwordError").textContent = "Password must be at least 8 characters long.";
            isValid = false;
        }

        if (message === "") {
            $("#messageError").textContent = "Message is required.";
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        }
    });

    // ✅ JOIN form validation
    on("submit", "#joinForm", function (event) {
        let isValid = true;

        const name = $("#joinName").value.trim();
        const email = $("#joinEmail").value.trim();
        const password = $("#joinPassword").value.trim();
        const message = $("#joinMessage").value.trim();

        $("#joinNameError").textContent = "";
        $("#joinEmailError").textContent = "";
        $("#joinPasswordError").textContent = "";
        $("#joinMessageError").textContent = "";

        if (name === "") {
            $("#joinNameError").textContent = "Name is required.";
            isValid = false;
        }

        if (email === "") {
            $("#joinEmailError").textContent = "Email is required.";
            isValid = false;
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            $("#joinEmailError").textContent = "Invalid email format.";
            isValid = false;
        }

        if (password === "") {
            $("#joinPasswordError").textContent = "Password is required.";
            isValid = false;
        } else if (password.length < 8) {
            $("#joinPasswordError").textContent = "Password must be at least 8 characters long.";
            isValid = false;
        }

        if (message === "") {
            $("#joinMessageError").textContent = "Message is required.";
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        }
    });

})();


  