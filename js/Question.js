class Question {

  constructor() {
    this.title = createElement('h1')
    this.title1 = createElement('h4');
    this.input1 = createInput();
    this.title2 = createElement('h4');
    this.input2 = createInput();
    this.button = createButton();
    this.question = createElement('h3');
    this.text = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
  }

  hide(){
    this.title.hide();
    this.title1.hide();
    this.title2.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
  }
  


  display(){
    this.title.html("MyQuiz Game");
    this.title.position(width/4, 0);

    this.title1.html("Enter Your Name");
    this.title1.position(width/10,height/1.699);
    this.title2.html("Enter Correct Option in no.");
    this.title2.position(width/10,height/1.380);

    this.question.html("Question:- Who is the present <br>Prime Minister of India in 2021 ? " );

    this.question.position(width/8, height/6);
    this.option1.html("1: Rajnath Singh" );
    this.option1.position(width/7, height/2.9);
    this.option2.html("2: Narendra Modi" );
    this.option2.position(width/7, height/2.5);
    this.option3.html("3: Amit Shah " );
    this.option3.position(width/7, height/2.2);
    this.option4.html("4: Dr.Subrahmanyam Jaishankar" );
    this.option4.position(width/7, height/1.96);
 
    this.input1.position(width/15, height/1.4);
    this.input2.position(width/15, height/1.189);
    this.button.position(width/5,height/1.06)
    this.button.addClass('btn');
    this.button.html("<div class='btn'><b>Submit Your Answers</b></div>");
  
    if(this.input1.value() === 'undefined' || this.input1.value() === 'undefined'){
      contestantCount+=0;
      this.input1.show();
      this.input2.show();
      this.button.show();
    }else{
    this.button.mousePressed(()=>{
      this.input1.hide();
      this.input2.hide();
      this.button.hide(); 
      this.title1.hide();
      this.title2.hide();
    
      var contestantCountRef = database.ref('contestantCount');
      contestantCountRef.on("value",(data)=>{
        contestantCount = data.val();
      })
      alert( contestantCount)
      if(contestantCount  == 0){
      this.text.html("Tell your Friend to Answer")
      this.text.position(width/3,height/1.5);
      }else{
        this.text.hide();
        location.reload();
      }
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });
  }
  }
}
