const products = [

    { id: 1, name: "PS5", price: 699.99, quantity: 1, image: "https://m.media-amazon.com/images/I/619BkvKW35L._AC_SL1500_.jpg" },
    { id: 2, name: "Xbox Series X", price: 499.99, quantity: 2, image: "https://m.media-amazon.com/images/I/61rApRFkOeL.jpg" },
    { id: 3, name: "Nintendo Switch", price: 299.99, quantity: 3, image: "https://images.unsplash.com/photo-1612036781124-847f8939b154?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" }

];


const cashPayment = document.getElementById("cash-payment");
const cardPayment = document.getElementById("card-payment");
const cardDetails = document.getElementById("card-fields");
const cardName = document.getElementById("card-name");
const cardNumber = document.getElementById("card-number");
const cardExpiry = document.getElementById("card-expiry");
const cardCvv = document.getElementById("card-cvv");

// Store all card inputs in an array
const cardInputs = [cardName, cardNumber, cardExpiry, cardCvv];

// ==============================
// Section 1: Display Products
// ==============================

function displayOrderSummary(products) {

    // Find the product list using its ID.
    const productList = document.getElementById("product-list");

    // Find the item count using its ID.
    const itemCount = document.getElementById("item-count");
    const subtotal = document.getElementById("subtotal");
    const finalTotal = document.getElementById("final-total");
    const delivery = document.getElementById("delivery-fee");
    const promobutton = document.getElementById("promo-button");
    const SDelivery = document.getElementById("standard-delivery");
    const expDelivery = document.getElementById("express-delivery");
    let delivLabel = document.getElementById("delivery-label");

    // Clear the previous products.
    productList.innerHTML = "";


    // Create a variable to count all the products.
    let totalItems = 0;
    let tSubtotal = 0;
    let deliveryFee = parseFloat(SDelivery.value);


    // Go through each product in the array.
    for (let i = 0; i < products.length; i++) {

        // Get the current product.
        const product = products[i];

        // Add its quantity to the total number of items.
        totalItems = totalItems + product.quantity;
        tSubtotal = tSubtotal + (product.price * product.quantity);

        // Create the li element.
        const li = document.createElement("li");
        li.classList.add("product-item");

        // Create the div for the product image.
        const productIcon = document.createElement("div");
        productIcon.classList.add("product-icon");

        // Create the image.
        const img = document.createElement("img");
        img.src = product.image;
        img.alt = product.name;

        // Add the image inside the product-icon div.
        productIcon.appendChild(img);

        // Create the div for product information.
        const productDetails = document.createElement("div");
        productDetails.classList.add("product-details");

        // Create the product name.
        const h3 = document.createElement("h3");
        h3.textContent = product.name;

        // Create the product quantity.
        const p = document.createElement("p");
        p.textContent = "Quantity: " + product.quantity;

        // Create the product price.
        const strong = document.createElement("strong");
        strong.classList.add("product-price");

        const strong2 = document.createElement("strong");
        strong2.classList.add("product-price");

        strong2.textContent = "Unit Price: $" + product.price.toFixed(2);
        strong.textContent = "Total: $" + (product.price * product.quantity).toFixed(2);

        // Add the information inside product-details.
        productDetails.appendChild(h3);
        productDetails.appendChild(p);
        productDetails.appendChild(strong2);
        productDetails.appendChild(strong);

        // Add the image and information inside li.
        li.appendChild(productIcon);
        li.appendChild(productDetails);

        // Add the li inside productList.
        productList.appendChild(li);

    }


    // ==============================
    // Function to Update Final Total
    // ==============================

    function updateFinalTotal() {

        // Update the displayed delivery fee.
        delivery.textContent = "$" + deliveryFee.toFixed(2);

        // Update the final total.
        finalTotal.textContent = "$" + (tSubtotal + deliveryFee).toFixed(2);

    }


    // ==============================
    // Section 2: Delivery Options
    // ==============================

    function setupDeliveryOptions() {

        SDelivery.addEventListener("change", function () {

            deliveryFee = parseFloat(SDelivery.value);
            delivLabel.textContent = "Standard delivery";

            // Update the displayed delivery fee and final total.
            updateFinalTotal();

        });


        expDelivery.addEventListener("change", function () {

            deliveryFee = parseFloat(expDelivery.value);
            delivLabel.textContent = "Express delivery";

            // Update the displayed delivery fee and final total.
            updateFinalTotal();

        });

    }


    // ==============================
    // Section 3: Apply Promotion Code
    // ==============================

    function setupPromoCode() {

        const discountRow = document.getElementById("discount-row");
        const disamount = document.getElementById("discount-amount");
        let promoCodeUsed = false;
        // APPLY PROMOTION CODE
        promobutton.addEventListener("click", function () {


            const promoInput = document.getElementById("promo-code");
            const promtrim = promoInput.value.trim().toUpperCase();


            if (promtrim === "SAVE10" && !promoCodeUsed) {

                const totalbeforeDiscount = tSubtotal;

                tSubtotal = tSubtotal - (tSubtotal * 0.1); // Apply 10% discount
                promoCodeUsed = true;

                // Update the final total.
                updateFinalTotal();


                discountRow.hidden = false;
                disamount.hidden = true;
                const discountAmount = document.getElementById("discount-amount");
                discountAmount.textContent = "-$" + (totalbeforeDiscount - tSubtotal).toFixed(2);
                disamount.hidden = false;
                promoInput.value = ""; // Clear the input field

            }

            else {

                disamount.hidden = true;
                discountRow.hidden = false;
                const invalidPromo = document.getElementById("discount-label");
                invalidPromo.style.color = "red";
                invalidPromo.style.fontWeight = "bold";
                invalidPromo.textContent = "Invalid promo code. Please try again.";
                promoInput.value = ""; // Clear the input field

            }

        });

    }






    // ==============================
    // Section 5: Display Confirmation Summary
    // ==============================


    function displayConfirmationSummary() {
        const confirmationSubtotal = document.getElementById("confirmation-subtotal");
        const confirmationDelivery = document.getElementById("confirmation-delivery-fee");
        const confirmationTotal = document.getElementById("confirmation-total");
        confirmationSubtotal.textContent = "$" + tSubtotal.toFixed(2);
        confirmationDelivery.textContent = "$" + deliveryFee.toFixed(2);
        confirmationTotal.textContent = finalTotal.textContent;
    }


    // ==============================
    // Call the Helper Functions
    // ==============================

    // Set up the delivery options.
    setupDeliveryOptions();

    // Set up the promotion code.
    setupPromoCode();


    // ==============================
    // Display Order Summary
    // ==============================

    // Display the total number of items.
    itemCount.textContent = totalItems + " items";

    // Display the subtotal.
    subtotal.textContent = "$" + tSubtotal.toFixed(2);

    // Display the delivery fee and final total.
    updateFinalTotal();
    // Display the confirmation summary.
    displayConfirmationSummary();



}

