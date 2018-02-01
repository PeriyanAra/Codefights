function checkPalindrome($inputString) {
    $arr = str_split($inputString, ceil(strLen($inputString) / 2));
    if($arr[1]){
        $str2 = strrev($arr[1]);
    }
    else{
        return true;
    }
    
    $str1 = strLen($arr[0]) == strLen($str2) ? $arr[0] : substr($arr[0], 0, strLen($arr[0]) - 1);
    
    return $str1 === $str2 ? true : false;
}

/*
Given the string, check if it is a palindrome.

Example

For inputString = "aabaa", the output should be
checkPalindrome(inputString) = true;
For inputString = "abac", the output should be
checkPalindrome(inputString) = false;
For inputString = "a", the output should be
checkPalindrome(inputString) = true.
Input/Output

[execution time limit] 4 seconds (php)

[input] string inputString

A non-empty string consisting of lowercase characters.

Guaranteed constraints:
1 ≤ inputString.length ≤ 105.

[output] boolean

true if inputString is a palindrome, false otherwise.
*/
