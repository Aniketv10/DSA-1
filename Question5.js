class Stack{
    constructor(){
        this.arr = [1,2,3,4,5,6,7,8,9,10];
    }

    pop(){
        if(this.arr === 0){
            return "stack is empty it can't pop now!!"
        }
        return this.arr.pop();
    }
    print(){
        for(let i=0;i<this.arr.length;i++){
            console.log(this.arr[i]);
        }
    }
}
var stack = new Stack();
stack.pop();
stack.print();
