let checker = 0;

function changeText()
{
  var first = document.getElementById("firstButton");
  first.innerText = "Hovered!";
}

function resetText() 
{
  var first = document.getElementById("firstButton");
  first.innerText = "Number 1";
}

function changeColor()
{
  var second = document.getElementById("secondButton");
  if (checker == 0)
  {
    second.style.backgroundColor = "blue";
    second.style.color = "white";
    checker = 1;
  }
  else
    {
    second.style.backgroundColor = "white";
    second.style.color = "black";
    checker = 0;
    }
}

function thirdMouseover()
{
  var third = document.getElementById("thirdButton");
  third.style.backgroundColor = "red";
  third.style.color = "white";
}

function thirdMousedown()
{
  var third = document.getElementById("thirdButton");
  third.style.backgroundColor = "green";
  third.style.color = "white";
}

function thirdDefault()
{
  var third = document.getElementById("thirdButton");
  third.style.backgroundColor = "white";
  third.style.color = "black";
}

function fourthMouseover()
{
  var fourth = document.getElementById("fourthButton");
  fourth.style.backgroundColor = "orange";
  fourth.style.color = "white";
  fourth.innerText = "Hovered!";
}

function fourthMousedown()
{
  var fourth = document.getElementById("fourthButton");
  fourth.style.backgroundColor = "teal";
  fourth.style.color = "black";
  fourth.innerText = "Clicked!";
}

function fourthDefault()
{
  var fourth = document.getElementById("fourthButton");
  fourth.style.backgroundColor = "white";
  fourth.style.color = "black";
  fourth.innerText = "Released!";
}

let counter = 0;
function fifthCountdown()
{
  var fifth = document.getElementById("fifthButton");
  counter++;
  switch (counter) {
    case 1:
      fifth.innerText = "Four more clicks.";
      break;
    case 2:
      fifth.innerText = "Three more clicks.";
      break;
    case 3:
      fifth.innerText = "Two more clicks.";
      break;
    case 4:
      fifth.innerText = "One more click.";
      break;
    case 5:
      fifth.remove();
    default:
      break;
  }

}
let validation = 0;

function checkInput() {
  var name = document.getElementById("nameInput").value;
  var age =  document.getElementById("ageInput").value;
  var address = document.getElementById("addressInput").value;
  var birthday = document.getElementById("birthdayInput").value;

  if (!name || !age || !address || !birthday) {
    alert("There are forms that do not have any values. Please fill up the forms.");
  } else {
    alert("Complete Information submitted.");
  }
}

function isDigit(char) {
  return !isNaN(parseInt(char)) && isFinite(char);
}

function gradeCheck(grade) {
  if (!isDigit(grade) || grade > 100) {
    alert("Invalid Grade.");
  } else if (grade <= 100 && grade >= 96) {
    alert("Your grade is 4.0.");
  } else if (grade <= 95 && grade >= 91) {
    alert("Your grade is 3.5.");
  } else if (grade <= 90 && grade >= 86) {
    alert("Your grade is 3.0.");
  } else if (grade <= 85 && grade >= 81) {
    alert("Your grade is 2.5.");
  } else if (grade <= 80 && grade >= 76) {
    alert("Your grade is 2.0.");
  } else if (grade <= 75 && grade >= 71) {
    alert("Your grade is 1.5.");
  } else if (grade == 70) {
    alert("Your grade is 1.0.");
  } else if (grade <= 69) {
    alert("Your grade is 0.5.");
  }
}

