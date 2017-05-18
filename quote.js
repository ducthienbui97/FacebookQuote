$("#globalContainer").hide();
$.getJSON('https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en', function(data) {
	console.log(data.quoteText);
	$("body").append('<div style="width: 50%;  margin:0 auto;"><blockquote id="quote"><p>'
						+data.quoteText+'</p><figcaption>'
						+data.quoteAuthor+'</figcaption></blockquote></div>');
    $("blockquote").click(function(){
    		$("#globalContainer").show(); 
   			})
	});
