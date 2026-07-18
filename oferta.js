const form = document.getElementById("leadForm");

// URL base da API em produção (ajuste o path conforme a rota real do endpoint de lead)
const API_BASE_URL = "https://api.tiagomendessilva.com.br";

form.addEventListener("submit", async function(e) {
  e.preventDefault();
  const button = e.target.querySelector("button");

  // loading visual
  button.innerText = "Enviando...";
  button.disabled = true;

  const data = {
    nome: document.getElementById("nome").value,
    whatsapp: document.getElementById("whatsapp").value,
    finalidade: document.getElementById("finalidade").value,
    tipologia: document.getElementById("tipologia").value,
    regiao: document.getElementById('regiao').value,
    faixaPreco: document.getElementById("faixaPreco").value
  };

  const dataSave = {...data};

  try {
    const response = await fetch(`${API_BASE_URL}/lead`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if(!response.ok) {
      throw new Error(`Erro ao cadastrar: ${response.status}`)
    }

    const msg = encodeURIComponent("Olá, acabei de me cadastrar e quero receber imóveis exclusivos");

    window.open(`https://wa.me/5511940671399?text=${msg}`, "_blank");
    form.reset();    
  } catch (error) {
    alert("Erro ao enviar. Tente novamente.");

    /*Restaura os dados no formulário*/
    document.getElementById("nome").value = dataSave.nome;
    document.getElementById("whatsapp").value = dataSave.whatsapp;
    document.getElementById("finalidade").value = dataSave.finalidade;
    document.getElementById("tipologia").value = dataSave.tipologia;
    document.getElementById("faixaPreco").value = dataSave.faixaPreco;
    document.getElementById("regiao").value = dataSave.regiao;
  } finally {
    /*Sempre restaura o botão */
    button.innerText = "📋 Receber Ofertas Exclusivas";
    button.disabled = false;
  }
});