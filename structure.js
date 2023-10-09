import(startUp());

let initialStartMsg = alert("You wake up to your alarm at 9:47 on a Sunday morning. Through half-open eyes, you spy sunlight shining through the blinds. What a beautiful day to go outside.")
let choice = prompt("Where would you like to go today? ")

startUp();

function printStartUpMsg() {
  let messageOne = "You wake up to your alarm at 9:47 on a Sunday morning."
    let messageTwo = "Through half-open eyes, you spy sunlight shining through the blinds."
      let messageThree = "What a beautiful day to go outside."
        let startMsg = `${messageOne} ${messageTwo} ${messageThree}`
  alert(startMsg);
}
