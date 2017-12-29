// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function addTwoHugeNumbers(a, b) {
    let arr1 = [];
    let arr2 = [];
    let maxLen;
    let result = [];
    
    /* Make array from 1st list */
    while(a != null){
        arr1.push(a.value);
        a = a.next;
    }
    
    /* Make array from 2nd list */
    while(b != null){
        arr2.push(b.value);
        b = b.next;
    }
    
    if(arr1.length >= arr2.length){
        maxLen = arr1.length;
    }
    else{
        maxLen = arr2.length;
    }
    
    let i = arr1.length - 1;
    let j = arr2.length - 1;
    let num;
    let mem = 0;
    do{
        if(arr1[i] != undefined && arr2[j] != undefined){
            num = Number(arr1[i]) + Number(arr2[j]) + mem;
            i--;
            j--;
        }
        else if(arr1[i]){
            num = Number(arr1[i]) + mem;
            i--;
        }
        else if(arr2[j]){
            num = Number(arr2[j]) + mem;
            j--;
        }
        
        if(num > 9999){
            mem = Number(num.toString().slice(0, 1));
            num = Number(num.toString().slice(1, 5));
        }
        else{
            mem = 0;
        }
        
        result.unshift(num);
    }
    while(result.length < maxLen)
        
    if(result[0] == 0 && result.length > 3){
        result.unshift(1);
    }
    
    return result;
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
