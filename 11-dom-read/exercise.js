
/**
 * The text of the page's main heading.
 * pageHeading() -> "My Campus Store"
 *
 * @returns {string}
 */
export function pageHeading() {
  const heading = document.querySelector("h1");
  return heading.textContent;
}

/**
 * How many product cards are on the page.
 * productCount() -> 5
 *
 * @returns {number}
 */
export function productCount() {
  return document.querySelectorAll(".card").length;
}

/**
 * The name in every card, in the order they appear.
 * productNames() -> ["Notebook", "Backpack", "Pen", "Desk lamp", "Calculator"]
 *
 * @returns {string[]}
 */
export function productNames() {
  const cards = Array.from(document.querySelectorAll(".card"));

  return cards.map((card) => card.querySelector("h3").textContent);
}

/**
 * The price text shown on the card with that name.
 * priceOf("Pen") -> "15 EGP"
 * priceOf("Nothing") -> null
 *
 * @param {string} name
 * @returns {string|null}
 */
export function priceOf(name) {
  const cards = Array.from(document.querySelectorAll(".card"));

  const card = cards.find(
    (card) => card.querySelector("h3").textContent === name
  );

  if (!card) {
    return null;
  }

  return card.querySelector(".price").textContent;
}

/**
 * Returns the names of sold-out products.
 */
export function soldOutNames() {
  const cards = Array.from(document.querySelectorAll(".card"));

  return cards
    .filter((card) => card.classList.contains("sold-out"))
    .map((card) => card.querySelector("h3").textContent);
}
