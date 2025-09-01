const form = document.getElementById('uploadForm');
const results = document.getElementById('results');
const uploadSection = document.getElementById('uploadSection');
results.classList.add("mt-6");
uploadSection.appendChild(results);


// Load saved cards on page load
document.addEventListener("DOMContentLoaded", loadCards);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  const cardData = {
    image: "",
    section: formData.get("Section"),
    row: formData.get("Row"),
    type: formData.get("Ticket Type"),
    datePlace: formData.get("Date and Place"),
    eventName: formData.get("Event Name")
  };

  // Handle uploaded image
  const imageFile = formData.get("Ticket Image");
  if (imageFile && imageFile.type.startsWith("image/")) {
    cardData.image = URL.createObjectURL(imageFile);
  }

  // Save to localStorage
  saveCard(cardData);

  // Render card
  createCard(cardData);

  form.reset();
});


// Save card to localStorage
function saveCard(cardData) {
  const cards = JSON.parse(localStorage.getItem("cards")) || [];
  cards.push(cardData);
  localStorage.setItem("cards", JSON.stringify(cards));
}

// Load cards from localStorage
function loadCards() {
  const cards = JSON.parse(localStorage.getItem("cards")) || [];
  cards.forEach(cardData => createCard(cardData));
}

// Delete card from localStorage
function deleteCard(index) {
  let cards = JSON.parse(localStorage.getItem("cards")) || [];
  cards.splice(index, 1);
  localStorage.setItem("cards", JSON.stringify(cards));
  results.innerHTML = "";
  loadCards(); // re-render updated list
}

// Create card element
function createCard(cardData, index) {
  const card = document.createElement("div");
  card.classList.add(
    "max-w-md",
    "border",
    "rounded-xl",
    "overflow-hidden",
    "shadow-lg",
    "my-4",
    "bg-white"
  );

  if (cardData.image) {
    const img = document.createElement("img");
    img.src = cardData.image;
    img.alt = "Ticket Image";
    img.classList.add("w-full", "h-48", "object-cover");
    card.appendChild(img);
  }

  const details = document.createElement("div");
  details.classList.add("p-4");
  details.innerHTML = `
    <h3 class="text-xl font-bold mb-2">${cardData.eventName || "Untitled Event"}</h3>
    <p><span class="font-semibold">Date & Place:</span> ${cardData.datePlace || "-"}</p>
    <p><span class="font-semibold">Section:</span> ${cardData.section || "-"}</p>
    <p><span class="font-semibold">Row:</span> ${cardData.row || "-"}</p>
    <p><span class="font-semibold">Ticket Type:</span> ${cardData.type || "-"}</p>
  `;

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("mt-3", "bg-red-500", "text-white", "px-3", "py-1", "rounded-lg");
  deleteBtn.addEventListener("click", () => {
    const index = Array.from(results.children).indexOf(card);
    deleteCard(index);
  });

  details.appendChild(deleteBtn);
  card.appendChild(details);
  results.appendChild(card);
}



const uploadMenu = document.getElementById('uploadMenu')

uploadMenu.addEventListener("click", function(e) {
    e.preventDefault();
    var uploadSection = document.getElementById('uploadSection');
    uploadSection.classList.remove("hidden");
    uploadSection.classList.add("block")
})

const closeMenu = document.getElementById('close')

closeMenu.addEventListener("click", function(e) {
    e.preventDefault();
    var uploadSection = document.getElementById('uploadSection');
    uploadSection.classList.add("hidden");
    uploadSection.classList.remove("block")
    
})

