import Address from "./entity/address";
import Customer from "./entity/custumer";
import Order from "./entity/order";
import OrderItem from "./entity/order_item";

let costumer = new Customer("123", "bruno dias");
const address = new Address("Rosa iachel mazetto", 195, "Marília", "SP");
costumer.Address = address;
costumer.activate();

const item1 = new OrderItem("1", "Item 1", 10, "321", 3);
const item2 = new OrderItem("1", "Item 2", 10, "213", 3);
const item3 = new OrderItem("1", "Item 3", 10, "312", 3);

const order = new Order("1", "123", [item1, item2, item3]);
