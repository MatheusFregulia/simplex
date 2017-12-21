function manual(){
	let texto = 'Informe o número de variáveis (minimo 1)\n'+
	'Informe quantas restrições \n'+
	'Obs: não contar as xi >= 0\n'+
	'Clique no botão "OK"\n'
}

function criarForm(variaveis, restricoes) {
	
	if (variaveis == "" || variaveis <= 0 || variaveis != parseInt(variaveis)) {
		alert('Preencha o campo com a quantidade de variáveis.');
		form1.variaveis.focus();
		return;
	} else {
		if (restricoes == "" || restricoes <= 0 || restricoes != parseInt(restricoes)) {
			alert('Preencha o campo com a quantidade de restrições.');
			form1.regras.focus();
			return;
		}
	}
	if (variaveis > 0 && restricoes > 0) {
		//fazer aparecer o outro form com as infos 
		document.getElementById("form2").style.display = 'block';
		//linha que define a funcao objetivo
		document.getElementById("aqui").innerHTML+="<span>Z = </span>";
		//valores da funcao objetivo
		document.getElementById("aqui").innerHTML+="<input type='number' class='inputZ' required autocomplete='off' size='5' maxlength='10' id='y1' name='y1' />x<sub>1</sub>";
		
		//inputs das variaveis de acordo com a entrada
		for (var x = 2; x <= variaveis; x++) {
			document.getElementById("aqui").innerHTML+=" + <input type='number' class='inputZ' required autocomplete='off' size='5' maxlength='10' id='y"+x+"' name='y"+x+"' />x<sub>"+x+"</sub>";
		}

		//input de restricues de acordo com a entrada
		for (var i = 1; i <= restricoes; i++) {
			document.getElementById("aqui").innerHTML+="<p><b>Restrição "+i+"</b></p>";
			document.getElementById("aqui").innerHTML+="<input type='number' class='input' required autocomplete='off' size='5' maxlength='10' step='0.1' id='x"+i+"1' name='x"+i+"1' />x<sub>1</sub>";
			
			//a iteraaco é feita só se o input for >2
			for (var j = 2; j <= variaveis; j++) {
				document.getElementById("aqui").innerHTML+=" + <input type='number' class='input' required autocomplete='off' size='5' maxlength='10' step='0.1' id='x"+i+j+"' name='x"+i+j+"' />x<sub>"+j+"</sub>";
			}
			//coloca o sinal de <= em cada restricao
			document.getElementById("aqui").innerHTML+="<span> <= </span>"
			+"<input type='number' class='input' required size='5' maxlength='10' id='b"+i+"' name='b"+i+"' style='text-align:left' />";
		}
		document.getElementById("aqui").innerHTML+="<p><b>Restrição "+(++restricoes)+"</b></p>"
		+"<p>x<sub>i</sub> >= 0</p>";
		//desabilita visualizacao do btn ok
		document.getElementById("btn1").style.display = 'none';
		//trava os campos de input de variaveis e restricoes
		document.getElementById("in1").disabled = true;
		document.getElementById("in2").disabled = true;
		document.getElementById('y1').focus();
	}
} 
