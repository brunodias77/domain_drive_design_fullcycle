import Order from "./order";
import OrderItem from "./order_item";

describe("Order unit tests", () => {
  it("deve lançar um erro quando o id está vazio", () => {
    expect(() => {
      let order = new Order("", "123", []);
    }).toThrowError("Id is required");
  });

  it("deve lançar um erro quando customerId está vazio", () => {
    expect(() => {
      let order = new Order("123", "", []);
    }).toThrowError("CustomerId is required");
  });

  it("deve lançar um erro quando customerId está vazio", () => {
    expect(() => {
      let order = new Order("123", "123", []);
    }).toThrowError("Items are required");
  });

  it("deve calcular o total", () => {
    const item = new OrderItem("i1", "Item 1", 100, "p1", 2);
    const item2 = new OrderItem("i2", "Item 2", 200, "p2", 2);
    const order = new Order("o1", "c1", [item]);

    let total = order.total();

    expect(order.total()).toBe(200);

    const order2 = new Order("o1", "c1", [item, item2]);
    total = order2.total();
    expect(total).toBe(600);
  });

  it("deve lançar erro se o item qte for menor ou igual a zero 0", () => {
    expect(() => {
      const item = new OrderItem("i1", "Item 1", 100, "p1", 0);
      const order = new Order("o1", "c1", [item]);
    }).toThrowError("Quantity must be greater than 0");
  });
});
