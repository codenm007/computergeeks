var dboard1 = document.getElementById("dboard1");
var dboard2 = document.getElementById("dboard2");
var pbset1 = document.getElementById("pbset1");
var pbset2 = document.getElementById("pbset2");
var prevques = document.getElementById("prevques");
var nextques = document.getElementById("nextques");
var author1 = document.getElementById("author1");
var author2=document.getElementById("author2");

nextques.addEventListener('click',()=>{
    dboard1.innerHTML ="Given two rectangles, find if the given two rectangles overlap or not. A rectangle is denoted by providing the x and y co-ordinates of two points: the left top corner and the right bottom corner of the rectangle. Two rectangles sharing a side are considered overlapping.\r\n\r\nNote : It may be assumed that the rectangles are parallel to the coordinate axis.";
    pbset1.innerHTML = "Input:\r\nThe first integer T denotes the number of testcases. For every test case, there are 2 lines of input. The first line consists of 4 integers: denoting the co-ordinates of the 2 points of the first rectangle. The first integer denotes the x co-ordinate and the second integer denotes the y co-ordinate of the left topmost corner of the first rectangle. The next two integers are the x and y co-ordinates of right bottom corner. Similarly, the second line denotes the cordinates of the two points of the second rectangle in similar fashion.\r\n\r\nOutput:\r\nFor each testcase, output (either 1 or 0) denoting whether the 2 rectangles are overlapping. 1 denotes the rectangles overlap whereas 0 denotes the rectangles do not overlap.\r\n\r\nConstraints:\r\n1 <= T <= 10\r\n-104 <= x, y <= 104\r\n\r\nExample:\r\nInput:\r\n2\r\n0 10 10 0\r\n5 5 15 0\r\n0 2 1 1\r\n-2 -3 0 2\r\n\r\nOutput:\r\n1\r\n0\r\n\r\nExplanation:\r\nTestcase 1: According to the coordinates given as input ,two rectangles formed overlap with each other and thus answer returns 1.\r\n\r\n \r\n\r\n** For More Input/Output Examples Use 'Expected Output' option **\r\n";
    author1.innerHTML = "Aditya Chatterjee";
    
    dboard2.innerHTML="Find the first non-repeating element in a given array A of N integers.\r\nNote: Array consists of only positive and negative integers and not zero.";
    
    pbset2.innerHTML = "Input:\r\nThe first line of input is an integer T, denoting the number of test cases. Each test case has subsequent two lines of input. First line is an integer N, denoting size of integer array A. Second line consists of N space separated integers of the array A.\r\n\r\nOutput:\r\nFor each testcase, print the required answer. If no such element exists, then print 0\r\n\r\nConstraints:\r\n1 <= T <= 100;\r\n1 <= N <= 107;\r\n-1016 <= Ai <= 1016\r\n{Ai !=0 }\r\n\r\nExample:\r\nInput:\r\n4\r\n5\r\n-1 2 -1 3 2\r\n6\r\n9 4 9 6 7 4\r\n3\r\n1 1 1\r\n2\r\n-3 2\r\nOutput:\r\n3\r\n6\r\n0\r\n-3\r\n\r\nExplanation:\r\nTestcase1: -1 and 2 are repeating whereas 3 is the only number occuring once. Hence, the output is 3.\r\nTestcase2: There are 3 distinct integers, 9, 4 and 5, but they all are repeating. There is no non-repetitive element in the array. Hence, the output is 0.\r\nTestcase3: -1 and 3 are non-repeating. -1 occurs before 3 in the array. Hence, the output is -1.\r\nTestcase4: There are two distinct elements occuring only once in the array, with 6 occuring before 7. Hence, output is 6.\r\nTestcase5: The only non-repeating element is -3. Hence, output is -3.\r\n\r\n \r\n\r\n** For More Input/Output Examples Use 'Expected Output' option **\r\n"

    author2.innerHTML = "Anushree_20";
});

prevques.addEventListener('click',()=>{
    dboard1.innerHTML ="In First But Second";
    pbset1.innerHTML = "Given a set of N nuts of different sizes and N bolts of different sizes. There is a one-one mapping between nuts and bolts. Match nuts and bolts efficiently. Comparison of a nut to another nut or a bolt to another bolt is not allowed. It means nut can only be compared with bolt and bolt can only be compared with nut to see which one is bigger/smaller. Input: The first line contains 'T' denoting the number of testcases. Then follows description of T testcases: Each case begins with a single positive integer N denoting the number of nuts/bolts. Then follows the array of nuts, each element separated by a space. And finally the bolts array, again, each element is separated by a space here. Array of Nuts/Bolts can only consist of the following elements:{'@', '#', '$', '%', '^', '&', '~', '*', '!'}. And no element can be repeated. Output: For each test case, output the matched array of nuts and bolts in separate lines, where each element in the array is separated by a space. Print the elements in the following order ! # $ % & * @ ^ ~ Constraints: 1 <= T <= 70 1 <= N <= 9 Example: Input: 2 5 @ % $ # ^ % @ # $ ^ 9 ^ & % @ # * $ ~ ! ~ # @ % & * $ ^ ! Output: # $ % @ ^ # $ % @ ^ ! # $ % & * @ ^ ~ ! # $ % & * @ ^ ~ ** For More Input/Output Examples Use 'Expected Output' option **";
    author1.innerHTML = "madhuradlakha";
    
    dboard2.innerHTML="Given an array A[] of N positive integers which can contain integers from 1 to N where elements can be repeated or can be absent from the array. Your task is to count frequency of all elements from 1 to N.\r\n\r\nNote: Expected time complexity is O(n) with O(1) extra space.";
    
    pbset2.innerHTML = "Given an array A[] of N positive integers which can contain integers from 1 to N where elements can be repeated or can be absent from the array. Your task is to count frequency of all elements from 1 to N.\r\n\r\nNote: Expected time complexity is O(n) with O(1) extra space.\r\n\r\nInput:\r\nFirst line of input contains an integer T denoting the number of test cases. For each test case, first line contains an integer N denoting the size of array. The second line contains N space-separated integers A1, A2, ..., AN denoting the elements of the array.\r\n\r\nOutput:\r\nFor each test case, output N space-separated integers denoting the frequency of each element from 1 to N.\r\n\r\nConstraints:\r\n1 ≤ T ≤ 100\r\n1 ≤ N ≤ 106\r\n1 <= A[i] <= 106\r\n\r\nExample:\r\nInput:\r\n2\r\n5\r\n2 3 2 3 5\r\n4\r\n3 3 3 3\r\n\r\nOutput:\r\n0 2 2 0 1\r\n0 0 4 0\r\n\r\nExplanation:\r\nTestcase 1: Counting frequencies of each array elements, we have:\r\n1 occurring 0 times.\r\n2 occurring 2 times.\r\n3 occurring 2 times.\r\n4 occurring 0 times.\r\n5 occurring 1 time.\r\n \r\n\r\n** For More Input/Output Examples Use 'Expected Output' option **\r\nContributor: Harshit Sidhwa\r\n";

    author2.innerHTML = "shef5";
    
});
