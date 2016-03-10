function loadReddit() {
  var exampleURL = "https://www.reddit.com/r/quotes.json";
  $.ajax({
    url: exampleURL,
    dataType: "json",
    success: function(response) {
      console.log(response);
      var quote = response.data.children[0].data.title;
      console.log(quote);
    }     
  });
}
loadReddit();



//https://www.reddit.com/r/quotes.json