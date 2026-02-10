let current = 0;
const cards = document.querySelectorAll(".card");

function nextCard() {
  if (current < cards.length - 1) {
    cards[current].classList.remove("active");
    cards[current].classList.add("exit");

    current++;
    cards[current].classList.add("active");
  }
}
