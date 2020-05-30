
/* BlackJack Game */
let name,value;
let dummy = [];
for(let i =2 ;i<15;i++){
	if(i==14)
	{
		name = "A.png";
		value = 12;

	}
	else if (i==11){
		name = "J.png";
		value = 11;
		
	}
	else if (i==12){
		name = "Q.png";
		value = 11;

	}
	else if (i==13){
		name = "K.png";
		value = 11;
	}
	else{
		name = i+".png";
		value = i;

	}
	
	dummy.push({"name":name,"value":value});
	

}


let currentvalue = 0;
let buttonclassifier = 100;
let buttonclassifier1 =100;
let win = 0;
let loss = 0;
let draw = 0;
let botchoice;

function hitfunction() {

	botchoice = Math.random()*12;	
	botchoice = Math.floor(botchoice);
	show_image  = "<img src='blackjack_assets/images/"+dummy[botchoice].name+"'"+"style='height:78%; width:55%;padding-top:5px;'>";

	let newvalue = dummy[botchoice].value;
	currentvalue +=newvalue;
	if(currentvalue>21){

		document.getElementById("your-blackjack-result").innerHTML= "Busted";

		}
	else{
	document.getElementById("your-blackjack-result").innerHTML= currentvalue;
	document.getElementById('y_box').innerHTML=show_image;
	}

	buttonclassifier1= 200;
}

function standfunction(){
	if(currentvalue<15){
		alert("you Cant Stay in Less then 15 Value")
	}
	else{
	let dealervalue = 0;

	while(dealervalue<22){
		if(dealervalue>14){
			break;
		}

	botchoice = Math.random()*12;	
	botchoice = Math.floor(botchoice);

	show_image  = "<img src='blackjack_assets/images/"+dummy[botchoice].name+"'"+"style='height:78%; width:55%;padding-top:5px;'>";

	let newvalue = dummy[botchoice].value;
	dealervalue +=newvalue;

	if(dealervalue>21){

		document.getElementById("dealer-blackjack-result").innerHTML= "Busted";

		}
	else{
		document.getElementById("dealer-blackjack-result").innerHTML= dealervalue;
		document.getElementById('d_box').innerHTML=show_image;
		}

	}

	if(currentvalue<22 && dealervalue<22){
		if(currentvalue>dealervalue){
			document.getElementById("blackjack-result").innerHTML= "You Won";
			win+=1;
	
			}
		else if(currentvalue==dealervalue){
		
			document.getElementById("blackjack-result").innerHTML= "Draw";
			draw+=1;
					}
		else{
			document.getElementById("blackjack-result").innerHTML= "PC Won";
			loss+=1;
			}

		}
	else if(currentvalue>21 && dealervalue<22){
		document.getElementById("blackjack-result").innerHTML= "PC Won";
		loss+=1;
			}

	else if (currentvalue<22 && dealervalue>21){
		document.getElementById("blackjack-result").innerHTML= "You Won";
		win+=1;
			}
	
	else{
		document.getElementById("blackjack-result").innerHTML= "Draw";
		draw+=1;
			}


buttonclassifier=200;
buttonclassifier1 = 100;
		}
}



function blackjackgame(button_name)
{

		if(button_name.id=="hit" ){
			
			if(buttonclassifier==100){
				hitfunction();		
				}
			}

		else if (button_name.id =="stand" )
		{if( buttonclassifier1==200){
			standfunction();
		
			}
		}

	else {
		if(	buttonclassifier==200 && buttonclassifier1 == 100){
		
		buttonclassifier = 100;
		currentvalue = 0;
		dealervalue=0;
		document.getElementById("blackjack-result").innerHTML= "Let's Play";
		document.getElementById("dealer-blackjack-result").innerHTML= 0;
		document.getElementById('d_box').innerHTML='';
		document.getElementById("your-blackjack-result").innerHTML= 0;
		document.getElementById('y_box').innerHTML='';
		document.getElementById("wins").innerHTML = win;
		document.getElementById("losses").innerHTML = loss;
		document.getElementById("draws").innerHTML = draw;			
		
		}
	
	}

}
