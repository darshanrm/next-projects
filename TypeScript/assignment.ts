class BasicCal{
    public a:number;
    public b:number;
    public sqrt:any;
    constructor(a:number, b:number){
        this.a = a;
        this.b = b;
    }

    static myStatic = ():string => {
        return "this is basic calculator"
    }

    add = ():number => {
        return this.a + this.b
    }

    sub = ():number => {
        return this.a - this.b
    }

    mul = ():number => {
        return this.a * this.b
    }

    div = ():number => {
        return this.a/this.b
    }
}
BasicCal.prototype.sqrt = function(){
    return Math.sqrt(this.a)
}
let calc = new BasicCal(8,4);
console.log(BasicCal.myStatic())
console.log("ADD -> ",calc.add())
console.log("SUB -> ",calc.sub())
console.log("MUL -> ",calc.mul())
console.log("DIV -> ",calc.div())
console.log("SQRT -> ",calc.sqrt())

class SciCal extends BasicCal{
    static sciStatic = ():string => {
        return "this is scientific calculator"
    }
    log = ():number => {
        return Math.log(this.a)
    }

    sin = ():number => {
        return Math.sin(this.a)
    }

    cos = ():number => {
        return Math.cos(this.a)
    }

    tan = ():number => {
        return Math.tan(this.a)
    }

    exp = ():number => {
        return Math.exp(this.a)
    }
}

let t = new SciCal(12,4)
console.log(SciCal.sciStatic())
console.log("ADD -> ",t.add())
console.log("SUB -> ",t.sub())
console.log("MUL -> ",t.mul())
console.log("DIV -> ",t.div())
console.log("SQRT -> ",t.sqrt())
console.log("LOG -> ",t.log())
console.log("SIN -> ",t.sin())
console.log("COS -> ",t.cos())
console.log("TAN -> ",t.tan())
console.log("EXP -> ",t.exp())