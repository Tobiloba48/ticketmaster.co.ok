document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('uploadForm');
  const results = document.getElementById('results');
  const uploadSection = document.getElementById('uploadSection');
  const uploadMenu = document.getElementById('uploadMenu');
  const closeMenu = document.getElementById('close');

    //results.classList.add("mt-6");
    

    if (form && results && uploadSection && uploadMenu && closeMenu) {
        // Only run upload-specific code if the elements exist
        // Load saved cards on page load
        loadCards();

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const formData = new FormData(form);

            const cardData = {
            image: "",
            category: formData.get("Category"),
            section: formData.get("Section"),
            row: formData.get("Row"),
            seat: formData.get("Seat"),
            type: formData.get("Ticket Type"),
            datePlace: formData.get("Date and Place"),
            eventName: formData.get("Event Name")
            };

            // Handle uploaded image
            const imageFile = formData.get("Ticket Image");
            if (imageFile && imageFile.type.startsWith("image/")) {
            cardData.image = URL.createObjectURL(imageFile);
            }

            if(!uploadSection.contains(results)) {
                uploadSection.appendChild(results);
            }
            
            // Save & render card
            saveCard(cardData);
            createCard(cardData);
            eachTicket();

            form.reset();
        });

        // Upload menu open
        uploadMenu.addEventListener("click", function (e) {
            e.preventDefault();
            uploadSection.classList.remove("hidden");
            uploadSection.classList.add("block");
        });

        // Upload menu close
        closeMenu.addEventListener("click", function (e) {
            e.preventDefault();
            uploadSection.classList.add("hidden");
            uploadSection.classList.remove("block");
        });

        // Save card to localStorage
        function saveCard(cardData) {
            const cards = JSON.parse(localStorage.getItem("cards")) || [];
            cards.push(cardData);
            localStorage.setItem("cards", JSON.stringify(cards));
            updateCounter();
        }

        // Load cards from localStorage
        function loadCards() {
            const cards = JSON.parse(localStorage.getItem("cards")) || [];
            results.innerHTML = ""; // clear old results
            cards.forEach(cardData => createCard(cardData));
            updateCounter();
        }

        // Delete card from localStorage
        function deleteCard(index) {
            let cards = JSON.parse(localStorage.getItem("cards")) || [];
            cards.splice(index, 1);
            localStorage.setItem("cards", JSON.stringify(cards));
            loadCards(); // re-render
            updateCounter();
            eachTicket();
        }

        // Create card element
        function createCard(cardData) {
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
                <p><span class="font-semibold">Category:</span> ${cardData.category || "-"}</p>
                <p><span class="font-semibold">Seat Type:</span> ${cardData.seat || "-"}</p>
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

                updateCounter();
            }
    }
});


//////
