function on_off() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/img/dede.png")
  } else {
    img.setAttribute("src", "./assets/img/dada.png")
    img.setAttribute(
      "alt",
      "Imagem de um boder collie marrom de boca aberta chamado dada."
    )
  }
}
