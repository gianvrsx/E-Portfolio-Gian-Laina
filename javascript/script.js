document.addEventListener("DOMContentLoaded", () => {

    console.log("JS is running");

    // FIXED: correct ID
    const modal = document.getElementById("projectModal");
    const body = document.getElementById("modal-body");

    function openModal(projectId) {
        if (!modal || !body) return;

        let content = "";

        if (projectId === "project1") {
            content = `
                <h2>Project 1</h2>
                <p>Event webpage design using HTML & CSS.</p>
                <img src="images/Event-Webpage.png" alt="Project 1">
            `;
        } else if (projectId === "project2") {
            content = `
                <h2>Project 2</h2>
                <p>Basic student information system project.</p>
                <img src="images/Project.png" alt="Project 2">
            `;
        }

        body.innerHTML = content;
        modal.classList.add("show");
        document.body.classList.add("modal-open");
    }

    function closeModal() {
        if (!modal) return;

        modal.classList.remove("show");
        document.body.classList.remove("modal-open");
    }

    window.openModal = openModal;
    window.closeModal = closeModal;

    document.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // =========================
    // TYPING EFFECT
    // =========================

    const texts = [
        "a Developer",
        "a Designer",
        "an IT Student"
    ];

    let index = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typingEl = document.getElementById("typing");
    console.log(typingEl); // debug

    function getSpeed() {
        return Math.random() * 40 + 40;
    }

    function type() {
        if (!typingEl) return;

        const currentText = texts[index];

        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        typingEl.textContent = currentText.substring(0, charIndex);

        let speed = getSpeed();

        if (!isDeleting && charIndex === currentText.length) {
            speed = 1200;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % texts.length;
            speed = 400;
        }

        setTimeout(type, speed);
    }

    type();
});
