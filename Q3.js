// Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats
//  so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.
// let str1="rgb(255, 255, 255)";
// let str3='#ffffff';
 
// check if the strings are in correct format, then run the relavant function
function checkColorType(colorString){
		if(colorString.includes('rgb'))
			{return rgbToHex(colorString);}
		else if(colorString.includes('#'))
			{return hexToRgb(colorString);}
		else
			{return "please enter correct color format";}
	}



function rgbToHex(string1){
	// change the string of rgb to an array with 3 elements
	let string2=string1.replace('rgb',"").replace('(','').replace(')','');
	let arr1=string2.split(",");
	// change the 3 elements into hex format, and make sure they all have 2 digits
	let arr2=arr1.map(value=>{return Number(value).toString(16).padStart(2,'0')});
	// change the array into string again
	let string3='#'+arr2.join('');
	console.log(string3);
	return string3;
	}


function hexToRgb(string1){
	// change the string into array with 6 elements
	arr1=string1.replace("#","").split('');
	arr2=[];
	for(i=0;i<arr1.length-1;i=i+2) {
			// combine 6 elements as 3 elements, push into a new array
			arr2.push(arr1[i]+arr1[i+1])
		}
		// change these 3 elements to hex format
		arr3=arr2.map(value=>{return parseInt(value, 16)});
		// change the array into string again, adding "rgb" and ()

		const string2='rgb('+arr3.join(",")+')';
		console.log(string2)
		return string2;
}


// test
const color1="rgb(1, 1, 1)";
checkColorType(color1);

const color2='#010101';
checkColorType(color2);

const color3='#ffffff';
checkColorType(color3);

