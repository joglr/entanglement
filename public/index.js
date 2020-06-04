

async function main() {

const div = document.createElement("div")
  const result = await fetch("api").then(r => r.text())
  div.textContent = result

  document.body.appendChild(div)
}

main()
