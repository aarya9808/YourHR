function showSignup() {
  document.getElementById("signup-form").classList.add("active");
  document.getElementById("login-form").classList.remove("active");
}

function showLogin() {
  document.getElementById("login-form").classList.add("active");
  document.getElementById("signup-form").classList.remove("active");
}

async function handleSignup(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const result = await response.json();
      console.log("Signup successful:", result);
    } else {
      const errorText = await response.text();
      console.error("Signup error:", errorText);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

async function handleLogin(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const result = await response.json();
      console.log("Login successful:", result);
    } else {
      const errorText = await response.text();
      console.error("Login error:", errorText);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
