submitBtn.addEventListener("click", async(e) => {
    e.preventDefault()
    console.log("Clicked!")
    resultconst.innerHTML = "Loading..."
    let key = "ema_live_5xLRo78cdzDEyCFBdjD4Z6c0eWMejAK9hE1R8R9h"
    let email = document.getElementById("username").value
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let result = await res.json()
let str = ``
for (key of Object.keys(result)) {
    if(result[key] !== "" && result[key]!== " "){
    str = str + `<div>${key}: ${result[key]}</div>`
    }
}
console.log(str)
resultconst.innerHTML = str
})