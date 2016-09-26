(function(){
$.ajax({
         url:'https://api.spotify.com/v1/albums/1gMxiQQSg5zeu4htBosASY',
         dataType: 'json',
         success: function(result){ 
           var album = result.external_urls.spotify;
             var img = result.images[0].url;
             $('#Album').append('<a href="'+album+'"><img src="'+img+'" alt="Mountain View" style="width:300px;height:300px;"></a>');
           for (var i = 0; i < result.tracks.items.length; i++){
             var songname = result.tracks.items[i].name;
             var number = result.tracks.items[i].track_number;
             var link = result.tracks.items[i].external_urls.spotify;
             $('#Album').append('<li class = "intro" >' + number +'. '+ '<a href="'+link+'">'+songname + '</a></li>');
           }
         }
       });
}).call(this);