const API_URL = "https://api.tiagomendessilva.com.br/home"

let currentPage = 0;
const pageSize = 1;

async function carregarImoveis(page = 0) {
  try {
    const response = await fetch(`${API_URL}?page=${page}&size=${pageSize}`);
    const data = await response.json();

    console.log("API:", data);

    const container = document.getElementById("propertyList");
    container.innerHTML = "";

    if (!data.home || data.home.length === 0) {
      container.innerHTML = `
        <div class="empty-message">
          Nenhum imóvel encontrado.
        </div>
      `;
      return;
    }

    data.home.forEach(imovel => {
      const card = document.createElement("div");
      card.className = "property-card";

      card.innerHTML = `
        <img src="${imovel.imgUrl}" alt="${imovel.titulo}">
        
        <div class="property-content">
          <h3>${imovel.titulo}</h3>
          <p>${imovel.bairro}</p>
          <strong>à partir R$ ${formatarPreco(imovel.preco)}</strong>

          <div class="property-actions">                                  
            <a href="https://wa.me/5511940671399?text=${encodeURIComponent(
              `Tenho interesse no imóvel ${imovel.titulo}`
            )}" target="_blank" class="btn btn-gold">
              💬 Tenho interesse
            </a>
          </div>
        </div>
      `;

      container.appendChild(card);
    });

    currentPage = data.page;

    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = data.last;

  } catch (error) {
    console.error("Erro ao carregar imóveis:", error);
  }
}

function formatarPreco(valor) {
  return Number(valor).toLocaleString("pt-BR", {
    minimumFractionDigits: 2
  });
}

function proximaPagina() {
  carregarImoveis(currentPage + 1);
}

function paginaAnterior() {
  if (currentPage > 0) {
    carregarImoveis(currentPage - 1);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  carregarImoveis();

  document.getElementById("nextBtn").addEventListener("click", proximaPagina);
  document.getElementById("prevBtn").addEventListener("click", paginaAnterior);
});