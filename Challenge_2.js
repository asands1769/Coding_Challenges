function minMax(arr) {
	let minMaxArr = []; 
	for (let i=0; i < arr.length; i++){
		if(minMaxArr.length == 0){
			minMaxArr.push(arr[i]);
		}
		if(minMaxArr.length == 1){
			minMaxArr.push(arr[i]);
		}
		if (arr[i] < minMaxArr[0]){
				minMaxArr[0] = arr[i];
			}
		if(arr[i] > minMaxArr[1]){
				minMaxArr[1] = arr[i];
			}
		}
	return minMaxArr;
}