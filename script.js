$(document).ready(function(){

//  5 numeri generati casualmente.
    var numeri = 5 ;
    var numberList =[];
    while(numberList.length < numeri){
        var number = randomNamber(1, 100);
        if(! numberList.includes(number)){
            numberList.push(number);
        }
    }
// Timer di 30 secondi.
    var time = 0;
    var timeEnd = setInterval(function(){
        if(time == 3){
            clearInterval(timeEnd);
            $('.numeri').text('Il tempo è terminato.');
                setTimeout(function(){
                    for(var i = 0; i< numeri; i++){
                        var utente = parseInt(prompt('Inserisci uno alla volta i numeri visti').trim());
                        console.log(utente);
                    }
                 },1000)
                 
            
            
        }else{
            time++;
            console.log(time);
            $('.timer').text(time);
            $('.numeri').text(numberList);
        }
    }, 1000);
    
// fine document ready    
    });

// funzione numeri random
    function randomNamber(min, max){
        return Math.floor(Math.random()*(max - min + 1) ) + min;
    } 