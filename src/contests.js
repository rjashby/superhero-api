export default class charComp {  
  constructor(attr1, attr2, attr3, attr4) {
    this.attr1 = attr1;
    this.attr2 = attr2;
    this.attr3 = attr3;
    this.attr4 = attr4;
  }

  armWrestle() {
    // let myChar = new charComp(`${response[0].powerstats.strength.value()}, ${response[1].powerstats.strength.value()}, ${response[2].powerstats.strength.value()}, ${response[3].powerstats.strength.value()}`);
    // let myChar = new charComp(32, 57, 66, 19);
    console.log(myChar.attr1);
    console.log(typeof myChar.attr1);
    console.log(myChar.attr3 + myChar.attr4);
    if ((myChar.attr1 + myChar.attr2) > (myChar.attr3 + myChar.attr4)) {
      console.log("Team 1 Wins the Wrestling Match")
    } else {
      console.log("Team 2 Wins the Wrestling Match")
    }
  }
}
let myChar = new charComp(32, 17, 66, 19);

// function randomNum between 1-6 including
// switch
//   case=1 
//     armfunc
//     break
//   case=2
//     chessfunc
//     break
  