document.getElementById("Concatenate").onclick = function () {
    let firstName = "Abdul "
    let LastName = "Manan"
    let symbol = "!"
    let Concatenate = firstName + LastName + symbol
    document.getElementById("statement").innerHTML = "let firstName = Abdul" + "<br>" + "let lastName = Manan" + "<br>" + "let symbol = !" + "<br>" + "<br>" + "let Concatenate = firstName + LastName + symbol"
    document.getElementById("output").innerHTML = Concatenate

}


document.getElementById("userNumber").onclick = function () {
    let firstName = prompt("Please Enter your First Name")
    if (firstName == 0) {
        alert("Please Enter First Name to Continue")
        return
    }
    let LastName = prompt("Please Enter your Last Name")
    let Concatenate = firstName + " " + LastName
    document.getElementById("statement").innerHTML = "firstName = prompt('Please Enter your First Name')" + "<br>" + "lastName = prompt('Please Enter your Last Name')"
    document.getElementById("output").innerHTML = Concatenate
}


document.getElementById("comparisonOperators").onclick = function () {
    let statement1 = "let number1 = 5" + "<br>"
    let statement2 = "let number2 = 9" + "<br>" + "<br>"
    let statement3 = "if(num1 > num2){" + "<br>" + "document.getElementById('output').innerHTML = '1st Number is Greater'" + "<br>" + "}" + "<br>"
    let statement4 = "else if(num1 == num2){" + "<br>" + "document.getElementById('output').innerHTML = 'Both Numbers are Equal'" + "<br>" + "}" + "<br>"
    let statement5 = "else{" + "<br>" + "document.getElementById('output').innerHTML = '2nd Number is Greater'" + "<br>" + "}"
    document.getElementById("statement").innerHTML = statement1 + statement2 + statement3 + statement4 + statement5


    let number1 = 5
    let number2 = 9

    if (number1 > number2) {
        document.getElementById("output").innerHTML = "1st Number is Greater"
    }
    if (number1 < number2) {
        document.getElementById("output").innerHTML = "2nd Number is Greater"
    }
    else {
        document.getElementById("output").innerHTML = "Both Numbers are equal"
    }

    // let num1 = +prompt("Enter 1st Number")
    // let num2 = +prompt("Enter 2nd Number")

    // if(num1 > num2){
    //     document.getElementById("output").innerHTML = "1st Number is Greater"
    // }
    // else if(num1 === num2){
    //     document.getElementById("output").innerHTML = "Both Numbers are Equal"
    // }
    // else{
    //     document.getElementById("output").innerHTML = ("2nd Number is Greater")
    // }
}

document.getElementById("ifElseIf").onclick = function () {
    let statement1 = "if(num1 > num2){" + "<br>" + "document.getElementById('output').innerHTML = '1st Number is Greater'" + "<br>" + "}" + "<br>"
    let statement2 = "else if(num1 == num2){" + "<br>" + "document.getElementById('output').innerHTML = 'Both Numbers are Equal'" + "<br>" + "}" + "<br>"
    let statement3 = "else{" + "<br>" + "document.getElementById('output').innerHTML = '2nd Number is Greater'" + "<br>" + "}"
    document.getElementById("statement").innerHTML = statement1 + statement2 + statement3

    let num1 = +prompt("Enter 1st Number")
    if (num1 == 0) {
        alert("Please Enter First Name to Continue")
        return
    }
    let num2 = +prompt("Enter 2nd Number")

    if (num1 > num2) {
        document.getElementById("output").innerHTML = "1st Number is Greater"
    }
    else if (num1 === num2) {
        document.getElementById("output").innerHTML = "Both Numbers are Equal"
    }
    else {
        document.getElementById("output").innerHTML = ("2nd Number is Greater")
    }
}

document.getElementById("testCondition").onclick = function () {
    let statement = "let age = +prompt('Enter Your Age')" + "<br>"
    let statement0 = "let weight = +prompt('Enter Your Weight')" + "<br>" + "<br>"
    let statement1 = "if (age >= 18 && weight <= 70) {" + "<br>" + "document.getElementById('output').innerHTML = 'You're a smart man'" + "<br>" + "}" + "<br>"
    let statement2 = "else if(age >=31 && weight >= 71) {" + "<br>" + "document.getElementById('output').innerHTML = 'You're a fat guy'" + "<br>" + "}" + "<br>"
    let statement3 = "else{" + "<br>" + "document.getElementById('output').innerHTML = ('You're a baby')" + "<br>" + "}"
    document.getElementById("statement").innerHTML = statement + statement0 + statement1 + statement2 + statement3

    let age = +prompt("Enter Your Age")
    let weight = +prompt("Enter Your Weight")

    if (age >= 18 && weight <= 70) {
        document.getElementById("output").innerHTML = "You're a smart man"
    }

    else if (age >= 31 && weight >= 71) {
        document.getElementById("output").innerHTML = "You're a fat guy"
    }

    else {
        document.getElementById("output").innerHTML = ("You're a baby")
    }

}

document.getElementById("nestedStatement").onclick = function () {
    let statement0 = "let age = +prompt('Enter Your Age')" + "<br>" + "<br>"
    let statement1 = "if (age >= 18) {" + "<br>" + "let weight = +prompt('Enter Your Weight')" + "<br>" + "<br>" + "if (weight <= 70) {" + "<br>" + "document.getElementById('output').innerHTML = 'You're a smart man'" + "}" + "<br>"
    let statement2 = "else {" + "<br>" + "document.getElementById('output').innerHTML = 'You're a fat guy'" + "<br>" + "}" + "<br>" + "}" + "<br>"
    let statement3 = "<br>" + "else{" + "<br>" + "document.getElementById('output').innerHTML = ('You're a baby')" + "<br>" + "}"
    document.getElementById("statement").innerHTML = statement0 + statement1 + statement2 + statement3

    let age = +prompt("Enter Your Age")

    if (age >= 18) {
        let weight = +prompt("Enter Your Weight")

        if (weight <= 70) {
            document.getElementById("output").innerHTML = "You're a smart man"
        }

        else {
            document.getElementById("output").innerHTML = "You're a fat guy"
        }
    }

    else {
        document.getElementById("output").innerHTML = ("You're a baby")
    }
}

document.getElementById("login").onclick = function () {
    
    let userName = prompt("Enter Your User Name")
    let password = prompt("Enter Your Password")

    let statement1 = "let userName = prompt('Enter Your User Name')" + "<br>"
    let statement2 = "let weight = +prompt('Enter Your Password')" + "<br>" + "<br>"
    let statement3 = "if (userName == 'Manan' && password == '123') {" + "<br>" + "document.getElementById('output').innerHTML = '<span style = 'color: green'>Successfull Login</span>'" + "<br>" + "}" + "<br>"
    let statement4 = "else{" + "<br>" + "document.getElementById('output').innerHTML = '<span style = 'color: red'>Login Failed</span>'" + "<br>" + "}" + "<br>"
    document.getElementById("statement").innerHTML = statement1 + statement2 + statement3 + statement4

    if (userName == "Manan" && password == "123") {
        document.getElementById("output").innerHTML = "<span style = 'color: green'>Successfull Login</span>"
    }
    else{
        document.getElementById("output").innerHTML = "<span style = 'color: red'>Login Failed</span>"
    }
}

document.getElementById("clearStatement").onclick = function () {
    document.getElementById("statement").innerHTML = ''
}

document.getElementById("clearOutput").onclick = function () {
    document.getElementById("output").innerHTML = ''
}