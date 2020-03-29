/**
*This class contains a list of funny jokes that can be added and getted/
*/

class Class_1 {
  constructor() {
    this.jokes = []
  }

  /**
  *Return a random joke from the inner list
  *
  *@return {string} A random joke
  */

  Funtion_1(){
    return this.jokes[Math.floor(Math.random() * this.jokes.length)]
  }
  /**
  *Print on the console a random joke. I hope it is funny!
  */

  Funtion_2(){
    console.log(this.getRandomJoke)
  }
  /**
  *This function adds a joke into the inner array
  *
  *@param {string} joke A funny joke
  */
  Funtion_3(joke){
    this.jokes.push(joke)
  }
}
