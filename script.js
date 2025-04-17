// Create custom alert box
const alertBox = document.createElement("div");
alertBox.style.position = "fixed";
alertBox.style.top = "20px";
alertBox.style.left = "50%";
alertBox.style.transform = "translateX(-50%)";
alertBox.style.backgroundColor = "#f58a42";
alertBox.style.color = "white";
alertBox.style.padding = "15px 20px";
alertBox.style.borderRadius = "8px";
alertBox.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.4)";
alertBox.style.fontFamily = "Arial, sans-serif";
alertBox.style.fontSize = "16px";
alertBox.style.zIndex = "9999";
alertBox.style.maxWidth = "90%";
alertBox.style.textAlign = "center";

// Message
alertBox.textContent = "✅ Thanks for your feedback! We appreciate your input.";

// Auto-dismiss after 3 seconds
setTimeout(() => {
  alertBox.style.transition = "opacity 0.3s ease";
  alertBox.style.opacity = "0";
  setTimeout(() => alertBox.remove(), 300);
}, 2000);

// Add to document
document.body.appendChild(alertBox);
