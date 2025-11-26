function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.2 ? resolve("Water boiled") : reject("Boiler error");
        }, 1000);
    });
}

function brewCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.2 ? resolve("Coffee brewed") : reject("Brew failed");
        }, 1200);
    });
}

function pourCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.2 ? resolve("Poured into cup") : reject("Spilled coffee");
        }, 1500);
    });
}

boilWater()
    .then(msg => {
        console.log(msg);
        return brewCoffee();
    })
    .then(msg => {
        console.log(msg);
        return pourCoffee();
    })
    .then(msg => {
        console.log(msg);
        console.log("Coffee ready for the team!");
    })
    .catch(err => console.log("Process failed:", err));
