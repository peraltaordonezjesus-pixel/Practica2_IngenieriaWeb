document
  .getElementById("formLogin")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      correo: document.getElementById("correo").value,
      password: document.getElementById("password").value,
    };

    try {
      const res = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      document.getElementById("resultado").textContent = result.msg;
    } catch {
      document.getElementById("resultado").textContent =
        "Error al conectar";
    }
  });

import { mostrarModal } from "./modal.js";

document
  .getElementById("formLogin")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      correo: document.getElementById("correo").value,
      password: document.getElementById("password").value,
    };

    try {
      const res = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      mostrarModal(result.msg);
    } catch {
      mostrarModal("Error al conectar con el servidor");
    }
  });