////////////////////////////////////////////////////////////////////////////////


// ==============================
// Section 5: Payment Methods
// ==============================

function setupPaymentMethods() {

    // // Get the payment method elements
    // const cashPayment = document.getElementById("cash-payment");
    // const cardPayment = document.getElementById("card-payment");

    // // Get the card information fields
    // const cardDetails = document.getElementById("card-details");
    // const cardName = document.getElementById("card-name");
    // const cardNumber = document.getElementById("card-number");
    // const cardExpiry = document.getElementById("card-expiry");
    // const cardCvv = document.getElementById("card-cvv");

    // // Store all card inputs in an array
    // const cardInputs = [
    //     cardName,
    //     cardNumber,
    //     cardExpiry,
    //     cardCvv
    // ];

    // ==============================
    // Function 5.1: Validate Card Name
    // ==============================

    function validateCardName() {

        const name = cardName.value.trim();

        if (name.length < 3) {
            cardName.setCustomValidity(
                "Please enter a cardholder name with at least 3 characters."
            );
        } else {
            cardName.setCustomValidity("");
        }
    }

    // ==============================
    // Function 5.2: Validate Card Number
    // ==============================

    function validateCardNumber() {

        const number = cardNumber.value.replace(/\s/g, "");

        if (!/^[0-9]{13,19}$/.test(number)) {
            cardNumber.setCustomValidity(
                "Card number must contain 13 to 19 digits."
            );
        } else {
            cardNumber.setCustomValidity("");
        }
    }

    // ==============================
    // Function 5.3: Validate Expiry Date
    // ==============================
function formatCardExpiry() {

    let expiry = cardExpiry.value.replace(/\D/g, "");

    // Limit to 4 digits
    expiry = expiry.substring(0, 4);

    // Automatically add /
    if (expiry.length > 2) {
        expiry = expiry.substring(0, 2) + "/" + expiry.substring(2);
    }

    cardExpiry.value = expiry;
}
cardExpiry.addEventListener("input", formatCardExpiry);
cardExpiry.addEventListener("input", validateCardExpiry);


    function validateCardExpiry() {

        const expiry = cardExpiry.value.trim();

        // Check MM/YY format
        if (!/^(0[1-9]|1[0-2])\/[0-9]{2}$/.test(expiry)) {

            cardExpiry.setCustomValidity(
                "Enter a valid expiry date in MM/YY format."
            );
            return;
        }

        // Separate month and year
        const parts = expiry.split("/");
        const month = parseInt(parts[0]);
        const year = 2000 + parseInt(parts[1]);

        // Get the current date
        const today = new Date();
        const currentMonth = today.getMonth() + 1;
        const currentYear = today.getFullYear();

        // Check if the card has expired
        if (
            year < currentYear ||
            (year === currentYear && month < currentMonth)
        ) {
            cardExpiry.setCustomValidity("This card has expired.");
        } else {
            cardExpiry.setCustomValidity("");
        }
    }

    // ==============================
    // Function 5.4: Validate CVV
    // ==============================

    function validateCardCvv() {

        if (!/^[0-9]{3,4}$/.test(cardCvv.value)) {
            cardCvv.setCustomValidity(
                "Security code must contain 3 or 4 digits."
            );
        } else {
            cardCvv.setCustomValidity("");
        }
    }

    // ==============================
    // Function 5.5: Update Card Fields
    // ==============================

    function updatePaymentFields() {

        if (cardPayment.checked) {

            // Show card information
            cardDetails.hidden = false;

            // Make card fields required
            cardInputs.forEach(function(input) {
                input.required = true;
            });

        } else {

            // Hide card information
            cardDetails.hidden = true;

            // Remove required validation
            cardInputs.forEach(function(input) {
                input.required = false;
                input.setCustomValidity("");
            });
        }
    }

    // ==============================
    // Section 5.6: Add Event Listeners
    // ==============================

    // Validate each field when the user types
    cardName.addEventListener("input", validateCardName);
    cardNumber.addEventListener("input", validateCardNumber);
    cardExpiry.addEventListener("input", validateCardExpiry);
    cardCvv.addEventListener("input", validateCardCvv);

    // Show or hide card fields when payment changes
    cashPayment.addEventListener("change", updatePaymentFields);
    cardPayment.addEventListener("change", updatePaymentFields);

    // Show validation message when the user leaves a card field
    cardInputs.forEach(function(input) {

        input.addEventListener("blur", function() {

            if (input.required && !input.checkValidity()) {
                input.reportValidity();
            }

        });
    });

    // Set the initial payment state
    updatePaymentFields();

}



