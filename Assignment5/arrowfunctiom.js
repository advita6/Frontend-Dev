const user = {
    name: "Advita",
    showName: () => {
        console.log(this.name);
    }
};

user.showName();

const fixedUser = {
    name: "Advita",
    showName() {
        console.log(this.name);
    }
};

fixedUser.showName();
