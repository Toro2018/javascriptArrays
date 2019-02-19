/*Question 1: Clean the room function: 
given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
make a function that organizes these into individual array 
that is ordered. For example answer(ArrayFromAbove) 
should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
Bonus: Make it so it organizes strings differently 
from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]*/

// Here are the arrays for testing
arr1=[1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
arr2=[1, "2", "3", 2,'6',6,7,'9',4,4,5,5,5,5,'5','3','10','10'];
arr3=['3','3','4','10','12','4','10']

// function to separate the 'srring elements' from 'num elements'
function sortByType(arr,type){
	const filterString=arr.filter(num=>typeof num===type);
	console.log(filterString);
	return filterString;
}

// function to sort the elements by num sequence
function sort(ArrayFromAbove){
		return ArrayFromAbove.sort(function(a, b){return a-b});		
};

// creat another array, use function to combine the same elements into one array by .push
function combine(arr){
	if(!arr.length>0) {
		return [];
	}
	let arrCom=[[arr[0]]];
	for (i=0;i<arr.length-1;i++){
			if (arr[i+1]===arr[i])
				{arrCom[arrCom.length - 1].push(arr[i+1])}
			else
				{arrCom.push([arr[i+1]]);}
	}
	return arrCom;
}

// call all the above 3 functions by sequence,firstly sort by type, then by num. lastly conbine the same elements
function allIncluded(arr){
	const arr1=combine(sort(sortByType(arr,"string"))) ;
	const arr2=combine(sort(sortByType(arr,"number"))) ;
	// combine the two arrays together to create the result array, use filter function in case one array is empty. 
	return arrAll = [arr1, arr2].filter(arr => arr.length>0);
}

answer1=allIncluded(arr1);
answer2=allIncluded(arr2);
answer3=allIncluded(arr3);

console.log(answer1);
console.log(answer2);
console.log(answer3);