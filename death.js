const grave = [{name}, {birthDate}, {causeOfDeath}]

function startUp() {
let name = prompt('What is your name? ');
let birthDate = prompt('What year were you born? ');
    grave.push(name);
    grave.push(birthDate);
}

function death(name, birthDate, causeOfDeath) {
  if (isAlive = false) {
    alert('You Died');
    alert(grave);
    alert(`Here lies ${grave[0]}`);
    console.log(`${birthDate} - 2023`);
    console.log(`${birthDate}`);
  }
}

startUp()

let map = new Map();


map.set("beach", "were eaten by a shark");
map.set("park", "were maimed by a dog");
map.set("drive", "died in a 12-car pileup");
map.set("bar", "were fatally wounded in a brawl");
map.set("concert", "caught covid");
map.set("restaurant", "got food poisoning");
map.set("club", "were drugged");
map.set("subway", ["were hit by a train", "were stabbed"]);
map.set("gym", "were crushed by weights");
map.set("rave", "were trampled");
map.set("general", ["had a heart attack", "were struck by lightning"]);
map.set("airport", ["died in an escalator incident", "were crushed by a ceiling light"]);

// function deathMessage(map(k, v)) {
//   if (k = "beach") {
//     console.log("you have been " + map.get("beach"));
//   }
// }
function deathMessage(key, value) {
  console.log("You " + value + " at the " + key)
}

for (let [key, value] of map) {
  deathMessage(key, value);
}

// console.log(map.get("beach"));
