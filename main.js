const cards = document.querySelectorAll('.card');
let hasFLippedCard = false;
let firstCard, secondCard;

function flipCard() {
   this.classList.toggle('flip');

   if(!hasFLippedCard) {
      hasFLippedCard = True;
      firstCard = this;
      return;
   }

   secondCard = this;
   checkForMath();
}

function checkForMath() {
   if(firstCard.dataset.card === secondCard.dataset.card) {
      disableCards();
      return;
   }

   unflipCards();
}
cards.forEach((card) => {
   card.addEventListener('click', flipCard);

});
