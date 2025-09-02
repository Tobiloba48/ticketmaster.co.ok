const bar = document.querySelector('.transferBar');


function openBar() {   
  bar.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function closeBar() {
  bar.classList.add('hidden');
  overlay.classList.add('hidden')
}

// Ticket display for any page that has #ticketContainer
const ticketContainer = document.getElementById('ticketContainer')
if(ticketContainer) {
    eachTicket();
}

// Shared function to render tickets in horizontal scroll
function eachTicket() {
  const cards = JSON.parse(localStorage.getItem("cards")) || [];
  if (!ticketContainer)
    return;

  ticketContainer.innerHTML = ""; // clear previous tickets

  if (cards.length === 0) {
    ticketContainer.innerHTML = "<p class='text-gray-500 text-center mt-4'>No tickets available</p>";
    return;
  }

  cards.forEach(cardDetails => {
    ticketContainer.innerHTML += `
      <section
      class="text-white bg-white rounded-2xl border-2 border-gray-100 w-[20rem] shrink-0">
      <div class="bg-blue-600 text-center rounded-t-2xl">
        <p class="pt-2">
            ${cardDetails.category}
        </p>
        </div>

        <div class="bg-blue-600 flex justify-around py-4">
          <div>
            <p class="font-semibold text-sm text-center">SEC</p>
            <p class="font-bold text-xl text-center">${cardDetails.section || "-"}</p>
          </div>
            <div>
              <p class="font-semibold text-sm text-center">ROW</p>
              <p class="font-bold text-xl text-center">${cardDetails.row || "-"}</p>
            </div>
            <div>
              <p class="font-semibold text-sm text-center">SEAT</p>
              <p class="font-bold text-xl text-center">${cardDetails.seat}</p>
            </div>
          </div> 
        <div>
        
        </div>     
        <div id="The-Black" class="relative">
          <img
            src="${cardDetails.image || "UPLOAD TICKET IMAGE"}"
            alt="Beyoncé concert"
            class="w-full h-[13rem] object-fit"
          />

          <div class="absolute inset-0 bg-gradient-to-b from-black/10 to-black/95"></div>
          <div class="absolute bottom-0 w-full text-white pb-1">
            <div class="flex justify-center gap-1 place-items-start px-1">
              <p class="text-lg font-semibold">${cardDetails.eventName || "-"} </p>
            </div>
            <p class="text-[13px] text-center pl-1">${cardDetails.datePlace || "-"}</p>
          </div>
        </div>

        <div class="">
          <p class="text-black text-center font-semibold py-3">Loge Seating</p>
          <div class="bg-blue-600 mx-10 rounded flex justify-center gap-1 h-10 place-items-center">
            <img src="/Assets/images/barcode_scanner_24dp_D9D9D9_FILL0_wght400_GRAD0_opsz24.png" alt="">
            <p class="font-semibold text-center py-3">View Ticket</p>
          </div>
          <p class="font-bold text-blue-600 py-4 text-center">
            Ticket Details
          </p>
        </div>
        <div class="bg-blue-600 text-center rounded-b-2xl h-5 w-full"></div>
  </section>`;
  });
};

