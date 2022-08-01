function printerErrorRate(controlString){
	let stringLength = controlString.length;
	let counter = 0;
	for (letter of controlString){
		if (!letter.match(/[a-m]/gi)){
			counter += 1;
		}
	}
	
	let stringedCounter = counter.toString();
	let stringedLength = stringLength.toString();
	let finalString = stringedCounter + '/' + stringedLength
	return finalString;
}

// DESCRIPTION:
// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.