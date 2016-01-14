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
///////////////// Content ///////////////////
/**
*关键点是定义一个digits数组。如果除以16进制的数，
*那么结果有可能是A-F中的一个，也就是10-15，刚好
*对应了数组的下标。8进制和2进制也是一样的道理。
*/
function baseConvert(decNumber, base) {

	var remStack = new Stack(),
		rem, // 保存余数
		baseString = '',
		digits = '0123456789ABCDEF';

	while (decNumber > 0) {
		// 求余数并向下取整
		rem = Math.floor(decNumber % base);
		// 放入栈里
		remStack.push(rem);
		// 取得整数并向下取整
		decNumber = Math.floor(decNumber / base);
	}

	while (!remStack.isEmpty()/*当栈为空时跳出循环*/) {
		// 取出栈里的数据并传给digits数组得到的值放入baseString
		baseString += digits[remStack.pop()];
	}

	return baseString;
}

///////////////// Test //////////////////////////

console.log(baseConvert(10, 2)); // 1010
console.log(baseConvert(10, 8)); // 12
console.log(baseConvert(10, 16)); // A