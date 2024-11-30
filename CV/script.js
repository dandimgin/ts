const toggleThemeButton = document.getElementById("toggle-theme");
const themeStyle = document.getElementById("theme-style");

// Cek tema yang disimpan di localStorage
if (localStorage.getItem("theme") === "dark") {
    themeStyle.setAttribute("href", "dark.css");
}

toggleThemeButton.addEventListener("click", () => {
    if (themeStyle.getAttribute("href") === "light.css") {
        themeStyle.setAttribute("href", "dark.css");
        localStorage.setItem("theme", "dark");
    } else {
        themeStyle.setAttribute("href", "light.css");
        localStorage.setItem("theme", "light");
    }
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", async(event) => {
    event.preventDefault(); // Cegah aksi default

    const formData = new FormData(form); // Mengumpulkan data

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                Accept: "application/json",
            },
        });

        if (response.ok) {
            alert("Your message has been sent successfully!");
            form.reset(); // Me-reset Form
        } else {
            alert("There was an error sending your message. Please try again.");
        }
    } catch (error) {
        alert("An error occurred. Please check your connection and try again.");
    }
});