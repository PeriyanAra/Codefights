// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function mergeTwoLinkedLists(l1, l2) {
    let tmp;
    function revertList(list){
        var prev = null;
        while(list){
            tmp = list.next;
            list.next = prev;
            prev = list;
            list = tmp;
        }
        return prev;
    }
    
    l1 = revertList(l1);
    l2 = revertList(l2);
    let store1;
    let result = new ListNode();
    
    while(l1 != null || l2 != null){
        if(l1 && l2 && l1.value > l2.value){
            store1 = new ListNode(l1.value);
            if(!isNaN(result.value)){
                store1.next = result;
            }
            result = store1;
            l1 = l1.next;
        }
        else if(l1 && l2 && l2.value > l1.value){
            store1 = new ListNode(l2.value);
            if(!isNaN(result.value)){
                store1.next = result;
            }
            result = store1;
            l2 = l2.next;
        }
        else if(l1){
            store1 = new ListNode(l1.value);
            if(!isNaN(result.value)){
                store1.next = result;
            }
            result = store1;
            l1 = l1.next;
        }
        else if(l2){
            store1 = new ListNode(l2.value);
            if(!isNaN(result.value)){
                store1.next = result;
            }
            result = store1;
            l2 = l2.next;
        }
    }
    
    if(result.next != null){
        return result;
    }
    else{
        return result.next;
    }
}


/*
Note: Your solution should have O(l1.length + l2.length) time complexity, since this is what you will be asked to accomplish in an interview.

Given two singly linked lists sorted in non-decreasing order, your task is to merge them. In other words, return a singly linked list, also sorted in non-decreasing order, that contains the elements from both original lists.

Example

For l1 = [1, 2, 3] and l2 = [4, 5, 6], the output should be
mergeTwoLinkedLists(l1, l2) = [1, 2, 3, 4, 5, 6];
For l1 = [1, 1, 2, 4] and l2 = [0, 3, 5], the output should be
mergeTwoLinkedLists(l1, l2) = [0, 1, 1, 2, 3, 4, 5].
Input/Output

[execution time limit] 4 seconds (js)

[input] linkedlist.integer l1

A singly linked list of integers.

Guaranteed constraints:
0 ≤ list size ≤ 104,
-109 ≤ element value ≤ 109.

[input] linkedlist.integer l2

A singly linked list of integers.

Guaranteed constraints:
0 ≤ list size ≤ 104,
-109 ≤ element value ≤ 109.

[output] linkedlist.integer

A list that contains elements from both l1 and l2, sorted in non-decreasing order.
*/
