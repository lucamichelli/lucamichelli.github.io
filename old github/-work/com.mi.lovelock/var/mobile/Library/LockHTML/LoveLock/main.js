switch(Wallpaper){case"on":$("body").addClass("");break;case"off":$("body").addClass("hidewall"),$(".ow-widget").addClass("customwalldayhud")}switch(Notch){case"on":$(".notch-container").addClass("");break;case"off":$(".notch-container").addClass("hide")}switch(Today){case"on":$(".date-container").addClass("");break;case"off":$(".date-container").addClass("hide")}switch(Language){case"de":var goodmorning="Guten Morgen ",goodafternoon="Guten Nachmittag ",goodevening="Guten Abend ",goodnight="Gute Nacht ",currentlytext="Heute: ",intext=" in",thehigh="The high will be ",thelow="and you can expect a low of ",speedtext=" m/s ",dayText=["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],monthText=["Januar","Februar","Marz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],introdatetext="Heute ist ",withumbrella="Regenschirm nicht vergessen!";break;case"en":goodmorning="Good Morning ",goodafternoon="Good Afternoon ",goodevening="Good Evening ",goodnight="Good Night ",currentlytext="Today: ",intext=" in",thehigh="The high will be ",thelow="and you can expect a low of ",speedtext=" m/h ",monthText=["January","February","March","April","May","June","July","August","September","October","November","December"],dayText=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],introdatetext="Today is ",withumbrella="Don't forget your umbrella!"}var currentTime;switch(7<=(currentTime=(new Date).getHours())&&currentTime<19?document.body&&(document.body.background="img/day.jpg",$(".date-container").addClass("day")):document.body&&(document.body.background="img/night.jpg",$(".date-container").addClass("night"),$(".ow-widget").addClass("nightbg")),5<=(currentTime=(new Date).getHours())&&currentTime<9?$(".morning-row").addClass(""):$(".morning-row").addClass("hide"),Unit){case"f":var getunit="imperial";break;case"c":getunit="metric"}let weatherWidget={settings:{api_key:"059dcee9c15c93a942eb1f38b72876be",weather_url:"https://api.openweathermap.org/data/2.5/weather",forecast_url:"https://api.openweathermap.org/data/2.5/forecast",search_type:"city_name",city_name:"",units:getunit,icon_mapping:{"01d":"wi-day-sunny","01n":"wi-night-clear","02d":"wi-day-cloudy","02n":"wi-night-cloudy","03d":"wi-cloud","03n":"wi-cloud","04d":"wi-cloudy","04n":"wi-cloudy","09d":"wi-rain","09n":"wi-rain","10d":"wi-day-rain","10n":"wi-night-rain","11d":"wi-thunderstorm","11n":"wi-thunderstorm","13d":"wi-snow","13n":"wi-snow","50d":"wi-fog","50n":"wi-night-fog"}},constant:{dow:["SUN","MON","TUE","WED","THU","FRI","SAT"]},init:function(e){this.settings=Object.assign(this.settings,e),Promise.all([this.getWeather(),this.getForecast()]).then(e=>{let t=e[0],n=e[1].list;if(document.getElementsByClassName("ow-temp-current")[0].innerHTML=Math.round(t.main.temp)+"&deg",document.getElementsByClassName("ow-clouds")[0].innerHTML=t.clouds.all+" %",document.getElementsByClassName("ow-humidity")[0].innerHTML=t.main.humidity+" %",document.getElementsByClassName("ow-wind")[0].innerHTML=t.wind.speed+speedtext,this.settings.icon_mapping[t.weather[0].icon]){let e=this.settings.icon_mapping[t.weather[0].icon],n=document.getElementsByClassName("ow-ico-current")[0];n.classList?n.classList.add(e):n.className+=" "+e}if(this.settings.icon_mapping[t.weather[0].icon]){let e=this.settings.icon_mapping[t.weather[0].icon],n=document.getElementsByClassName("ow-ico-current-morning")[0];n.classList?n.classList.add(e):n.className+=" "+e}n=n.filter(e=>e.dt_txt.substr(0,10)!==(new Date).toJSON().slice(0,10));let i=[];for(let e of n){let t=e.dt_txt.substr(0,10);i[t]?(i[t].temp_max=e.main.temp_max>i[t].temp_max?e.main.temp_max:i[t].temp_max,i[t].temp_min=e.main.temp_min<i[t].temp_min?e.main.temp_min:i[t].temp_min,i[t].icons.push(e.weather[0].icon)):i[t]={dow:this.constant.dow[new Date(t).getDay()],temp_max:e.main.temp_max,temp_min:e.main.temp_min,icons:[e.weather[0].icon]}}let a=document.getElementsByClassName("ow-forecast-item"),o=0;for(let e in i){let t=this.settings.icon_mapping[this.getIconWithHighestOccurence(i[e].icons)],n=a[o];n.getElementsByClassName("max")[0].innerHTML=Math.round(i[e].temp_max)+"&deg",n.getElementsByClassName("min")[0].innerHTML=Math.round(i[e].temp_min)+"&deg",n.getElementsByClassName("ow-day")[0].innerHTML=i[e].dow;let s=n.getElementsByClassName("ow-ico-forecast")[0];s.classList?s.classList.add(t):s.className+=" "+t,o++}})},getForecast:function(){let e={q:this.settings.city_name,APPID:this.settings.api_key,units:this.settings.units},t="?"+Object.keys(e).map(t=>t+"="+e[t]).join("&");return this.makeRequest(this.settings.forecast_url,t)},getWeather:function(){let e={q:this.settings.city_name,APPID:this.settings.api_key,units:this.settings.units},t="?"+Object.keys(e).map(t=>t+"="+e[t]).join("&");return this.makeRequest(this.settings.weather_url,t)},makeRequest:function(e,t){return new Promise(function(n,i){let a=new XMLHttpRequest;a.open("GET",e+t,!0),a.responseType="json",a.onload=function(){a.status>=200&&a.status<400?n(a.response):i(Error(a.status))},a.onerror=(()=>i("Error occured while connecting to Weather API")),a.send(t)})},getIconWithHighestOccurence:function(e){let t=Array.prototype.slice.call(e);return t.sort((e,n)=>t.filter(t=>t===e).length-t.filter(e=>e===n).length).pop()}},widget=Object.create(weatherWidget);var tWeather;widget.init({city_name:""+City}),$.getJSON("https://api.openweathermap.org/data/2.5/weather?q="+City+"&units="+getunit+"&appid=059dcee9c15c93a942eb1f38b72876be&lang="+Language,function(e){$.each(e,function(e,t){}),console.log(e),$("#description").append(e.weather[0].description),$("#city").append(e.name+".")}),$.getJSON("https://api.openweathermap.org/data/2.5/forecast/daily?q="+City+"&units="+getunit+"&appid=059dcee9c15c93a942eb1f38b72876be&lang="+Language,function(e){$.each(e,function(e,t){}),console.log(e),$("#description-morning").append(currentlytext+e.list[0].weather[0].description+intext),$("#max").append(Math.round(e.list[0].temp.max)+"°/ "),$("#low").append(Math.round(e.list[0].temp.min)+"° "),$("#max-morning").append(thehigh+Math.round(e.list[0].temp.max)+"°"),$("#low-morning").append(thelow+Math.round(e.list[0].temp.min)+"°.")});var weatherAPI="https://api.openweathermap.org/data/2.5/forecast/daily?q="+City+"&units="+getunit+"&appid=059dcee9c15c93a942eb1f38b72876be&lang="+Language;function doineed(){weatherCode>=200&&weatherCode<=232?answer.innerHTML=""+withumbrella:weatherCode>=300&&weatherCode<=321?answer.innerHTML=""+withumbrella:weatherCode>=500&&weatherCode<=531?answer.innerHTML=""+withumbrella:weatherCode>=600&&weatherCode<=622?answer.innerHTML=""+withumbrella:weatherCode>=700&&weatherCode<=781?answer.innerHTML="":800==weatherCode?answer.innerHTML="":weatherCode>=801&&weatherCode<=804&&(answer.innerHTML="")}function getDateTime(){(new Date).getHours();4<=currentTime&&currentTime<12&&(document.getElementById("hello").innerHTML=goodmorning+Name),12<=currentTime&&currentTime<17&&(document.getElementById("hello").innerHTML=goodafternoon+Name),17<=currentTime&&currentTime<22&&(document.getElementById("hello").innerHTML=goodevening+Name),22<=currentTime&&currentTime<24&&(document.getElementById("hello").innerHTML=goodnight+Name),0<=currentTime&&currentTime<4&&(document.getElementById("hello").innerHTML=goodnight+Name)}switch(fetch(weatherAPI).then(function(e){e.ok&&e.json().then(function(e){weatherCode=e.list[0].weather[0].id,doineed()})}),window.onload=void getDateTime(),$(document).ready(function(){var e,t,n,i,a,o,s;e=new Date,t=e.getMonth(),n=e.getDay(),i=e.getDate(),a=document.getElementById("introdate"),o=document.getElementById("weekDay"),s=document.getElementById("date"),a.innerText=introdatetext,o.innerText=dayText[n],s.innerText=monthText[t]+" "+i}),Clock){case"12":var timeconvert=12,sessionconvertam="AM",sessionconvertpm="PM",convertmidnight="12";break;case"24":timeconvert="",sessionconvertam="",sessionconvertpm="",convertmidnight="0"}function showTime(){var e=new Date,t=e.getHours(),n=e.getMinutes(),i=sessionconvertam;0==t&&(t=convertmidnight),t>12&&(t-=timeconvert,i=sessionconvertpm);var a=(t=t<10?"0"+t:t)+":"+(n=n<10?"0"+n:n)+" ";i=i;document.getElementById("clock").innerText=a,document.getElementById("clock").textContent=a,document.getElementById("session").textContent=i,setTimeout(showTime,1e3)}showTime();