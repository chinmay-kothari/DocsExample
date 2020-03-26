/**
*This class contains a list of funny jokes that can be added and getted/
*/

class JokeMachine {
  constructor() {
    this.jokes = []
  }

  /**
  *Return a random joke from the inner list
  *
  *@return {string} A random joke
  */

  getRandomJoke(){
    return this.jokes[Math.floor(Math.random() * this.jokes.length)]
  }
  /**
  *Print on the console a random joke. I hope it is funny!
  */

  sayRandomJoke(){
    console.log(this.getRandomJoke)
  }
  /**
  *This function adds a joke into the inner array
  *
  *@param {string} joke A funny joke
  */
  addJoke(joke){
    this.jokes.push(joke)
  }
}

