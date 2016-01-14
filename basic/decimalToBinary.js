/////////////////// Stack //////////////////
// 新建一个栈Stack
function Stack() {

	// 用数组来保存数据
	var items = [];

	// 往数组尾部添加数据
	this.push = function(element) {
		items.push(element);
	};

	// 移除数组最后一个的数据
	this.pop = function() {
		return items.pop();
	};

	// 返回栈里最后添加的元素
	this.peek = function() {
		return items[items.length-1];
	};

	// 判断数组是否为空
	this.isEmpty = function() {
		return items.length == 0;
	};

	// 返回数组的大小
	this.size = function() {
		return items.length;
	};

	// 清除数组中所有元素
	this.clear = function() {
		items = [];
	};

	// 打印栈里的内容
	this.print = function() {
		console.log(items.toString());
	};
}

////////////////// Content //////////////////////
/*
*1. 将十进制数除以二
*2. 得出的余数保存在栈中，从栈中
*	取出的结果刚好是正确的二进制
*	顺序。
*3. 用除法保存整数供下次迭代。
*/

function divideBy2(decNumber) {

	var remStack = new Stack(),
		rem,
		binaryString = '';

	while (decNumber > 0) {

		// 将除以2的结果向下取整
		rem = Math.floor(decNumber % 2);  
		remStack.push(rem); // 将结果放到栈中
		decNumber = Math.floor(decNumber / 2); 
	}

	// 输出栈中内容
	while (!remStack.isEmpty()) {

		//取出最新的一个元素并转为字符型
		binaryString += remStack.pop().toString();
	}

	return binaryString;
}

////////////// Test ////////////////////////

console.log(divideBy2(10)); // 1010