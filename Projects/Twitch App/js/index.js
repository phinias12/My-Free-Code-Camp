$(document).ready(function(){
	
	// Variables
	var clickedTab = $(".tabs > .active");
	var tabWrapper = $(".tab__content");
	var activeTab = tabWrapper.find(".active");
	var activeTabHeight = activeTab.outerHeight();
	
	// Show tab on page load
	activeTab.show();
	
	// Set height of wrapper on page load
	tabWrapper.height(activeTabHeight);
	
	$(".tabs > li").on("click", function() {
		
		// Remove class from active tab
		$(".tabs > li").removeClass("active");
		
		// Add class active to clicked tab
		$(this).addClass("active");
		
		// Update clickedTab variable
		clickedTab = $(".tabs .active");
		
		// fade out active tab
		activeTab.fadeOut(250, function() {
			
			// Remove active class all tabs
			$(".tab__content > li").removeClass("active");
			
			// Get index of clicked tab
			var clickedTabIndex = clickedTab.index();

			// Add class active to corresponding tab
			$(".tab__content > li").eq(clickedTabIndex).addClass("active");
			
			// update new active tab
			activeTab = $(".tab__content > .active");
			
			// Update variable
			activeTabHeight = activeTab.outerHeight();
			
			// Animate height of wrapper to new tab height
			tabWrapper.stop().delay(50).animate({
				height: activeTabHeight
			}, 500, function() {
				
				// Fade in active tab
				activeTab.delay(50).fadeIn(250);
				
			});
		});
	});
	
	// Variables
	var colorButton = $(".colors li");
	
	colorButton.on("click", function(){
		
		// Remove class from currently active button
		$(".colors > li").removeClass("active-color");
		
		// Add class active to clicked button
		$(this).addClass("active-color");
		
		// Get background color of clicked
		var newColor = $(this).attr("data-color");
		
		// Change background of everything with class .bg-color
		$(".bg-color").css("background-color", newColor);
		
		// Change color of everything with class .text-color
		$(".text-color").css("color", newColor);
	});
});

$(document).ready(function(){
	var accounts = ['freecodecamp', 'storbeck', 'terakilobyte', 'habathcx', 'RobotCaleb', 'thomasballinger', 'noobs2ninjas', 'beohoff', 'MedryBW', 'brunofin', 'comster404', 'quill18','carbonentertainment','imaqtpie'];
	var clientID = '7acmrljq8w9dm08sm0jsfmaawdsd8n3';
	var cb = '?client_id=' + clientID;
	var url = "https://api.twitch.tv/kraken/";

	accounts.forEach(function(streamer){
		function makeURL(type, name){
			return url + type + "/" + name + cb;
		};
		$.getJSON(makeURL("streams", streamer), function(data){
			var game, status;
			if (data.stream === null) {
				game = "Offline";
				status = "offline";
			} else if(data.stream === undefined) {
				game = "Account closed";
				status = "offline";
			} else {
				game = data.stream.game;
				status = "online";
			}
			$.getJSON(makeURL("channels", streamer), function(data){
				var logo = data.logo != null ? data.logo : "https://cdn-images-1.medium.com/fit/c/50/50/1*JpEvZD1Wfo5GvUzdTWsJzQ.png",
						name = data.display_name != null ? data.display_name : streamer,
						description = status === "online" ? ": " + data.status : "";
				var html = '<div class = "row channel ' + status + '"><div class="col-xs-2 col-sm-3" id="icon"><img style="width: 50px; height: 50px;" src="' + logo + '" class="logo"></div><div class="col-xs-10 col-sm-8 name" id="name"><a href="' + data.url + '" target="_blank">' + name +'</a></div><div class="col-xs-10 col-sm-8 game" id = "streaming">' + game + '<span class="hidden-xs">' + description + '</span></div></div>';
				$(".all-streams").append(html);
				if (status === "online") {
						$(".online-streams").append(html);
				} else if (status === "offline") {
						$(".offline-streams").append(html);
				}
			});
		});
	});
});