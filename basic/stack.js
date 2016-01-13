/**
*栈是一种遵从后进先出（LIFO）原则的有序集合。新添加的
*或待删除的元素都保存在栈的末尾，称作栈顶，另一端叫做
*栈底。在栈里，新元素都靠近栈顶，旧元素都靠近栈底。
*/

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

/////////////// 测试 ///////////////////


