// var css =
//   "font-size: 48px; font-family: monospace; font-weight:150;color:black; background-color: white; border-radius:12px";
// console.log("%cПРИВЕТ", css);

const code = document.getElementById('coded')

fetch("http://localhost:3000/api/db/users").then(function (response) { 
  response.json().then(function (res) {
    code.innerHTML = JSON.stringify(res)
  })
})