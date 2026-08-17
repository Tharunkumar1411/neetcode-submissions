class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = new ListNode(0);
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let curr = this.head.next;
        let i = 0;

        while(curr !== null){
            if(index === i){
                return curr.val
            }

            curr = curr.next;
            i++;
        }

        return -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        // create a new node
        const newNode = new ListNode(val);

        // point the old node in next place
        newNode.next = this.head.next;
        this.head.next = newNode;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        // add the pointer in tail node
        let newNode = new ListNode(val);

        let curr = this.head;

        while(curr.next !== null){
            curr = curr.next;
        }

        curr.next = newNode;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        // use node.next.next concept to remove the node
        let prev = this.head;
        let i = 0;

        while (prev.next !== null && i < index){
            prev = prev.next;
            i++;
        }

        if(prev.next === null) return false

        prev.next = prev.next.next;
        return true;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        const values = [];
        let curr = this.head.next;

        while(curr !== null){
            values.push(curr.val)
            curr = curr.next;
        }

        return values;
    }
}
