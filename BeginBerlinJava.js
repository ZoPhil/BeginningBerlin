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


                "home.html": {
                    "blocks": [
                    {
                        "type": "jumbotron",
                        "title": "Welcome to Berlin! This site to meant to help ease your transition into German culture and the CIEE program and building.",
                    }
                    ]
                },
                "dictionary.html": {
                    "blocks": [
                    {
                         "type": "jumbotron",
                         "title": "Dictionary: Explore some commonly used words, phrases, and other language that might be useful to know in different common situations.",
                    }
                    ]
                },
                "events.html": {
                    "blocks": [
                    {
                       "type": "jumbotron",
                       "title": "Events: Berlin is such a multicultural city that in terms of activities and events, there's something for everyone.",
                    }
                    ]
                },
                "ttt.html": {
                    "blocks": [
                    {
                        "type": "jumbotron",
                        "title": "Tips, Tricks, and Tutorials: On this page you can get advice about the city and building you will be calling home for the next few months.",
                    }
                    ]
                },
                "map.html": {
                    "blocks": [
                    {
                        "type": "jumbotron",
                        "title": "Map: Explore this interactive map to help you discover new places to explore and find the places you may need to regularly visit.",
                    }
                    ]
                },
             }

            for (var i=0; i <content.navbar.length; i++){
                console.log (content.navbar[i].title + '|' + content.navbar[i].url);
                $('#where').append('<li class="nav-item colorfulnav px-5"><a class="nav-link" href="' + content.navbar[i].url + '">' + content.navbar[i].title + '</a></li>');

            }


            console.log(window.location);

            var pagefile = window.location.pathname.split("/").pop();
            console.log(pagefile);

            //jumbotron();
            var blocks = content[pagefile].blocks;
            console.log(blocks);
            for(var i=0; i<blocks.length; i++){
            $('#jumbo').append(' <h1> Beginning in Berlin </h1> <h3>' + content.blocks[i].title + '</h3>');
            }



    });
