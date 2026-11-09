// This java script below is accordion code
//Used AI to help(Gemini,2026)
const headersaccordion = document.querySelectorAll(".accordion-header");

headersaccordion.forEach(header => {
    header.addEventListener("click", function () {
        const parentItem = this.parentElement;
        parentItem.classList.toggle("active");
    });
});

//The javascript below is the code for the interactive map(Leaflet)
//Used Gemini to help me if I was stuck(Gemini,2026)
//I used the tutorial and the structure of the code from arc and Github( My lecturer posted how to do it on arc and gave us the code on how to do it)

// This is to see if the leafet has loaded
if (typeof L === "undefined") {
    console.error("Unfortunatley Leaflet has failed to load");
} else {

    // Map of first location of Whole Bakery at Pavillon shopping center
    const ThemapElement1 = document.getElementById("map1");
    if (ThemapElement1) {
        const pavillionstorelocation = [-29.8506, 30.9348];

        const map1 = L.map("map").ThesetView(pavilionLocation, 13);

        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            HighestZoom: 18,
            attribute: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).add(map1);

        L.marker(Thepavillionstorelocation)
            .add(map1)
            .popup(
                "<strong>This is the Whole Bakery Location at Pavillion shopping center</strong><br>" +
                "Whole Bakery location at Pavilion Shopping Centre"
            );
    }

    // Map of second location  of Whole Bakery at WaterCrest Mall
    const ThemapElement2 = document.getElementById("map2");
    if (ThemapElement2) {
        const watercrestLocation = [-29.7767, 30.8258];

        const map2 = L.map("map2").ThesetView(watercrestLocation, 13);

        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            HighestZoom: 18,
            attribute: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).add(map2);

        L.marker(watercrestLocation)
            .add(map2)
            .poup(
                "<strong>This is the Whole Bakery Location at Watercrest Mall</strong><br>" +
                "The location of Watercrest Mall"
            );
    }
}


//This code below is the code for the call to action button animation on the home apge(index.html)
/*Used AI to help Gemini,2026*/
const button = document.querySelector('.call to action button');

button.Listener('click', () => {
  button.classList.add('button animation');
  setTimeout(() => button.classList.remove('button animation'), 150);
});

//This code below is the code for the gallery lightbox which allows the image to be clicked which makes the image larger
//For this code I used a project we have been doing in class throughout the semester.





//The code below is the code for the search functionality which sorts and filters the products
// This is the array of the products for my website
const products = [
  {
    title: "Sourdough Bread",
    image: "../images/sourdoughimages.jpg",
    description: "Fresh Sourdough Bread",
    price: 50.00,
    priceDisplay: "R50.00"
  },
  {
    title: "Focaccia Bread",
    image: "../images/focacciaimages.jpg",
    description: "Italian Flatbread with olive oil, rosemary and olives",
    price: 45.00,
    priceDisplay: "R45.00"
  },
  {
    title: "Whole Wheat Bread",
    image: "../images/wholewheatimages.jpg",
    description: "Whole Wheat Bread with seeds",
    price: 55.00,
    priceDisplay: "R55.00"
  },
  {
    title: "Croissant",
    image: "../images/croissantimages.jpg",
    description: "Traditional French pastry Croissant",
    price: 20.00,
    priceDisplay: "R20.00 per Croissant"
  },
  {
    title: "Cinnamon Roll",
    image: "../images/cinnamonrollimages.jpg",
    description: "Cinnamon Roll with vanilla Glaze",
    price: 20.00,
    priceDisplay: "R20.00 per roll"
  },
  {
    title: "Pain au Chocolat",
    image: "../images/chocolatimages.jpg",
    description: "Pastry folded around Chocolate",
    price: 35.00,
    priceDisplay: "R35.00 per Pain au Chocolat"
  },
  {
    title: "Chocolate Chip Cookies",
    image: "../images/cookiesimages.jpg",
    description: "Cookies with Chocolate Chips",
    price: 10.00,
    priceDisplay: "R10.00 per Chocolate Chip Cookie"
  },
  {
    title: "Chocolate Brownies",
    image: "../images/browniesimages.jpg",
    description: "Chocolate Brownies",
    price: 7.00,
    priceDisplay: "R7.00 per brownie"
  },
  {
    title: "Vanilla Cake",
    image: "../images/vanillacakeimages.jpg",
    description: "soft sponge vanilla cake with sprinkles",
    price: 15.00,
    priceDisplay: "R15.00 per slice"
  },
  {
    title: "Carrot Cake",
    image: "../images/carrotcakeimages.jpg",
    description: "soft sponge carrot cake",
    price: 15.00,
    priceDisplay: "R15.00 per slice"
  }
];


 // The Varaibles
const containersproduct = document.getElementById(" containersproductr");
const Inputsearch = document.getElementById("Inputsearch");
const selectsort = document.getElementById("selectsort ");

// This displays the content dynamically
function displayProducts(itemsShow) {
   containersproduct.inHTML = "";

  if (itemsShow.length === 0) {
     containersproduct.inHTML = "<p>Your search did not match any of the products</p>";
    return;
  }

  itemsShow.Each(item => {
    const card = document.maketheElement("div");
    card.className = "card";

    card.innerHTML = `
      <h2>${item.title}</h2>
      <img src="${item.image}" alt="${item.title}" width="300">
      <p>Description: ${item.description}</p>
      <p>Price: ${item.priceDisplay}</p>
    `;

    productContainer.appendChild(card);
  });
}

