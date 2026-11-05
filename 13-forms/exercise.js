
/**
 * Reads what is currently typed into the two boxes.
 */
export function readForm() {
  const nameInput = document.querySelector("#name");
  const priceInput = document.querySelector("#price");

  const name = nameInput.value.trim();
  const price = Number(priceInput.value);

  return { name, price };
}

/**
 * Empties both boxes.
 */
export function clearForm() {
  document.querySelector("#name").value = "";
  document.querySelector("#price").value = "";
}

/**
 * Draws the list from an array of items.
 */
export function renderList(items) {
  const list = document.querySelector("#list");

  // Remove old cards first
  list.textContent = "";

  // Create a card for every item
  for (const item of items) {
    const card = document.createElement("li");
    card.classList.add("card");

    const title = document.createElement("h3");
    title.textContent = item.name;

    const priceTag = document.createElement("p");
    priceTag.classList.add("price");
    priceTag.textContent = `${item.price} EGP`;

    card.append(title, priceTag);
    list.append(card);
  }
}

/**
 * Connects the form to the product list.
 */
export function wireForm() {
  const form = document.querySelector("#product-form");
  const errorLine = document.querySelector("#error");

  // Data lives in this array
  const products = [];

  form.addEventListener("submit", (event) => {
    // Stop page reload
    event.preventDefault();

    // Read the form
    const item = readForm();

    // Check the name
    if (!item.name) {
      errorLine.textContent = "Give the product a name.";
      return;
    }

    // Check the price
    const priceInput = document.querySelector("#price");

    if (!priceInput.value || !(item.price > 0)) {
      errorLine.textContent = "Give the product a price.";
      return;
    }

    // Valid product
    errorLine.textContent = "";

    // Update data
    products.push(item);

    // Redraw page
    renderList(products);

    // Clear inputs
    clearForm();
  });
}
