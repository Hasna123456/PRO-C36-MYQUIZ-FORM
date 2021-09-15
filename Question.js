class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Correct Option No..");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    this.question.html("Question:- how many members are there in the k-pop group BTS(bangtan sonyeondan)?" );
    

    this.question.position(80, 80);
    this.option1.html("1: 5" );
    this.option1.position(170, 100);
    this.option2.html("2: 8" );
    this.option2.position(170, 120);
    this.option3.html("3: 4 " );
    this.option3.position(170, 140);
    this.option4.html("4: 7" );
    this.option4.position(170, 160);

    this.input1.position(170, 230);
    this.input2.position(350, 230);
    this.button.position(310, 300);

    this.button.mousePressed(()=>{
      
      this.message.html("Kamsahamnida, Your Answer Has Been Submitted");
      this.message.position(340, 350);

      


    });
  }
}
