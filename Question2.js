var head;
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
function PrintAtMid(){
    var slow = head;
    var fast = head;
    if(head != null){
        while(fast != null && fast.next != null){
            fast = fast.next.next;
            slow = slow.next;
        }
        console.log("Middle Element Is  : [" + slow.data + "]");
    }
}

function push (newData) {
    var node = new Node(newData);
    node.next = head;
    head = node;
}

for(let i = 1; i<= 12; i++){
    push(i);
}

PrintAtMid();
