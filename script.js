const header = document.querySelector(".header");
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

const appointmentForm = document.getElementById("appointmentForm");

appointmentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const servico = document.getElementById("servico").value;
  const data = document.getElementById("data").value;
  const hora = document.getElementById("hora").value;

  const numeroWhatsApp = "5500000000000";

  const mensagem = `Olá! Me chamo ${nome}. Gostaria de agendar uma consulta.

Meu WhatsApp: ${telefone}
Serviço desejado: ${servico}
Data desejada: ${data}
Horário desejado: ${hora}`;

  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
});
