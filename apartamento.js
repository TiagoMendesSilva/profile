document.querySelectorAll(".property-card").forEach(card => {
  card.addEventListener("click", () => {
    const imovel = card.getAttribute("data-imovel");

    const mensagem = encodeURIComponent(
      `Olá, tenho interesse neste imóvel:\n\n${imovel}`
    );

    window.open(`https://wa.me/5511940671399?text=${mensagem}`, "_blank");
  });
});