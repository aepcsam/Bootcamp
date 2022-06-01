// time setting

let timeEl=document.getElementById('time');
let dateEl = document.getElementById('date');

setInterval(()=>{
	let d = new Date();
	
	let hours = d.getHours();
	let minutes = d.getMinutes();
	let seconds = d.getSeconds();
	let am = "AM";
	let pm = "PM";

	

	if(hours >= 12){
		timeEl.innerHTML = `${hours}:${minutes}:${seconds} ${pm}`;
	}
	else{
		timeEl.innerHTML = `0${hours}:${minutes}:${seconds} ${am}`
	}
	
	
}, 1000);







// Newyork api


let apiKey = "QDLgtomChjaV5jI6C17JiXdtDbyCI1In";
let baseApiURL = "https://api.nytimes.com/svc/topstories/v2/";
let sectionHome = "home";
let sectionWorld = "world";
let sectionPolitics = "politics";
let sectionTechnology = "technology";
let sectionHealth = "health";
let sectionScience ="science"
let sectionSports="sports";
let sectionArts= "arts";
let sectionFashion="fashion";
let sectionFood="food";
let sectionTravel="travel";
let sectionMagazine ="magazine";
let currentSection = "all";


let finalApiURL = baseApiURL + currentSection + "/all.json?api-key=" + apiKey;

let url = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=QDLgtomChjaV5jI6C17JiXdtDbyCI1In`;

// URL  variable

let urlHome = `${baseApiURL}${sectionHome}.json?api-key=${apiKey}`;
let urlWorld = `${baseApiURL}${sectionWorld}.json?api-key=${apiKey}`;
let urlPolitics = `${baseApiURL}${sectionPolitics}.json?api-key=${apiKey}`;
let urlTechnology = `${baseApiURL}${sectionTechnology}.json?api-key=${apiKey}`;
let urlScience = `${baseApiURL}${sectionScience}.json?api-key=${apiKey}`;
let urlHealth = `https://api.nytimes.com/svc/topstories/v2/health.json?api-key=QDLgtomChjaV5jI6C17JiXdtDbyCI1In`;
let urlSports = `${baseApiURL}${sectionSports}.json?api-key=${apiKey}`;
let urlArts = `${baseApiURL}${sectionArts}.json?api-key=${apiKey}`;
let urlFashion = `${baseApiURL}${sectionFashion}.json?api-key=${apiKey}`;
let urlFood = `${baseApiURL}${sectionFood}.json?api-key=${apiKey}`;
let urlTravel = `$https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=QDLgtomChjaV5jI6C17JiXdtDbyCI1In`;
let urlMagazine = `${baseApiURL}${sectionMagazine}.json?api-key=${apiKey}`;






// AddEvent Listner

var homeButton = document.getElementById("homeNav");
homeButton.addEventListener("click", function () {
	getDataFromNYYTimesAPI(sectionHome, `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=QDLgtomChjaV5jI6C17JiXdtDbyCI1In`);

	//"https://api.nytimes.com/svc/topstories/v2/home.json?api-key=QDLgtomChjaV5jI6C17JiXdtDbyCI1In"
});

var worldButton = document.getElementById("worldNav");
worldButton.addEventListener("click", function () {
	getDataFromNYYTimesAPI(sectionWorld, urlWorld);
	//https://api.nytimes.com/svc/topstories/v2/world.json?api-key=QDLgtomChjaV5jI6C17JiXdtDbyCI1In
});

var politicsButton = document.getElementById("politicsNav");
politicsButton.addEventListener("click", function () {
	getDataFromNYYTimesAPI(sectionPolitics, urlPolitics);
	//https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=QDLgtomChjaV5jI6C17JiXdtDbyCI1In
});

var technologyButton = document.getElementById("technologyNav");
technologyButton.addEventListener("click", function () {
	getDataFromNYYTimesAPI(sectionTechnology, urlTechnology);
	//https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=QDLgtomChjaV5jI6C17JiXdtDbyCI1In
});

