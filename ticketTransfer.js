let sec = "125";
let row = "11";
const seats = [
  {
    seat: "76",
  },
  {
    seat: "77",
  },
];

let transferForm = document.querySelector(".ticket-form");
transferForm.innerHTML = `
     <div class="">
       <div class="">
          <p class="font-bold text-center py-1 border-b border-gray-400">
            TRANSFER TICKETS
          </p>
       </div>
       <div class="px-4">
        <p class="selectedCountText"> 1 Ticket Selected</p>
        <p class="">Sec <span class="font-bold">${sec}</span> 
            Row <span class="font-bold">${row}</span>
            Seat <span class="font-bold">${seats
              .map((s) => s.seat)
              .join(", ")}</span>
        </p>
       </div>
       <form action="" class="pb-3 border-b border-gray-500 px-4">
          <label for="" class="block font-semibold pb-1 text-sm pt-2">First Name</label>
          <input type="text" required class="border border-black w-full px-4 py-1 
                rounded-lg" placeholder="First Name"
            >

          <label for="" class="block font-semibold pb-1 text-sm pt-2">Last Name  </label>
          <input type="text" required class="border border-black w-full px-4 py-1 rounded-lg" placeholder="Last Name">

          <label for="" class="block font-semibold pb-1 text-sm pt-2">Email or Mobile Number</label>
          <input type="text" required class="border border-black w-full px-4 py-1 
                rounded-lg" placeholder="Email or Phone Number"
           >
       </form>
       <div class="flex justify-between p-2">
          <a href="/ticketmaster.html" class="backToPickBar text-blue-600 
                font-bold flex justify-start text-center place-items-center">
                <img src="/Assets/icons/left (1).png" class="h-7 w-5" alt="">
                BACK
          </a>
          <button class="transferBtn bg-blue-800 text-white font-semibold text-[15px] px-2 py-2 rounded-md">
          TRANSFER 2 TICKETS
          </button>
      </div>
     </div>
`;
const ticketForm = document.getElementById("showForm");
const transferFormDiv = document.querySelector(".ticket-form");
const ticketPickDiv = document.querySelector(".transferBar");
const backBtn = document.querySelector(".backToPickBar");
const overlay = document.getElementById("overlay");

ticketForm.addEventListener("click", function (e) {
  e.preventDefault();
  const selected = document.querySelectorAll(
    ".tick-Background.bg-blue-500"
  ).length;
  overlay.classList.remove("hidden");

  if (selected > 0) {
    ticketPickDiv.classList.add("hidden");
    transferFormDiv.classList.remove("hidden");
    ticketPickDiv.style.display = "none";

    transferFormDiv.querySelector(
      ".selectedCountText"
    ).textContent = `${selected} Ticket${selected > 1 ? "s" : ""} Selected`;

    transferFormDiv.querySelector(
      ".transferBtn"
    ).textContent = `TRANSFER ${selected} TICKET${selected > 1 ? "S" : ""}`;
  } else {
    alert("At least, one ticket needs to be selected");
    ticketPickDiv.classList.remove("hidden");
    ticketPickDiv.style.display = "block";
  }
});

backBtn.addEventListener("click", function (e) {
  e.preventDefault();
  transferFormDiv.classList.add("hidden");
  ticketPickDiv.style.display = "block";
  overlay.classList.remove("hidden");
});

overlay.addEventListener("click", function () {
  transferFormDiv.classList.add("hidden");
  ticketPickDiv.style.display = "none";
  overlay.classList.add("hidden");
});
