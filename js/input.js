const input = function(param, cableContainer, cableLabel, inputName, inputContainerDiv) {
	const cableDiv = document.querySelector(`${cableContainer}`);
	const inputDiv = document.createElement('div');
	inputDiv.className = inputContainerDiv;
	const label = document.createElement('label');
	label.setAttribute('for', cableLabel);
	const input = document.createElement('input');
	input.type = `number`;
	input.name = inputName;
	input.setAttribute('placeholder', 'Długość [m]');
	input.setAttribute('step', '5');
	input.setAttribute('min', "0");
	input.setAttribute('innerHTML', "m"	);

	inputDiv.appendChild(label);
	inputDiv.appendChild(input);
	cableDiv.appendChild(inputDiv);
}
                                 	
