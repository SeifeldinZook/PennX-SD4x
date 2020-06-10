/**
 * This function should calculate the total amount of pet food that should be
 * ordered for the upcoming week.
 * @param numAnimals the number of animals in the store
 * @param avgFood the average amount of food (in kilograms) eaten by the animals
 * 				each week
 * @return the total amount of pet food that should be ordered for the upcoming
 * 				 week, or -1 if the numAnimals or avgFood are less than 0 or non-numeric
 */
function calculateFoodOrder(numAnimals, avgFood) {
    // IMPLEMENT THIS FUNCTION!
    document.write("numAnimals: ", numAnimals, " animals <br>")
    document.write("avgFood: ", avgFood, " kg/week <br>")
    /*lolo = Number (numAnimals);
    lololo = Number(avgFood);
    document.write("lolo: ", lolo, "<br>")
    document.write("lololo: ", lololo, "<br>")*/
    
    var petfood;
    if (isNaN(numAnimals)||isNaN(avgFood)||numAnimals < 0||avgFood < 0) {
        petfood = "-1";
    }
    else {
        petfood = numAnimals*avgFood;
    }
    return (petfood)   
}
document.write("total amount of pet food = ", calculateFoodOrder(5,"3"), " kg/week <br>")
document.write("*********************************************************<br>")
/**
 * Determines which day of the week had the most number of people visiting the
 * pet store. If more than one day of the week has the same, highest amount of
 * traffic, an array containing the days (in any order) should be returned.
 * (ex. ["Wednesday", "Thursday"]). If the input is null or an empty array, the function
 * should return null.
 * @param week an array of Weekday objects
 * @return a string containing the name of the most popular day of the week if there is only one most popular day, 
 and an array of the strings containing the names of the most popular days if there are more than one that are most popular
 */
var mon = new Weekday("Monday", 0);
var tue = new Weekday("Tuesday", 100);
var wed = new Weekday("Wednesday", 0);
var thu = new Weekday("Thursday",90);
var fri = new Weekday("Friday", 0);
var sat = new Weekday("Saturday", 0);
var sun = new Weekday("Sunday", 10);
var week = [];
var weektraffic = [];
week.push(mon.name, tue.name, wed.name, thu.name, fri.name, sat.name, sun.name)
weektraffic.push(mon.traffic, tue.traffic, wed.traffic, thu.traffic, fri.traffic, sat.traffic, sun.traffic)
    //document.write("week array: ", week, "<br>");
    //document.write("weektraffic array: ", weektraffic, "<br>");

function mostPopularDays(week) {
    // IMPLEMENT THIS FUNCTION!
    var maxday = []
    //document.write("maxday is: ", maxday, "<br>")
    var maxtraffic = [];
    //document.write("maxtraffic is: ", maxtraffic, "<br>")
    for (var k = 0; k < weektraffic.length; k++) {
        //document.write("k= ", k, "<br>")
        if (maxtraffic < weektraffic[k]) {
            maxtraffic = weektraffic[k];
            maxday = []
            maxday.push(week[k]);
            //document.write("maxtraffic is: ", maxtraffic, "<br>");
            //document.write("maxday is: ", maxday, "<br>");
        } else if (maxtraffic == weektraffic[k]) {
            maxtraffic = weektraffic[k];
            maxday.push(week[k]);
            //document.write("maxtraffic is: ", maxtraffic, "<br>");
            //document.write("maxday is: ", maxday, "<br>");
        } else {
            //document.write("maxtraffic is: ", maxtraffic, "<br>");
            //document.write("maxday is: ", maxday, "<br>");
        }
    }
    document.write("# maxtraffic is: ", maxtraffic, "<br>");
    document.write("# maxday is: ", maxday, "<br>");
    return maxday
};
mostPopularDays(week)
document.write("*********************************************************<br>")
/**
 * Given three arrays of equal length containing information about a list of
 * animals - where names[i], types[i], and breeds[i] all relate to a single
 * animal - return an array of Animal objects constructed from the provided
 * info.
 * @param names the array of animal names
 * @param types the array of animal types (ex. "Dog", "Cat", "Bird")
 * @param breeds the array of animal breeds
 * @return an array of Animal objects containing the animals' information, or an
 *         empty array if the array's lengths are unequal or zero, or if any array is null.
 */
//var dog = new Animal("Canis lupus", "Canidae", "Alaskan")
//var cat = new Animal("Felis catus", "Felidae", "Siamese")
//var bird = new Animal("Bird", "Aves", "Diamond Dove")
//var names = [];
//var types = [];
//var breeds = [];
//names.push(dog.name, cat.name, bird.name)
//types.push(dog.type, cat.type, bird.type)
//breeds.push(dog.breed, cat.breed, bird.breed)

var names = ["Canis lupus", "Felis catus", "Bird"];
var types = ["Canidae", "Felidae", "Aves"];
var breeds = ["Alaskan", "Siamese", "Diamond Dove"];
//if (names && types && breeds && names.length && names.length == types.length && names.length == breeds.length) {

function createAnimalObjects(names, types, breeds) {
    // IMPLEMENT THIS FUNCTION!
    var animals = [];

    if (names == null || types == null || breeds == null || names.length != types.length || types.length != breeds.length) {
        return [];
        }
        for (var i = 0; i < names.length; i++) {
        animals.push(new Animal(names[i], types[i], breeds[i]));
    }
    document.write(animals, "<br>")
    return animals;
}
createAnimalObjects(names, types, breeds)
document.write("*********************************************************<br>")

/////////////////////////////////////////////////////////////////
//
//  Do not change any code below here!
//
/////////////////////////////////////////////////////////////////

/**
 * A prototype to create Weekday objects
 */
function Weekday (name, traffic) {
    this.name = name;
    this.traffic = traffic;
}

/**
 * A prototype to create Item objects
 */
function Item (name, barcode, sellingPrice, buyingPrice) {
     this.name = name;
     this.barcode = barcode;
     this.sellingPrice = sellingPrice;
     this.buyingPrice = buyingPrice;
}
 /**
  * A prototype to create Animal objects
  */
function Animal (name, type, breed) {
    this.name = name;
     this.type = type;
     this.breed = breed;
}


/**
 * Use this function to test whether you are able to run JavaScript
 * from your browser's console.
 */
function helloworld() {
    return 'hello world!';
}

