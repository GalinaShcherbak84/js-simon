$(document).ready(function(){
//ref
    var numeri = 5 ;
    var numberList =[];
    var utenteList =[];
    var numeriIndovinati = [];
//  5 numeri generati casualmente.
    while(numberList.length < numeri){
        var number = randomNamber(1, 100);
        if(! numberList.includes(number)){
            numberList.push(number);
        }
    }
// Timer di 30 secondi.
    var time = 0;
    var timeEnd = setInterval(function(){
        if(time == 10){
            clearInterval(timeEnd);
            $('.numeri').text('- - - - - - - - -');
            $('.timer').text('Tempo scaduto');
                setTimeout(function(){
                    for(var i = 0; i< numeri; i++){
                        var utente = parseInt(prompt('Inserisci uno alla volta i numeri visti').trim());
                        console.log(utente);
                        utenteList.push(utente);
                        if(numberList.includes(utente)){
                            numeriIndovinati.push(utente);
                        }
                    }
                    console.log(utenteList);
                    console.log(numeriIndovinati);
                    $('.numeri').text('I tuoi numeri sono: ' + utenteList);
                    var numeriUguali = $('.numeri_uguali');
                    numeriUguali.show();
                    if(numeriIndovinati.length > 0 ){
                        numeriUguali.text('Hai indovinato ' + numeriIndovinati.length + ' numeri.' + ' ' +'I numeri indovinati sono: ' + numeriIndovinati);
                    }else{
                        numeriUguali.text('Non hai indovinato neanche un numero.')
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