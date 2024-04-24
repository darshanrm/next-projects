//  define all the modifire in code
// public /private/ readonly/protected
// same example transform in TS code 

class Customer {

    // define all modifire @class level 

    public id:number;
    public name:string;


    constructor(id:number,name:string) {
        this.id = id;
        this.name=name;
    }

}

// let cust = new Customer(1,"john")

class Records{
    public customers:Array<Customer>=[];

    constructor(){

    }

    createCustomer(id:number,name:string):Customer{
        let c = new Customer(id,name)
        this.customers.push(c);
        console.log(c);
        return c;
    }

    listCustomers(){
        console.log("------customers------")
        this.customers.forEach(customer=>{
            console.log(`id->${customer.id} and name->${customer.name}`)
        })
    }

    updateCustomer(id:number,name:string){
        let index=-1;
        this.customers.forEach((customer,i)=>{
            if(customer.id === id) index= i
        })
        console.log("index",index)
        if(index > -1){
            let p:Customer = new Customer(id,name)
            // this.customers.splice(index,1,p)
            this.customers[index] = p;
        }
        this.listCustomers();
    }

    deleteCustomer(id:number){
        let index=-1;
        this.customers.forEach((customer,i)=>{
            if(customer.id === id) index= i
        })
        this.customers.splice(index,1)
        this.listCustomers();
    }
}


let r = new Records();
r.createCustomer(1,"john")
r.createCustomer(2,"steve")
r.listCustomers()
r.updateCustomer(1,"johny")
r.deleteCustomer(2)