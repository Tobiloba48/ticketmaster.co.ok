const ticketPages = [
    {
        label:'General Admission',
        ticketImage:"/Assets/images/coldplay.jpg",
        ticketSection: '125',
        ticketRow:"11",
        ticketSeat: '76',
        eventName:'',
        tourName: 'COLDPLAY: MUSIC OF THE SPHERES WORLD TOUR 2025',
        ticketDatePlace: 'Wed, Aug 27, 5pm - Wembley Stadium'
    },
    {
        label:'General Admission',
        ticketImage:"/Assets/images/coldplay.jpg",
        ticketSection: '125',
        ticketRow:"11",
        ticketSeat: '77',
        eventName:'',
        tourName: 'COLDPLAY: MUSIC OF THE SPHERES WORLD TOUR 2025',
        ticketDatePlace: 'Wed, Aug 27, 5pm - Wembley Stadium'
    }
]

const ticketContainer = document.querySelector('.ticketContainer')
ticketContainer.innerHTML = ticketPages.map((ticketpage) => 
  `<section
      class="text-white bg-white rounded-2xl border-2 border-gray-100 w-[20rem] shrink-0">
      <div class="bg-blue-600 text-center rounded-t-2xl">
        <p class="py-2">
            ${ticketpage.label}
        </p>
        </div>

        <div class="bg-blue-600 flex justify-around py-6">
        <div>
          <p class="font-semibold text-sm text-center">SEC</p>
          <p class="font-bold text-lg text-center">${ticketpage.ticketSection}</p>
        </div>
          <div>
            <p class="font-semibold text-sm text-center">ROW</p>
            <p class="font-bold text-lg text-center">${ticketpage.ticketRow}</p>
          </div>
          <div>
            <p class="font-semibold text-sm text-center">SEAT</p>
            <p class="font-bold text-lg text-center">${ticketpage.ticketSeat}</p>
          </div>
        </div>      
        <div class="relative">
        <img
            src="${ticketpage.ticketImage}"
            alt="Beyoncé concert"
            class="w-full h-[11rem] object-cover"
        />
        <div class="absolute bottom-0 w-full  bg-gradient-to-b from-black/10 to-black/95 text-white pb-1">
            <div class="flex justify-center gap-1 place-items-center px-1">
              <p class="text-lg font-semibold">${ticketpage.eventName} </p>
              <p class="text-lg font-semibold text-center"> ${ticketpage.tourName}</p>
            </div>
            <p class="text-sm text-center">${ticketpage.ticketDatePlace}</p>
          </div>
        </div>

        <div class="">
          <p class="text-black text-center font-semibold py-3">Lower Level</p>
          <div class="bg-blue-600 mx-10 rounded flex justify-center gap-1 h-10 place-items-center">
          <img src="/Assets/images/barcode_scanner_24dp_D9D9D9_FILL0_wght400_GRAD0_opsz24.png" alt="">
          <p class="font-semibold text-center py-3">View Ticket</p>
          </div>
          <p class="font-bold text-blue-600 py-4 text-center">
            Ticket Details
          </p>
        </div>
        <div class="bg-blue-600 text-center rounded-b-2xl h-5 w-full"></div>
  </section>`
)
.join('');

const bar = document.querySelector('.transferBar');


function openBar() {   
  bar.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function closeBar() {
  bar.classList.add('hidden');
  overlay.classList.add('hidden')
}

