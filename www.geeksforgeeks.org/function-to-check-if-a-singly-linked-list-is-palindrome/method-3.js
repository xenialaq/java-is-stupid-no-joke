class Node {
  constructor(v, n) {
    this.val = v;
    this.next = n
  }
}

function print(node) {
  let out = 'L ';
  while (node) {
    out += node.val;
    out += ' -> ';
    node = node.next;
  }
  return out;
}

function isPalindrome(node) {
  if (!node) {
    return true;
  }

  let slow = node;
  let fast = node;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // when even list, slow is mid(right), fast is null
  // const isEven = fast === null;
  // when odd list, slow is mid, fast is tail
  const isOdd = fast !== null;

  let right = isOdd ? slow.next : slow;

  function isPalindromeHelper(left) {
    if (left == slow) {
      return true;
    }
    const res = isPalindromeHelper(left.next)
    if (!res) {
      return false;
    }
    const comp = left.val === right.val;
    right = right.next;
    return comp;
  }

  return isPalindromeHelper(node);
}

const test1 = new Node('a', new Node('b', new Node('c', new Node('b', new Node('a', null)))));
const test2 = new Node('a', new Node('b', new Node('b', new Node('a', null))));
const test3 = new Node('a', null);
const test4 = new Node('a', new Node('a', null));

const test11 = new Node('a', new Node('b', new Node('c', new Node('e', new Node('a', null)))));
const test22 = new Node('a', new Node('b', new Node('e', new Node('a', null))));
const test33 = null;
const test44 = new Node('a', new Node('b', null));


console.log([test1, test2, test3, test4].map((t) => [print(t), isPalindrome(t)]));

console.log([test11, test22, test33, test44].map((t) => [print(t), isPalindrome(t)]));
