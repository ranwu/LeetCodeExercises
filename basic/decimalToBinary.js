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

////////////// 测试 ////////////////////////

divideBy2(10);