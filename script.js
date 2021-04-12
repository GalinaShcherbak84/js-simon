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
// Alert
    alert(numberList );
// Timer di 30 secondi.
    var time = 0;
    var timeEnd = setInterval(function(){
        if(time == 30){
            clearInterval(timeEnd);
        }else{
            time++;
            console.log(time);
        }
    }, 1000);
        
// fine document ready    
    });

// funzione numeri random
    function randomNamber(min, max){
        return Math.floor(Math.random()*(max - min + 1) ) + min;
    } 