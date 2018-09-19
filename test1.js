function NonRepChar() {
	let str = 'qwertyuiopqwwtgrqwfvrtb'
	 array = str.split('');
	let temp = [];
	let matches = [];
	for(let k=0; k<array.length; k++){
			for(let i=k; i<array.length; i++){
				for(let j = 0; j<temp.length; j++){
					if(temp[j] == array[i]){
						temp = temp.join()
						temp = temp.replace(',','');
						matches.push(temp)
						temp = []
					}
				}
				temp.push(array[i]);
			}
		}
	
	var longest = matches.reduce((a, b) => a.length > b.length ? a : b, '');
	var long = longest.replace(/,/g,"");
	console.log(long, 'length: ', long.length );
	
}
NonRepChar();
