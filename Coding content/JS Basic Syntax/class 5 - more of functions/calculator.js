function calculator() {
    const operation = Number(prompt('Choose one option:\n 1 - Sum (+)\n 2 - Subtraction (-)\n 3 - Multiplication (*)\n 4 - Divison (/)\n 5 - Mod (%)\n 6 - Exponentiation(**)'));

    //check operations
    if (!operation || operation >= 7) {
        alert(`Error - invalid operation!`);
        calculator();
    } else {
        let n1 = Number(prompt('Insert the first number:'));
        let n2 = Number(prompt('Insert the second number:'));
        let result;

        //check numbers
        if (!n1 || !n2) {
            alert(`Error - invalid parameters`)
            calculator();
        } else {
            function sum(){
            result = n1 + n2;
            alert(`${n1} + ${n2} = ${result}`)
            newOperation();
            }
            function subtraction(){
                result = n1 - n2;
                alert(`${n1} - ${n2} = ${result}`)
                newOperation();
            }
            function multiplication(){
                result = n1 * n2;
                alert(`${n1} * ${n2} = ${result}`)
                newOperation();
            }
            function division(){
                result = n1 / n2;
                alert(`${n1} / ${n2} = ${result}`)
                newOperation();
            }
            function mod(){
                result = n1 % n2;
                alert(`The mod of the numbers ${n1} and ${n2} is ${result}`)
                newOperation();
            }
            function exponentiation(){
                result = n1 ** n2;
                alert(`${n1} raised to the power of ${n2} is ${result}`)
                newOperation();
            }

            //ask for new operation
            function newOperation() {
                let option = prompt('Do you want to execute another operation?\n 1 - Yes\n 2 - No');

                if (option == 1){
                    calculator();
                } else if (option == 2) {
                    alert(`Thanks for using our calculator!`)
                } else {
                        alert(`Insert a valid option.`)
                        newOperation();
                }
            }
        }
/* 
        if (operation == 1){
            sum();
        } else if (operation == 2) {
            subtraction();
        } else if (operation == 3) {
            multiplication();
        } else if (operation == 4) {
            division();
        } else if (operation == 5) {
            mod();
        } else if (operation == 6) {
            exponentiation();
        } */

        switch (operation) {
            case 1:
                sum();
                break;
            case 2:
                subtraction();
                break;
            case 3:
                multiplication();
                break;
            case 4:
                division();
                break;
            case 5:
                mod();
                break;
            case 6:
                exponentiation();
                break;
        }
    }
}

calculator();