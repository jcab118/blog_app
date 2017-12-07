$(document).ready(function(){

	$.ajax({
		method: 'GET',
		url: '/api/profile'
	}).then(function(res){
		console.log(res);


		// var nameDiv = $('div')
		// $('span').eq(0).append(res.name)

		// var picAndDescDiv = $('<div class="text-center">');

		// var img = $('<img>',{
		// 	src: '../images/' + res.picture
		// });

		// var descP = $('<p>');
		// descP.text(res.description);

		// var aTag = $('<a>',{
		// 	type: 'button',
		// 	class: 'btn btn-primary',
		// 	href: '/',
		// 	text: 'Back To Home'
		// });
		// aTag.css('text-decoration', 'none').css('font-size','30px');

		// picAndDescDiv.append(img).append(descP).append(aTag);
		// $('div').eq(0).append(picAndDescDiv);
	})



})