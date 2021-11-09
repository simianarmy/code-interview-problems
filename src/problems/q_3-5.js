/**
 * Sort a stack, using one temp stack only
 *
 * Solution:
 * Time:
 * Space
 **/
const { Stack, printAll } = require('../lib/Stack');

module.exports = (input) => {
  let stack = new Stack();

  for (let i = input.length - 1; i >= 0; i--) {
    stack.push(input[i]);
  }

  function sortStack(s) {
    function insertSorted(s1, s2, val) {
      console.log('inserting sorted ', val);
      // use s1 as a temp stack
      let count = 0;
      while (!s2.isEmpty() && val < s2.peek()) {
        count += 1;
        s1.push(s2.pop());
      }
      s2.push(val);

      while (count--) {
        s2.push(s1.pop());
      }
    }

    let tmp = new Stack();
    tmp.push(s.pop());

    while (!s.isEmpty()) {
      let top = s.pop();
      console.log({top});

      if (top > tmp.peek()) {
        tmp.push(top);
      } else { // insert top into tmp at the right position
        insertSorted(s, tmp, top);
      }
    }
    // tmp is sorted with largest on top, so we reverse it
    while (!tmp.isEmpty()) {
      s.push(tmp.pop());
    }
    return s;
  }

  sortStack(stack);
  printAll(stack);
}
