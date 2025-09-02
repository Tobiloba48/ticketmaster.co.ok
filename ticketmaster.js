function eachTicket() {
  const cards = JSON.parse(localStorage.getItem("cards")) || [];
  ticketContainer.innerHTML = ""; // clear previous tickets

  if (cards.length === 0) {
    ticketContainer.innerHTML = "<p class='text-gray-500 text-center mt-4'>No tickets available</p>";
    return;
  }

  cards.forEach(cardDetails => {
    ticketContainer.innerHTML += `
      <section class="bg-white rounded-2xl border-2 border-gray-100 w-[20rem] shrink-0">
        <!-- Section & Row -->
        <div class="bg-blue-600 flex justify-around py-6 text-white">
          <div>
            <p class="font-semibold text-sm text-center">SEC</p>
            <p class="font-bold text-lg text-center">${cardDetails.section || "-"}</p>
          </div>
          <div>
            <p class="font-semibold text-sm text-center">ROW</p>
            <p class="font-bold text-lg text-center">${cardDetails.row || "-"}</p>
          </div>
        </div>

        <!-- Ticket Image & Info -->
        <div class="relative">
          <img src="${cardDetails.image}" alt="Ticket Image" class="w-full h-[11rem] object-cover"/>
          <div class="absolute bottom-0 w-full bg-gradient-to-b from-black/10 to-black/95 text-white pb-1">
            <div class="flex justify-center gap-1 items-center px-1">
              <p class="text-lg font-semibold">${cardDetails.eventName || "-"}</p>
            </div>
            <p class="text-sm text-center">${cardDetails.datePlace || "-"}</p>
          </div>
        </div>
      </section>`;
  });
}


const bar = document.querySelector('.transferBar');


function openBar() {   
  bar.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function closeBar() {
  bar.classList.add('hidden');
  overlay.classList.add('hidden')
}

