let roll = ['#20', '#19', '#18', '#17', '#16', '#15', '#14', '#13', '#12', '#11', '#10', '#9', '#8', '#7', '#6', '#5', '#4', '#3', '#2', '#1'];

let action = ['Grab a', 'Throw a', 'Jump over a', 'Run into a', 'Pick up a', 'Conjure a', 'Walk away from a', 'Duck a', 'Use a', 'Swing a'];

let weapon = ['axe', 'potion bottle', 'long sword', 'warhammer', 'drink of elixir', 'crossbow', 'morning star', ' short sword', 'gaunlet', 'helmet'];

let actiont = [', throw at', ', run into', ', hide from', ', attack', ', cast a spell at', ', vanquish ', ', misses ', ', blocked by']


let creature = ['a troll', 'a gargoyle', 'a serpant', 'a witch', 'a dark elf', 'a sorcerer', 'a fairy', 'a cave gnome', 'a barbarian', 'a fighter', 'a paladin', 'a ranger'];




let dr;
let ac;
let wp;
let aet;
let cr;
let myFont;
let wrds;
//let canvas;



function preload() {
  myFont = loadFont('ASSETS/Yatra_One/YatraOne-Regular.ttf');
}

function setup() {
  fill('255');
  textFont(myFont);
  textSize(25);
  createCanvas(1100, 1100);
  background(66, 40, 14);
  frameRate(60);
  intText();
  //let canvas = createCanvas(windowWidth *0.5, (windowWidth*0.5)*1.250);

}

function draw() {
  loadImage('ASSETS/dierolls/newdie2.png', img => {
    image(img, width * 0.4, width * 0.4, width * 0.2, width * 0.2, );
  });
}


function mousePressed() {

  dr = int(random(roll.length));
  ac = int(random(action.length));
  wp = int(random(weapon.length));
  at = int(random(actiont.length));
  cr = int(random(creature.length));

  wrds = roll[dr] + '   ' + action[ac] + ' ' + weapon[wp] + ' ' + actiont[at] + ' ' + creature[cr] + '.';


  fortText();
  console.log(wrds);

}





function intText() {
  fill(247, 255, 0);
  textAlign(CENTER);

  text('Roll the twenty sided die to start your next adventure.', width * 0.53, height * 0.25);
}

function fortText() {
  background(66, 40, 14);
  intText();
  fill(247, 255, 0);
  textAlign(CENTER);
  text('You rolled a', width * 0.5, height * 0.75);
  text(wrds, width * 0.5, height * 0.85)
}
