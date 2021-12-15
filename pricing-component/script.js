const toggle = document.getElementById ('toggle');
const flex2 = document.getElementById ('flex2');

toggle.addEventListener("change", e => {
    flex2.classList.toggle('show-monthly');
});