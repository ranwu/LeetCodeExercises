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


function hotPotatol (nameList, num) {

	var queue = new Queue();

	// 遍历数组并将姓名放到队列中
	for (var i=0; i<nameList.length; i++) {
		queue.enqueue(nameList[i]);
	}

	var eliminated = '';
	while (queue.size() > 1){
		for (var i=0; i<num; i++) { // 根据传入的数字来表示迭代次数
			
			// 从队列头抽出数据放到队列尾
			queue.enqueue(queue.dequeue()); 
		}
		// 剔除某个倒霉蛋
		eliminated = queue.dequeue();
		console.log(eliminated + '在击鼓传花中被淘汰。');
	}

	// 返回那个倒霉蛋
	return queue.dequeue();
}

var name = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
var winner = hotPotatol(name, 7);
console.log('胜利者：' + winner);