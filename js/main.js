// let player1Time = 102
// let player2Time = 107

// function fastpacer(){


//     if(player1Time < player2Time) {

//         return player1Time;
//     }

//     else if(player2Time < player1Time) {

//         return player2Time;

//     }
// }


// let fastpac = fastpacer();
// console.log(fastpac);

// function getplayerTotal() {
//    return player2Time + player1Time;
// }

// let totalraceTime = getplayerTotal();
// console.log(totalraceTime);

// let randomNumber = Math.random() * 6;
// console.log(randomNumber)

// //removes decimal numbers
// let flooredNumber = Math.floor(Math.random() * 6);

// //Math.floor(flooredNumber);

// console.log(flooredNumber);


// function rollDice() {

//     let randnumber = Math.floor(Math.random() * 5) + 1 ;

//     return randnumber;

// }

// let diced = rollDice();
// console.log(diced);

//write a function the returns between 1 to 13 

// function playa(){
//     return Math.floor(Math.random() * 13) + 1;
// }

// let playarec = playa();

// console.log(playarec);




// let hasCompleted = true;
// let generateCert = true;

// if (hasCompleted === true && generateCert ===true) {

//     generateC();

// }
// function generateC() {
//    console.log('Generating Cert');


// let likeDocumentaries = true;
// let likeStartUps = true;

// if(likeDocumentaries === true || likeStartUps === true){
//     recommendMovie();


// }



// function recommendMovie() {
// console.log('Hey check out the new fyre movie');
// }


//objects composite data types store data types

//

// let course = {
// title: "CSS Mastery",
// minutes: 60,
// Author: "James Borgen"
// }

// console.log(course['minutes']);






let AirbnbLisiting = {

    isAvailable : true,
    location : "Central peru",
    rooms : 5,
    ammenities : ['Pantry', 'Kitchen', 'Wifi','Chef']
}

//function display

// function displayData() {

//     for (let x = 0; x < AirbnbLisiting.length; x+=1) {
//         console.log(AirbnbLisiting[x]);
    
//     }

// }

// let cardData = displayData();
// console.log(cardData);


// let person = {

//     name: "Per",
//     age : 35,
//     country : "Norway"
// }

// function logData () {
//     console.log( person.name + " is " + person.age + "and lives in " + person.country);

// }

// logData();


// let age = 71;

// if( age <= 6){

//     console.log ('Child is eligilble for free transportation');
// }

// else if (age <= 6 || age <= 17) {

//     console.log('Child gets a Discount');
// }

// else if(age <=18 || age <=26){

//    console.log('Student gets a discount');

// }
// else if(age <= 27 || age <=66 ) {

//     console.log('Passenger pays full price');

// }

// else if (age > 66) {

//     console.log('Senior citizen dicount');

// }

// else{

//     console.log('Not eligible')
// }


// let largeCountries = ["China","India","USA","Indonesia","Pakistan"];

// //use for loop to log through all the countries

// console.log('Five largest countries in the world');
// function countryList(){

//     for(let x = 0; x < largeCountries.length; x+=1){

//         console.log( '--'+largeCountries[x])

//     }
// }

// let country_selected = countryList();
// console.log(country_selected);

//pop() will remove an item from an array at the end
//push will add an item at the end of the array
//shift will remove an item from the beginning of the array
//Unshift will add an item to the array at the very beginning


// let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"];
// //remove tuvalu and monaco from the array

// function remov() {
//     return largeCountries.pop([1,4]);
// }

// let removeCountries = remov();
// console.log(removeCountries);

///-------------------------------------------------

// let dayOfMonth = 31
// let weekday = "Friday"

// function spookyday(){

//     if(dayOfMonth === 31 && weekday === "Friday") {

//         console.log('This is a Spooky Face');

//     }
// }
// let spooky = spookyday();
// console.log(spooky);

//----------------------------------Random item----------------------//

let hands = ["rock", "paper", "scissor"];

console.log(hands);

// function getHand(){

//     let randomIndex = Math.floor (Math.random() * 3) ;    //This will give items btwn 0.1 to 2.99
//     return hands[randomIndex];

// }

// let randomtxt = getHand();
// console.log(randomtxt);


// let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
// let appleShelf = document.getElementById("apple-shelf")
// let orangeShelf = document.getElementById("orange-shelf")

// // Create a function that puts the apples onto the appleShelf
// // and the oranges onto the orangeShelf. Use a for loop,
// // a conditional statement, and the textContent property.

// function sortFruit() {
//     for (let i = 0; i < fruit.length; i++) {
//         if (fruit[i] === "🍎") {
//             appleShelf.textContent += "🍎"
//         } else if (fruit[i] === "🍊") {
//             orangeShelf.textContent += "🍊"
//         }
//     }
// }

// sortFruit()


