////////////////////////////////////////////////////////////////////////////////
// ==============================
// Section 6: Validate Form
// ==============================

// Create a function called validateform
function validateform() {

    // Get the checkout form from HTML
    const form = document.getElementById("checkout-form");

    // Get the Place Order button
    const button = document.getElementById("place-order-button");

    // Get all inputs that have the required attribute
    const inputs = form.querySelectorAll("input[required]");


    // Check each required input
    inputs.forEach(function (input) {

        // Listen for when the user leaves an input
        input.addEventListener("blur", function () {

            // Check if the input is empty or invalid
            if (!input.checkValidity()) {

                // Display the browser's validation message
                input.reportValidity();

            }

        });

    });


    // Function to check whether the entire form is valid
    function checkForm() {

        // Disable the button if the form is invalid
        button.disabled = !form.checkValidity();

    }


    // Check the form whenever the user types
    form.addEventListener("input", checkForm);

    // Check the form whenever the user changes an option
    form.addEventListener("change", checkForm);

    // Check the form when the page first loads
    checkForm();

}


// ==============================
// Section 4: Take user info to the Confirmation Section
// ==============================

function displayUserInfo() {

    const fullNameInput = document.getElementById("full-name").value;
    const phoneInput = document.getElementById("phone");
    const fulladdressInput = document.getElementById("address");
    //const paymentMethodSelect = document.getElementById("confirmation-payment");
    const paymentMethodSelect = document.querySelector(
    'input[name="payment"]:checked'
);
    const confirmationName = document.getElementById("confirmation-name");
    const confirmationPhone = document.getElementById("confirmation-phone");
    const confirmationAddress = document.getElementById("confirmation-address");
    const confirmationPayment = document.getElementById("confirmation-payment");
    

    // Display the user's name.
    confirmationName.textContent = fullNameInput;
    // Display the user's phone number.
    confirmationPhone.textContent = phoneInput.value;
    // Display the user's address.
    confirmationAddress.textContent = fulladdressInput.value;
    // Display the user's payment method.
    confirmationPayment.textContent = paymentMethodSelect.value;
}

function showConfirmation() {

    // Get the Place Order button.
    const confbutton = document.getElementById("place-order-button");
    const gobackbutton = document.getElementById("new-order-button");

    // Get the confirmation section.
    const orderconfirm = document.getElementById("confirmation-section");

    // Get the checkout form and page heading to hide them.
    const checkoutform = document.getElementById("checkout-layout");
    const pageheading = document.getElementById("page-heading");



    // Listen for when the user clicks the button.
    confbutton.addEventListener("click", function (event) {

        // Prevent the page from refreshing.
        event.preventDefault();

        displayUserInfo();
        // Display the confirmation section.
        orderconfirm.hidden = false;
        checkoutform.hidden = true;
        pageheading.hidden = true;
        // Generates a random integer from 1 to 10000
        const ordenum = document.getElementById("confirmation-number");
        const randomNumber = Math.floor(Math.random() * 100000) + 1;
        ordenum.textContent = "NS-" + randomNumber;
        window.scrollTo(0, 0);


    });
    gobackbutton.addEventListener("click", function (event) {


        // Select all inputs inside the checkout form.
        const inputs = checkoutform.querySelectorAll("input, select, textarea");

        // Disable all inputs.
        inputs.forEach(function (input) {
            input.disabled = true;
        });
        confbutton.disabled = true;
        orderconfirm.hidden = false;
        checkoutform.hidden = false;
        pageheading.hidden = false;
        window.scrollTo(0, 0);

    });


}
// ==============================
// Section 7: Call the Functions
// ==============================
showConfirmation();
validateform();
displayOrderSummary(products);
setupPaymentMethods();