// common loop

for (let i = 0; i <= 10; i++) {
  console.log(i);
}


// for-of loop (arrays)
const users = ['Max' , 'Anna' , 'Joel'];
console.log(users);

for (const user of users) {
    console.log(user);
}


// for-in loop (objects)
const loggedinUser = {
  name: "Max",
  age: 32,
  isAdmin: true,
};

for (const propertyName in loggedinUser) {
  console.log(propertyName);
  console.log(loggedinUser[propertyName]);
}


// while loop (loop when condition is true. Stop when conditiobn is false)

let counter = 10;

while (counter != 0) {
  console.log(counter);
  counter--;
}

let isFinished = false;

while (!isFinished) {
  isFinished = confirm("Do you want to quit?");
}
console.log("Done!");