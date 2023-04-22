//PROBLEM 1******.There is a queue where people get their tasks assigned called Task Queue. In this queue, the same person can be repeated multiple times. The queue has a current index value, essentially the index of the queue member who will get the next task. The member of the current index is called the Current Index Member. If a queue member becomes inactive, it is removed from the queue. As members are removed, the queue changes. You need to find the index of the Current Index Member in the newly changed queue.

// ******description of the solution : I use Java Script for solving the problem , In this problem we need to find out the current active index,essentially the index of the queue member who will get the next task.Its mean that which active person get the next task as fast as possible.In this question old task queue , current index member of old task queue and new task queue, and we need to find out the current index member in new task queue. 
//    I think that only the new task queue will be needed for this problem, I use map data structure , and iterate over the new task queue, if the map dose not have the current value of the new task queue then map store the value as a key value pairs (ex : 'A':1), If current index value of the new task queue is already present in map , then it only return the Index number of the current Index value and end the for loop.

function find(old,old_ind,new){
    let  missing = []
    let map = new Map();
    let count = 0
    for(let i=0;i<new.length;i++){
        if(!map.has(new[i])){
            map.set(new[i],1)
        }
        else{
            map.set(new[i],map.get(new[i])+1)
        }
    }
    for(let i=0;i<old.length;i++){
        if(!map.has(old[i])){
            missing.push(old[i])
        }
    }
    for(let i=0;i<=old_ind;i++){
        if(missing.indexof(old[i])!==-1){
            count+=1
        }
    }
    let current_index =old_ind -count
    return current_index
}
console.log(taskQueue(['A' ,'B' ,'C', 'D' ,'E', 'F' ,'A', 'B' ,'C' ,'D' ,'A', 'B', 'C', 'A' ,'B', 'A'],7,[ 'B', 'C', 'E', 'F',  'B' ,'C','B', 'C' ,'B']))

// Assignment-03:
	
// WAP to find the middle element in a singly linked list, where N is the number of nodes in the linked list, and return the middle element or the second middle element if the number of nodes is even? Implement a function getMiddle() that takes a head reference as input and returns the data at the middle node of the linked list.

// ******description of the solution : I first create a class(Node) for create linked list, then I create a linked list class and function like add element in linked list, print element of linked list and the I create a function which return middle of the linked list, I assume two pointer one pointer is slow and another one is fast pointer slow pointer move one step and fast pointer move two step, if value of fast pointer is null then we return slow pointer value and we get the middle of the linked list.

class Node {
    // constructor
    constructor(element) {
        this.element = element;
        this.next = null
    }
}
// linkedlist class
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
 
    // adds an element at the end
    // of list
    add(element) {
        // creates a new node
        var node = new Node(element);
 
        // to store current node
        var current;
 
        // if list is Empty add the
        // element and make it head
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;
 
            // iterate to the end of the
            // list
            while (current.next) {
                current = current.next;
            }
 
            // add node
            current.next = node;
        }
        this.size++;
    }
    printList() {
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
    }
}
var ll = new LinkedList();
ll.add(10);
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);
ll.add(66)
// ll.printList();
// console.log(ll.head)

function getMiddle(head){
    var slow_ptr = head;
    var fast_ptr = head;
    if (head != null)
    {
        while (fast_ptr != null && fast_ptr.next != null)
        {
            fast_ptr = fast_ptr.next.next;
            slow_ptr = slow_ptr.next;
        }
        return slow_ptr.element
    }


}
console.log(getMiddle(ll.head))
