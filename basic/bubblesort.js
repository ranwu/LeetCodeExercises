// 创建一个数组表示排序算法的数据结构
function ArrayList() {

	var array = [];

	this.insert = function(item) {
		array.push(item);
	};

	this.toString = function() {
		return array.join();
	};

	var swap = function (index1, index2) {
		var aux = array[index1];
		array[index1] = array[index2];
		array[index2] = aux;
	}
	
	// 冒泡排序
	this.bubbleSort = function() {
		var length = array.length;
		for (var i=0; i<length; i++) {
			for (var j=0; j<length-1; j++) {
				if (array[j] > array[j+1]) {
					swap(j, j+1);
				}
			}
		}
	}
}


// 测试
function createNonSortedArray(size) {
	var array = new ArrayList();
	for (var i = size; i > 0; i--) {
		array.insert(i);
	}
	return array;
}

var array = createNonSortedArray(5);
console.log(array.toString()); // 5, 4, 3, 2, 1
array.bubbleSort();
console.log(array.toString()); // 1, 2, 3, 4, 5
