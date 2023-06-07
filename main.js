
//1-masala

function evenOrOdd(number) {
    if (number % 2 == 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }
  console.log(evenOrOdd(2));
  console.log(evenOrOdd(3));
  console.log(evenOrOdd(6)); 

    //2-masala

    function removeSecondElement(arr) {
        var firstElement = arr.shift();
        arr.splice(1, 1);
        return [firstElement, arr];
    }
    var arr = [1, 2, 3, 4, 5];
    var result = removeSecondElement(arr);
    console.log(result[0]);
    console.log(result[1]);

    //9-masala

    function trafficLight(color) {
        if (color === "green") {
          return "yellow";
        } else if (color === "yellow") {
          return "red";
        } else if (color === "red") {
          return "green";
        }
      }
      console.log(trafficLight("green"));
      console.log(trafficLight("yellow")); 
      console.log(trafficLight("red"));

       //10-masala

       function reverseString(str) {
        var reversedStr = "";
        for (var i = str.length - 1; i >= 0; i--) {
            reversedStr += str[i];
        }    
        return reversedStr;
      }
      console.log(reverseString("Welcome"));
      console.log(reverseString("JavaScript"));

      //5-masala

      function countdown(n) {
        var result = [];
        for (var i = n; i >= 1; i--) {
          result.push(i);
        }
        return result;
      }
      console.log(countdown(5));
      console.log(countdown(10));

      //6-masala

      function sumOfSquares(arr) {
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
          sum += arr[i] ** 2;
        }
        return sum;
      }
      var arr = [1, 2, 2];
      console.log(sumOfSquares(arr)); 
      