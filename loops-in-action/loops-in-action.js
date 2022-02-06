// First Example: Sum numbers

const calculateSumButtonElement = document.querySelector("#calculator button");

function calculateSum() {
  const userNumberInputElement = document.getElementById("user-number");
  const enteredNumber = userNumberInputElement.value;

  let sumUpToNumber = 0;

  for (let i = 0; i <= enteredNumber; i++) {
    sumUpToNumber = sumUpToNumber + i;
  }

  const outputResultElement = document.getElementById("calculated-sum");

  outputResultElement.textContent = sumUpToNumber;
  outputResultElement.style.display = "block";
  
}

calculateSumButtonElement.addEventListener("click", calculateSum);

// Second example: higlight all links

const hightlightLinksButtonElement = document.querySelector(
  "#highlight-links button"
);

function highlightLinks() {
    const anchorElements = document.querySelectorAll('#highlight-links a');

    for ( const anchorElement of anchorElements ) {
      anchorElement.classList.add('highlight');
    }

}

hightlightLinksButtonElement.addEventListener("click", highlightLinks);

// Third example: use dummy data in object and display it

const dummyUserData = {
  firstName: 'Hans',
  lastName: 'Kazan',
  age: 32
};

const displayUserDataButtonElement = document.querySelector('#user-data button');

function displayUserData () {
  const outputDataElement = document.getElementById('output-user-data');

  outputDataElement.innerHTML =''; //remove conmtent from other click

  for ( const  key in dummyUserData) {
    // create li element
    const newUserDataListItemElement = document.createElement('li');

    // get user data from obkect
    const outputText = key.toUpperCase() + ': ' + dummyUserData[key];
    newUserDataListItemElement.textContent = outputText;

    // append li element
    outputDataElement.append(newUserDataListItemElement);
  }
}

displayUserDataButtonElement.addEventListener('click' , displayUserData);

// Fourth example: Roll dice

// Statistics / Roll the Dice

const rollDiceButtonElement = document.querySelector('#statistics button');

function rollDice() {
  return Math.floor(Math.random() * 6) + 1; // Math.floor(): 5.64 => 5
}

function deriveNumberOfDiceRolls() {
  // get the input element
  const targetNumberInputElement = document.getElementById('user-target-number');
  const diceRollsListElement = document.getElementById('dice-rolls');

  // get the value of the input element
  const enteredNumber = targetNumberInputElement.value;

  // clear the innerHTML for another list
  diceRollsListElement.innerHTML = '';

  // init variables
  let hasRolledTargetNumber = false;
  let numberOfRolls = 0;

  
  while (!hasRolledTargetNumber) {
    const rolledNumber = rollDice();
    // if (rolledNumber == enteredNumber) {
    //   hasRolledTargetNumber = true;
    // }
    numberOfRolls++;

    // create list item for rolled number
    const newRollListItemElement = document.createElement('li');
    const outputText = 'Roll ' + numberOfRolls + ': ' + rolledNumber;
    newRollListItemElement.textContent = outputText;
    diceRollsListElement.append(newRollListItemElement);

    // check if rolledNumber = enteredNumber
    hasRolledTargetNumber = rolledNumber == enteredNumber;
  }

  const outputTotalRollsElement = document.getElementById('output-total-rolls');
  const outputTargetNumberElement = document.getElementById('output-target-number');

  outputTargetNumberElement.textContent = enteredNumber;
  outputTotalRollsElement.textContent = numberOfRolls;
}

rollDiceButtonElement.addEventListener('click', deriveNumberOfDiceRolls);