var magazineButton = document.getElementById("magazineNav");
magazineButton.addEventListener("click",function() {
    getDataFromNYYTimesAPI(sectionMagazine,urlMagazine);
    //https://api.nytimes.com/svc/topstories/v2/magazine.json?api-key=QDLgtomChjaV5jI6C17JiXdtDbyCI1In
});


var scienceButton = document.getElementById("scienceNav");
scienceButton.addEventListener("click", function () {
	getDataFromNYYTimesAPI(sectionScience, baseApiURL + sectionScience + ".json?api-key=" + apiKey);
	//https://api.nytimes.com/svc/topstories/v2/science.json?api-key=QDLgtomChjaV5jI6C17JiXdtDbyCI1In
});

var healthButton = document.getElementById("healthNav");
healthButton.addEventListener("click", function () {
	let urlhealth ='https://api.nytimes.com/svc/topstories/v2/health.json?api-key=QDLgtomChjaV5jI6C17JiXdtDbyCI1In'
	getDataFromNYYTimesAPI(sectionHealth, urlHealth);
	//https://api.nytimes.com/svc/topstories/v2/health.json?api-key=QDLgtomChjaV5jI6C17JiXdtDbyCI1In
	
});

var sportsButton = document.getElementById("sportsNav");
sportsButton.addEventListener("click", function () {
	getDataFromNYYTimesAPI(sectionSports, baseApiURL + sectionSport + ".json?api-key=" + apiKey);
	//"https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=QDLgtomChjaV5jI6C17JiXdtDbyCI1In"
});

var artsButton = document.getElementById("artsNav");
artsButton.addEventListener("click", function () {
	getDataFromNYYTimesAPI(sectionArts, baseApiURL + sectionArts + ".json?api-key=" + apiKey);
	//"https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=QDLgtomChjaV5jI6C17JiXdtDbyCI1In"
});

var fashionButton = document.getElementById("fashionNav");
fashionButton.addEventListener("click", function () {
	getDataFromNYYTimesAPI(sectionFashion, baseApiURL + sectionFashion + ".json?api-key=" + apiKey);
	//"https://api.nytimes.com/svc/topstories/v2/fashion.json?api-key=QDLgtomChjaV5jI6C17JiXdtDbyCI1In"
});

var foodButton = document.getElementById("foodNav");
foodButton.addEventListener("click", function () {
	getDataFromNYYTimesAPI(sectionFood, baseApiURL + sectionFood + ".json?api-key=" + apiKey);
	//"https://api.nytimes.com/svc/topstories/v2/food.json?api-key=QDLgtomChjaV5jI6C17JiXdtDbyCI1In"
});

var travelButton = document.getElementById("travelNav");
travelButton.addEventListener("click", function () {
	
	getDataFromNYYTimesAPI(sectionTravel, baseApiURL + sectionTravel + ".json?api-key=" + apiKey);
	//"https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=QDLgtomChjaV5jI6C17JiXdtDbyCI1In"
});





// Fetch API