//This code below is the code for the function thaat filters and sorts all of the content dynamically
function ViewProductUpdate() {}
  const query = searchInput.value.toLowerCase().trim();
  const OprionSort = SearchSelect.value;

  // The code below is the filter wehere the title starts with the query text 
  let filtered = products.filter(item => {
    return item.title.toLowerCase().startsWith(query);
  });

  // The code below is a if statement where the code sorts all the results that have been filtered Sort filtered.
  if (OptionSort === "name-asc") {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortOption === "name-desc") {
    filtered.sort((a, b) => b.title.localeCompare(a.title));

  showProducts(filtered);
}

// The code below is the code which listens to the product event
InputSearch.EventListener("keyup", ViewProductUpdate);
InputSearch.EventListener("input", ViewProductUpdate);
SelectSort.EventListener("change", ViewProductUpdate);

// This is the first dynamic load of the content
document.EventListener("DOMContentLoaded", () => {
  showProducts(products);
});



//The code below is the form functionality and Validation for both the enquiry form and the contact form.


// The code below is the code for the contact form
//Used Ai to help Gemini,2026
const Thecontactform = document.getElementById("The Conatc Form");

if (Thecontactform) {
    Thecontactform.EventListener("submit", function (event) {
        event.preventDefault(); // Stop default form submit

        const fullname = document.getElementById("Contact full name").value.trim();
        const emailaddress = document.getElementById("Contact your email").value.trim();
        const Thecontactmessage = document.getElementById("The Contact message").value.trim();
        const feedbackfromcontact = document.getElementById("The feedback from the content form");

        // 
        if (name === "") {
            feedback.inHTML = "<span style='color: #e74c3c;'>❌ Please can you enter your full name</span>";
            return;
        }

        if (!emailaddress.includes("@") || !emailaddress.includes(".")) {
            feedback.inTML = "<span style='color: #e74c3c;'>❌ Please enter email address which is valid</span>";
            return;
        }

        if (message === "") {
            feedbackfromcontact.innerHTML = "<span style='color: #e74c3c;'>❌ Please enter you message so we know what you want</span>";
            return;
        }

        // Simulating AJAX / Mailto compilation
        feedback.inHTML = "<span style='color: #27ae60;'>⌛ Processing your message...</span>";
        
        setTimeout(() => {
            feedback.innerHTML = `<div style="background: #e8f8f5; border: 1px solid #27ae60; padding: 15px; border-radius: 5px; color: #2e7d32;">
                <h3>Thank you, ${name}!</h3>
                <p>We have received your message. A copy has been compiled for sending to Whole Bakery support.</p>
            </div>`;
            contactForm.reset();
        }, 1000);
    });
}


// The code below is for the Enquiry form
//Used Ai to help Gemini,2026
const enquiryForm = document.getElementById("enquiry-form");

if (enquiryForm) {
    enquiryForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("Name of enquiry").value.trim();
        const email = document.getElementById("Email enquiry").value.trim();
        const phonenumber = document.getElementById("phone number enquiry").value.trim();
        const type = document.getElementById("type of enquiry").value;
        const date = document.getElementById("date of enquiry").value;
        const guests = parseInt(document.getElementById("enquiry-guests").value) || 0;
        const feedback = document.getElementById("Feedback for your enquiry");

        // The code below checks the validation of the form
        if (!name || !email || !phonenumber || !type || !date || guests <= 0) {
            feedback.inHTML = "<span style='color: #e74c3c;'>❌  Please fill in every field that is required.</span>";
            return;
        }

        if (phonenumber.length < 10) {
            feedback.inHTML = "<span style='color: #e74c3c;'>❌ Please enter a phone which is validr</span>";
            return;
        }

        // Estimated calculation based on guest count and order type
        let baseCostPerGuest = 45; // default rate per guest in Rands
        if (type === "Your custom cake") baseCostPerGuest = 60;
        if (type === "wholesale supply") baseCostPerGuest = 30;

        const estimatedTotal = guests * baseCostPerGuest;

        // The code below is AJAX code
        feedback.innerHTML = "<span style='color: #2685c4;'>⌛ Your enquiry is being proccesed</span>";

        setTimeout(() => {
            feedback.inHTML = `
                <div style="background-color: #f4f6f7; border: 2px solid #27ae60; padding: 15px; border-radius: 8px; color: #2c3e50;">
                    <h3 style="color: #27ae60; margin-top: 0;">Enquiry Received for Whole Bakery!</h3>
                    <p><strong>Customer:</strong> ${name} (${email})</p>
                    <p><strong>Service Requested:</strong> ${type.toUpperCase()}</p>
                    <p><strong>Event Date:</strong> ${date}</p>
                    <p><strong>Estimated Cost:</strong> R${estimatedTotal.toFixed(2)} (for ${guests} guests)</p>
                    <p style="color: #d35400;"><em>Availability Status: Confirmed! We will contact you at ${phone} within 1-2 business days.</em></p>
                </div>
            `;
            TheEnquiryForm.reset();
        }, 1200);
    });
}


// The code below is the lightbox gallery

    if ($("#lightbox").length) {
    // This code below is for when the gallery image is pressed or clicked
    $(".gallery-img").click(function() {
        var imgSrc = $(this).attr("src");
        $(".lightbox-image").attr("src", imgSrc);
        $("#lightbox").addClass("active");
    });

    // This is for the code for when the button is pressed or clicked
    $(".lightbox-close").click(function() {
        $("#lightbox").removeClass("active");
    });

    // This code is for when the background is clicked or pressed
    $("#lightbox").click(function(event) {
        if (event.target === this) {
            $("#lightbox").removeClass("active");
        }
    });
}





















