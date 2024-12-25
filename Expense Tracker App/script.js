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
const themeToggleBtn = document.getElementById("theme-toggle");

let transactions = [];

form.addEventListener("submit", addTransaction);

function loadTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.body.classList.toggle("dark-mode", savedTheme === "dark");
}

themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  const currentTheme = document.body.classList.contains("dark-mode")
    ? "dark"
    : "light";

  localStorage.setItem("theme", currentTheme);
});

function addTransaction(e) {
  e.preventDefault();

  const transaction = {
    id: Date.now(),
    title: titleInput.value,
    amount: parseFloat(amountInput.value),
    category: categoryInput.value,
    date: dateInput.value,
    currencySymbol: "₹",
  };

  transactions.push(transaction);
  saveToLocalStorage();
  renderTransactions(transactions);
  form.reset();
}

function saveToLocalStorage() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

function renderTransactions(data = transactions) {
  transactionsContainer.innerHTML = "";

  data.forEach((transaction) => {
    const div = document.createElement("div");
    div.classList.add("transaction");
    div.setAttribute("data-id", transaction.id);

    div.innerHTML = `
    <span>${transaction.title} - ${transaction.currencySymbol} ${transaction.amount}</span>
    <span>${transaction.category} = ${transaction.date}</span>
    <button class="delete-btn">Delete</button>
    `;
    transactionsContainer.appendChild(div);
  });
}

function loadFromLocalStorage() {
  transactions = JSON.parse(localStorage.getItem("transactions")) || [];
  renderTransactions(transactions);
}

loadFromLocalStorage();
loadTheme();
