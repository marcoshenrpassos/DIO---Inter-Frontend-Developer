function compareNumbers(num1, num2) {
    if(!num1 || !num2) return "Define two numbers"; // it won't consider 0 */
    const firstPhrase = createFirstPhrase(num1, num2);
    const secondPhrase = createSecondPhrase(num1, num2);

    return `${firstPhrase} ${secondPhrase}`
}

function createFirstPhrase(num1, num2) {
    let areEqual = '';

    if(num1 !== num2) {
        areEqual = 'not';
    }

    return `The numbers ${num1} and ${num2} are ${areEqual} equal. `
}

function createSecondPhrase(num1, num2) {
    const sum = num1 + num2;

    let result10 = 'less';
    let result20 = 'less';
    const compare10 = sum > 10;
    const compare20 = sum > 20;

    if(compare10){
        result10 = 'more';
    }
    if(compare20){
        result20 = 'more';
    }

    return `The sum is ${sum}, which is ${result10} than 10 and ${result20} than 20.`
}

console.log(compareNumbers(0, 0));