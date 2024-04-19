#! /usr/bin/env node 

import inquirer from "inquirer";
import chalk from "chalk"

let gamenumber=Math.floor(Math.random()*10+1)
let usernumber= await inquirer.prompt({
    message:"please enter number  under 10",
    name:"number",
    type:"number"
})

if(gamenumber==usernumber.number){


    console.log(chalk.green("CONGRATULATION YOU  GUESS RIGHT NUMBER"))
}
else{

    console.log(chalk.red(`YOU ENTER ${usernumber.number} AND GAMENUMBER IS ${gamenumber} you loose the game `))
}