// Smooth scroll to section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Contact Form Handling
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  const formMessage = document.getElementById('formMessage');

  if (!name || !email || !message) {
    formMessage.textContent = 'Please fill out all fields.';
    formMessage.style.color = 'red';
    return;
  }

  formMessage.textContent = 'Message sent successfully!';
  formMessage.style.color = '#28a745';
  this.reset();
});

// Service Popup Interaction
const serviceCards = document.querySelectorAll('.card');
const modal = document.createElement('div');
modal.id = 'serviceModal';
modal.innerHTML = `
  <div class="modal-content">
    <span id="closeModal">&times;</span>
    <h3 id="modalTitle"></h3>
    <p id="modalDescription"></p>
  </div>
`;
document.body.appendChild(modal);

serviceCards.forEach((card, index) => {
  card.addEventListener('click', () => {
    const title = card.querySelector('h3').innerText;
    const description = card.querySelector('p').innerText;

    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDescription').innerText = description;
    modal.style.display = 'flex';
  });
});

document.getElementById('closeModal').addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
