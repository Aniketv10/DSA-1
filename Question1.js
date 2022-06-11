class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class LinkedList{
    constructor(data){
        this.head = null;
    }
    add(data){
        var node = new Node(data)
        var curr;
        if(this.head == null){
            this.head=node;
        }else{
            curr = this.head;

            while(curr.next){
                curr = curr.next;
            }
            curr.next=node;
        }
    }
    
    printAll(){
        var curr = this.head;
        while(curr){
            console.log(curr.data);
            curr = curr.next;
        }
    }
    pop(){
        if(this.head == null){
            return;
        }else{
            this.head = this.head.next;
        }
    }

}

var ll = new LinkedList();
ll.add(10);
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);
ll.add(60);
ll.pop();
ll.printAll();

