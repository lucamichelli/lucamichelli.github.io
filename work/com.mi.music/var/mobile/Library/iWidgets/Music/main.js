var doc = document,
	statusbarDiv = doc.getElementById('statusbarDiv'),
	batteryDiv = doc.getElementById('batteryDiv'),
	remindersDiv = doc.getElementById('remindersDiv'),
	eventsDiv = doc.getElementById('eventsDiv'),
	weatherDiv = doc.getElementById('weatherDiv'),
	musicDiv = doc.getElementById('musicDiv'),
	artworkDiv = doc.getElementById('artwork');

function mainUpdate(type) {
	if (type == "statusbar") {} else if (type == "battery") {} else if (type == "reminders") {} else if (type == "events") {} else if (type == "music") {
		if (isplaying) {
			musicDiv.innerHTML = "<p style='color: #" + TextColor + "'>" + title + "<br>" + artist + " - " + album + "</p>";
		} else {
			musicDiv.innerHTML = "";
		}
	} else if (type == "weather") {} else if (type == "signinginfo") {}
}