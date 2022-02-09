import getRandomInt from "./number";
export default class Superhero {
  static async getHero() {
    getRandomInt();
    console.log(myNum);
    try {
      const response = await fetch(`https://superheroapi.com/api/${process.env.API_KEY}/${myNum}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}