function openModal(projectId) {
  const modal = document.getElementById("projectModal");
  const body = document.getElementById("modalBody");

  let content = "";

  if (projectId === "project1") {
    content = `
      <h2>Project 1</h2>
      <p>Event webpage design using HTML & CSS.</p>
      <img src="images/Event-Webpage.png">
    `;
  }

  if (projectId === "project2") {
    content = `
      <h2>Project 2</h2>
      <p>Basic student information system project.</p>
      <img src="images/Project.png">
    `;
  }

  body.innerHTML = content;

  modal.classList.add("show");
  document.body.classList.add("modal-open");
}

function closeModal() {
  const modal = document.getElementById("projectModal");

  modal.classList.remove("show");
  document.body.classList.remove("modal-open");
}

// close when clicking outside modal
document.addEventListener("click", (e) => {
  const modal = document.getElementById("projectModal");

  if (e.target === modal) {
    closeModal();
  }
});
const texts = [
  "a Developer",
  "a Designer",
  "an IT Student"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function type() {
  currentText = texts[index];

  if (!isDeleting) {
    document.getElementById("typing").textContent =
      currentText.substring(0, charIndex++);

    if (charIndex > currentText.length) {
      isDeleting = true;
      setTimeout(type, 1200);
      return;
    }
  } else {
    document.getElementById("typing").textContent =
      currentText.substring(0, charIndex--);

    if (charIndex < 0) {
      isDeleting = false;
      index = (index + 1) % texts.length;
    }
  }

  setTimeout(type, isDeleting ? 60 : 100);
}

type();