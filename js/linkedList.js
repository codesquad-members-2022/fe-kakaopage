class Node {
  constructor(el, next = null, prev = null) {
    this.el = el
    this.next = next
    this.prev = prev
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.point = null
    this.size = 0
  }

  addNode(el) {
    let current = this.head
    this.point = current
    this.size++

    if (!current) {
      this.head = new Node(el)
      return
    }

    while (current.next) {
      if (current.next !== this.head) current = current.next
      else break
    }
    current.next = new Node(el)
    current.next.prev = current
    this.head.prev = current.next
    current.next.next = this.head
  }
}

export default { LinkedList }
