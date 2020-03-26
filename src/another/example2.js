/**
*MY NAME IS CHINMAY KOTHARI
*/

class Class_2 {
  constructor() {
    this.jokes = []
  }

  /**
  *Return a random joke from the inner list
  *
  *@return {string} A random joke
  */

  function1(){
    return this.jokes[Math.floor(Math.random() * this.jokes.length)]
  }
  /**
  *Print on the console a random joke. I hope it is funny!
  */

  fucntion2(){
    console.log(this.getRandomJoke)
  }
  /**
  *This function adds a joke into the inner array
  *
  *@param {string} joke A funny joke
  */
  fucntion3(joke){
    this.jokes.push(joke)
  }
}
