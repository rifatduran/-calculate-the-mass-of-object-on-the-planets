const mass = document.querySelector(".mass")
const planet = document.querySelector("select")
const bttn = document.querySelector("button")
const p = document.querySelector("p")
const container = document.querySelector(".container2")
const erth = document.querySelector(".erth")
const error = document.createElement("div")
const selectplnt = document.createElement("div")
const info = document.createElement("div")
const winfo = document.createElement("div")

bttn.addEventListener("click", e => {

    erth.remove()

    const mvalue = parseInt(mass.value)
    const pvalue = planet.value

    if (!isNaN(mvalue)) {
        error.remove()
        p.textContent = ""
        if (pvalue != "select planet") {
            selectplnt.style.marginLeft = "20px"

            switch (pvalue) {
                case "earth":
                    selectplnt.innerHTML = '<img width="500px" height="500px" src="./img/Earth.png">'
                    container.appendChild(selectplnt)
                    break;
                case "mars":
                    selectplnt.innerHTML = '<img width="500px" height="500px" src="./img/mars.png">'
                    container.appendChild(selectplnt)
                    break;
                case "pluton":
                    selectplnt.innerHTML = '<img width="500px" height="500px" src="./img/Pluto.png">'
                    container.appendChild(selectplnt)
                    break;
                case "saturn":
                    selectplnt.innerHTML = '<img width="500px" height="500px" src="./img/Saturn.png">'
                    container.appendChild(selectplnt)
                    break;

                default:
                    break;
            }

            info.textContent = `The weight of the object on the ${pvalue}`
            info.style.backgroundColor = "rgba(255, 255, 255, 0.1)"
            info.style.borderRadius = "15px"
            info.style.margin = "15px"
            info.style.marginTop = "100px"
            info.style.height = "200px"
            info.style.padding = "20px"
            info.style.fontSize = "20px"
            info.style.color = "white"
            container.appendChild(info)

            winfo.style.backgroundColor = "rgba(255, 255, 255, 0.1)"
            winfo.style.marginTop = "27px"
            winfo.style.borderRadius = "65px"
            winfo.style.marginLeft = "80px"
            winfo.style.height = "130px"
            winfo.style.width = "130px"
            winfo.style.alignItems = "center"
            winfo.style.textAlign = "center"
            winfo.style.justifyContent = "center"
            winfo.style.lineHeight = "130px"
            winfo.style.fontSize = "30px"

            switch (pvalue) {
                case "earth":
                    winfo.textContent = `${Math.ceil(mvalue * 9.8)} N`
                    break;

                case "mars":
                    winfo.textContent = `${Math.ceil(mvalue * 3.7)} N`
                    break;

                case "pluton":
                    winfo.textContent = `${Math.ceil(mvalue * 0.6)} N`
                    break;

                case "saturn":
                    winfo.textContent = `${Math.ceil(mvalue * 10.4)} N`
                    break;

                default:
                    break;
            }

            info.appendChild(winfo)

        } else {

            info.remove()
            selectplnt.remove()
            error.textContent = "Planet is required"
            error.style.fontSize = "25px"
            error.style.maxWidth = "500px"
            error.style.padding = "30px"
            error.style.paddingLeft = "50px"
            error.style.paddingRight = "50px"
            error.style.height = "20px"
            error.style.textAlign = "center"
            error.style.color = "white"
            error.style.marginLeft = "330px"
            error.style.backgroundColor = "rgba(255, 255, 255, 0.15)"
            container.appendChild(error)
        }

    } else {
        info.remove()
        selectplnt.remove()

        if (mass.value) {
            p.textContent = "*the mass value should be number"
            p.style.color = "red"
            selectplnt.innerHTML = '<img class="erth" width="500px" height="500px" src="./img/Rotating_earth_animated_transparent.gif">'
            container.appendChild(selectplnt)
        } else {
            error.style.fontSize = "25px"
            error.style.maxWidth = "500px"
            error.style.padding = "30px"
            error.style.paddingLeft = "50px"
            error.style.paddingRight = "50px"
            error.style.height = "20px"
            error.style.textAlign = "center"
            error.textContent = "Mass is required"
            error.style.color = "white"
            error.style.marginLeft = "330px"
            error.style.backgroundColor = "rgba(255, 255, 255, 0.15)"
            container.appendChild(error)
            if (pvalue == "select planet") {
                error.remove()
                p.remove()
                selectplnt.innerHTML = '<img class="erth" width="500px" height="500px" src="./img/Rotating_earth_animated_transparent.gif">'
                container.appendChild(selectplnt)
            }
        }

    }



})

