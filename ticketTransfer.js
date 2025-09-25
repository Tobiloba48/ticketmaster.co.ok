let transferForm = document.querySelector(".ticket-form");
let ticketPickDiv = document.querySelector(".transferBar");
// let showForm = document.getElementById('showForm')
// let overlay = document.getElementById("overlay");


// Delegation: when user clicks TRANSFER TO (#showForm)
document.addEventListener("click", function (e) {
  if (e.target && e.target.id === "showForm") {
    e.preventDefault();

    const cards = JSON.parse(localStorage.getItem("cards")) || [];

    // find selected seats (only ticked ones)
    const selectedSeats = [...document.querySelectorAll(".tick-Background.bg-blue-500")]
      .map(el => el.dataset.seat); // make sure you set data-seat in ticketPick.js

    const selected = selectedSeats.length;

    if (typeof overlay !== "undefined" && overlay) {
      overlay.classList.remove("hidden");
    }

    if (selected > 0) {
      ticketPickDiv.classList.add("hidden");
      transferForm.classList.remove("hidden");

      transferForm.innerHTML = `
        <div>
          <p class="font-bold text-center py-1 border-b border-gray-400">
            TRANSFER TICKETS
          </p>
          <div class="px-4">
            <p class="selectedCountText">
              ${selected} Ticket${selected > 1 ? "s" : ""} Selected
            </p>
            <p>
              Sec <span class="font-bold">${cards[0]?.section || "-"}</span> 
              Row <span class="font-bold">${cards[0]?.row || "-"}</span>
              Seat <span class="font-bold">${selectedSeats.join(", ")}</span>
            </p>
          </div>
          <form class="pb-3 border-b border-gray-500 px-4">
            <label class="block font-semibold pb-1 text-sm pt-2">First Name</label>
            <input type="text" required class="border border-black w-full px-4 
              py-1 rounded-lg" placeholder="First Name"
            >

            <label class="block font-semibold pb-1 text-sm pt-2">Last Name</label>
            <input type="text" required class="border border-black w-full px-4 
              py-1 rounded-lg" placeholder="Last Name"
            >

            <label class="block font-semibold pb-1 text-sm pt-2">Email or Mobile Number</label>
            <input type="text" required class="border border-black w-full px-4 py-1 rounded-lg" 
              placeholder="Email or Phone Number"
            >
          </form>
          <div class="flex justify-between p-2">
            <a href="#" class="backToPickBar text-blue-600 font-bold flex place-items-center">
              <img src="/Assets/icons/left (1).png" class="h-7 w-5" alt="">
              BACK
            </a>
            <button class="transferBtn bg-blue-800 text-white font-semibold text-[15px] px-2 
              py-2 rounded-md">TRANSFER ${selected} TICKET${selected > 1 ? "S" : ""}
            </button>
          </div>
        </div>
      `;
    } else {
      alert("At least, one ticket needs to be selected");
      ticketPickDiv.classList.remove("hidden");
    }
  }
});



// BACK button (delegated)
document.addEventListener("click", function (e) {
  if (e.target && e.target.closest(".backToPickBar")) {
    e.preventDefault();
    transferForm.classList.add("hidden");
    ticketPickDiv.classList.remove("hidden");
    overlay.classList.remove("hidden");
  }
});

// Overlay click
overlay.addEventListener("click", function () {
  transferForm.classList.add("hidden");
  ticketPickDiv.classList.add("hidden");
  overlay.classList.add("hidden");
});
