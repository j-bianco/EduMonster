angular
  .module("eduApp")
  .controller("eduController", function($scope, $http) {

     $http.get("http://localhost:3000/scores/")
      .then(function(response) {
        console.log("Here are the high scores!!");
        console.log(response);
        $scope.highScores = response.data.highScores;
      })

    var poAnswers = [];
    var yourAnswer = ""
    var yourScore = 0;
    var lives = 3;

        $scope.yourScore = yourScore;
        $scope.lives = lives;



    function getRandomInRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
   
    var runTheNumbers = function() {
      var problemType = getRandomInRange(1,4);

      if (problemType == 1) {

        //Subtraction

      problemNumberOne= getRandomInRange(1, 100);
      problemNumberTwo= getRandomInRange(1, problemNumberOne);
      answer = problemNumberOne-problemNumberTwo;
      $scope.problem= `${problemNumberOne} - ${problemNumberTwo} = ?`;
      $scope.answer = answer;

        //Get array of "Potential Answers"
        //1
        poAnswers.push(answer);
        //2
        poAnswers.push(getRandomInRange(1, problemNumberOne));
        //3
        poAnswers.push(getRandomInRange(1, problemNumberOne));
        //4
        poAnswers.push(getRandomInRange(1, problemNumberOne));
        //5
        poAnswers.push(getRandomInRange(1, problemNumberOne));
        //6
        poAnswers.push(getRandomInRange(1, problemNumberOne));
        //7
        poAnswers.push(getRandomInRange(1, problemNumberOne));
        //8
        poAnswers.push(getRandomInRange(1, problemNumberOne));
        //9
        poAnswers.push(getRandomInRange(1, problemNumberOne));
        //10
        poAnswers.push(getRandomInRange(1, problemNumberOne));
        //11
        poAnswers.push(getRandomInRange(1, problemNumberOne));
        //12
        poAnswers.push(getRandomInRange(1, problemNumberOne));
        //13
        poAnswers.push(getRandomInRange(1, problemNumberOne));
        //14
        poAnswers.push(getRandomInRange(1, problemNumberOne));
        //15
        poAnswers.push(getRandomInRange(1, problemNumberOne));
        //16
        poAnswers.push(getRandomInRange(1, problemNumberOne));
      } else if (problemType == 2) {

        //Multiplication

      problemNumberOne= getRandomInRange(1, 20);
      problemNumberTwo= getRandomInRange(1, problemNumberOne);
      answer = problemNumberOne*problemNumberTwo;
      $scope.problem= `${problemNumberOne} * ${problemNumberTwo} = ?`;
      $scope.answer = answer;

        //Get array of "Potential Answers"
        //1
        poAnswers.push(answer);
        //2
        poAnswers.push(getRandomInRange(1, (answer*2)));
        //3
        poAnswers.push(getRandomInRange(1, (answer*2)));
        //4
        poAnswers.push(getRandomInRange(1, (answer*2)));
        //5
        poAnswers.push(getRandomInRange(1, (answer*2)));
        //6
        poAnswers.push(getRandomInRange(1, (answer*2)));
        //7
        poAnswers.push(getRandomInRange(1, (answer*2)));
        //8
        poAnswers.push(getRandomInRange(1, (answer*2)));
        //9
        poAnswers.push(getRandomInRange(1, (answer*2)));
        //10
        poAnswers.push(getRandomInRange(1, (answer*2)));
        //11
        poAnswers.push(getRandomInRange(1, (answer*2)));
        //12
        poAnswers.push(getRandomInRange(1, (answer*2)));
        //13
        poAnswers.push(getRandomInRange(1, (answer*2)));
        //14
        poAnswers.push(getRandomInRange(1, (answer*2)));
        //15
        poAnswers.push(getRandomInRange(1, (answer*2)));
        //16
        poAnswers.push(getRandomInRange(1, (answer*2)));
      }
      else if (problemType == 3) {

        //Addition

      problemNumberOne= getRandomInRange(1, 100);
      problemNumberTwo= getRandomInRange(1, problemNumberOne);
      answer = problemNumberOne+problemNumberTwo;
      $scope.problem= `${problemNumberOne} + ${problemNumberTwo} = ?`;
      $scope.answer = answer;

        //Get array of "Potential Answers"
        //1
        poAnswers.push(answer);
        //2
        poAnswers.push(getRandomInRange(1, (answer * 2)));
        //3
        poAnswers.push(getRandomInRange(1, (answer * 2)));
        //4
        poAnswers.push(getRandomInRange(1, (answer * 2)));
        //5
        poAnswers.push(getRandomInRange(1, (answer * 2)));
        //6
        poAnswers.push(getRandomInRange(1, (answer * 2)));
        //7
        poAnswers.push(getRandomInRange(1, (answer * 2)));
        //8
        poAnswers.push(getRandomInRange(1, (answer * 2)));
        //9
        poAnswers.push(getRandomInRange(1, (answer * 2)));
        //10
        poAnswers.push(getRandomInRange(1, (answer * 2)));
        //11
        poAnswers.push(getRandomInRange(1, (answer * 2)));
        //12
        poAnswers.push(getRandomInRange(1, (answer * 2)));
        //13
        poAnswers.push(getRandomInRange(1, (answer * 2)));
        //14
        poAnswers.push(getRandomInRange(1, (answer * 2)));
        //15
        poAnswers.push(getRandomInRange(1, (answer * 2)));
        //16
        poAnswers.push(getRandomInRange(1, (answer * 2)));
      }

        else if (problemType == 4) {
          problemNumberOne= getRandomInRange(8, 200);
          problemNumberTwo= getRandomInRange(2, (problemNumberOne - 1));
          //Division
          while(problemNumberOne % problemNumberTwo != 0) {
            problemNumberOne= getRandomInRange(8, 200);
            problemNumberTwo= getRandomInRange(2, (problemNumberOne - 1));
          }
            answer = problemNumberOne/problemNumberTwo;
            $scope.problem= `${problemNumberOne} / ${problemNumberTwo} = ?`;
            $scope.answer = answer;
          
        //Get array of "Potential Answers"
        //1
        poAnswers.push(answer);
        //2
        poAnswers.push(getRandomInRange(1, problemNumberOne));
        //3
        poAnswers.push(getRandomInRange(1, problemNumberOne));
        //4
        poAnswers.push(getRandomInRange(1, problemNumberOne));
        //5
        poAnswers.push(getRandomInRange(1, problemNumberOne));
        //6
        poAnswers.push(getRandomInRange(1, problemNumberOne));
        //7
        poAnswers.push(getRandomInRange(1, problemNumberOne));
        //8
        poAnswers.push(getRandomInRange(1, problemNumberOne));
        //9
        poAnswers.push(getRandomInRange(1, problemNumberOne));
        //10
        poAnswers.push(getRandomInRange(1, problemNumberOne));
        //11
        poAnswers.push(getRandomInRange(1, problemNumberOne));
        //12
        poAnswers.push(getRandomInRange(1, problemNumberOne));
        //13
        poAnswers.push(getRandomInRange(1, problemNumberOne));
        //14
        poAnswers.push(getRandomInRange(1, problemNumberOne));
        //15
        poAnswers.push(getRandomInRange(1, problemNumberOne));
        //16
        poAnswers.push(getRandomInRange(1, problemNumberOne));
        }

        console.log(poAnswers)

        $scope.poAnswers = poAnswers;


          //Set numbers on the boxes
          $scope.pA1 = poAnswers.splice(getRandomInRange(0, poAnswers.length-1), 1);
        
          $scope.pA2 = poAnswers.splice(getRandomInRange(0, poAnswers.length-1), 1 );
        
          $scope.pA3 = poAnswers.splice(getRandomInRange(0, poAnswers.length-1), 1 );
        
          $scope.pA4 = poAnswers.splice(getRandomInRange(0, poAnswers.length-1), 1 );
        
          $scope.pA5 = poAnswers.splice(getRandomInRange(0, poAnswers.length-1), 1 );
        
          $scope.pA6 = poAnswers.splice(getRandomInRange(0, poAnswers.length-1), 1 );
        
          $scope.pA7 = poAnswers.splice(getRandomInRange(0, poAnswers.length-1), 1 );
        
          $scope.pA8 = poAnswers.splice(getRandomInRange(0, poAnswers.length-1), 1 );
        
          $scope.pA9 = poAnswers.splice(getRandomInRange(0, poAnswers.length-1), 1 );
        
          $scope.pA10 = poAnswers.splice(getRandomInRange(0, poAnswers.length-1), 1 );
        
          $scope.pA11 = poAnswers.splice(getRandomInRange(0, poAnswers.length-1), 1 );
        
          $scope.pA12 = poAnswers.splice(getRandomInRange(0, poAnswers.length-1), 1 );
        
          $scope.pA13 = poAnswers.splice(getRandomInRange(0, poAnswers.length-1), 1 );
        
          $scope.pA14 = poAnswers.splice(getRandomInRange(0, poAnswers.length-1), 1 );
        
          $scope.pA15 = poAnswers.splice(getRandomInRange(0, poAnswers.length-1), 1 );
        
          $scope.pA16 = poAnswers.splice(getRandomInRange(0, poAnswers.length-1), 1 );
        
    }

        runTheNumbers();

        $scope.doMath = function(potentialAnswer) {
          if (potentialAnswer == answer) {
          $scope.yourAnswer = "You are right! Fred noms on those brainwaves gratefully."
          $scope.yourScore += 1;
          runTheNumbers();
        } else if ((potentialAnswer != answer) && ($scope.lives  > 1)) {
          $scope.yourAnswer = "Fred gets hungrier! "
          $scope.lives -= 1;
          runTheNumbers()
        }
          else if ((potentialAnswer != answer) && ($scope.lives == 1)) {
            yourScore = $scope.yourScore;
            if (yourScore < 10) {
            $http.post("http://localhost:3000/scores/", {name:prompt("Game over! Fred sulks back into the internet with electronic tears and e-hunger pangs. What are your initials?"), score: yourScore})
              .then(function(response) {
                console.log("Here are the high scores!!");
                console.log(response);
                $scope.highScores = response.data.highScores;
              })
            } else {
              $http.post("http://localhost:3000/scores/", {name:prompt("Game over! Fred joyfully retreats back into the depths of the internet, his hunger sated once again. Well done! What are your initials?"), score: yourScore})
              .then(function(response) {
                console.log("Here are the high scores!!");
                console.log(response);
                $scope.highScores = response.data.highScores;
              })
            }
          }
        } 
        
    
  });

  
  