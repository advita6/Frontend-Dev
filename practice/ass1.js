class Proudcts 
{
    constructor(id, name, price, category) 
    {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(discountPercentage)
    {
        this.price = this.price - (this.price * discountPercentage / 100);
    }

    getdetails()
    {
        return `ID: ${this.id}, Name: ${this.name}, Price: ${this.price.toFixed(2)}, Category: ${this.category}`;
    }
}

let Products = [
    new Proudcts(1, "Bag", 80000, "lug"),
    new Proudcts(2, "Shoes", 5000, "footwear"),
    new Proudcts(3, "Watch", 2000, "accessory"),
];

Products[0].applyDiscount(10);

let expensive= Products.filter(product => product.price > 10000);

for(let p of expensive)
{
    console.log(p.getdetails());
}
