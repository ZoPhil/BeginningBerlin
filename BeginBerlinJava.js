 $(document).ready(function () {
   



    var content = {
                "navbar": [
                   {
                    "title": "Home",
                    "url": "home.html"
                    },
                    {
                    "title": "Dictionary",
                    "url": "dictionary.html"
                    },
                    {
                    "title": "Events",
                    "url": "events.html"
                    },
                    {
                    "title": "Tips, Tricks, and Tutorials",
                    "url": "ttt.html"
                    },
                    {
                    "title": "Map",
                    "url": "map.html"
                    },
                ],
             }

            for (var i=0; i <content.navbar.length; i++){
                console.log (content.navbar[i].title + '|' + content.navbar[i].url);
                $('#where').append('<li class="nav-item px-5"><a class="nav-link" href="' + content.navbar[i].url + '">' + content.navbar[i].title + '</a></li>');
            
            }





    });