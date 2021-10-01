// ToDO : add afetch with a URL and Method
fetch("https://hotels4.p.rapidapi.com/locations/search?query=new%20york&locale=en_US", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "hotels4.p.rapidapi.com",
		"x-rapidapi-key": "0e38836ee3msh75e0c7b966ff27fp1d6f8fjsn836a36a493f8"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
// Get the data and append