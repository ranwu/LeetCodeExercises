/**
* 求斐波那契数列的前20个数字。已知斐波那契数列中
* 第一个数字是1，第二个数字是2，从第三项开始等于
* 前两项之和
*/

// 定义一个数组
var fibonacci = [];
// 索引从0开始和从1开始都无所谓
fibonacci[1] = 1;
fibonacci[2] = 1;

for (var i = 3; i < 20; i++) {

	// 将数组的前两项元素之和赋值给第三项
	fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]; 
}

for (var i = 1; i < fibonacci.length; i++) {
	console.log(fibonacci[i]);
}

////////////////// Test ///////////////////////////

// print 4181