var currentTime = new Date().getHours();
if (1 <= currentTime && currentTime < 10) {
$.getJSON('https://fahrplan.search.ch/api/route.json?from='+ Home +'&to=' + Work + '&num=1&show_delays=1&show_trackchanges=1', function(trainData) {
      $.each(trainData, function(j, b) {});
      console.log(trainData);
      $("#from").append(trainData.connections[0].from);
      $("#to").append(totext + trainData.connections[0].to);
      $("#number").append(trainData.connections[0].legs[0].number);
      $("#terminal").append(directiontext + trainData.connections[0].legs[0].terminal);
      $("#platform").append(platformtext + trainData.connections[0].legs[0].track);
      $("#departure").append(departuretext + trainData.connections[0].departure);

      var ifdelay = trainData.connections[0].dep_delay;
      if (ifdelay == '+0') {
      	$("#dep_delay").append('');
      }
       if (ifdelay == '+1' & ifdelay == '+2'  & ifdelay == '+3' & ifdelay == '+4' & ifdelay == '+5' & ifdelay == '+6' & ifdelay == '+7' & ifdelay == '+8' & ifdelay == '+9' & ifdelay == '+10' & ifdelay == '+11' & ifdelay == '+12' & ifdelay == '+13' & ifdelay == '+14' & ifdelay == '+15' ) {
      	$("#dep_delay").append(trainData.connections[0].dep_delay);
      }
 });
}
if (10 <= currentTime && currentTime < 24) {
$.getJSON('https://fahrplan.search.ch/api/route.json?from='+ Work +'&to=' + Home + '&num=1&show_delays=1&show_trackchanges=1', function(trainData) {
      $.each(trainData, function(j, b) {});
      console.log(trainData);         
      $("#from").append(trainData.connections[0].from);
      $("#to").append(totext + trainData.connections[0].to);
      $("#number").append(trainData.connections[0].legs[0].number);
      $("#terminal").append(directiontext + trainData.connections[0].legs[0].terminal);
      $("#platform").append(platformtext + trainData.connections[0].legs[0].track);
      $("#departure").append(departuretext + trainData.connections[0].departure);
      
        var ifdelay = trainData.connections[0].dep_delay;
      if (ifdelay == '+0') {
      	$("#dep_delay").append('');
      }
       if (ifdelay == '+1' & ifdelay == '+2'  & ifdelay == '+3' & ifdelay == '+4' & ifdelay == '+5' & ifdelay == '+6' & ifdelay == '+7' & ifdelay == '+8' & ifdelay == '+9' & ifdelay == '+10' & ifdelay == '+11' & ifdelay == '+12' & ifdelay == '+13' & ifdelay == '+14' & ifdelay == '+15' ) {
      	$("#dep_delay").append(trainData.connections[0].dep_delay);
      }
      
    });
}
switch (Hide) {
	case "show":
        $('.train-wrapper').addClass('');
	break;
	case "hide":
		if (Time <= currentTime && currentTime < 24) {
			$('.train-wrapper').addClass('notrain');
		}
	break;
}
switch (Language) {
	case "de":
		var totext = '<p class="inline">nach </p>';
		var directiontext = '<p class="inline">Richtung </p>';
		var platformtext = '<p class="inline">Gleis: </p>';
		var departuretext = '<p class="inline">, Abfahrt: </p>';

	break;
	case "en":
		var totext = '<p class="inline">to </p>';
		var directiontext = '<p class="inline">direction </p>';
		var platformtext = '<p class="inline">platform: </p>';
		var departuretext = '<p class="inline">, departure: </p>';
	break;
}