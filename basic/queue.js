/**
* Queue类
* 添加元素：enqueue()
* 删除元素：dequeue()
* 返回队列的第一个元素：front()
* 判断队列是否为空：isEmpty()
* 清空队列：clear()
* 返回队列的大小：size()
*/

function Queue() {
	
	// 用数组来存放数据
	var items = [];

	// 插入数据到队列末尾
	this.enqueue = function(element) {
		items.push(element);
	};

	// 删除数组下标为0的元素 
	this.dequeue = function() {
		return items.shift();
	};

	// 返回数组下标为0的元素
	this.front = function() {
		return items[0];
	};

	// 判断数组是否为空
	this.isEmpty = function() {
		return items.length == 0;
	};

	// 清空队列
	this.clear = function() {
		items = [];
	};

	// 返回队列大小
	this.size = function() {
		return items.length;
	};

	// 打印队列
	this.print = function() {
		console.log(items.toString());
	};
}

///////////////// TEST /////////////////////

// 新建一个队列对象
var queue = new Queue();

// 判断是否为空
console.log(queue.isEmpty()); // 输出 true

// 添加元素
queue.enqueue("John");
queue.enqueue("Jack");
queue.enqueue("Camila");

// 打印
queue.print(); // 输出 John, Jack, Camila

// 打印队列大小
console.log(queue.size()); //输出 3

// 再判断是否为空
console.log(queue.isEmpty()); // 输出 false

// 删除两个元素再打印
queue.dequeue();
queue.dequeue();
queue.print(); // 输出 Camila
