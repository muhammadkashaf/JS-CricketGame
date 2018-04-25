var forGame=document.getElementById('first');
var forWicket=document.getElementById('wickt');
var forScore=document.getElementById('runs');
var forBalls=document.getElementById('bals');
var forOver=document.getElementById('over');
var againWickt=document.getElementById('wickt');
var againRun=document.getElementById('runs');
//var forTotal=document.getElementById('for_runs');
var clmRef=document.getElementById('total_Score');
var scndRef=document.getElementById('for_teamB');


var wickets=0;
var score=0;
var balls=0;
var rsltTeamA;
var rsltTeamB;

function forRandom(){
    var a=Math.floor(Math.random()*7);
    if(a===0){
       wickets++;
       forWicket.innerHTML=wickets;
    }else{
        score+=a;
       againRun.innerHTML=score;
    }
    console.log(a);
    
    balls++;
    forBalls.innerHTML=balls;
   if(balls===6){
      forOver.innerHTML='First Over Complete Team A';
   }else if(balls ===12){
       forOver.innerHTML='Second Over Complete Team A';
             
    var a =score;
    //console.log(a);

    var b=wickets;
    // console.log(b);
    var  c=a +'/ '+b;
    
    rsltTeamA=clmRef.innerHTML=c;
    //console.log(rsltTeamA);
    
    wickets=0;
    score=0;
    forWicket.innerHTML=wickets;
    forScore.innerHTML=score;
      
   }if(balls ===24){
    document.getElementById('btn_1').disabled=true;
    document.getElementById('btn_3').disabled=true;
    var teamB_Score=score;
    var teamB_Wickts=wickets;
    var combineTeams=teamB_Score+'/ '+teamB_Wickts;
    rsltTeamB=scndRef.innerHTML=combineTeams;
    //console.log(rsltTeamB); 
       
}
    if(balls === 18){
        forOver.innerHTML='First Over Complete Team B';
    }
    else if(balls === 24){
        forOver.innerHTML='Second Over Complete Team B';
    }
    
    
    
}
var forWinning=document.getElementById('winning');
function myFunc(){
    if(rsltTeamA > rsltTeamB){
        //console.log('Team A Win');
        forWinning.innerHTML='Congrats Team A Win The Match...';

    }
    if(rsltTeamA < rsltTeamB){
        //console.log('Team B Win');
        forWinning.innerHTML='Congrats Team B Win The Match...';
    }
        else{
        forWinning.innerHTML='Please Play The Game ?????'
    }
    
}

var forToss=document.getElementById('result');
var forChoice=document.getElementById('choice');
var forChoiceBoll=document.getElementById('choiceBol');
function startToss(){
    var a=document.getElementById('states');
    console.log(a.selectedIndex);
    //if(a.selectedIndex === 0){
        //alert('Please select any option');
    //}
    var forRandom=(Math.floor(Math.random()*2)+1);
      if(a.selectedIndex === forRandom){
         //console.log('won toss');
         forToss.innerHTML='You Won The Toss';
         forChoice.innerHTML='Bat First';
         forChoiceBoll.innerHTML='Boll First';

     }
     else if(a.selectedIndex !== forRandom){
         //console.log('You loss toss');
         forToss.innerHTML='You Loss The Toss';
     }

}
