import Address from "./address";
import Customer from "./custumer";

describe("Customer unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => new Customer("", "John")).toThrowError("Id is required");
  });

  it("should throw error when name is empty", () => {
    expect(() => new Customer("123", "")).toThrowError("Name is required");
  });

  it("should change name", () => {
    const customer = new Customer("123", "Bruno Dias");
    customer.changeName("John");
    expect(customer.name).toBe("John");
  });

  it("should activate customer", () => {
    const customer = new Customer("123", "Bruno Dias");
    const address = new Address(
      "Rosa Iachel Mazetto",
      195,
      "17512-159",
      "Marília"
    );
    customer.Address = address;
    customer.activate();
    expect(customer.isActive()).toBe(true);
  });

  it("should throw error when address id undefined when you activate a customer", () => {
    expect(() => {
      const customer = new Customer("123", "Bruno Dias");
      customer.activate();
    }).toThrowError("Address is mandatory to activate a customer");
  });

  it("should deactivate customer", () => {
    const customer = new Customer("123", "Bruno Dias");
    customer.deactivate();
    expect(customer.isActive()).toBe(false);
  });
});
