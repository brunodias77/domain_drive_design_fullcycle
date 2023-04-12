import Order from "../entity/order";
import OrderItem from "../entity/order_item";
import OrderService from "./order.service";

describe("Test unitario dos serviços de pedido", () => {
  it("deve calcular o valor total de todos os pedidos", () => {
    const item = new OrderItem("1", "Item 1", 100, "p1", 1);
    const item2 = new OrderItem("2", "Item 2", 200, "p2", 2);
    const order = new Order("1", "cliente1", [item]);
    const order2 = new Order("2", "cliente2", [item2]);
    const total = OrderService.total([order, order2]);
    expect(total).toBe(500);
  });
});
