# 🛍️ Northstar Supply — Checkout Demo

A front-end checkout page for **Northstar Supply**. The project demonstrates a shopping checkout flow where customers can review sample products, enter their contact and delivery details, choose delivery and payment options, apply a promotional code, and view an order confirmation.

> ⚠️ **Demo only:** This project does not process real payments, submit orders to a server, or store customer information. Use dummy card details only. Do not enter real payment information.

## ✨ Features

- 👤 **Customer details:** Form fields for the customer's name, email address, phone number, and delivery address.
- 🧾 **Order summary:** Product information, quantities, unit prices, item totals, subtotal, delivery fee, and final total.
- 🚚 **Delivery options:** Standard delivery and express delivery, with the fee reflected in the order total.
- 🎟️ **Promotional code:** Apply `SAVE10` to receive a 10% discount on the sample order subtotal.
- 💳 **Payment choices:** Cash on delivery or a credit/debit card demonstration option with dummy card fields.
- ✅ **Form validation:** Required fields and built-in HTML validation help prevent incomplete or invalid form submissions.
- 📦 **Order confirmation:** Displays the customer's order details, a generated order number, the products, and the final price breakdown.
- ♿ **Accessible markup:** Uses form labels, fieldsets, legends, descriptive page sections, and live feedback regions.

## 🧰 Built With

- 🌐 **HTML5** — page structure and checkout form
- 🎨 **CSS3** — layout, styling, and responsive presentation (`style.css`)
- ⚙️ **JavaScript** — product rendering, price calculations, delivery selection, promo-code handling, form validation, and order confirmation (`new.js`)

No front-end framework is required.

## 📁 Project Structure

```text
northstar-supply-checkout/
├── index.html      # Checkout page
├── style.css       # Page styling
├── new.js          # Checkout interactions and calculations
└── README.md       # Project documentation
```

If your HTML file has a different name, keep that filename in the repository or update this structure to match it.

## 🚀 Run Locally

1. Clone or download this repository.
2. Make sure `index.html`, `style.css`, and `new.js` are in the same project folder.
3. Open `index.html` in your browser. You can also use the **Live Server** extension in Visual Studio Code.
4. Complete the form with sample information and test the checkout interactions.

The HTML file already links the stylesheet and JavaScript file:

```html
<link rel="stylesheet" href="style.css">
<script src="new.js" defer></script>
```

The `defer` attribute makes the browser run the JavaScript after the HTML has been parsed.

## 🧪 Test the Demo

- Enter the required customer and delivery details.
- Select Standard or Express delivery and check that the delivery fee and total change.
- Enter `SAVE10` in the promo-code field and select **Apply**.
- Try the different payment options. Use dummy information for the card demonstration.
- Select **Place order** to view the confirmation screen.
- Use **Back to checkout** to return to the form.

The sample products and prices are defined in the JavaScript product array, so you can edit that array to test different orders.

## ⚠️ Notes and Limitations

- This is a client-side learning/demo project; it is not connected to an inventory system, payment gateway, database, or order-management service.
- The order number is generated in the browser for demonstration purposes.
- Product images are loaded from external image URLs, so an internet connection may be needed to display them.
- Client-side validation improves the form experience but is not a substitute for server-side validation in a real checkout application.

## 🔮 Possible Future Improvements

- 🔌 Connect the checkout flow to a backend and database.
- 🔐 Integrate a trusted payment provider in a secure, production-ready implementation.
- 📡 Load products and prices from an API instead of a hard-coded JavaScript array.
- 🧪 Add automated tests for form validation, discounts, and total calculations.

---

Made with ❤️ as a front-end checkout demonstration for **Northstar Supply**.
