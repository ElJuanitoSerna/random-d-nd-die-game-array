let roll =['#20','#19','#18','#17','#16','#15','#14','#13','#12','#11','#10','#9','#8','#7','#6','#5','#4','#3','#2','#1'];

let action = ['Grab a', 'Throw a', 'Jump over a', 'Run into a', 'Pick up a', 'Conjure a', 'Walk away from a', 'Duck a','Use a', 'Swing a'];

let weapon = ['axe', 'potion bottle', 'long sword', 'warhammer', 'drink of elixir', 'crossbow', 'morning star', ' short sword', 'gaunlet', 'helmet'];

let actiont = [', throw at', ', run into', ', hide from', ', attack', ', cast a spell at', ', vanquish ',', misses ', ', blocked by']


let creature = ['a troll', 'a gargoyle', 'a serpant', 'a witch', 'a dark elf', 'a sorcerer', 'a fairy', 'a cave gnome','a barbarian', 'a fighter', 'a paladin', 'a ranger'];



let dr;
let ac;
let wp;
let aet;
let cr;

//let sr;


let rc = 20;
let gc = 100;
let bc = 250;

let wrds;


//setup function
function setup() {
  createCanvas(400, 400);
  background(0);
  frameRate(60);
  intText();
  fortBall();
  //console.log(mood[int(random(mood.length))]);
  //console.log(action[4]) 
  //arrays start at zero
  //console.log(creature.length);

}

function draw() {
   loadImage('twenty sided black.png', img => {
      image(img,width * 0.4,width * 0.4,width * 0.2,width * 0.2,);
  });
}

function mousePressed() {
  
  dr = int(random(roll.length));
  ac = int(random(action.length));
  wp = int(random(weapon.length));
  at = int(random(actiont.length));
  cr = int(random(creature.length));
  
  wrds = roll[dr]  +  '   ' + action[ac] + ' ' + weapon[wp] + ' '+ actiont[at] + ' ' + creature[cr] + '.';
  
  
  // add spaces for space 
  
  rc = random(250);
  gc = random(250);
  bc = random(255);
  fortText();
  console.log(wrds);
   

  
}

function fortBall() {
  fill(rc, gc, bc);
  ellipse(width*0.5,height*0.5, 100);
}

//function fortRect() {
  //fill(rc, gc, bc);
  //rect(width*0.5,height*0.5, 100);
//}




function intText() {
  fill(255);
  textAlign(CENTER);
  //this is a lie, you can click anywhere
  text('Roll the twenty sided die to start your next adventure.', width*0.53, height*0.25);
}

function fortText() {
  background(0);
  intText();
  fortBall();
  fill(255);
  textAlign(CENTER);
  text('You rolled a', width*0.5, height*0.75);
  text(wrds, width*0.5, height*0.85)
}