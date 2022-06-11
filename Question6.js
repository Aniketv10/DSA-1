class Stack{
    constructor(){
        this.arr = [];
    }
    push(data){
        this.arr.push(data);
    }
    print(){
        for(let i=0; i<this.arr.length;i++){
            console.log(this.arr[i]);
        }
    }
}
var stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.print();