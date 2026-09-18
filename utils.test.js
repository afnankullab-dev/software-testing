const { sum, greeting, isEven, animals, getOrderById, getOrders, applyDiscount } = require("./utils");

const db = require('./db');

describe("sum", () => {
  it("should return 2 + 3 = 5", () => {
      expect(sum(2, 3)).toBeGreaterThan(4);
      expect(sum(2, 3)).toBeGreaterThanOrEqual(5);
      expect(sum(2, 3)).toBe(5);
    });
  it("should handle decimal numbers", () => {
    expect(sum(0.1002, 0.3)).toBeCloseTo(0.4);
  });
});

test("greeting - should return Hello name", () => {
  expect(greeting("John")).toBe("Hello John");
  expect(greeting("John")).toMatch(/Hello John/);
  expect(greeting("John")).toMatch(/^Hello John$/);
});

describe("isEven", () => {
  test("isEven - should return true if number is 4", () => {
    expect(isEven(4)).toBe(true);
    expect(isEven(4)).toBeTruthy();
    expect(isEven(4)).not.toBe(false);
    expect(isEven(4)).not.toBeFalsy();
  });

  test("isEven - should return false if number is 5", () => {
    expect(isEven(5)).toBe(false);
    expect(isEven(5)).toBeFalsy();
    expect(isEven(5)).not.toBe(true);
    expect(isEven(5)).not.toBeTruthy();
  });
});

describe("validation", () => {
  it("should handle undefined values", () => {
    let x; //undefined
    expect(x).toBeUndefined();
    expect(x).not.toBeDefined();
    expect(x).not.toBeTruthy();
  });

  it("should handle null values", () => {
    let y = null;
    expect(y).toBeNull();
    expect(y).not.toBeTruthy();
  });
});
describe("animals", () => {
  it("should return an array of animals", () => {
    expect(animals).toBeInstanceOf(Array);
    expect(animals).toEqual(["cat", "dog", "cow", "sheep", "goat"]);
    expect(animals).toContain("cat");
    expect(animals).toContain("dog");
    expect(animals).not.toContain("lion");
  });
});

//toBe with objects and arrays checks for reference equality, not value equality. Use toEqual instead.
//toEqual checks all the properties of an object or array recursively to determine if they are equal in value.
//toMatchObject checks if an object has at least the same properties as the expected object, but it can have additional properties as well.
describe('getOrderById', () => {
    it('should return an order object with the given id', () => {
        expect(getOrderById(1)).toEqual({id: 1, item: 'apple', quantity: 3, price: 1.5});
        expect(getOrderById(1)).toMatchObject({id: 1, price: 1.5});
        expect(getOrderById(1)).toHaveProperty('id', 1);
    })

    it('should throw an error if id is not defined', () => {
        expect(() => getOrderById()).toThrow('id is not defined');
    })

    it('should throw an error if order is not found', () => {
        expect(() => getOrderById(4)).toThrow('Order not found');
    })
})

describe('getOrders', () => {
    it('should return an array of orders', async () => {
      const orders = await getOrders();
      expect(orders.length).toBe(3);
      // expect((await getOrders()).length).toBe(3) would also work
      
      //toContainEqual checks if an array contains an object with the same properties and values as the expected object.
       await expect(getOrders()).resolves.toContainEqual({id: 1, price: 10})
    
    });
  });

describe('applyDiscount', () => {
    it('should apply a discount of 10% if the order price is greater than 10', () => {
      //overide without jest.mock, difficult to manage for other calls
      db.getOrder = function(OrderId) {
        return {id: OrderId, price: 100};
      }
      const order = applyDiscount(1);
      expect(order.price).toBe(90);

      //Why jest mock
      const myFunc = jest.fn();
      myFunc.mockReturnValueOnce(10).mockReturnValue(20);
      console.log(myFunc(), myFunc(), myFunc()); // 10, 20, 20
    })
  })
    
