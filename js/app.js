var random;
var lineAPI = [
  "https://scontent-lax3-1.cdninstagram.com/t51.2885-15/s480x480/e35/12144147_160492561002211_1905487223_n.jpg?ig_cache_key=MTE5NTYwODM4NjQ1NzU1MzU1MA%3D%3D.2",
  "https://scontent-lax3-1.cdninstagram.com/t51.2885-15/e35/12797814_246656585666951_1116132795_n.jpg?ig_cache_key=MTE5ODg2Mzk4MDE1NDcxNDQ3Mw%3D%3D.2",
  "https://scontent-lax3-1.cdninstagram.com/t51.2885-15/e35/12748193_1513581105612993_541355165_n.jpg?ig_cache_key=MTE4NDk0NTgzOTU2MDQ4NDkzMQ%3D%3D.2",
  "https://scontent-lax3-1.cdninstagram.com/t51.2885-15/s480x480/e35/12424361_1538418199819382_1239840181_n.jpg?ig_cache_key=MTE3NjE5NDkwODU4MTA0NzE2OQ%3D%3D.2",
  "https://scontent-lax3-1.cdninstagram.com/t51.2885-15/s480x480/e35/12725006_1051101011620739_761800301_n.jpg?ig_cache_key=MTE5NDkxMDcxMjU1NzE5NDA3NQ%3D%3D.2",
  "https://scontent-lax3-1.cdninstagram.com/t51.2885-15/s320x320/e35/12716582_961495803939893_679256591_n.jpg?ig_cache_key=MTE5MzkyNzQzNDAwMDY3ODU4MQ%3D%3D.2",
  "https://scontent-lax3-1.cdninstagram.com/t51.2885-15/e35/12716652_942542979156429_971712216_n.jpg?ig_cache_key=MTE5MDYxNzkwNTc1MjY1MTM0NQ%3D%3D.2",
  "https://scontent-lax3-1.cdninstagram.com/t51.2885-15/s480x480/e35/12716539_1703414829943131_861066149_n.jpg?ig_cache_key=MTE5MTI2MTI5NTQzODQ0OTAwNg%3D%3D.2",
  "https://scontent-lax3-1.cdninstagram.com/t51.2885-15/s480x480/e35/12716464_1010443518999553_849457890_n.jpg?ig_cache_key=MTE4NjUyNTkyODA0ODI0MzcyNg%3D%3D.2",
  "https://scontent-lax3-1.cdninstagram.com/t51.2885-15/s320x320/e35/12748279_227722947565619_2024568574_n.jpg?ig_cache_key=MTE4NjUwNTgzNjM3NTc4MjkzMg%3D%3D.2",
  "https://scontent-lax3-1.cdninstagram.com/t51.2885-15/s480x480/e35/11917845_163180140703800_220100699_n.jpg?ig_cache_key=MTEyMjg2NzY4NjU5MjQyNzExMA%3D%3D.2",
  "https://scontent-lax3-1.cdninstagram.com/t51.2885-15/e35/12276946_524475841055241_55492037_n.jpg?ig_cache_key=MTEyMjE4MzcxNDYwMjQzMjE4MA%3D%3D.2",
  "http://media4.popsugar-assets.com/files/2015/02/04/001/n/1922398/134fe692_a.xxxlarge.jpg",
  "http://static.fjcdn.com/pictures/Nerd+pick+up+lines_9abbc0_4759674.jpg",
  "https://s-media-cache-ak0.pinimg.com/736x/01/d5/61/01d5614f62aa66e1efe40e57efac906f.jpg",
  "http://static.fjcdn.com/pictures/Nerd_b65f1c_962754.jpg",
  "https://s-media-cache-ak0.pinimg.com/736x/8e/4f/98/8e4f986dff6182ab4437665300795cb9.jpg",
  "http://40.media.tumblr.com/tumblr_lydplsQJNm1r8lg7to1_500.jpg",
  "https://s-media-cache-ak0.pinimg.com/736x/34/2e/ab/342eab83acf38346563e9b8c39f9e597.jpg",
  "https://pbs.twimg.com/media/CB-eYr0WEAAP2v3.png",
  "http://41.media.tumblr.com/6d23b3ebab885721fcc9c03c2fb5cc0e/tumblr_mvlzucYivH1r8lg7to1_500.jpg",
  "https://qph.is.quoracdn.net/main-qimg-6d0fe60d3b3cce2b290240e5fab921cd?convert_to_webp=true",
  "http://40.media.tumblr.com/tumblr_lyddlh6Lvw1r8lg7to1_1280.jpg",
  "http://41.media.tumblr.com/tumblr_lyr2bl4OEO1r8lg7to1_400.jpg",
  "http://40.media.tumblr.com/tumblr_mejqknyqE51r8lg7to1_400.png",
  "http://41.media.tumblr.com/1cb9b7ac5091abe065dc03eb1f65cc9d/tumblr_ml0w26XfHj1r8lg7to1_500.png",
  "http://36.media.tumblr.com/183349f121ff466cf34ac661a2d062a5/tumblr_mkt6cuQb8Q1r8lg7to1_500.png",
  "https://img.buzzfeed.com/buzzfeed-static/static/2014-06/12/19/enhanced/webdr04/enhanced-4920-1402617543-1.jpg",
  "https://s-media-cache-ak0.pinimg.com/736x/6d/69/5e/6d695e2d0dbe960929444b4b5c59deb1.jpg"
]

function nerdLine() {
      var love = document.getElementById('love');
      //grab the love button for instagram images
      love.addEventListener('click', function(){
        //function to randomize the lineAPI
        random = Math.floor((Math.random() * 28) + 1);
        var loveLine = lineAPI[random];
        //established loveline variable to 
        document.getElementById("starter").src = loveLine;
        console.log(loveLine);
      });
}
nerdLine();

function loadReddit() {
  $.ajax({
    url: "https://www.reddit.com/r/quotes.json", 
    //ajax object for reddit url
    dataType: "json",
    //data type can be json/jsonp/xml
    success: function(response) {
      //on success, run this anonymous function
      console.log(response);
      var generate = document.getElementById('generate');
      generate.addEventListener('click', function(){
        random = Math.floor((Math.random() * 25) + 1);
        var quote = response.data.children[random].data.title;
        //establish quote querying the reddit api
        console.log(quote);
        var redditQuote = document.getElementById('quote');
        redditQuote.innerHTML = quote;
      });
    }     
  });
}
loadReddit();





//https://www.reddit.com/r/quotes.json