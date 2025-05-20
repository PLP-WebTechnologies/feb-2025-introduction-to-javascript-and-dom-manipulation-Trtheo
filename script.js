// Change text content and style dynamically
function changeContent() {
  const heading = document.getElementById("main-heading");
  const intro = document.getElementById("intro-text");

  heading.textContent = "JavaScript DOM Magic ";
  intro.textContent = "Now the content has changed dynamically!";

  // Modify styles
  heading.style.color = "teal";
  heading.style.fontSize = "2.5rem";
  intro.style.fontStyle = "italic";
}

// Toggle (add/remove) a box element
function toggleBox() {
  const existingBox = document.getElementById("dynamic-box");

  if (existingBox) {
    existingBox.remove();
  } else {
    const box = document.createElement("div");
    box.id = "dynamic-box";
    box.textContent = "I’m a dynamically added box!";
    box.style.padding = "20px";
    box.style.backgroundColor = "#f0f0f0";
    box.style.marginTop = "10px";
    document.body.appendChild(box);
  }
}
