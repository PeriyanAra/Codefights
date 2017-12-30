// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function addTwoHugeNumbers(a, b) {
    var sum = null,
        tmp,
        carry = 0,
        x, y,
        revertList = list => {
            var prev = null;
            do {
                tmp = list.next;
                list.next = prev;
                prev = list;
                list = tmp;
            }
            while(list)
            return prev;
        }
        
    a = revertList(a);
    b = revertList(b);

    while (a || b || carry) {
        x = a ? a.value : 0;
        y = b ? b.value : 0;
        
        tmp = new ListNode((carry + x + y) % 1e4);
        tmp.next = sum;
        sum = tmp;
        carry    = (carry + x + y) / 1e4 | 0;
        
        if (a) a = a.next;
        if (b) b = b.next;
    }
    return sum;
}


/*
You're given 2 huge integers represented by linked lists. Each linked list element is a number from 0 to 9999 that represents a number with exactly 4 digits. The represented number might have leading zeros. Your task is to add up these huge integers and return the result in the same format.

Example

For a = [9876, 5432, 1999] and b = [1, 8001], the output should be
addTwoHugeNumbers(a, b) = [9876, 5434, 0].

Explanation: 987654321999 + 18001 = 987654340000.

For a = [123, 4, 5] and b = [100, 100, 100], the output should be
addTwoHugeNumbers(a, b) = [223, 104, 105].

Explanation: 12300040005 + 10001000100 = 22301040105.

Input/Output

[execution time limit] 4 seconds (js)

[input] linkedlist.integer a

The first number, without its leading zeros.

Guaranteed constraints:
0 ≤ a size ≤ 104,
0 ≤ element value ≤ 9999.

[input] linkedlist.integer b

The second number, without its leading zeros.

Guaranteed constraints:
0 ≤ b size ≤ 104,
0 ≤ element value ≤ 9999.

[output] linkedlist.integer

The result of adding a and b together, returned without leading zeros in the same format.
*/
