class ConstructorForm {

	constructor(formName, name, type, count, countOptions){
		this.formName = formName;
		this.name = name;
		this.type = type;
		this.count = count;
		this.countOptions = countOptions;
	}
}
function addInput(){
	let addBlock = document.querySelector('.constructor-block'); //берем родителя
	let constBlock = document.createElement('div'); // создаем в нем блок
	let block = document.createElement('div');
	constBlock.className = 'const-block';
	let input = document.createElement('input');
	input.className = 'name';
	input.type = "text";
	let pName = document.createElement('p');
	pName.innerHTML = 'Введите название поля:'
	let pTypeText = document.createElement('p');
	pTypeText.innerHTML = 'Введите тип поля:';

	let label1 = document.createElement('label');
	let label2 = document.createElement('label');
	let label3 = document.createElement('label');
	label1.name = 'text';
	label2.name = 'text';
	label3.name = 'text';
	label1.innerHTML = 'Text';
	label2.innerHTML = 'Search';
	label3.innerHTML = 'Password';

	let check1 = document.createElement('input');
	let check2 = document.createElement('input');
	let check3 = document.createElement('input');
	check1.name = 'type';
	check2.name = 'type';
	check3.name = 'type';
	check1.type = 'radio';
	check2.type = 'radio';
	check3.type = 'radio';

	label1.appendChild(check1);
	label2.appendChild(check2);
	label3.appendChild(check3);



	var Bblock = constBlock.appendChild(block);
	Bblock.appendChild(input);
	Bblock.insertBefore(pName, input);
	constBlock.appendChild(pTypeText);
	constBlock.appendChild(label1);
	constBlock.appendChild(label2);
	constBlock.appendChild(label3);

	addBlock.appendChild(constBlock);
	console.log(constBlock);
}