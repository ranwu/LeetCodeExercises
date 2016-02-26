function LinkedList() {

	// 创建一个Node对象
	var Node = function(element) {
		this.element = element;
		this.next = null;
	}

	// 链表的length和head初始化
	var length = 0;
	var head = null;

	// 添加节点
	this.append = function(element) {

		var node = new Node(element),
			current;

		if (head === null) {
			head = node;
		} else {
			current = head;

			while(current.next) {
				current = current.next;
			}

			current.next = node;
		}

		length++;
	};

	this.print = function() {
		
	}
}