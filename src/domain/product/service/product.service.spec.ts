import Product from "../entity/product";
import ProductService from "./product.service";

describe("Test unitario dos serviços de produto", () => {
  it("deve mudar os preços de todos os produtos", () => {
    const product1 = new Product("1", "Produto 1", 10);
    const product2 = new Product("2", "Produto 2", 20);
    const products = [product1, product2];

    ProductService.increasePrice(products, 100);

    expect(product1.price).toBe(20);
    expect(product2.price).toBe(40);
  });
});
