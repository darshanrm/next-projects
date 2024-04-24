//  define all the modifire in code
// public /private/ readonly/protected
// same example transform in TS code 

class Person {

    // define all modifire @class level 

    public personID: number;
    private greeting:string;
    protected myRef:number;


    constructor(a: number) {
        this.personID = a;
        this.greeting="Welcome";
        this.myRef=800;
        console.log("peron object is innt-->");
        console.log("person is created by id-->" + this.personID);
    }

    // create private 

    private testPrivate():string{

         console.log("call private -->");
        return "call private -->";
    }


    // create the public method here 

    public createPerson():string{

        return this.greeting + "-" +"person created by method-->by id" + "-" +this.personID;
    }

    // previledge impl 

    public testPreMethod():string{

         console.log("call the private one=-->");
        return this.testPrivate();
    }

    // Static 

    static testStatic():string{

        return "test ststic-->";
    }
}

class Student extends Person{


    testStudent():string{


        return "student is created by ref id--" +this.myRef;
    }
}

//let p = new Person(101);
  let s=new Student(101);
console.log("call the public method-->" +s.createPerson());
console.log("call private here -->" +s.testPreMethod());
console.log("call the static-->" +Person.testStatic());
console.log("call the child one-->" +s.testStudent());
