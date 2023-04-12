import Order from "../entity/order";
import OrderItem from "../entity/order_item";
import OrderService from "./order.service";
import Customer from "../entity/customer";

describe("Test unitario dos serviços de pedido", () => {
  it("Deve fazer um pedido", () => {
    const customer = new Customer("1", "Cliente 1");
    const item = new OrderItem("1", "Item 1", 10, "product1", 1);
    const order = OrderService.placeOrder(customer, [item]);
    expect(customer.rewardPoints).toBe(5);
    expect(order.total()).toBe(10);
  });

  it("deve calcular o valor total de todos os pedidos", () => {
    const item = new OrderItem("1", "Item 1", 100, "p1", 1);
    const item2 = new OrderItem("2", "Item 2", 200, "p2", 2);
    const order = new Order("1", "cliente1", [item]);
    const order2 = new Order("2", "cliente2", [item2]);
    const total = OrderService.total([order, order2]);
    expect(total).toBe(500);
  });
});
