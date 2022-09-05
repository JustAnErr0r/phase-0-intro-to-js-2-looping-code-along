
function writeCards(name, event) {
    const messages = []
    for (let i = 0; i < name.length; i++){
        const message = (`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
        messages.push(message)
    }
    return messages
}

console.log(writeCards(["Guadalupe", "Ollie", "Aki"], 'surprise'))

// function countDown() {
//     for (let i = 10; i >= 0, i--) 
// }


function countdown(){
    let num = "";   
    while( i >= 0)
    {   
        num += i;
        if(i > 0) {
            num += " "; 
        }
        i--;
    }
    return num;
}
const result = countdown(4);  

console.log(result);