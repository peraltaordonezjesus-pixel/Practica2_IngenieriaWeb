console.log("JS cargado");

document.getElementById("correo").addEventListener("blur", async () => {
  const correo = document.getElementById("correo").value;

  const res = await fetch("http://localhost:3000/api/pregunta", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ correo }),
  });

  const data = await res.json();

  const preguntas = {
    mascota: "¿Nombre de tu primera mascota?",
    escuela: "¿Nombre de tu escuela primaria?",
    comida: "¿Comida favorita?"
  };

  document.getElementById("preguntaTexto").textContent =
    preguntas[data.pregunta] || data.msg;
});

const form = document.getElementById("formRecuperacion");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      correo: document.getElementById("correo").value,
      respuesta: document.getElementById("respuestaRecuperacion").value,
      nuevaPassword: document.getElementById("nuevaPassword").value,
    };

    try {
      const res = await fetch("http://localhost:3000/api/recuperar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      mostrarModal(result.msg);
    } catch {
      mostrarModal("Error al conectar");
    }
  });
}


//
function mostrarModal(mensaje) {
  const modal = document.getElementById("modal");
  const texto = document.getElementById("modalMensaje");

  texto.textContent = mensaje;
  modal.style.display = "block";
}

document.getElementById("cerrarModal").onclick = () => {
  document.getElementById("modal").style.display = "none";
};

window.onclick = (e) => {
  const modal = document.getElementById("modal");
  if (e.target === modal) {
    modal.style.display = "none";
  }
};