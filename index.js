$(document).ready(function(){
  var randomQuote = " ", randomAuthor = " ";
  getQuote();
  $("#new-quote").on("click", function(){
    getQuote();
  });
  $("#share-twitter").on("click", function(){
  window.open("https://twitter.com/intent/tweet?text=" + "From Varshit's Random Quote Machine: \"" + randomQuote + "\" ~ " + randomAuthor + "&hashtags=inspiration");
  });
  function getQuote() {
   /* randomNumber = Math.floor(Math.random() * quotes.length);
  randomQuote = quotes[randomNumber];
  randomAuthor = authors[randomNumber]; */
    var url="https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
  $.getJSON(url, function(data) {
    randomQuote = data.quoteText;
    randomAuthor = data.quoteAuthor;
    $(".quote").html(randomQuote);
    if(!(randomAuthor.match(/[A-Z]/i)))
        randomAuthor = "UNKNOWN";
    $(".author").html("~ " + randomAuthor);
  });
  var colors = ["#73A857",'#16a085', '#27ae60', '#f39c12', '#e74c3c', '#9b59b6', '#2c3e50', '#FB6964', '#342224', "#472E32", "#77B1A9"];
  var randomIndex = Math.floor(Math.random() * 11);
  $("body").css("background-color",colors[randomIndex]);
  $(".quote").css("color",colors[randomIndex]);
  $(".author").css("color",colors[randomIndex]);
  $("#new-quote").css("color", colors[randomIndex]);
  $("#twitter-logo").css("color",colors[randomIndex]);
  //console.log(colors[randomIndex]);
    //var elem = document.getElementById("box");
//elem.style.height = "0px";
    //var QuoteLength = 400;
    //QuoteLength = randomQuote.length;
    //console.log(QuoteLength);
    //var lines = QuoteLength/19 + 1;
    //var pixels = lines * 50;
    //var divHeight = $(".quote-box").height();
        //$('.quote-box').css('height', pixels +'px');
  }
});
