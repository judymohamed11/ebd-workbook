
/**
 * Adds one product card to the end of the list.
 */
export function addProduct(name, price) {
  const card = document.createElement("li");
  card.classList.add("card");

  const heading = document.createElement("h3");
  heading.textContent = name;

  const priceTag = document.createElement("p");
  priceTag.classList.add("price");
  priceTag.textContent = `${price} EGP`;

  card.append(heading, priceTag);

  document.querySelector("#list").append(card);
}

/**
 * Removes the card with that name, if there is one.
 */
export function removeProduct(name) {
  const cards = Array.from(document.querySelectorAll("#list .card"));

  const card = cards.find(
    (card) => card.querySelector("h3").textContent === name
  );

  if (card) {
    card.remove();
  }
}

/**
 * Marks the card with that name as sold out.
 */
export function markSoldOut(name) {
  const cards = Array.from(document.querySelectorAll("#list .card"));

  const card = cards.find(
    (card) => card.querySelector("h3").textContent === name
  );

  if (card) {
    card.classList.add("sold-out");
  }
}

/**
 * Removes every card from the list.
 */
export function clearProducts() {
  const cards = document.querySelectorAll("#list .card");

  for (const card of cards) {
    card.remove();
  }
}

/**
 * Connects the buttons to their actions.
 */
export function wireButtons() {
  document.querySelector("#add").addEventListener("click", () => {
    addProduct("Notebook", 45);
  });

  document.querySelector("#reset").addEventListener("click", () => {
    clearProducts();
  });
}
