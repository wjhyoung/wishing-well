// Practice query selector function
function changeColor(newColor) {
    const elem = document.getElementById("para");
    elem.style.color = newColor;
}

document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", (event) => {
        changeColor(event.target.textContent.toLowerCase());
    });
});

// Show/hide authentication overlay
function authenticateUser(user) {
    const elem = document.getElementById("auth-overlay");
    elem.classList.toggle('hidden', !isLoggedIn);
}

document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", (event) => {
        authenticateUser(event.target)
    })
})

// Prompt constructor
document.getElementById('prompt-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Collect form values
    const formData = {
        role: document.getElementById('role').value,
        context: document.getElementById('context').value,
        task: document.getElementById('task').value,
        constraints: document.getElementById('constraints').value,
        tone: document.getElementById('tone').value,
        output: document.getElementById('output').value
    };

    // Convert to JSON string with formatting
    const jsonOutput = JSON.stringify(formData, null, 2);

    // Display in the div
    document.getElementById('json-output').textContent = jsonOutput;

    // Optional: Add copy button functionality
    document.getElementById('json-output').innerHTML += `
                            <button onclick="navigator.clipboard.writeText(this.previousSibling.textContent)"
                                    style="margin-top: 10px; padding: 5px 10px;">
                                Copy to Clipboard
                            </button>
                        `;
});