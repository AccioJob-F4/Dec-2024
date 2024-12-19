const jsonData = [
  { name: "Alice", age: 25, city: "New York" },
  { name: "Bob", age: 30, city: "San Francisco" },
  { name: "Charlie", age: 35, city: "Chicago" },
  { name: "Diana", age: 28, city: "Los Angeles" },
  { name: "Eve", age: 22, city: "Seattle" },
];

// target elements
const tableBody = document.querySelector("tbody");
const searchInput = document.getElementById("search");
const minAgeInput = document.getElementById("minAge");
const maxAgeInput = document.getElementById("maxAge");

// Modifying
const populateTable = (data) => {
  tableBody.innerHTML = "";

  data.forEach((row) => {
    const tr = document.createElement("tr");

    for (const key in row) {
      const td = document.createElement("td");
      td.textContent = row[key];
      tr.appendChild(td);
    }
    tableBody.appendChild(tr);
  });
};

const sortTable = (key, isAscending) => {
  const sortedData = [...jsonData].sort((a, b) => {
    if (a[key] < b[key]) return isAscending ? -1 : 1;
    if (a[key] > b[key]) return isAscending ? 1 : -1;

    return 0;
  });

  populateTable(sortedData);
};

const filterData = () => {
  const searchText = searchInput.value.toLowerCase();
  // console.log("🚀 ~ filterData ~ searchText:", searchText);
  const minAge = parseInt(minAgeInput.value || 0);
  // console.log("🚀 ~ filterData ~ minAge:", minAge);
  const maxAge = parseInt(maxAgeInput.value) || Infinity;
  // console.log("🚀 ~ filterData ~ maxAge:", maxAge);

  const filteredData = jsonData.filter((row) => {
    const matchesSearch =
      row.name.toLowerCase().includes(searchText) ||
      row.city.toLowerCase().includes(searchText);

    const withinAgeRange = row.age >= minAge && row.age <= maxAge;

    // console.log("🚀 ~ filteredData ~ withinAgeRange:", withinAgeRange);
    // console.log("🚀 ~ filteredData ~ matchesSearch:", matchesSearch);

    return matchesSearch && withinAgeRange;
  });

  populateTable(filteredData);
};

document.querySelectorAll("th").forEach((th) => {
  let isAscending = true;

  th.addEventListener("click", () => {
    const key = th.dataset.key;

    isAscending = !th.classList.contains("sort-asc");
    document.querySelectorAll("th").forEach((header) => {
      header.classList.remove("sort-asc", "sort-desc");
      th.classList.add(isAscending ? "sort-asc" : "sort-desc");

      sortTable(key, isAscending);
    });
  });
});

searchInput.addEventListener("input", filterData);
minAgeInput.addEventListener("input", filterData);
maxAgeInput.addEventListener("input", filterData);

populateTable(jsonData);