async function getDataFromNYYTimesAPI(section,url){
    let response = await fetch(url);
    let data = await response.json();
    let results = await data.results;

    // console.log(results);

    var sectionDiv = document.getElementById(section);

    var cardDeckDiv = document.createElement("div");
	cardDeckDiv.setAttribute("class", "card-desk");


    for(let i=0; i<10; i++){
        // console.log(results[i]);

        let story = results[i];


        


        var cardOuterDiv = document.createElement("div");
		cardOuterDiv.setAttribute("class", "container");
		cardOuterDiv.setAttribute("style", "margin-top:30px;width:100%;");

		var cardOuterRowDiv = document.createElement("div");
		cardOuterRowDiv.setAttribute("class", "row");

		var cardDiv = document.createElement("div");
		cardDiv.setAttribute("class", "card mb-3");
		cardDiv.setAttribute("style", "width:100%;");

		var cardBodyDiv = document.createElement("div");
		cardBodyDiv.setAttribute("class", "row card-body");

		var cardBodyRowDiv = document.createElement("div");
		cardBodyRowDiv.setAttribute("class", "row");

		var cardBodyRowCol8Div = document.createElement("div");
		cardBodyRowCol8Div.setAttribute("class", "col-md-8");

		var storySection = document.createElement("h3");
		storySection.setAttribute("class", "card-title font-weight-bold sectioncard");
		storySection.innerHTML = story.section.toUpperCase();

		var storyTitle = document.createElement("h4");
		storyTitle.setAttribute("class", "card-text font-weight-bold titlecard");
		storyTitle.innerHTML = story.title;

		var storyDate = document.createElement("h4");
		storyDate.setAttribute("class", "datecard");
		storyDate.innerHTML = story.created_date;

		var storyByline = document.createElement("h4");
		storyByline.setAttribute("class", "abstractcard");
		storyByline.innerHTML = story.byline;

		var storyAbstract = document.createElement("h4");
		storyAbstract.setAttribute("class", "abstractcard");
		storyAbstract.innerHTML = story.abstract;

		var storyItemType = document.createElement("h4");
		storyItemType.setAttribute("class", "abstractcard");
		storyItemType.innerHTML = story.item_type;

		var storyShortURL = document.createElement("h4");
		storyShortURL.innerHTML = story.short_url;

		var continueReadingLink = document.createElement("a");
		continueReadingLink.setAttribute("href", story.short_url);
		continueReadingLink.setAttribute("class", "card-link card-text font-weight-bold continueReading");
		continueReadingLink.innerHTML = "Continue Reading";

		cardBodyRowCol8Div.appendChild(storySection);
		cardBodyRowCol8Div.appendChild(storyItemType);
		cardBodyRowCol8Div.appendChild(storyByline);
		cardBodyRowCol8Div.appendChild(storyTitle);
		cardBodyRowCol8Div.appendChild(storyDate);
		cardBodyRowCol8Div.appendChild(storyAbstract);
		cardBodyRowCol8Div.appendChild(continueReadingLink);

		var cardBodyImgCol4OuterDiv = document.createElement("div");
		cardBodyImgCol4OuterDiv.setAttribute("class", "col-md-4");
		cardBodyImgCol4OuterDiv.setAttribute("style", "text-align:right");

		var cardBodyImgCol4Div = document.createElement("img");
		cardBodyImgCol4Div.setAttribute("class", "img-thumbnail img-fluid");

        cardBodyImgCol4Div.setAttribute("src", story.multimedia[1].url);
		cardBodyImgCol4Div.setAttribute("style", "width:300px;height:200px;");

        cardBodyImgCol4OuterDiv.appendChild(cardBodyImgCol4Div);


        cardBodyDiv.appendChild(cardBodyRowCol8Div);
		cardBodyDiv.appendChild(cardBodyImgCol4OuterDiv);

        cardDiv.appendChild(cardBodyDiv);

        cardOuterRowDiv.appendChild(cardDiv);
		cardOuterDiv.appendChild(cardOuterRowDiv);

		sectionDiv.appendChild(cardOuterDiv);

    }

}

getDataFromNYYTimesAPI(sectionHome,urlHome);
getDataFromNYYTimesAPI(sectionWorld,urlWorld);
getDataFromNYYTimesAPI(sectionPolitics,urlPolitics);
getDataFromNYYTimesAPI(sectionTechnology,urlTechnology);
getDataFromNYYTimesAPI(sectionScience,urlScience);
getDataFromNYYTimesAPI(sectionHealth,urlHealth);
getDataFromNYYTimesAPI(sectionSports,urlSports);
getDataFromNYYTimesAPI(sectionArts,urlArts);
getDataFromNYYTimesAPI(sectionFashion,urlFashion);
getDataFromNYYTimesAPI(sectionFood,urlFood);
getDataFromNYYTimesAPI(sectionTravel,urlTravel);
getDataFromNYYTimesAPI(sectionMagazine,urlMagazine);



