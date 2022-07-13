import PromptSync from "prompt-sync";
let prompt = PromptSync({signit: true})

class LISTNODE{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LINKEDLIST{
    constructor(head = null){
        this.head = head
    }
    getFirst(){
        return this.head;
    }
    append(node) {
      if(this.head === null) {
        this.head = node;
        return;
      }
      let last_node = this.head;
      while(last_node.next !== null) {
        last_node = last_node.next;
      }
      // now we are certain that we are in the end of the list and last_node is the end node.

      last_node.next = node;

    }
    displayer(){
      console.log(this.head)
    }
}

// let list = new LINKEDLIST();
// list.append(new LISTNODE("hello"))
// list.append(new LISTNODE("world"))



let list = new LINKEDLIST();

const asker = +prompt("Enter how many nodes you want to add: ")

for(let i = 0; i< asker; i++){
    console.log("Enter value you want to make it present in the linked list: ")
    let input = +prompt('Enter: ') //aegs method

    list.append(new LISTNODE(input));

}


while(list.head != null){
  console.log(list.head.data)
  list.head = list.head.next
}


// console.log(list.head.data)
// console.log(list.head.next.data)
// console.log(list)

