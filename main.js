import { database } from './firebase-config.js';
import { ref, push } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-database.js";

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const contactRef = ref(database, 'contacts');
    const newContactRef = push(contactRef);

    newContactRef.set({
        name: name,
        email: email,
        message: message
    }).then(() => {
        alert('Mensaje enviado con éxito!');
        contactForm.reset();
    }).catch((error) => {
        console.error('Error al enviar el mensaje: ', error);
    });
});