const menu = {
    pizza: 250,
    burger: 120,
    pasta: 180,
    fries: 80
};

function calculateBill(items) {
    return items
        .map(item => {
            if (!menu[item]) throw new Error(item + " not available");
            return menu[item];
        })
        .reduce((a, b) => a + b, 0);
}

try {
    console.log("Total:", calculateBill(["pizza", "fries"]));
    console.log("Total:", calculateBill(["pizza", "momo"]));
} catch (err) {
    console.log("Error:", err.message);
}
