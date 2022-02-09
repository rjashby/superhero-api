export default class Superhero {
  static async getHero() {
    let myNum = Math.floor(Math.random() * 731);
    console.log(myNum);
    try {
      const response = await fetch(`https://superheroapi.com/api/${process.env.API_KEY}/${myNum}`);
      if (!response.ok) {
        throw Error(response.error);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}