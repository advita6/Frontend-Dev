class Person
{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    3}

    showInfo()
    {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

class Student extends Person
{
    constructor(name,age,branch)
    {
        super(name,age)
        {
            this.branch=branch;
        }
    }

    showBranch()
    {
        console.log(`Name: ${this.name}, Studies: ${this.branch}`);
    }

}

const s1=new Student("Advita",19,"CSE")
s1.showInfo();
s1.showBranch();