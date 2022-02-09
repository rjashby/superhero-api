export default class Superhero {
  static async getHero() {
    let myNum1 = Math.floor(Math.random() * 731);
    let myNum2 = Math.floor(Math.random() * 731);
    let myNum3 = Math.floor(Math.random() * 731);
    console.log(myNum);
    try {
      const url1 = `https://superheroapi.com/api/${process.env.API_KEY}/${myNum1}`;
      const url2 = `https://superheroapi.com/api/${process.env.API_KEY}/${myNum2}`;
      const url3 = `https://superheroapi.com/api/${process.env.API_KEY}/${myNum3}`;

      const results = await Promise.all([
        fetch(url1),
        fetch(url2),
        fetch(url3),
      ])
      const dataPromises =  results.map(results => results.json());
      const finalData = await Promise.all(dataPromises);
      console.log(finalData);
      return finalData;
      // const response = await fetch(`https://superheroapi.com/api/${process.env.API_KEY}/${myNum}`);
      // if (!response.ok) {
      //   throw Error(response.error);
      // }
      // return response.json();
    } catch(error) {
      return error.message;
    }
  }
}