function addItem() {
    var itemsDiv = document.getElementById("items");
    var newItemDiv = document.createElement("div");
    newItemDiv.classList.add("item");
    newItemDiv.innerHTML = `
        <input type="text" placeholder="Item Name" class="itemName">
        <input type="number" placeholder="Quantity" class="itemQuantity">
        <button type="button" onclick="removeItem(this)">Remove</button>
    `;
    itemsDiv.appendChild(newItemDiv);
}

function removeItem(button) {
    button.parentElement.remove();
}

function generateInvoice() {
    var customerName = document.getElementById('customerName').value;
    var customerAddress = document.getElementById('customerAddress').value;
    var items = document.querySelectorAll(".item");
    var logoSrc = document.getElementById('companyLogo').src;

    var invoiceItemsHtml = "";

    items.forEach(function(item) {
        var name = item.querySelector(".itemName").value;
        var quantity = item.querySelector(".itemQuantity").value;

        invoiceItemsHtml += `<p>${name} - Quantity: ${quantity}</p>`;
    });

    var invoiceHtml = `
        <img src="${logoSrc}" alt="Company Logo" class="invoice-logo">
        <h1>Order Form</h1>
        <p><strong>Shop Name:</strong> ${customerName}</p>
        <p><strong>Shop Address:</strong> ${customerAddress}</p>
        ${invoiceItemsHtml}
        <button onclick="printInvoice()">Print Invoice</button>
    `;

    document.getElementById('invoice').innerHTML = invoiceHtml;
    document.getElementById('invoice').style.display = 'block';
}

function printInvoice() {
    window.print();
}
