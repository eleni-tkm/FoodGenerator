const foodObj = {
 //monday:
 day1: {
    food: [
      "Πανσέτες στο φούρνο με πατάτες",
      "Κεφτεδάκια κοκκινιστά",
      "Μακαρόνια με κιμά",
      "Μοσχαράκι κοκκινιστό",
      "Γιουβαρλάκια"
    ],
    links: [
      "https://www.argiro.gr/recipe/panseta-sto-fourno-me-patates/",
      "https://akispetretzikis.com/recipe/4319/keftedakia-me-saltsa-ntomatas",
      "https://www.argiro.gr/recipe/makaronia-me-kima-axeperasta/",
      "https://www.gastronomos.gr/syntagh/moschari-kokkinisto-opos-prepei/78854/",
      "https://akispetretzikis.com/recipe/5144/gioyvarlakia-avgolemono"
    ]
  },
    day2: ["Φάε ο,τι έφαγες χθες 🤔"],
    day3: {food: [
        "Φακές", 
        "Μανιταρόσουπα", 
        "Κεφτέδες με κινόα και τόνο / Σπανακόρυζο", 
        "Φασολάδα", 
        "Γεμιστά"],
        links: [
            "#",
            "https://www.bbcgoodfood.com/recipes/mushroom-soup",
            "https://thecookingfoodie.com/recipe/healthy-tuna-quinoa-patties-recipe/",
            "#",
            "https://akispetretzikis.com/recipe/608/gemista"
          ]
        },
    day4: {food:
      [
      "Κοτόπουλο με γλυκόξινη (κατσαρόλα)", 
      "Κοτόπουλο με σόγια και πιπεριες στο φούρνο"],
      links: [
        "https://www.facebook.com/FOODbible/videos/255496497319691/?rdid=xkvO10Q8QKzBMmI6",
        "#"
        
      ]
    },
    day5: 
    {food:
      ["Θα φάμε έξω!", "Παστίτσιο"],

      links:[
        "#",
        "https://www.argiro.gr/recipe/mpesamel-me-korn-flaour/"
      ]
    },
    day6: ["Μακαρονοσαλάτα", "Ομελέτα"],
     //sunday
    day0: ["Σολομός και γλυκόξινη", "Τσιπούρες στο φούρνο", "Γαρίδες"],
    
    
  };
// console.log(foodObj.day1[1]);

var foodPara = document.querySelectorAll(".food>p")[0];



const d = new Date();
const day = d.getDay();
var days = ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο'];
//var ranNum = Math.floor(Math.random()*foodObj[`day${day}`].food.length);
var dayName = days[d.getDay()];

// Generate random number based on the length of `food` or the day array
var ranNum;
var foodToday;
var linkToday = ""; // Default to empty string if no links
var dayData = foodObj[`day${day}`];
console.log(dayData);
// Check if dayData is an object with a food array (like day1 or day3)
if (dayData && dayData.food) {
  ranNum = Math.floor(Math.random() * dayData.food.length);
  foodToday = dayData.food[ranNum];
  
  // Check if links exist and are not empty, then get the link
  if (dayData.links && dayData.links.length > ranNum) {
    linkToday = dayData.links[ranNum];
  }
} else if (Array.isArray(dayData)) {
  // If dayData is an array (like day4, day5, day6, etc.)
  ranNum = Math.floor(Math.random() * dayData.length);
  foodToday = dayData[ranNum];
}
var title = document.getElementsByTagName("h2")[0];
title.innerHTML = `Σήμερα είναι ${dayName}, μαγειρεύουμε : `;
foodPara.innerHTML = foodToday;

var image1 = document.querySelector(".img1");
var imagePath = `./assets/img${day}_${ranNum}.png`;

// Create a new Image object to test if the image exists
var imgTest = new Image();
imgTest.src = imagePath;

// Set up the onload and onerror handlers
imgTest.onload = function() {
    // If the image loads successfully, display it
    image1.classList.remove("hidden");
    image1.setAttribute("src", imagePath);
};

imgTest.onerror = function() {
    // If the image does not exist, keep it hidden
    image1.classList.add("hidden");
};
// for (const [key, value] of Object.entries(foodObj)) {
    
//     var strin = key.slice(3);
//     console.log(`${strin}`);
//   }

if (linkToday) {
    var linkT = document.querySelector("a");
    linkT.setAttribute("href", linkToday);
}
