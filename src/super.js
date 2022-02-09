export default class Superhero {  
  static async getHero(id) {
    try {
      const response = await fetch(`https://superheroapi.com/api/${process.env.API_KEY}/700`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}