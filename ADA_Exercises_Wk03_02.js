var answer=document.getElementById('answer');

function blah() {
	var userInput=document.getElementById('userInput').value;
	var testString=userInput.split(',');
	var testNumbers=testString.map(Number)
	var highest=0;
	var lowest=0;
	var average=0;
	var total=0;
	var testHigh=testNumbers[0]
	var testLow=testNumbers[0]

	//sum of all numbers
	for (i=0;i<testNumbers.length;i++) {
		total=total+testNumbers[i];
	}

	//find highest number
	for (i=0;i<testNumbers.length;i++){
		if (testNumbers[i]>testHigh) {
			testHigh=testNumbers[i];
		}
	} 
	highest=testHigh;

	//find lowest number
	for (i=0;i<testNumbers.length;i++){
		if (testNumbers[i]<testLow) {
			testLow=testNumbers[i];
		}
	} 

	//assign/return obtained values
	highest=testHigh;
	lowest=testLow;
	average=total/testNumbers.length;
	answer.innerHTML="The highest number is " + highest + ".<br/>" + "The lowest number is " + lowest + ".<br/>" + "The average is " + average + "."
}

//console.log(answer);
//console.log(userInput);
//console.log(total);
//console.log(average);
//console.log(highest);
//console.log(lowest);
//console.log(testString);
//console.log(testNumbers);