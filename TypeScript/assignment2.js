//  define all the modifire in code
// public /private/ readonly/protected
// same example transform in TS code 
var Customer = /** @class */ (function () {
    function Customer(id, name) {
        this.id = id;
        this.name = name;
    }
    return Customer;
}());
var cust = new Customer(1, "john");
var Records = /** @class */ (function () {
    function Records() {
        this.customers = [];
    }
    Records.prototype.createCustomer = function (id, name) {
        var c = new Customer(id, name);
        this.customers.push(c);
        console.log(c);
        return c;
    };
    Records.prototype.listCustomers = function () {
        console.log("------customers------");
        this.customers.forEach(function (customer) {
            console.log("id->".concat(customer.id, " and name->").concat(customer.name));
        });
    };
    Records.prototype.updateCustomer = function (id, name) {
        var index = -1;
        this.customers.forEach(function (customer, i) {
            if (customer.id === id)
                index = i;
        });
        console.log("index", index);
        if (index > -1) {
            var p = new Customer(id, name);
            // this.customers.splice(index,1,p)
            this.customers[index] = p;
        }
        this.listCustomers();
    };
    Records.prototype.deleteCustomer = function (id) {
        var index = -1;
        this.customers.forEach(function (customer, i) {
            if (customer.id === id)
                index = i;
        });
        this.customers.splice(index, 1);
        this.listCustomers();
    };
    return Records;
}());
var r = new Records();
r.createCustomer(1, "john");
r.createCustomer(2, "steve");
r.listCustomers();
r.updateCustomer(1, "johny");
r.deleteCustomer(2);
