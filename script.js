'use strict' //hata olursa buradan kontrol edilir
let secretNumber=Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;

const displayMessage= function(message){
    document.querySelector('.message').textContent=message;
};

document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess,typeof guess);
    console.log(secretNumber,typeof secretNumber);
    console.log(secretNumber,typeof secretNumber);
    //input boşsa
    if(!guess){
        displayMessage('Bir sayı giriniz');
    }
    //sayılar eşse
    else if(guess===secretNumber){
        displayMessage('Doğru Tahmin!');
        document.querySelector('.number').textContent=secretNumber;
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';

        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }
    }
    //sayılar eş değilse
    else if(guess!==secretNumber){
        if(score>1){
            displayMessage(guess>secretNumber ? ':Çok yüksek': 'Çok Düşük');
        document.querySelector('.score').textContent=score;
        }
        else{
            displayMessage('Oyunu kaybettin');
            document.querySelector('.score').textContent=0;
        }
        
    }
});

document.querySelector('.again').addEventListener('click',function(){
    score=20;
    secretNumber=Math.trunc(Math.random()*20)+1;

    displayMessage('Tahmin ediliyor...')
    document.querySelector('score').textContent=score;
    document.querySelector('score').textContent='?';
    document.querySelector('score').value='';

    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
    
    
})