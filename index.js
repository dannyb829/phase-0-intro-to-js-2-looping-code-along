// Code your solutions in this file

const writeCards = (name, event) => {
    const messages = []
    for (let i = 0; i < name.length; i++){
       messages.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
    return messages
}

const countDown = (n) => {
    for (let i = n; i >= 0; i--) {
        console.log(i)
    }
}