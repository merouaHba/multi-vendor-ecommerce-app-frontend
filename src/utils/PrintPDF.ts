// advancedOrderExportUtils.ts
import { jsPDF } from 'jspdf';

interface ExportOptions {
  template?: 'simple' | 'detailed' | 'invoice';
  includeNotes?: boolean;
  includeTimeline?: boolean;
  color?: boolean;
  logo?: string;
  customHeader?: string;
}

interface PrintOptions {
  size?: 'a4' | 'letter';
  orientation?: 'portrait' | 'landscape';
  template?: 'simple' | 'detailed' | 'invoice';
  showPriceColumn?: boolean;
  showHeaders?: boolean;
  customFooter?: string;
}

interface BatchExportOptions extends ExportOptions {
  format: 'pdf' | 'csv' | 'excel';
  combineFiles?: boolean;
  filename?: string;
}

// PDF Export Utilities
export const generateDetailedPDF = (order: Order, options: ExportOptions = {}) => {
  const {
    template = 'simple',
    includeNotes = true,
    includeTimeline = true,
    color = true,
    customHeader
  } = options;

  const doc = new jsPDF();
  const primaryColor = color ? '#2563eb' : '#000000';
  
  // Add custom header if provided
  if (customHeader) {
    doc.setFontSize(12);
    doc.text(customHeader, 20, 10);
  }
  
  // Add logo if provided
  if (options.logo) {
    doc.addImage(options.logo, 'PNG', 20, 20, 40, 40);
  }
  
  // Add header with template-specific styling
  doc.setFontSize(20);
  doc.setTextColor(primaryColor);
  doc.text(`Order #${order.orderNumber}`, 20, options.logo ? 70 : 20);
  
  // Reset text color
  doc.setTextColor('#000000');
  
  // Add basic order information
  let yPos = options.logo ? 85 : 35;
  doc.setFontSize(12);
  doc.text(`Date: ${new Date(order.orderDate).toLocaleDateString()}`, 20, yPos);
  doc.text(`Status: ${order.status}`, 20, yPos + 10);
  doc.text(`Payment Status: ${order.paymentStatus}`, 20, yPos + 20);
  
  // Add customer information
  yPos += 40;
  doc.setFontSize(14);
  doc.setTextColor(primaryColor);
  doc.text('Customer Information', 20, yPos);
  doc.setTextColor('#000000');
  doc.setFontSize(10);
  doc.text([
    `Name: ${order.customerName}`,
    `Email: ${order.customerEmail}`,
    `Phone: ${order.shippingAddress.phone}`
  ], 20, yPos + 10);
  
  // Add shipping address
  yPos += 40;
  doc.setFontSize(14);
  doc.setTextColor(primaryColor);
  doc.text('Shipping Address', 20, yPos);
  doc.setTextColor('#000000');
  doc.setFontSize(10);
  doc.text([
    order.shippingAddress.fullName,
    order.shippingAddress.address,
    `${order.shippingAddress.city}, ${order.shippingAddress.state} ${order.shippingAddress.zipCode}`,
    order.shippingAddress.country
  ], 20, yPos + 10);
  
  // Add order items
  yPos += 60;
  doc.setFontSize(14);
  doc.setTextColor(primaryColor);
  doc.text('Order Items', 20, yPos);
  doc.setTextColor('#000000');
  doc.setFontSize(10);
  
  // Add item headers
  yPos += 10;
  doc.text('Product', 20, yPos);
  doc.text('SKU', 90, yPos);
  doc.text('Qty', 130, yPos);
  doc.text('Price', 160, yPos);
  doc.text('Total', 190, yPos);
  
  // Add items
  order.items.forEach((item, index) => {
    yPos += 10;
    doc.text(item.productName, 20, yPos);
    doc.text(item.sku, 90, yPos);
    doc.text(item.quantity.toString(), 130, yPos);
    doc.text(`$${item.price.toFixed(2)}`, 160, yPos);
    doc.text(`$${item.total.toFixed(2)}`, 190, yPos);
  });
  
  // Add order summary
  yPos += 30;
  doc.setFontSize(12);
  doc.text([
    `Subtotal: $${order.subtotal.toFixed(2)}`,
    `Shipping: $${order.shippingCost.toFixed(2)}`,
    `Tax: $${order.tax.toFixed(2)}`,
    `Total: $${order.total.toFixed(2)}`
  ], 150, yPos);
  
  // Add notes if included
  if (includeNotes && order.notes.length > 0) {
    yPos += 40;
    doc.setFontSize(14);
    doc.setTextColor(primaryColor);
    doc.text('Order Notes', 20, yPos);
    doc.setTextColor('#000000');
    doc.setFontSize(10);
    order.notes.forEach((note, index) => {
      yPos += 10;
      doc.text(`${index + 1}. ${note}`, 20, yPos);
    });
  }
  
  // Add timeline if included
  if (includeTimeline && order.timeline.length > 0) {
    yPos += 40;
    doc.setFontSize(14);
    doc.setTextColor(primaryColor);
    doc.text('Order Timeline', 20, yPos);
    doc.setTextColor('#000000');
    doc.setFontSize(10);
    order.timeline.forEach((event, index) => {
      yPos += 10;
      doc.text([
        `${new Date(event.status.timestamp).toLocaleString()}`,
        `Status: ${event.status.status}`,
        event.status.note ? `Note: ${event.status.note}` : ''
      ], 20, yPos);
      yPos += 10;
    });
  }
  
  return doc;
};

