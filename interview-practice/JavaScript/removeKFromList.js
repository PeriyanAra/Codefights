// Definition for singly-linked list:
//function ListNode(x) {
   //this.value = x;
   //this.next = null;
//}
//
function removeKFromList(l, k) {
   let current = l;  
   let prev = null;
   
   while(current != null){
      if(prev === null){
         // First one
         if(current.value == k){
            l = current.next;
            current = l;
         }
         else{
            prev = current;
            current = current.next;
         }
      }
      else{
         if(current.value == k){
            prev.next = current.next;
            current = current.next
         }
         else{
            prev = current;
            current = current.next;
         }
      }
   }
   
   return l;
}


/*
Note: Try to solve this task in O(n) time using O(1) additional space, where n is the number of elements in the list, since this is what you'll be asked to do during an interview.

Given a singly linked list of integers l and an integer k, remove all elements from list l that have a value equal to k.

Example

For l = [3, 1, 2, 3, 4, 5] and k = 3, the output should be
removeKFromList(l, k) = [1, 2, 4, 5];
For l = [1, 2, 3, 4, 5, 6, 7] and k = 10, the output should be
removeKFromList(l, k) = [1, 2, 3, 4, 5, 6, 7].
Input/Output

[execution time limit] 4 seconds (js)

[input] linkedlist.integer l

A singly linked list of integers.

Guaranteed constraints:
0 ≤ list size ≤ 105,
-1000 ≤ element value ≤ 1000.

[input] integer k

An integer.

Guaranteed constraints:
-1000 ≤ k ≤ 1000.

[output] linkedlist.integer

Return l with all the values equal to k removed.
*/
