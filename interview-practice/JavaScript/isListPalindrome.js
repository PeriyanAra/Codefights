// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function isListPalindrome(l) {
    let arrVals = [];
    let current = l;
    
    while(current != null){        
        arrVals.push(current.value);        
        
        current = current.next;
    }
    
    if(arrVals.length % 2 == 0){
        if(arrVals.slice(0, arrVals.length / 2).join()
             == 
           arrVals.slice(arrVals.length / 2, arrVals.length).reverse().join()){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        if(arrVals.slice(0, Math.floor(arrVals.length / 2)).join()
            ==
          arrVals.slice(Math.floor(arrVals.length / 2) + 1, arrVals.length).reverse().join()){
           return true; 
        }
        else{
            return false;
        }
    }
}


/*
Note: Try to solve this task in O(n) time using O(1) additional space, where n is the number of elements in l, since this is what you'll be asked to do during an interview.

Given a singly linked list of integers, determine whether or not it's a palindrome.

Example

For l = [0, 1, 0], the output should be
isListPalindrome(l) = true;
For l = [1, 2, 2, 3], the output should be
isListPalindrome(l) = false.
Input/Output

[execution time limit] 4 seconds (js)

[input] linkedlist.integer l

A singly linked list of integers.

Guaranteed constraints:
0 ≤ list size ≤ 5 · 105,
-109 ≤ element value ≤ 109.

[output] boolean

Return true if l is a palindrome, otherwise return false.
*/
