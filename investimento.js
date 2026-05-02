document.getElementById("btnWhatsapp").addEventListener("click", function(e){
  e.preventDefault();

  const msg = encodeURIComponent("Olá, gostaria de conhecer oportunidades de investimento imobiliário.");
  window.open(`https://wa.me/5511940671399?text=${msg}`, "_blank");
})