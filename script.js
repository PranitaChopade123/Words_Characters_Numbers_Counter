const textArea=document.getElementById('content');
const charactersCount=document.getElementById('ccount');
const wordsCount=document.getElementById('wcount');
const numberCount=document.getElementById('ncount');


textArea.oninput =() =>{
	let characters=textArea.value;
	// console.log(characters);
	charactersCount.textContent=characters.replace(/\s/g, '').length;
	let words=textArea.value.split(' ').filter((item) => {
		return item != '';
	});

	wordsCount.textContent=words.length;

	
  let numbers=textArea.value;
	// console.log(numbers);
	numberCount.textContent=numbers.replace(/[^0-9]/g, '').length;
	

};

