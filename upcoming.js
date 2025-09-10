let upcoming = document.getElementById("upcoming");

function blueBg() {
  upcoming.innerHTML = `
    <div class="bg-blue-700 grid grid-cols-2 text-white font-semibold">
      <p class="text-center border-b-4 border-white py-4">UPCOMING (1)</p>
      <p class="text-center py-4">PAST (0)</p>
    </div> 
  `;
}
blueBg();

const pictureDiv = document.getElementById('picture')

function updateCounter() {
  const cards = JSON.parse(localStorage.getItem("cards")) || [];
  var ticketCount = cards.length;

  if (ticketCount === 0) {
    pictureDiv.innerHTML = "<p class='text-center text-gray-500 mt-4'>No tickets available</p>";
    return;
  };

   const lastCard = cards[cards.length - 1];

 
  pictureDiv.innerHTML = `
  <a href="/ticketmaster.html">
    <div class="relative">
      <img src="${lastCard.image}" alt="" class="w-full object-cover h-[14rem]">
      <div class="absolute bottom-0 w-full text-white px-3 bg-black/20">
        <div class="place-items-start">
          <p class="text-lg font-semibold">${lastCard.eventName || "-"} </p>
          <p class="text-[14px] font-semibold text-start"> ${lastCard.datePlace || "-"}</p>
        </div>
        <div class="flex justify-start gap-1 place-items-center">
          <img src="/Assets/icons/tickets.png" class="h-5 w-4 pb-1">
          <p class="text-sm text-center font-semibold">${ticketCount} ${ticketCount > 1 ? "tickets" : "ticket"}</p>
        </div>
     </div>
   </div>
 </a>
`}
