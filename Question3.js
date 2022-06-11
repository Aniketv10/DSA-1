
//head of list 
var head;

//create Node class
 
class Node{
// constructor to create a new Node
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function AddAtMid (data){
    //If List Is Empty
    if(head == null){
        head = new Node(data)
    }else{
// get a New Node
        var newNode = new Node(data);
        var start = head;
        var len = 0;
// calculate no, of nodes and length of node
        while (start != null){
            len++;
            start = start.next;
        }
// check how many node is be insterted

        var totalNode = ((len %2 == 0) ? (len / 2):(len+1)/2)
        var nwenode = len+1;
        console.log(" Linked List Node Size is -  "+ nwenode);
        start = head ;
// check after newNode has inserted or not 
        while(totalNode --> 1){
            start = start.next;

// newNode inserted and adjust the head
            newNode.next = start.next;
            start.next = newNode;

        }
    }
  }


function DeleteElementAtEnd () {
   head = head.next;
   var newTemp = head ;
   while(newTemp.next.next != null ){
       newTemp = newTemp.next;
   } 
   newTemp.next = null;
}


function Print() {
    var temp = head;
    while (temp != null) {
        console.log(temp.data + " ");
        temp = temp.next;
    }
 }


head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(40);
head.next.next.next = new Node(50);


    var x =30;
    AddAtMid(x);
    // DeleteElementAtEnd();
    Print();