
import { findAllOrders, findOrderById } from "./orders-db.js";

// 1. Load all orders from the database
export async function loadOrders() {
  const orders = await findAllOrders();
  return orders;
}

// 2. Return only Cairo orders that are paid
export function myOrders(orders) {
  return orders.filter(
    (order) => order.city === "Cairo" && order.status === "paid"
  );
}

// 3. Calculate total revenue
export function summarize(orders) {
  return orders.reduce(
    (total, order) => total + order.price * order.quantity,
    0
  );
}

// 4. Find an order and describe it
export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.quantity} x ${order.item} for ${order.student}`;
  } catch {
    return `Missing order: ${id}`;
  }
}

// 5. Convert orders into JSON containing only item and quantity
export function toJsonLines(orders) {
  const simplifiedOrders = orders.map(({ item, quantity }) => ({
    item,
    quantity,
  }));

  return JSON.stringify(simplifiedOrders);
}
