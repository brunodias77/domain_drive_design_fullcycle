import Address from "../valueObject/address";
import Customer from "./customer";

describe("Teste unitarios do cliente", () => {
  it("deve lançar um erro quando o id está vazio", () => {
    expect(() => new Customer("", "John")).toThrowError("Id is required");
  });

  it("deve lançar um erro quando o nome está vazio", () => {
    expect(() => new Customer("123", "")).toThrowError("Name is required");
  });

  it("deveria mudar de nome", () => {
    const customer = new Customer("123", "Bruno Dias");
    customer.changeName("John");
    expect(customer.name).toBe("John");
  });

  it("deve ativar o cliente", () => {
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

  it("deve lançar um erro quando o id do endereço é indefinido quando você ativa um cliente", () => {
    expect(() => {
      const customer = new Customer("123", "Bruno Dias");
      customer.activate();
    }).toThrowError("Address is mandatory to activate a customer");
  });

  it("deveria desativar o cliente", () => {
    const customer = new Customer("123", "Bruno Dias");
    customer.deactivate();
    expect(customer.isActive()).toBe(false);
  });

  it("deve adicionar pontos de fidelidade", () => {
    const customer = new Customer("1", "Customer 1");
    expect(customer.rewardPoints).toBe(0);

    customer.addRewardPoints(10);
    expect(customer.rewardPoints).toBe(10);

    customer.addRewardPoints(10);
    expect(customer.rewardPoints).toBe(20);
  });
});
