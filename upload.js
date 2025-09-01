const form = document.getElementById('uploadForm');
const results = document.createElement('div');
results.classList.add("results", "mt-6");
document.body.appendChild(results);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  // Extract values
  const imageFile = formData.get("Ticket Image"); 
  const section = formData.get("Section");
  const row = formData.get("Row");
  const type = formData.get("Ticket Type");
  const datePlace = formData.get("Date and Place");
  const eventName = formData.get("Event Name");

  // Create card wrapper
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

  // Show uploaded image
  if (imageFile && imageFile.type.startsWith("image/")) {
    const img = document.createElement("img");
    img.src = URL.createObjectURL(imageFile);
    img.alt = "Ticket Image";
    img.classList.add("w-full", "h-48", "object-cover");
    card.appendChild(img);
  }

  // Details
  const details = document.createElement("div");
  details.classList.add("p-4");

  details.innerHTML = `
    <h3 class="text-xl font-bold mb-2">${eventName || "Untitled Event"}</h3>
    <p><span class="font-semibold">Date & Place:</span> ${datePlace || "-"}</p>
    <p><span class="font-semibold">Section:</span> ${section || "-"}</p>
    <p><span class="font-semibold">Row:</span> ${row || "-"}</p>
    <p><span class="font-semibold">Ticket Type:</span> ${type || "-"}</p>
  `;

  card.appendChild(details);

  // Add to results
  results.appendChild(card);

  // Reset form
  form.reset();
});
