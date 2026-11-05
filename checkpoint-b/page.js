
import { items } from "./items.js";

// 1. Draw items into the list
export function renderItems(list) {
  const ul = document.getElementById("list");
  ul.innerHTML = "";

  list.forEach((item) => {
    const li = document.createElement("li");
    li.className = "article-card";
    li.textContent = `${item.name} - ${item.price} EGP`;
    ul.append(li);
  });
}

// 2. Return only electronics
export function matching() {
  return items.filter((item) => item.category === "electronics");
}

// 3. Set up the page
export function start() {
  renderItems(items);

  const button = document.getElementById("pick");
  button.addEventListener("click", () => {
    renderItems(matching());
  });
}
window.addEventListener("DOMContentLoaded", start);