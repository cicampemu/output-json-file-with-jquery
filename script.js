$(document).ready(function() {
	$.getJSON('data.json', function(data) {

		// here comes the code that 'll output the info from the data.json file - this following code can change according to your needs.
		var output2 = "";

		for(var i=0; i <= data.links.length; i++) {
			for (key in data.links[i]){
				if (data.links[i].hasOwnProperty(key)) {
					output2 += '<li>' + '<a href="' + data.links[i][key] + '">' + key + '</a>' + '</li>';
				} 
			} 
		} 


		var update2  = document.getElementById('links');
		update2.innerHTML = output2;


	}); // getJSON
}); // ready
