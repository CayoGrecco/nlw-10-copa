function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="${player1} flag">
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="${player2} flag">
    </li>
 `
}
let delay = -0.3
function createCard(date, day, games) {
  delay = delay + 0.3 
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date}<span>${day}</span></h2>
        <ul>
          ${games}
        </ul>
    </div>`
}
document.querySelector("#cards").innerHTML =
  createCard("20/11", "Domingo", createGame("Qatar", "13:00", "Ecuador")) +
  createCard(
    "21/11",
    "Segunda",
    createGame("England", "10:00", "Iran") +
      createGame("Senegal", "13:00", "Netherlands") +
      createGame("Usa", "16:00", "Wales")
  ) +
  createCard(
    "22/11",
    "Terça",
    createGame("Argentina", "07:00", "SaudiArabia") +
      createGame("Denmark", "10:00", "Tunisia") +
      createGame("Mexico", "13:00", "Poland") +
      createGame("France", "16:00", "Australia")
  ) +
  createCard(
    "23/11",
    "Quarta",
    createGame("Morocco", "07:00", "Croatia") +
      createGame("Germany", "10:00", "Japan") +
      createGame("Spain", "13:00", "Costarica") +
      createGame("Belgium", "16:00", "Canada")
  ) +
  createCard(
    "24/11",
    "Quinta",
    createGame("Switzerland", "07:00", "Cameroon") +
      createGame("Uruguay", "10:00", "Southkorea") +
      createGame("Portugal", "13:00", "Ghana") +
      createGame("Brazil", "16:00", "Serbia")
  ) +
  createCard(
    "25/11",
    "Sexta",
    createGame("Wales", "07:00", "Iran") +
      createGame("Qatar", "10:00", "Senegal") +
      createGame("Netherlands", "13:00", "Ecuador") +
      createGame("England", "16:00", "USA")
  ) +
  createCard(
    "26/11",
    "Sábado",
    createGame("Tunisia", "07:00", "Australia") +
      createGame("Poland", "10:00", "Saudiarabia") +
      createGame("France", "13:00", "Denmark") +
      createGame("Argentina", "16:00", "Mexico")
  ) +
  createCard(
    "27/11",
    "Domingo",
    createGame("Japan", "07:00", "Costarica") +
      createGame("Belgium", "10:00", "Morocco") +
      createGame("Croatia", "13:00", "Canada") +
      createGame("Spain", "16:00", "Germany")
  ) +
  createCard(
    "28/11",
    "Segunda",
    createGame("Cameroon", "07:00", "Serbia") +
      createGame("Southkorea", "10:00", "Ghana") +
      createGame("Brazil", "13:00", "Switzerland") +
      createGame("Portugal", "16:00", "Uruguay")
  ) +
  createCard(
    "29/11",
    "Terça",
    createGame("Ecuador", "12:00", "Senegal") +
      createGame("Netherlands", "16:00", "Qatar") +
      createGame("Wales", "16:00", "England")
  ) +
  createCard(
    "30/11",
    "Quarta",
    createGame("Tunisia", "12:00", "France") +
      createGame("Australia", "12:00", "Denmark") +
      createGame("Poland", "16:00", "Argentina") +
      createGame("Saudiarabia", "16:00", "Mexico")
  ) +
  createCard(
    "01/12",
    "Quinta",
    createGame("Croatia", "12:00", "Belgium") +
      createGame("Canada", "12:00", "Morocco") +
      createGame("Japan", "16:00", "Spain") +
      createGame("Costarica", "16:00", "Germany")
  ) +
  createCard(
    "02/12",
    "Sexta",
    createGame("Southkorea", "12:00", "Portugal") +
      createGame("Ghana", "12:00", "Uruguay") +
      createGame("Serbia", "16:00", "Switzerland") +
      createGame("Brazil", "16:00", "Cameroon")
  )
