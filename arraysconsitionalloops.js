//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//              JAVA SCRIPT REPS

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//EASY GOING
//----------------------------------------------

//Write a for loop that will log the numbers 1 through 20

for (let counter = 1; counter <= 20; counter++) {
  console.log(counter);
}

//Write a for loop that will log only the even numbers in 0 through 200.
console.log("Even Numbers...")
for (let counter = 0; counter <= 200; counter++) {
  if (counter % 2 === 0) {
    console.log(counter);
  }
}

//FIZZ BUZZ

console.log("Fizz Buzz....")
for (counter = 0; counter <= 100; counter++) {
  if (counter % 3 == 0 && counter % 5 == 0) {
    console.log("FizzBuzz");
  } else if (counter % 5 == 0) {
    console.log("Buzz");
  } else if (counter % 3 == 0) {
    console.log("Fizz");
  } else {
    console.log(counter);
  }
}

//Wild Wild Life
console.log("Wild Wild Life")

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

//1.Plantee just had her birthday; change Plantee's array to reflect her being a year older.

plantee[2]++;
//console.log(plantee);

//2. Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
wolfy[3] = "Gotham City";

//3. Give D'Art a second hometown by adding "Hawkins"
let second_hometown_arr = ["Upside Down", "Hawkins"];
dart[3] = second_hometown_arr;
//console.log(dart);

//4. Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfyarray and replace it with "Gameboy".

wolfy[0] = "Gameboy";
//console.log(wolfy);

//Yell at the Ninja Turtles

//1.Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
const ninja_turtles_arr = ["Donatello", "Leonardo", "Raphael", "Michaelangalo"];

//2.Use a for of loop(not a typo - try it out! Try a for ofloop) to call toUpperCase()on each of them and print out the result.
console.log("List changed to Uppercase...")
for (turtle of ninja_turtles_arr) {
  console.log(String.prototype.toUpperCase.apply(turtle));
}

//Methods, Revisited

const favMovies = [
  "Jaws",
  "The Fellowship of the Ring",
  "Howl's Moving Castle",
  "Django Unchained",
  "Cloud Atlas",
  "The Usual Suspects",
  "Toy Story",
  "Conan the Barbarian",
  "Titanic",
  "Harry Potter",
  "Fried Green Tomatoes",
  "Volver",
  "Oculus",
  "Seven",
  "Black Panther",
  "Harry Potter",
  "Imitation of Life",
  "Snatch",
  "Fast and Furious",
];

//Console log: the index of Titanic
console.log("The index of Titanic in the array:",favMovies.indexOf("Titanic"));

//use the .sortmethod Thought question: what did this do to the array? Did it permanently alter it?
favMovies.sort();
console.log("The sorted array is : ",favMovies);
// The sort method will sort the array in natural order and it is permanent.

//Use the method pop

favMovies.pop();
//console.log(favMovies); // removes the last element

//push"Guardians of the Galaxy"

favMovies.push("Guardians of the Galaxy");
//console.log(favMovies);

//Reverse the array

favMovies.reverse();
console.log("The reversed array is :",favMovies);

//Use the shiftmethod
favMovies.shift(); // removes the first element in the array
//console.log(favMovies);

//unshift- what does it return?
favMovies.unshift(); // Returns the same array as we are not adding anthing new to the array
//console.log(favMovies);

//splice"Django Unchained" and add "Avatar" (try finding the index of "Django Unchained",
//instead of counting it yourself) Thought question: did this permanently alter our array?

favMovies.splice(favMovies.indexOf("Django Unchained"), 1, "Avatar");
//console.log(favMovies); // This permanently alter the array

//slicethe last half of the array (challenge yourself and try to programatically determine the middle of the array rather
//than counting it and hard coding it) - Thought question: did this permanently alter our array?

let array_length = Math.floor(favMovies.length / 2);
favMovies.slice(array_length);
//console.log(favMovies); // This will not affect the original array.

//store the value of your slicein a variable, console.log it - Thought question: what is going on here?
let new_favmovies = favMovies.slice(array_length);
console.log("The sliced(copy) array : ",new_favmovies); // The slice method will create a copy of the original array and return a new array of the sliced elements.

//After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array,
//what value do we get when we look for the index of something that is not in the array?
console.log("The index of unavailable element in an array : ",favMovies.indexOf("Django Unchained")); // returns -1 if the element is not in the array

//Thought question: that we declared the variable favMovieswith const, and yet, we were allowed to change the array. Weird? Should we have used let?
// We are manipulating the array as we are not assigning anything which in turn modify its structure. For example, when we try to assign the
//favMovies for the slice method, it will throw an error
// favMovies = favMovies.slice(array_length); // Assignment to constant variable.

//Where is Waldo

const whereIsWaldo = [
  ["Timmy", "Frank"],
  "Eggbert",
  ["Lucinda", "Jacc", "Neff", "Snoop"],
  ["Petunia", ["Baked Goods", "Waldo"]],
];

//Remove Eggbert (hint look at the slice/splice method(s))

whereIsWaldo.splice(whereIsWaldo.indexOf("Eggbert"),1)
//console.log(whereIsWaldo);

//Change "Neff" to "No One"
whereIsWaldo[1][whereIsWaldo[1].indexOf("Neff")] = "No one";
console.log(whereIsWaldo)


//Excited Kitten

//Write code that logs "Love me, pet me! HSSSSSS!" 20 times.

//For every even number in your loop, log "...human...why you taking pictures of me?...", 
//"...the catnip made me do it...", or "...why does the red dot always get away..." at random.

kitten_talking_pnts = ["...human... why you taking pictures of me?",".. the catnip made me do it","..why does the red dot always get away..."]
let talkpoint = 0;
for (let cntr=0;cntr<=20;cntr++){
    console.log("Love me, pet me! HSSSSSS!")
    talkpoint = Math.floor((Math.random()*kitten_talking_pnts.length-1) + 1);
    //console.log(talkpoint);
    if(cntr%2 == 0){
        console.log(kitten_talking_pnts[talkpoint]);
    }
    else{
        console.log(cntr)
    }
}

//Find the Median

//Find the median number in the following numsarray, then console.log that number.

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
console.log("Median of the array :",nums[(Math.ceil(nums.length/2)+1)])

