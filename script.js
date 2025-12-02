
'use strict';

const root = document.documentElement;
const buttons = document.querySelectorAll('.accordion-label');

buttons.forEach(btn => {
    btn.addEventListener('click', buttonClick);
});

function buttonClick(event) {
    const btn = event.target;
    const content = btn.nextElementSibling;

    // Toggle open class for clicked button and content
    btn.classList.toggle('open');
    content.classList.toggle('open');

    // Set the height variable for smooth animation
    root.style.setProperty('--content-height', content.scrollHeight + 'px');

    // Close all other open sections
    buttons.forEach(otherBtn => {
        if (otherBtn !== btn && otherBtn.classList.contains('open')) {
            otherBtn.classList.remove('open');
            otherBtn.nextElementSibling.classList.remove('open');
        }
    });
}


