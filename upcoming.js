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

const picture = [
  {
    mainImage: "/Assets/images/coldplay.jpg",
    eventName: "COLDPLAY: MUSIC OF THE SPHERES WORLD TOUR 2025",
    eventDate: "Sat, 30 Aug 2025, 17:00 - Wembley Stadium",
    ticketNumber: "2 tickets",
    ticketIcon: "/Assets/icons/tickets.png",
  },
];

let pictureDiv = document.getElementById("picture");
pictureDiv.innerHTML = `
  <a href="/ticketmaster.html">
    <div class="relative">
      <img src="${picture[0].mainImage}" alt="" class="w-full object-cover h-[14rem]">
      <div class="absolute bottom-0 w-full text-white px-3 bg-black/20">
        <div class="place-items-start">
          <p class="text-lg font-semibold">${picture[0].eventName} </p>
          <p class="text-[14px] font-semibold text-start"> ${picture[0].eventDate}</p>
        </div>
        <div class="flex justify-start gap-1 place-items-center">
          <img src="${picture[0].ticketIcon}" class="h-5 w-4 pb-1">
          <p class="text-sm text-center font-semibold">${picture[0].ticketNumber}</p>
        </div>
     </div>
   </div>
 </a>
`