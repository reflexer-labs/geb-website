import "./src/styles/main.css"
import "./static/animate.min.css"

const addScript = url => {
  const script = document.createElement("script")
  script.src = url
  script.async = true
  document.head.append(script)
}

export const onClientEntry = () => {
  addScript("/wow.min.js")
  const script = document.createElement("script")
  script.innerHTML = `
    setTimeout(() => {
      new WOW().init()
    }, 50)
  `
  script.async = true
  document.body.append(script)
}