// Excel Export Utility
export const generateExcel = (order: Order) => {
  // This would require a library like xlsx
  // Returning CSV format as a fallback
  return generateCSV(order);
};

// Advanced CSV Export
export const generateCSV = (order: Order) => {
  const headers = [
    'Order Number',
    'Date',
    'Customer Name',
    'Product Name',
    'SKU',
    'Quantity',
    'Unit Price',
    'Total Price',
    'Status',
    'Payment Status'
  ];
  
  const rows = order.items.map(item => [
    order.orderNumber,
    order.orderDate,
    order.customerName,
    item.productName,
    item.sku,
    item.quantity,
    item.price,
    item.total,
    order.status,
    order.paymentStatus
  ]);
  
  return [
    headers.join(','),
    ...rows.map(row => row.join(','))
  ].join('\n');
};

// Batch Export Utility
export const batchExportOrders = async (orders: Order[], options: BatchExportOptions) => {
  const { format, combineFiles = true, filename = 'orders-export' } = options;
  
  if (format === 'pdf' && combineFiles) {
    // Combine all orders into a single PDF
    const doc = new jsPDF();
    let currentPage = 1;
    
    for (const order of orders) {
      if (currentPage > 1) {
        doc.addPage();
      }
      const orderDoc = generateDetailedPDF(order, options);
      // Merge PDFs (this is a simplified version, actual implementation would need more complex PDF manipulation)
      doc.addPage();
      currentPage++;
    }
    
    return {
      filename: `${filename}.pdf`,
      content: doc.output('blob')
    };
  }
  
  if (format === 'csv') {
    if (combineFiles) {
      // Combine all orders into a single CSV
      const allRows = orders.flatMap(order => {
        const csv = generateCSV(order);
        const rows = csv.split('\n');
        // Only include headers for the first order
        return orders.indexOf(order) === 0 ? rows : rows.slice(1);
      });
      
      return {
        filename: `${filename}.csv`,
        content: new Blob([allRows.join('\n')], { type: 'text/csv' })
      };
    }
  }
  
  // Return individual files if not combining
  return orders.map(order => {
    const content = format === 'pdf' 
      ? generateDetailedPDF(order, options).output('blob')
      : format === 'csv'
      ? new Blob([generateCSV(order)], { type: 'text/csv' })
      : generateExcel(order);
      
    return {
      filename: `${order.orderNumber}.${format}`,
      content
    };
  });
};

