// orderExportUtils.ts
import { jsPDF } from "jspdf";

export const generateOrderPDF = (order: Order) => {
  const doc = new jsPDF();

  // Add header
  doc.setFontSize(20);
  doc.text(`Order #${order.orderNumber}`, 20, 20);

  // Add order details
  doc.setFontSize(12);
  doc.text(`Date: ${new Date(order.orderDate).toLocaleDateString()}`, 20, 35);
  doc.text(`Status: ${order.status}`, 20, 45);
  doc.text(`Payment Status: ${order.paymentStatus}`, 20, 55);

  // Add customer info
  doc.text("Customer Information:", 20, 70);
  doc.setFontSize(10);
  doc.text(`${order.customerName}`, 20, 80);
  doc.text(`${order.customerEmail}`, 20, 87);

  // Add shipping address
  doc.setFontSize(12);
  doc.text("Shipping Address:", 20, 100);
  doc.setFontSize(10);
  doc.text(
    [
      order.shippingAddress.fullName,
      order.shippingAddress.address,
      `${order.shippingAddress.city}, ${order.shippingAddress.state} ${order.shippingAddress.zipCode}`,
      order.shippingAddress.country,
      order.shippingAddress.phone,
    ],
    20,
    110
  );

  // Add items
  doc.setFontSize(12);
  doc.text("Order Items:", 20, 150);
  doc.setFontSize(10);

  let yPos = 160;
  order.items.forEach((item) => {
    doc.text(
      `${item.productName} (${item.sku}) - Qty: ${
        item.quantity
      } - $${item.total.toFixed(2)}`,
      20,
      yPos
    );
    yPos += 7;
  });

  // Add totals
  doc.text(
    [
      `Subtotal: $${order.subtotal.toFixed(2)}`,
      `Shipping: $${order.shippingCost.toFixed(2)}`,
      `Tax: $${order.tax.toFixed(2)}`,
      `Total: $${order.total.toFixed(2)}`,
    ],
    20,
    yPos + 10
  );

  return doc;
};

export const exportOrderCSV = (order: Order) => {
  const items = order.items.map((item) => ({
    "Order Number": order.orderNumber,
    "Product Name": item.productName,
    SKU: item.sku,
    Quantity: item.quantity,
    Price: item.price,
    Total: item.total,
  }));

  const headers = Object.keys(items[0]).join(",");
  const rows = items.map((item) => Object.values(item).join(","));
  const csv = [headers, ...rows].join("\n");

  return csv;
};

export const downloadFile = (content: string | Blob, fileName: string) => {
  const blob =
    content instanceof Blob
      ? content
      : new Blob([content], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export const printOrder = (order: Order) => {
  const printWindow = window.open("", "_blank");
  if (!printWindow) return;

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Order #${order.orderNumber}</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          .header { margin-bottom: 20px; }
          .section { margin-bottom: 15px; }
          .item { margin: 10px 0; }
          table { width: 100%; border-collapse: collapse; }
          th, td { padding: 8px; text-align: left; border-bottom: 1px solid #ddd; }
          @media print {
            .no-print { display: none; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Order #${order.orderNumber}</h1>
          <p>Date: ${new Date(order.orderDate).toLocaleDateString()}</p>
          <p>Status: ${order.status}</p>
        </div>
        
        <div class="section">
          <h2>Customer Information</h2>
          <p>${order.customerName}</p>
          <p>${order.customerEmail}</p>
        </div>
        
        <div class="section">
          <h2>Shipping Address</h2>
          <p>${order.shippingAddress.fullName}<br>
          ${order.shippingAddress.address}<br>
          ${order.shippingAddress.city}, ${order.shippingAddress.state} ${
    order.shippingAddress.zipCode
  }<br>
          ${order.shippingAddress.country}<br>
          ${order.shippingAddress.phone}</p>
        </div>
        
        <div class="section">
          <h2>Order Items</h2>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>SKU</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              ${order.items
                .map(
                  (item) => `
                <tr>
                  <td>${item.productName}</td>
                  <td>${item.sku}</td>
                  <td>${item.quantity}</td>
                  <td>$${item.price.toFixed(2)}</td>
                  <td>$${item.total.toFixed(2)}</td>
                </tr>
              `
                )
                .join("")}
            </tbody>
          </table>
        </div>
        
        <div class="section">
          <h2>Order Summary</h2>
          <p>Subtotal: $${order.subtotal.toFixed(2)}</p>
          <p>Shipping: $${order.shippingCost.toFixed(2)}</p>
          <p>Tax: $${order.tax.toFixed(2)}</p>
          <p><strong>Total: $${order.total.toFixed(2)}</strong></p>
        </div>
        
        <button class="no-print" onclick="window.print()">Print</button>
      </body>
    </html>
  `;

  printWindow.document.write(html);
  printWindow.document.close();
};
