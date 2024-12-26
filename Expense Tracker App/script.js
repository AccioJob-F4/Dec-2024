// DOM Elements
const form = document.getElementById("transaction-form");
const titleInput = document.getElementById("title");
const amountInput = document.getElementById("amount");
const categoryInput = document.getElementById("category");
const dateInput = document.getElementById("date");
const transactionsContainer = document.getElementById("transactions-container");
const filterCategory = document.getElementById("filter-category");
const filterDate = document.getElementById("filter-date");
const filterBtn = document.getElementById("filter-btn");
const exportBtn = document.getElementById("export-btn");
// Theme Toggle Elements
const themeToggleBtn = document.getElementById("theme-toggle");

let expenseChart; // Store chart instance globally

// Check and Apply Saved Theme from Local Storage
function loadTheme() {
  const savedTheme = localStorage.getItem("theme") || "light"; // Default is light
  document.body.classList.toggle("dark-mode", savedTheme === "dark");
}

// Toggle Theme and Save to Local Storage
themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const currentTheme = document.body.classList.contains("dark-mode")
    ? "dark"
    : "light";
  localStorage.setItem("theme", currentTheme);
});

// Event Delegation for Delete Button
transactionsContainer.addEventListener("click", (e) => {
  // Check if the clicked element has the class 'delete-btn'
  if (e.target.classList.contains("delete-btn")) {
    // Get the transaction ID from the parent element
    const id = parseInt(e.target.parentElement.getAttribute("data-id")); // Extract ID
    deleteTransaction(id); // Call the delete function
  }
});

// State
let transactions = [];

// Event Listeners
form.addEventListener("submit", addTransaction);
filterBtn.addEventListener("click", filterTransactions);
exportBtn.addEventListener("click", exportToCSV);

// Add Transaction
function addTransaction(e) {
  e.preventDefault();

  const transaction = {
    id: Date.now(),
    title: titleInput.value,
    baseAmount: parseFloat(amountInput.value), // Base amount in default currency (USD)
    amount: parseFloat(amountInput.value), // Displayed amount
    currencySymbol: "INR", // Default symbol (INR)
    category: categoryInput.value,
    date: dateInput.value,
  };

  transactions.push(transaction);
  saveToLocalStorage();
  renderTransactions(transactions);
  updateChart();
  form.reset();
}

// Render Transactions
function renderTransactions(data = transactions) {
  transactionsContainer.innerHTML = ""; // Clear previous data before rendering

  data.forEach((transaction) => {
    const div = document.createElement("div");
    div.classList.add("transaction");
    div.setAttribute("data-id", transaction.id);

    div.innerHTML = `
      <span>${transaction.title} - ${transaction.currencySymbol}${transaction.amount}</span>
      <span>${transaction.category} | ${transaction.date}</span>
      <button class="delete-btn">Delete</button>
    `;
    transactionsContainer.appendChild(div);
  });
}

// Delete Transaction
function deleteTransaction(id) {
  // Remove the transaction
  transactions = transactions.filter((transaction) => transaction.id !== id);

  // Update storage and UI
  saveToLocalStorage();
  renderTransactions(transactions);
  updateChart(); // Refresh the chart
}

// Filter Transactions
function filterTransactions() {
  let filtered = transactions;
  if (filterCategory.value)
    filtered = filtered.filter((t) => t.category === filterCategory.value);
  if (filterDate.value)
    filtered = filtered.filter((t) => t.date === filterDate.value);
  renderTransactions(filtered);
}

// Export to CSV
function exportToCSV() {
  // CSV Header
  let csv = "Title,Amount,Category,Date\n";

  // Append rows
  transactions.forEach((transaction) => {
    // Escape commas and quotes for CSV compatibility
    const title = `"${transaction.title.replace(/"/g, '""')}"`; // Escape quotes inside text
    const amount = `"${transaction.amount.toFixed(2)}"`; // Ensure 2 decimal places
    const category = `"${transaction.category}"`;
    const date = `"${transaction.date}"`;

    // Combine data with commas
    csv += `${title},${amount},${category},${date}\n`;
  });

  // Create Blob for download
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  // Create download link
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "transactions.csv");
  document.body.appendChild(link);
  link.click();

  // Clean up the URL object
  URL.revokeObjectURL(url);
}

// Chart
function updateChart() {
  const ctx = document.getElementById("expenseChart").getContext("2d");

  // Clear old chart if exists
  if (expenseChart) {
    expenseChart.destroy();
  }

  const data = transactions.reduce((acc, t) => {
    acc[t.category] = (acc[t.category] || 0) + parseFloat(t.amount);
    return acc;
  }, {});

  expenseChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: Object.keys(data),
      datasets: [
        {
          data: Object.values(data),
          backgroundColor: [
            "#4CAF50",
            "#FF5733",
            "#FFC300",
            "#3498db",
            "#8e44ad",
          ],
        },
      ],
    },
  });
}

// Local Storage
function saveToLocalStorage() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

function loadFromLocalStorage() {
  transactions = JSON.parse(localStorage.getItem("transactions")) || [];
  renderTransactions(transactions);
  updateChart();
}

loadFromLocalStorage();
// Load Saved Theme on Page Load
loadTheme();