// Advanced Print Utility
export const printOrderWithOptions = (order: Order, options: PrintOptions = {}) => {
  const {
    size = 'a4',
    orientation = 'portrait',
    template = 'simple',
    showPriceColumn = true,
    showHeaders = true,
    customFooter
  } = options;

  const printWindow = window.open('', '_blank');
  if (!printWindow) return;

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Order #${order.orderNumber}</title>
        <style>
          @page {
            size: ${size} ${orientation};
            margin: 2cm;
          }
          body {
            font-family: Arial, sans-serif;
            padding: 20px;
            max-width: ${orientation === 'portrait' ? '21cm' : '29.7cm'};
            margin: 0 auto;
          }
          .header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 2px solid #eee;
          }
          .section {
            margin-bottom: 20px;
            page-break-inside: avoid;
          }
          .section h2 {
            color: #2563eb;
            border-bottom: 1px solid #eee;
            padding-bottom: 5px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
          }
          th, td {
            padding: 10px;
            border: 1px solid #ddd;
            text-align: left;
          }
          th {
            background-color: #f8f9fa;
          }
          .summary {
            float: right;
            width: 300px;
            margin-top: 20px;
          }
          .footer {
            margin-top: 50px;
            text-align: center;
            font-size: 0.8em;
            color: #666;
          }
          @media print {
            .no-print { display: none; }
            body { padding: 0; }
            .section { page-break-inside: avoid; }
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
          <p><strong>${order.customerName}</strong><br>
          ${order.customerEmail}</p>
        </div>
        
        <div class="section">
          <h2>Shipping Address</h2>
          <p>${order.shippingAddress.fullName}<br>
          ${order.shippingAddress.address}<br>
          ${order.shippingAddress.city}, ${order.shippingAddress.state} ${order.shippingAddress.zipCode}<br>
          ${order.shippingAddress.country}<br>
          ${order.shippingAddress.phone}</p>
        </div>
        
        <div class="section">
          <h2>Order Items</h2>
          <table>
            ${showHeaders ? `
              <thead>
                <tr>
                  <th>Product</th>
                  <th>SKU</th>
                  <th>Quantity</th>
                  ${showPriceColumn ? `
                    <th>Price</th>
                    <th>Total</th>
                  ` : ''}
                </tr>
              </thead>
            ` : ''}
            <tbody>
              ${order.items.map(item => `
                <tr>
                  <td>${item.productName}</td>
                  <td>${item.sku}</td>
                  <td>${item.quantity}</td>
                  ${showPriceColumn ? `
                    <td>$${item.price.toFixed(2)}</td>
                    <td>$${item.total.toFixed(2)}</td>
                  ` : ''}
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
        
        ${showPriceColumn ? `
          <div class="summary">
            <h2>Order Summary</h2>
            <table>
              <tr>
                <td>Subtotal:</td>
                <td>$${order.subtotal.toFixed(2)}</td>
              </tr>
              <tr>
                <td>Shipping:</td>
                <td>$${order.shippingCost.toFixed(2)}</td>
              </tr>
              <tr>
                <td>Tax:</td>
                <td>$${order.tax.toFixed(2)}</td>
              </tr>
              <tr>
                <td><strong>Total:</strong></td>
                <td><strong>$${order.total.toFixed(2)}</strong></td>
              </tr>
            </table>
          </div>
        ` : ''}
        
        ${customFooter ? `
          <div class="footer">
            ${customFooter}
          </div>
        ` : ''}
        
        <button class="no-print" onclick="window.print()">Print</button>
      </body>
    </html>
  `;
  
  printWindow.document.write(html);
  printWindow.document.close();
};

// Download Utility
export const downloadFile = (content: Blob, filename: string) => {
  const url = URL.createObjectURL(content);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

// Usage Example:
export const exportOrder = async (
  order: Order,
  format: 'pdf' | 'csv' |