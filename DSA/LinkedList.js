class List {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    };

    this.tail = this.head;
    this.size = 1;
  }

  add(nodeData) {
    let newNode = {
      value: nodeData,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.size += 1;
  }

  traversing() {
    let count = 0;
    let arr = [];
    let currentHead = this.head;
    while (count < this.size) {
      arr.push(currentHead.value);
      count++;
      currentHead = currentHead.next;
    }
    return arr;
  }

  deleteNode(index) {
    let count = 1;
    let current = this.head;

    if (index == 1) {
      current = this.head.next;
      this.head.next = null;
      delete this.head;
      this.head = current;
      this.size--;
      return;
    }

    while (count < index - 1) {
      current = current.next;
      count++;
    }
    let target = current.next;
    current.next = current.next.next;
    target.next = null;
    this.size--;
    return;
  }
}

let list = new List(10);
list.add(5);
list.add(6);
list.add(7);

const size = list.size;

// console.log(list)

const listArray = list.traversing();
console.log(listArray);

list.deleteNode(2);
console.log(list.traversing());
