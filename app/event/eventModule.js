(function () {
    angular.module('eventModule', []).factory('MainTitle', [function () {
        return {
            title: "My Favorite Albums"
        };
    }]).filter('searchAlbums', function () {
        return function (items, search) {
            var filtered = [];
            if (!search) { return items; }
            angular.forEach(items, function (item) {
                if (angular.lowercase(item.title).indexOf(angular.lowercase(search)) != -1) {
                    filtered.push(item);
                }
                else if (angular.lowercase(item.artist).indexOf(angular.lowercase(search)) != -1) {
                    filtered.push(item);
                }
            });
            return filtered;
        };
    }).config([function () {
        console.log("Album Module:: config");
    }]).run([function () {
        console.log("Album Module::running");
    }]).controller('AlbumCtrl', ['$scope', 'MainTitle', function ($scope, mainTitle) {
        this.title = mainTitle.title;
        console.log(this.title);

        this.menu = [
			{
			    name: "Albums",
			    href: "index.html"
			},
			{
			    name: "Reasoning",
			    href: "reasoning.html"
			},
			{
			    name: "Contact",
			    href: "contact.html"
			}
        ]
        this.index = 0;
        this.albumIndex = 0;

        this.setIndex = function (val) {
            this.index = val;
            console.log("called")
        }

        this.getIndex = function () {
            return (this.index);
        }

        this.setAlbumIndex = function (val) {
            this.albumIndex = val;
        }

        this.getAlbumIndex = function () {
            return (this.AlbumIndex);
        }

        this.albums = [
		{
		    title: "Weezer",
		    artist: "Weezer",
		    itemTitle: mainTitle.title,
		    description: "Weezer, a nerdy four-piece rock outfit, had been performing in the local Los Angeles area for 2 and a half years before the release of their debut album. Surprisingly, the majority of their songs which would go on to become hits found little to no success with the crowds. Luckily for the group, Geffen Records caught on to their potential and signed them to a one record deal. Produced by Ric Ocasek of the Cars, The Blue Album defined what genres such as alternative rock and power pop meant in the post grunge era. The lyrics on each song are genuine, but were largely ignored by fans. Fans chose instead to focus on Rivers Cuomo's guitar riffs and Patrick Wilson's energetic drum style. Weezer's sound found a niche because of its background vocals; three of the four members of the band (Rivers Cuomo, Brian Bell, and Matt Sharp) sang on the record, with Sharp's falsetto standing out in almost every song. The record has sold over 3.3 million copies, and still stands as a staple of 90's rock.",
		    imgName: "Weezer - Weezer.jpg",
		},
	        {
	            title: "...Like Clockwork",
	            artist: "Queens of the Stone Age",
	            itemTitle: mainTitle.title,
	            description: "filler",
	            imgName: "...like clockwork.jpg",
	        },
            {
                title: "Whatever People Say I Am, That's What I'm Not",
                artist: "Arctic Monkeys",
                itemTitle: mainTitle.title,
                description: "filler",
                imgName: "Arctic Monkeys - Whatever People Say I Am, That's What I'm Not.png",
            },
            {
                title: "Run the Jewels 2",
                artist: "Run the Jewels",
                itemTitle: mainTitle.title,
                description: "filler",
                imgName: "rtj2.jpg",
            },
            {
                title: "Bejamin Booker",
                artist: "Benjamin Booker",
                itemTitle: mainTitle.title,
                description: "filler",
                imgName: "Benjamin Booker - Benjamin Booker.jpg",
            },
            {
                title: "Acid Rap",
                artist: "Chance the Rapper",
                itemTitle: mainTitle.title,
                description: "filler",
                imgName: "chance the rapper - acid rap alt.gif",
            },
            {
                title: "Deja Vu",
                artist: "Crosy, Stills, Nash & Young",
                itemTitle: mainTitle.title,
                description: "filler",
                imgName: "CSNY - Deja Vu.jpg",
            },
            {
                title: "Vessel",
                artist: "Twenty One Pilots",
                itemTitle: mainTitle.title,
                description: "filler",
                imgName: "vessel.jpg",
            },
            {
                title: "Aim and Ignite",
                artist: "fun.",
                itemTitle: mainTitle.title,
                description: "filler",
                imgName: "fun. - Aim and Ignite.jpg",
            },
            {
                title: "The College Dropout",
                artist: "Kanye West",
                itemTitle: mainTitle.title,
                description: "filler",
                imgName: "Kanye West - The College Dropout.jpg",
            },
            {
                title: "At Folsom Prison",
                artist: "Johnny Cash",
                itemTitle: mainTitle.title,
                description: "filler",
                imgName: "Johnny Cash - At Folsom Prison.jpg",
            },
            {
                title: "Yoshimi Battles the Pink Robots",
                artist: "The Flaming Lips",
                itemTitle: mainTitle.title,
                description: "filler",
                imgName: "The Flaming Lips - Yoshimi Battles The Pink Robots.jpeg",
            },
            {
                title: "What's Going On",
                artist: "Marvin Gaye",
                itemTitle: mainTitle.title,
                description: "filler",
                imgName: "marvin gaye - what's going on.jpg",
            },
            {
                title: "Incesticide",
                artist: "Nirvana",
                itemTitle: mainTitle.title,
                description: "filler",
                imgName: "incesticide.jpg",
            },
            {
                title: "Rust Never Sleeps",
                artist: "Neil Young",
                itemTitle: mainTitle.title,
                description: "filler",
                imgName: "rust never sleeps.jpg",
            },
            {
                title: "Either/Or",
                artist: "Elliot Smith",
                itemTitle: mainTitle.title,
                description: "filler",
                imgName: "Elliot  Smith - EitherOr.jpg",
            },
            {
                title: "I Love You, Honeybear",
                artist: "Father John Misty",
                itemTitle: mainTitle.title,
                description: "filler",
                imgName: "FJM - I Love You, Honeybear.jpg",
            },
            {
                title: "good kid, m.A.A.d city",
                artist: "Kendrick Lamar",
                itemTitle: mainTitle.title,
                description: "filler",
                imgName: "Kendrick - gkMc.jpg",
            },
            {
                title: "The White Stripes",
                artist: "The White Stripes",
                itemTitle: mainTitle.title,
                description: "filler",
                imgName: "white stripes.jpg",
            },
            {
                title: "Les Miserables: The Dream Cast in Concert",
                artist: "Les Miserables 10th Anniversary Cast",
                itemTitle: mainTitle.title,
                description: "filler",
                imgName: "Les Mis 10th.jpg",
            },
            {
                title: "Everybody Knows This is Nowhere",
                artist: "Neil Young with Crazy Horse",
                itemTitle: mainTitle.title,
                description: "filler",
                imgName: "neil young - everybody knows.jpg",
            },
            {
                title: "To Pimp a Butterfly",
                artist: "Kendrick Lamar",
                itemTitle: mainTitle.title,
                description: "filler",
                imgName: "Kendrick - to pimp a butterfly.jpg",
            },
            {
                title: "Songs for the Deaf",
                artist: "Queens of the Stone Age",
                itemTitle: mainTitle.title,
                description: "filler",
                imgName: "songs for the deaf.jpg",
            },
            {
                title: "MTV Unplugged",
                artist: "Alice in Chains",
                itemTitle: mainTitle.title,
                description: "filler",
                imgName: "Alice in Chains - MTV Unplugged.jpg",
            },
            {
                title: "Book of Mormon",
                artist: "The Original Broadway Cast",
                itemTitle: mainTitle.title,
                description: "filler",
                imgName: "The Book of Mormon.jpg",
            },
            {
                title: "Brothers",
                artist: "The Black Keys",
                itemTitle: mainTitle.title,
                description: "filler",
                imgName: "The Black Keys - Brothers.jpeg",
            },
            {
                title: "White Blood Cells",
                artist: "The White Stripes",
                itemTitle: mainTitle.title,
                description: "filler",
                imgName: "white blood cells.jpg",
            },
            {
                title: "The Complete Recordings",
                artist: "Robert Johnson",
                itemTitle: mainTitle.title,
                description: "filler",
                imgName: "the complete recordings.jpg",
            },
            {
                title: "De Stijl",
                artist: "The White Stripes",
                itemTitle: mainTitle.title,
                description: "filler",
                imgName: "de stijl.jpg",
            },
        ]
    }]).controller('AlbumItemCtrl', ['$scope', 'MainTitle', function ($scope, mainTitle) {
    }]).controller('AlbumTabCtrl', ['$scope', function ($scope) {
        this.tab = 0;
        console.log("yes")
        this.setTab = function (val) {
            this.tab = val;
        }
        this.getTab = function (val) {
            return (this.tab);
        }
    }])
})();