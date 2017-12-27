$(document).ready(function(){
  /*var quotes = ["THE MAN WHO PASSES THE SENTENCE SHOULD SWING THE SWORD.","THE THINGS I DO FOR LOVE.", "THE NEXT TIME YOU RAISE A HAND TO ME WILL BE THE LAST TIME YOU HAVE HANDS!", "IT'S THE FAMILY NAME THAT LIVES ON. IT'S ALL THAT LIVES ON.", "WHEN YOU PLAY THE GAME OF THRONES, YOU WIN OR YOU DIE.", "I LEARNED HOW TO DIE A LONG TIME AGO", "WHEN DEAD MEN AND WORSE COME HUNTING … YOU THINK IT MATTERS WHO SITS ON THE IRON THRONE?", "THE MAD KING DID AS HE LIKED. HAS YOUR UNCLE JAIME EVER TOLD YOU WHAT HAPPENED TO HIM", "TURN US AWAY, AND WE WILL BURN YOU FIRST.", "A GIRL GIVES A MAN HIS OWN NAME?", "YOUR JOY WILL TURN TO ASHES IN YOUR MOUTH.", "WE'LL COME OUT BEHIND THEM AND F--- THEM IN THEIR ARSES", "NEITHER GODS NOR MEN WILL EVER COMPEL ME TO LET YOU TURN CASTERLY ROCK INTO YOUR WHOREHOUSE.", "I PRAYED TO THE GODS 'TAKE HIM AWAY, MAKE HIM DIE.'", "A DRAGON IS NOT A SLAVE.", "BURN THEM ALL!", "'CHAOS ISN'T A PIT. CHAOS IS A LADDER", "YOU'LL BE FUCKING YOUR OWN BRIDE WITH A WOODEN COCK.", "IF YOU EVER CALL ME SISTER AGAIN, I'LL HAVE YOU STRANGLED IN YOUR SLEEP.", "THE LANNISTERS SEND THEIR REGARDS", "'I'M GONNA HAVE TO EAT EVERY FUCKING CHICKEN IN THIS ROOM.", "YOU KNOW NOTHING, JON SNOW.", "YOU'RE NO SON OF MINE.", "THIS IS NOT THE DAY I DIE.", "'I WISH I WAS THE MONSTER YOU THINK I AM.", "THE GOOD LORDS ARE DEAD, AND THE REST ARE MONSTERS.", "A DRUNKEN DWARF WILL NEVER BE THE SAVIOR OF THE SEVEN KINGDOMS.", "OLLY, BRING ME MY SWORD.", "WE GO FORWARD. ONLY FORWARD.", "I AM THE GIFT", "'I'M NOT GOING TO STOP THE WHEEL. I'M GOING TO BREAK THE WHEEL." ,"E ALWAYS COMES BACK!", "SHAME! SHAME! SHAME!", "GO ON. DO YOUR DUTY.", "FOR THE WATCH."];
  var authors = ["Ned Stark","Jaime Lannister", "Khaleesi", "Tywin Lannister", "Cersei Lannister", "Lord Varys", "Jeor Mormont", "Tyrion Lannister", "Queen Of Dragons", "Jaqen H'ghar", "Tyrion Lannister", "Tyrion Lannister", "Tywin Lannister", "Lady Stark", "Queen Of Dragons", "Mad King" , "Lord Baelish", "Tyrion At His Best", "Cersei Lannister", "Roose Bolton", "The Hound", "Ygritte", "Tywin Lannister", "Oberyn on the day he died", "Tyrion Lannister at his trial", "Brienne of Tarth", "Tyrion Lannister", "Jon Snow", "Stannis Baratheon", "Tyrion Lannister","Khaleesi Of the Great Grass Sea", "Samwell Tarly", "Septa Unella", "Stannis Baratheon", "Alliser Thorne"];*/
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
    $(".author").html("~ " + randomAuthor);
  });
  var colors = ["#73A857",'#16a085', '#27ae60', '#f39c12', '#e74c3c', '#9b59b6', '#2c3e50', '#FB6964', '#342224', "#472E32", "#77B1A9"];
  var randomIndex = Math.floor(Math.random() * 11);
  $("body").css("background-color",colors[randomIndex]);
  $(".quote").css("color",colors[randomIndex]);
  $(".author").css("color",colors[randomIndex]);
  $("#new-quote").css("color", colors[randomIndex]);
  $("#twitter-logo").css("color",colors[randomIndex]);
  console.log(colors[randomIndex]);
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
