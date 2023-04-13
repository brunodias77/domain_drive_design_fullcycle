import Product from "./product";

describe("Product unit tests", () => {
  it("deve lançar um erro quando o id está vazio", () => {
    expect(() => {
      const product = new Product("", "Product 1", 100);
    }).toThrowError("Id is required");
  });

  it("deve lançar um erro quando o nome está vazio", () => {
    expect(() => {
      const product = new Product("123", "", 100);
    }).toThrowError("Name is required");
  });

  it("deve lançar um erro quando o preço for menor que zero", () => {
    expect(() => {
      const product = new Product("123", "Name", -1);
    }).toThrowError("Price must be greater than zero");
  });

  it("deveria mudar de nome", () => {
    const product = new Product("123", "Product 1", 100);
    product.changeName("Product 2");
    expect(product.name).toBe("Product 2");
  });

  it("deveria mudar de preço", () => {
    const product = new Product("123", "Product 1", 100);
    product.changePrice(150);
    expect(product.price).toBe(150);
  });
});
