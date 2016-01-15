/**
* 汉诺塔游戏的算法：
* 定义ABC三个柱子，A代表源柱子，
* B代表帮助柱子，C代表目的柱子。
* 假设A柱子有n个盘子，按照小盘子叠在
* 大盘子上并且每次只能移动一个盘子
* 到C柱子的规则，有如下移动过程：
* 1. 将A柱子上的n-1个盘子借助C移动到B；
* 2. 将A柱子上最后一个盘子移动到C；
* 3. 将B柱子上的盘子借助A移动到C
*/

function hanoi(n, A, B, C) {

	if (n == 1 /* 如果n为1，那么直接将盘子移动到C */) {
		console.log("move disk from " + A + " to " + C);
	} else {
		// 将A柱子上的n-1个盘子借助C移动到B
		hanoi(n-1, A, C, B);
		console.log("move disk from " + A + " to " + C);
		// 将B柱子上的n-1个盘子借助A移动到C
		hanoi(n-1, B, A, C);
	}
}

////////////// Test ////////////////////

hanoi(3, 'A', 'B', 'C');

// move disk from A to C
// move disk from A to B
// move disk from C to B
// move disk from A to C
// move disk from B to A
// move disk from B to C
// move disk from A to C
