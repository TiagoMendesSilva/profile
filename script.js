function toggleMode() {
  const html = document.documentElement
  /*
  if(html.classList.contains('light')){
    html.classList.remove('light')
  } else {
    html.classList.add('light')
  }
  */

  /* A lógica acima pode ser substituída por: */
  html.classList.toggle("light")

  /* 
  Pegar a tag img e substiutuir a imagem
  Se tiver dark mode,ou seja, sem light mode, manter a imagel normal
  */

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto de Tiago em preto e branco")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Tiago vestindo camiseta preta e fundo claro"
    )
  }
}
