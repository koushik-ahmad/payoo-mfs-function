document
  .getElementById("show-add-money-form")
  .addEventListener("click", function (event) {
    event.preventDefault();

    showSectionById("add-money-form");
  });

document
  .getElementById("show-cash-out-form")
  .addEventListener("click", function (event) {
    event.preventDefault();

    showSectionById("cash-out-form");
  });

document
  .getElementById("show-transaction-history")
  .addEventListener("click", function (event) {
    event.preventDefault();

    showSectionById("transaction-section");
  });
