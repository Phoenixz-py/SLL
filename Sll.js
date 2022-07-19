import PromptSync from "prompt-sync";
const prompt = PromptSync({sigint: true})
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class List {
  constructor(head = null) {
    this.head = head
  }

  getFirst() {
    return this.head;
  }

  append(value) {
    const node = new Node(value);

    if (this.head === null) {
      this.head = node;
    } else {
      let last_node = this.head;

      while (last_node.next !== null) {
        last_node = last_node.next;
      }

      last_node.next = node;
    }

    return this;
  }

  *[Symbol.iterator]() {
    let current = this.head

    while (current !== null) {
      yield current.data

      current = current.next;
    }
  }
}

let askerString = "Enter value you want to make it present in the linked list: ";

  let list = new List().append(+prompt(askerString)).append(+prompt(askerString)).append(+prompt(askerString)).append(+prompt(askerString));
// let list = new List().append(3).append(4).append(6).append(8);

console.log([...list])
