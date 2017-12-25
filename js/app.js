//declare the module

var myApp = angular.module("movieApp", ['ngRoute']);

myApp.controller('mainController', ['$http', function($http){

	//create a context
	const main = this;
	//this.main variable will get the movie title entered in the search bar and we will use it to find movie info using OMDB API
	this.name = "Enter the movie title you want to search here!";
	this.shouldShowDiv = false;

	//OMDB api url for searching URL requires us to repleace the white space in the given string with the + symbol. I have used a simple regex to implement this.
	this.getMovieName = function(inputstring){
		const outputString = inputstring.replace(/\s/g, "+");
		return outputString;
	}//End of getmovieName function
	
	this.loadMovie = function(baseUrl){

		$http({
			method : 'GET',
			url: baseUrl
		}).then(function successCallback(response) {
			console.log(response);
			let resp = response.data;
			main.title = resp.Title;
			main.year = resp.Year;
			main.image = resp.Poster;
			main.cast = resp.Actors;
			main.awards = resp.Awards;
			main.director = resp.Director;
			main.genre = resp.Genre;
			main.lang = resp.Language;
			main.plot = resp.Plot;
			main.rated = resp.Rated;
			main.production = main.Production;
			main.ratings = resp.Ratings;
			main.runTime = resp.Runtime;
			main.writer = resp.Writer;
			console.log(resp.Title);
			console.log(response.data.Title);
		},

		function errorCallback(response) {
			alert('Some Error Occured');
			console.log(response);
		
		});
	}//end loading of the file

	this.submitSearch = function(){
		console.log(this.name);
		const modifiedMovieName = this.getMovieName(this.name);
		console.log(modifiedMovieName);
		const baseUrl = 'http://www.omdbapi.com/?t='+ modifiedMovieName + '&apikey=';
		console.log(baseUrl);	
		main.loadMovie(baseUrl);
		main.shouldShowDiv = !main.shouldShowDiv;
	};//end of submitSearch function

}]); //end of mainController

