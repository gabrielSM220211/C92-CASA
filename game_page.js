function enviar() {
	numero_1 = document.getElementById("número 1").value;
	numero_2 = document.getElementById("número 2").value;
	actual_answer = parseInt(numero_1) * parseInt(numero_2);
    question_number = "<h4>" + numero_1 + " X "+ numero_2 +"</h4>";
    input_box = "<br>Resposta : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row =  question_number + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
    document.getElementById("número 1").value = "";
    document.getElementById("número 2").value = "";
}


questionTurn = "player1";
answerTurn = "player2";
player1_score=0;
player2_score=0;
function check()
{
	getAnswer = document.getElementById("input_check_box").value;
	answer = getAnswer.toLowerCase();
	console.log("resposta em caixa baixa - " + answer);
	if(getAnswer == actual_answer)	
	{
		if(answerTurn == "player1")
		{
			player1_score = player1_score +1;
		    document.getElementById("player1_score").innerHTML = player1_score;
		}
		else 
		{
			player2_score = player2_score +1;
		    document.getElementById("player2_score").innerHTML = player2_score;
		}
	}
	if(questionTurn == "player1")
	{
		questionTurn = "player2"
		document.getElementById("player_question").innerHTML = "Turno de Pergunta - " + player2_name ;
	}
	else 
	{
		questionTurn = "player1"
		document.getElementById("player_question").innerHTML = "Turno de Pergunta - " + player1_name ;
	}

	if(answerTurn == "player1")
	{
		answerTurn = "player2"
		document.getElementById("player_answer").innerHTML = "Turno de Resposta - " + player2_name ;
	}
	else 
	{
		answerTurn = "player1"
		document.getElementById("player_answer").innerHTML = "Turno de Resposta - " + player1_name ;
	}

    document.getElementById("output").innerHTML = "";
}