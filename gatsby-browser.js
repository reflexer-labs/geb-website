import "./src/styles/main.css"

const addScript = url => {
  const script = document.createElement("script")
  script.src = url
  script.async = true
  document.head.append(script)
}

export const onClientEntry = () => {
  addScript("https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js")

  const script = document.createElement("script")

  script.innerHTML = `function initWOW() {
    setTimeout(() => {
      new WOW().init()
    }, 300)
  }`
  script.async = true
  document.body.append(script)
}
