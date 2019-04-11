function setup() {
  // createCanvas(710, 400);
  // background(0);
  // strokeWeight(20);
  // frameRate(2);
}

function draw() {
  //according to U.S. Bureau, avg birth rate is 8 seconds/person avg death rate is 11 secs/ person
  var lifeRate = 8;
  var deathRate = 11;
  var lifeStd = Math.sqrt(lifeRate);
  var deathStd = Math.sqrt(deathRate);

  //data simulation, as the occurence of birth and death follows gaussian/normal distribution
  var lifeRandom = randomGaussian(lifeRate,lifeStd);
  var deathRandom = randomGaussian(deathRate,deathStd);

  // simulate the data
  var lifes =[]
  newLife(lifeRandom,deathRandom);
  processLife();

}

//county
//choosing the county based on its fraction of the total population
//(e.g., if a county has 0.001% of the total population, then there is a 0.001% chance that this county would be the one where it occurred).

d3.json("https://api.census.gov/data/2017/pep/components?get=BIRTHS,DEATHS,GEONAME&for=state:*&PERIOD=7", function(error, jsonData){
   console.log(jsonData);
});

var lifes =[];

//create birth function
function newLife(lifeRandom,deathRandom){
  //
  // if(life){
    console.log(lifeRandom);
    var birth = {
      type:"birth",
      county:"",
      lattitude:0,
      longitude:0
    }
    lifes.push(birth);
    setTimeout(newLife(lifeRandom,deathRandom), lifeRandom*1000);
    // updateVisualization(lifes);

  // }else{
  //   console.log("death");
  //   var death = {
  //     type:"death",
  //     county:"",
  //     lattitude:0,
  //     longitude:0
  //   }
  //   lifes.push(death);
  //   // updateVisualization(lifes);
  //   setTimeout(newLife(false), deathRandom*1000);
  // }
  //
  // if(Math.random()<0.5){
  //   setTimeout(newLife(false), deathRandom*1000);
  // }else{
  //   setTimeout(newLife(true), lifeRandom*1000);
  // }
}



function processLife() {
	// remove the first item of an array
	lifes.shift();
	// updateVisualization(orders);
	setTimeout(processLife(), 1000);
}

// function randomNumber(start,end) {
// 	return Math.floor(Math.random() * end) + start;
// }
