// Question 2: Write a javascript function that takes an array of numbers and a target number. 
// The function should find two different numbers in the array that, when added together, 
// give the target number. For example: answer([1,2,3], 4)should return [1,3]

// array and number for testing the function
const arr10=[1,2,3,5,6,7,8,9,10,11,12,13];
const target=23;

// use two "for loops", to cover all the possible combinations
function sumCheck(arr,tar){
		let answer=[];
		for (i=0;i<arr.length;i++){
		for (j=i+1;j<arr.length;j++){
			if (Number(arr[i])+Number(arr[j])===Number(tar)){
				answer.push(arr[i]);
				answer.push(arr[j]);}
		}
	}
	return answer;
}

answerArray=sumCheck(arr10,target);
// in case there are more than one combinations, the answerArray will show all of them