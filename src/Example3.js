/**
*Ths is File is again saved in ./src  
*/

class Class_3 {
  constructor() {
    this.jokes = []
  }

  /**
  *Return a random joke from the inner list
  *
  *@return {string} A random joke
  */

  Function_A(){
    return this.jokes[Math.floor(Math.random() * this.jokes.length)]
  }
  /**
  *Print on the console a random joke. I hope it is funny!
  */

  Function_B(){
    console.log(this.getRandomJoke)
  }
  /**
  *This function adds a joke into the inner array
  *
  *@param {string} joke A funny joke
  */
  
  Function_C(joke){
    this.jokes.push(joke)
  }
}
