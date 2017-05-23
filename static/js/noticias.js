//$('#notiDiv').hide(); 
var limit = 0;



$.get("https://www.clarin.com/rss/lo-ultimo/", function(data) {
    var $xml = $(data);
    $xml.find("item").each(function(i) {
        var $this = $(this),
            item = {
                title: $this.find("title").text(),
                description: $this.find("description").text(),
                pubDate: $this.find("pubDate").text(),
            }
        
        //var month = item.pubDate.getUTCMonth() + 1; //months from 1-12
        //var day = item.pubDate.getUTCDate();


        $("#itemNot").append('<h3 class="smaller">' + item.title + '</h3>');
        $("#itemNot").append('<p class="date">' + item.pubDate + '</p>');
        $("#itemNot").append('<p>' + item.description + '</p>');
        $("#itemNot").append('<p>_______________________</p>');
        return i < 3

    });
});