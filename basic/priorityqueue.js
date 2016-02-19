/*
* 优先队列
*
*
*/

function PriorityQueue() {

	var items = [];

	function QueueElement (element, priority) {
		this.element = element;
		this.priority = priority;
		this.returnElement = function() {
			return this.element;
		};
	}


	this.enqueue = function(element, priority) {

		// 建立一个优先队列元素对象
		var queueElement = new QueueElement(element,priority);

		if (this.isEmpty()) {
			items.push(queueElement);
		} else {
			var added = false;
			for (var i = 0; i<items.length; i++) {
				if (queueElement.priority < items[i].priority) {
					items.splice(i, 0, queueElement);
					added = true;
					break;
				}
			}
			if (!added) {
				items.push(queueElement);
			}
		}
	};

	this.isEmpty = function() {
		return items.length == 0;
	};
	

	this.print = function() {
		console.log(items.toString());
	};
}

var priorityQueue = new PriorityQueue();
priorityQueue.enqueue("John", 2);
priorityQueue.enqueue("Jack", 1);
priorityQueue.enqueue("Camila", 1);
priorityQueue.print();
