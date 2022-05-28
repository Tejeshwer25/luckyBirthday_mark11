const submitBtn = document.getElementById("submitBtn");
const resultDiv = document.getElementById("result");
const birthdayDate = document.getElementById("date");
const luckyNumber = document.getElementById("number");

const handleSubmit = (e) => {
  e.preventDefault();
  let sum = 0;

  if (!birthdayDate.value && !luckyNumber.value) {
    resultDiv.innerHTML = "Please enter a valid date and number";
    return;
  } else if (!birthdayDate.value) {
    resultDiv.innerHTML = "Please enter a valid date";
    return;
  } else if (!luckyNumber.value) {
    resultDiv.innerHTML = "Please enter a valid number";
    return;
  } else {
    let date = birthdayDate.value.split("-");
    let tempLuckyNumber = parseInt(luckyNumber.value);

    calculateLuck(date, tempLuckyNumber, sum);
  }
};

function calculateLuck(date, tempLuckyNumber, sum) {
  for (let i in date) {
    let temp = date[i];
    temp = parseInt(date[i]);

    while (temp > 0) {
      console.log(temp);
      sum += temp % 10;
      temp = parseInt(temp / 10);
    }
  }

  if (sum % tempLuckyNumber === 0) {
    resultDiv.innerHTML = `${tempLuckyNumber} is a lucky number for you! 🎉`;
  } else {
    resultDiv.innerHTML = `${tempLuckyNumber} is not a lucky number for you! 😢`;
  }
}

submitBtn.addEventListener("click", (e) => handleSubmit(e));
