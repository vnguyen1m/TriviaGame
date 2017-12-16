var panel = $("#quiz-area");

// Question set
var questions = [{
  question: "What is the monkey born from?",
  answers: ["A Tree", "Magical Rune Rock", "A River", "A Woman"],
  correctAnswer: "Magical Rune Rock"
}, {
  question: "What is the maximum weight of the Monkey King's Staff weapon?",
  answers: ["17,800 lbs", "1 oz", "Weighless", "15,000 lbs"],
  correctAnswer: "17,800 lbs"
}, {
  question: "In Journey to the West, the Monkey King is trapped under a mountain for 500 years by what religious figure?",
  answers: ["Alien", "Jesus", "Buddha", "Dalai Lama"],
  correctAnswer: "Buddha"
}, {
  question: "The Monkey King came from which literature?",
  answers: ["Vietnamese", "Chinese", "Japanese", "American"],
  correctAnswer: "Chinese"
}, {
  question: "What is the end destination in Journey to the West?",
  answers: ["Pluto", "Vietnam", "India", "Africa"],
  correctAnswer: "India"
}, {
  question: "The Monkey King is also known as:",
  answers: ["Sun WuKong", "Tan Sanzang", "Zhu Bajie", "Sha Wujing"],
  correctAnswer: "Fresh"
}, {
  question: "Which art of Tao did the Monkey King NOT learn?",
  answers: ["72 Polymorphic Transformations", "Combat", "Secrets of Immortality", "Butt Scratch"],
  correctAnswer: "Skeeter"
}];

// Variable that will hold the setInterval
var timer;

var game = {

  correct: 0,
  incorrect: 0,
  counter: 100,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME IS UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    panel.append("<button id='done'>Done</button>");
  },

  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();

  },

  result: function() {

    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    panel.html("<h2>All Done!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};

// CLICK EVENTS

$(document).on("click", "#start", function() {
  game.start();
});


$(document).on("click", "#done", function() {
  game.done();
});
