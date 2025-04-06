"use strict";
class Employee {
    constructor(_empName, _age, _empJob) {
        this._empName = _empName;
        this._age = _age;
        this._empJob = _empJob;
        this.printEmp = () => {
            console.log(this._empName + "의 나이는 " + this._age + "이고, 직업은 " + this._empJob + "입니다.");
        };
    }
    get empName() {
        return this._empName;
    }
    set empName(val) {
        this._empName = val;
    }
}
let employee1 = new Employee('kim', 20, 'developer');
employee1.empName = 'lee';
employee1.printEmp();
