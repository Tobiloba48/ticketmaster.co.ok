let transferBar = document.querySelector('.transferBar');
let theBar = document.querySelector('.the-Bar')

theBar.addEventListener("click", function ticketPick () {
  const cards = JSON.parse(localStorage.getItem("cards")) || [];
  if (!transferBar) return;

  transferBar.innerHTML = `
    <div>
      <div class="mb-1">
        <div class="border-b border-gray-3500">
          <p class="text-center font-semibold text-lg py-1 text-gray-500">
            SELECT TICKETS TO TRANSFER
          </p>
        </div>
        <div class="flex justify-between px-5 pt-4">
          <p class="font-semibold text-sm">
            Sec ${cards[0]?.section || "-"}, Row ${cards[0]?.row || "-"}
          </p>
          <div class="flex justify-end gap-1 place-items-center">
            <img src="/Assets/icons/ticket.png" alt="" class="h-4 w-4">
            <p class="text-center">${cards.length} ticket(s)</p>
          </div>
        </div>
      </div>
      <div class="ticketpick flex justify-start gap-4 ml-10"></div>  
      <div class="flex justify-between mx-4 mt-3 mb-2">
        <p class="selectedCount font-semibold text-lg text-center"></p>
        <a href="#" id="showForm" class="text-sm text-blue-600 
          font-semibold text-center flex place-items-center">
          TRANSFER TO
          <img src="/Assets/icons/greater-than.png" alt="" class="w-5 h-5">
        </a>
      </div>
    </div>
  `;

  let ticketPick = document.querySelector('.ticketpick');

  cards.forEach(cardSeat => {
    ticketPick.innerHTML += `
      <div class="w-[5rem] border border-gray-200 shadow-lg rounded-xl mt-6 mb-8">
        <p class="bg-blue-500 text-center py-1 rounded-t-xl text-white 
        font-semibold text-sm">SEAT ${cardSeat.seat}
        </p>
        <div class="text-center py-4 px-7">
          <div class="tick-Background bg-white w-6 h-6 rounded-full border
           border-gray-400 cursor-pointer"
            data-seat="${cardSeat.seat}">
          </div>
        </div>
      </div>
    `;
  });

  function updateSelectedCounter() {
    const selected = document.querySelectorAll('.tick-Background.bg-blue-500').length;
    document.querySelector('.selectedCount').textContent = `${selected} Selected`;
  }
  updateSelectedCounter();

  document.querySelectorAll('.tick-Background').forEach(selector => {
    selector.addEventListener("click", function () {
      this.classList.toggle("bg-blue-500");
      this.classList.toggle("bg-white");
      updateSelectedCounter();
    });
  });
})





