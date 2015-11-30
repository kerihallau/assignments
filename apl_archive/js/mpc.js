// JavaScript Document
//Keri Hallau, for the MESSENGER Mosaic Postcards feature on the EPO website
var currentView = "view60";
        var planet, planetImg;
        document.addEventListener("DOMContentLoaded", function() {
			$(".featureBox").colorbox();
            planet = document.querySelector("#planet");
            planetImg = planet.querySelector("img");

            var gridItems = document.querySelectorAll(".grid-item");
            for(var i = 0; i < gridItems.length; i++){
                gridItems[i].addEventListener("mouseover", function(){
                    this.querySelector(".hoverContent").style.display = "block";
                });
                gridItems[i].addEventListener("mouseout", function(){
                    this.querySelector(".hoverContent").style.display = "none";
                });
            }
        });

   function changePlanetImage(e, newView){
	   e.preventDefault();
            if(newView == "view60")
            {
                //set #planet background image to 60 deg E
                planetImg.src = "images/mosaic_60.png";
                document.querySelector('view60').style.display = "block";
                document.querySelector('view150').style.display = "none";
				document.querySelector('view240').style.display = "none";
				document.querySelector('view330').style.display = "none";
                currentView = "view60";
            } else if(newView == "view150")
            {
                //set #planet img background image to 150 deg E
                planetImg.src = "images/mosaic_150.png";
                document.querySelector('view150').style.display = "block";
				document.querySelector('view60').style.display = "none";
				document.querySelector('view240').style.display = "none";
				document.querySelector('view330').style.display = "none";
                currentView = "view150";
			 } else if(newView == "view240")
            {
                //set #planet img background image to 240 deg E
                planetImg.src = "images/mosaic_240.png";
                document.querySelector('view240').style.display = "block";
				document.querySelector('view60').style.display = "none";
				document.querySelector('view150').style.display = "none";
				document.querySelector('view330').style.display = "none";
                currentView = "view240";
			 } else if(newView == "view330")
            {
                //set #planet img background image to 330 deg E
                planetImg.src = "images/mosaic_330.png";
                document.querySelector('view330').style.display = "block";
				document.querySelector('view60').style.display = "none";
				document.querySelector('view240').style.display = "none";
                document.querySelector('view150').style.display = "none";
                currentView = "view330";
            }	
        }

