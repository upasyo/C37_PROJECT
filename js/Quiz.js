class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    var display_Answers=280;
    //write code here to hide question elements
question.hide();
    //write code to change the background color here
background("#FF8D1A");
    //write code to show a heading for showing the result of Quiz
    fill(0);
    textSize(18);
    text(" Your Results are here 👇🏻",50,50);
    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();
    //write condition to check if contestantInfor is not undefined
if(allContestants !== undefined){
  debugger;
  fill("Blue");
  textSize(18);
  text("*NOTE: Contestant Who Answered",10,250);
  text(" Correct Answers Highlighted in Green Color!",10,269);
  for(var plr in allContestants){
  //debugger;
  var correctAnswer="2";
  if(correctAnswer === allContestants[plr].answer)
    fill("Green");
    else
    fill("Red");
    //write code to add a note here
    //write code to highlight contest who answered correctly
    display_Answers+=30;
    textSize(20);
    text(allContestants[plr].name.toUpperCase() + ": " + allContestants[plr].answer, 120,display_Answers)
  }
}

}
}

