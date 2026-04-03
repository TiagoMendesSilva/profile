document.getElementById("leadForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const button = e.target.querySelector("button");

  // loading visual
  button.innerText = "Enviando...";
  button.disabled = true;

  const data = {
    nome: document.getElementById("nome").value,
    whatsapp: document.getElementById("whatsapp").value,
    tipoImovel: document.getElementById("tipoImovel").value,
    faixaPreco: document.getElementById("faixaPreco").value
  };

  try {
    await fetch("http://localhost:8080/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const msg = encodeURIComponent("Olá, acabei de me cadastrar e quero receber imóveis exclusivos");

    window.location.href = `https://wa.me/5511940671399?text=${msg}`;

  } catch (error) {
    alert("Erro ao enviar. Tente novamente.");

    button.innerText = "📋 Receber Ofertas Exclusivas";
    button.disabled = false;
  }
});