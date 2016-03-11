
    var feed = new Instafeed({
        get: 'user',
        // tagName: 'nerdypickuplines',
        userId: '287712828',
        clientId: 'b2add0c037b843e4b95ca9417b872408',

        accessToken: '1994606189.b2add0c.5918d49679a6480fbad42ade87ab4836'
    });
    feed.run();

    // window.Instagram = {
// 	config: {},
// 	BASE_URL: 'https://api.instagram.com/v1/',
// 	initialize: function(opt) {
// 		opt = opt || {};
// 		this.config.client_id = opt.client_id;
// 	},
	// users: function(callback) {
	// 	//https://api.instagram.com/v1/users/18808100/follows?access_token=[ACCESS_TOKEN_HERE]

	// 	var endpoint = this.BASE_URL + 'users/287712828/?access_token=1994606189.b2add0c.5918d49679a6480fbad42ade87ab4836'
	// 	this.getJSON(endpoint, callback);
	// },

	//https://api.instagram.com/v1/ACCESS-TOKEN
// 	tags: function(callback) {
// 			var endpoint = this.BASE_URL + 'tags/nerdypickuplines?access_token=1994606189.b2add0c.5918d49679a6480fbad42ade87ab4836';
// 		this.getJSON(endpoint, callback);
// 	},
// 	popular: function(callback) {
// 		var endpoint = this.BASE_URL + 'media/popular?access_token=1994606189.b2add0c.5918d49679a6480fbad42ade87ab4836';
// 		this.getJSON(endpoint, callback);
// 	},

// 	getJSON: function(url,callback) {
// 		$.ajax({
// 			type: 'GET',
// 			url: url,
// 			dataType: 'jsonp',
// 			success: function(response) {
// 				if (typeof callback === 'function') callback(response);
// 			}
// 		});
// 	}
// };

// Instagram.initialize({
// 	client_id: 'b2add0c037b843e4b95ca9417b872408'
// });

//CLIENT ID	b2add0c037b843e4b95ca9417b872408
//CLIENT SECRET	c978b0ba84364f759a7e0551195d827e

// AUTHORIZE 1994606189.b2add0c.5918d49679a6480fbad42ade87ab4836  1994606189.b2add0c.5918d49679a6480fbad42ade87ab4836

//https://instagram.com/oauth/authorize/?client_id=[CLIENT_ID_HERE]&redirect_uri=http://localhost&response_type=token