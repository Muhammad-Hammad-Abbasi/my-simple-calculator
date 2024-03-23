#!/usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstnumber" },
  { message: "Enter second number", type: "number", name: "secondnumber" },
  {
    message: "select one of the operators to perform operator",
    type: "list",
    name: "operator",
    choices:["Addition", "subtraction", "Multipication", "divison"],
  },
]);

// conditional statement
if(answer.operator ==="Addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}else if (answer.operator ==="subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}else if (answer.operator ==="Multipication") {
    console.log(answer.firstnumber * answer.secondnumber);
}else if (answer.operator ==="divison") {
    console.log(answer.firstnumber / answer.secondnumber);
}else {
    console.log("please select vaild operator")
}



