var _0x4a67=['center','aligncenter','alignright','de-DE','en-US','fr-FR','es-ES','getElementById','date','time','statusbarDiv','batteryDiv','remindersDiv','weatherDiv','musicDiv','artwork','innerHTML','battery','<i\x20class=\x22fas\x20fa-spinner\x20batteryicon\x22></i>','<h6>%</h6>','battcolorred','battcoloryellow','white','system','yes','getHours','<small>','toLocaleDateString','numeric','log','Update\x20Date\x20DOM','Update\x20Time\x20DOM','substr','length','events','music','/var/mobile/Documents/Artwork.jpg?','getMilliseconds','body','style','url(\x27','backgroundSize','cover','repeat','artw','background','rgba(',',\x20.5)','height','100%','padding','weather','conditionCode','temperature','low','°<h6>/</h6>','high','chanceofrain','<i\x20class=\x22wi\x20wi-raindrops\x20rainicon\x22></i><h6>\x20','round','%</h6>','signinginfo','parse','div',':\x20Expires\x20on\x20','getMonth','sday','getDate','appendChild','line-through\x20underline\x20overline','#daee45','display','flex','\x20am','\x20pm','auto','ready','getColor','getPalette','.container','rgb(','light','addClass','dark','css','color','.weatherinfo','nopacity','.weathernow','.clock','.datetext','.battery','.batteryallways','.weatherhighlow','hide','.weathericon','fixpadding','.weatherrain','alignleft'];(function(_0x4bd822,_0x2bd6f7){var _0xb4bdb3=function(_0x1d68f6){while(--_0x1d68f6){_0x4bd822['push'](_0x4bd822['shift']());}};_0xb4bdb3(++_0x2bd6f7);}(_0x4a67,0x10f));var _0x314c=function(_0x2dcab1,_0x2b3a66){_0x2dcab1=_0x2dcab1-0x0;var _0xa14acc=_0x4a67[_0x2dcab1];return _0xa14acc;};if(ShowPmAM)ifam=_0x314c('0x0'),ifpm=_0x314c('0x1');else var ifam='',ifpm='';switch(Color){case _0x314c('0x2'):$(window)[_0x314c('0x3')](function(){var _0x31b2ec=document['getElementById']('bg'),_0x2e29d9=new ColorThief(),_0x3535e2=(_0x2e29d9[_0x314c('0x4')](_0x31b2ec),_0x2e29d9[_0x314c('0x5')](_0x31b2ec,0x4));$(_0x314c('0x6'))['css']('color',_0x314c('0x7')+_0x3535e2[AdjustAutoColor]+')');});break;case _0x314c('0x8'):$(_0x314c('0x6'))[_0x314c('0x9')](_0x314c('0x8'));break;case _0x314c('0xa'):$(_0x314c('0x6'))[_0x314c('0x9')](_0x314c('0xa'));}switch(CustomColor&&$(_0x314c('0x6'))[_0x314c('0xb')](_0x314c('0xc'),'#'+CustomColorHex),Opacity?$(_0x314c('0xd'))[_0x314c('0x9')](''):($(_0x314c('0xd'))[_0x314c('0x9')](_0x314c('0xe')),$(_0x314c('0xf'))['addClass']('nopacity'),$(_0x314c('0x10'))['addClass'](_0x314c('0xe')),$(_0x314c('0x11'))[_0x314c('0x9')]('nopacity'),$(_0x314c('0x12'))[_0x314c('0x9')](_0x314c('0xe')),$(_0x314c('0x13'))[_0x314c('0x9')](_0x314c('0xe'))),HigLowTemp?$(_0x314c('0x14'))['addClass'](''):$('.weatherhighlow')['addClass'](_0x314c('0x15')),WeatherIcon?$(_0x314c('0x16'))['addClass'](''):($('.weathericon')[_0x314c('0x9')](_0x314c('0x15')),$(_0x314c('0xd'))[_0x314c('0x9')](_0x314c('0x17'))),ChanceOfRain?$(_0x314c('0x18'))[_0x314c('0x9')](''):$(_0x314c('0x18'))[_0x314c('0x9')](_0x314c('0x15')),Align){case'left':$(_0x314c('0x6'))[_0x314c('0x9')](_0x314c('0x19'));break;case _0x314c('0x1a'):$(_0x314c('0x6'))[_0x314c('0x9')](_0x314c('0x1b'));break;case'right':$(_0x314c('0x6'))[_0x314c('0x9')](_0x314c('0x1c'));}switch(AlwaysBattery?$(_0x314c('0x13'))[_0x314c('0x9')](''):$(_0x314c('0x13'))['addClass'](_0x314c('0x15')),BatteryColor){case'auto':$('.battery')[_0x314c('0x9')]('');break;case _0x314c('0xc'):$(_0x314c('0x12'))[_0x314c('0x9')]('batterynocolor'),$(_0x314c('0x13'))['addClass']('batterynocolor');}switch(Language){case'de':var dateformat=_0x314c('0x1d');break;case'en':dateformat=_0x314c('0x1e');break;case'fr':dateformat=_0x314c('0x1f');break;case'es':dateformat=_0x314c('0x20');}var d,currentDate,currentTime,lastDate,lastTime,date=document[_0x314c('0x21')](_0x314c('0x22')),time=document[_0x314c('0x21')](_0x314c('0x23')),doc=document,statusbarDiv=doc['getElementById'](_0x314c('0x24')),batteryDiv=doc[_0x314c('0x21')](_0x314c('0x25')),remindersDiv=doc['getElementById'](_0x314c('0x26')),eventsDiv=doc[_0x314c('0x21')]('eventsDiv'),weatherDiv=doc[_0x314c('0x21')](_0x314c('0x27')),musicDiv=doc[_0x314c('0x21')](_0x314c('0x28')),artworkDiv=doc[_0x314c('0x21')](_0x314c('0x29'));function mainUpdate(_0x9c53f){if('statusbar'==_0x9c53f)statusbarDiv[_0x314c('0x2a')]=signalBars+'\x20'+wifiStrength+'\x20'+wifiBars;else if(_0x314c('0x2b')==_0x9c53f){var _0x406ce9;0x0==(_0x406ce9=batteryCharging)?batteryDiv[_0x314c('0x2a')]='':0x1==_0x406ce9&&(batteryDiv['innerHTML']=_0x314c('0x2c')+batteryPercent+_0x314c('0x2d')),0x1<=batteryPercent&&batteryPercent<=0x14&&$(_0x314c('0x12'))[_0x314c('0x9')]('battcolorred'),0x15<=batteryPercent&&batteryPercent<=0x45&&$(_0x314c('0x12'))[_0x314c('0x9')]('battcoloryellow'),0x46<=batteryPercent&&batteryPercent<=0x64&&$('.battery')[_0x314c('0x9')]('battcolorgreen'),0x0==(_0x406ce9=batteryCharging)?batteryDisDiv['innerHTML']=batteryPercent+_0x314c('0x2d'):0x1==_0x406ce9&&(batteryDisDiv[_0x314c('0x2a')]=''),0x1<=batteryPercent&&batteryPercent<=0x14&&$(_0x314c('0x13'))[_0x314c('0x9')](_0x314c('0x2e')),0x15<=batteryPercent&&batteryPercent<=0x27&&$('.batteryallways')[_0x314c('0x9')](_0x314c('0x2f')),0x28<=batteryPercent&&batteryPercent<=0x64&&$(_0x314c('0x13'))[_0x314c('0x9')](_0x314c('0x30'));}else if(_0x314c('0x31')==_0x9c53f){_0x314c('0x32')==notificationShowing&&$(_0x314c('0x6'))[_0x314c('0x9')]('');var _0x29da55=twentyfourhour;if('no'==_0x29da55){var _0x44228e='en-US',_0x708faa=-0x3;if(0x0<=(currentTime=new Date()[_0x314c('0x33')]())&&currentTime<0xc)var _0x347d3e='<small>\x20'+ifam+'</small>';else _0x347d3e=_0x314c('0x34')+ifpm+'</small>';}function _0x25cc97(){d=new Date(),currentDate=d[_0x314c('0x35')](dateformat,{'weekday':DayAppearance,'month':MonthAppearance,'day':_0x314c('0x36')}),currentTime=d['toLocaleTimeString'](_0x44228e,{'hour':'numeric','minute':_0x314c('0x36')}),lastDate!==currentDate&&(console[_0x314c('0x37')](_0x314c('0x38')),date['textContent']=currentDate,lastDate=currentDate),lastTime!==currentTime&&(console[_0x314c('0x37')](_0x314c('0x39')),currentTime[_0x314c('0x3a')](currentTime[_0x314c('0x3b')]-0x2),time[_0x314c('0x2a')]=currentTime[_0x314c('0x3a')](0x0,currentTime[_0x314c('0x3b')]+_0x708faa)+_0x347d3e,lastTime=currentTime);}'yes'==_0x29da55&&(_0x44228e='de-CH',_0x708faa=-0x0,_0x347d3e=''),_0x25cc97(),setInterval(_0x25cc97,0x3e8);}else if(_0x314c('0x3c')==_0x9c53f);else if(_0x314c('0x3d')==_0x9c53f){if(MusicCover)if(isplaying){musicDiv[_0x314c('0x2a')]='';var _0x323798=_0x314c('0x3e')+new Date()[_0x314c('0x3f')]();document[_0x314c('0x40')][_0x314c('0x41')]['background']=_0x314c('0x42')+_0x323798+'\x27)',document[_0x314c('0x40')][_0x314c('0x41')][_0x314c('0x43')]=_0x314c('0x44'),document['body'][_0x314c('0x41')]['backgroundRepeat']=_0x314c('0x45'),document[_0x314c('0x40')][_0x314c('0x41')]['backgroundPosition']='center\x20center',$(window)[_0x314c('0x3')](function(){var _0x9c53f=document[_0x314c('0x21')](_0x314c('0x46')),_0x406ce9=new ColorThief(),_0x1e09f3=(_0x406ce9['getColor'](_0x9c53f),_0x406ce9[_0x314c('0x5')](_0x9c53f,0xa));FullsizeMusicBG?($(_0x314c('0x6'))[_0x314c('0xb')](_0x314c('0xc'),_0x314c('0x7')+_0x1e09f3[0x1]+')'),$(_0x314c('0x6'))[_0x314c('0xb')](_0x314c('0x47'),_0x314c('0x48')+_0x1e09f3[0x5]+_0x314c('0x49')),$('.container')[_0x314c('0xb')](_0x314c('0x4a'),_0x314c('0x4b'))):($(_0x314c('0x6'))[_0x314c('0xb')]('color',_0x314c('0x7')+_0x1e09f3[0x1]+')'),$(_0x314c('0x6'))[_0x314c('0xb')](_0x314c('0x47'),_0x314c('0x48')+_0x1e09f3[0x5]+_0x314c('0x49')),$('.container')[_0x314c('0xb')](_0x314c('0x4c'),'3.7em\x202em\x20.7em\x202em'));});}else musicDiv[_0x314c('0x2a')]='';}else _0x314c('0x4d')==_0x9c53f&&(weatherCode=weather[_0x314c('0x4e')]);weatherDiv[_0x314c('0x2a')]=weather['condition']+'\x20'+weather[_0x314c('0x4f')]+'°',weatherIcon[_0x314c('0x2a')]='<i\x20class=\x22wi\x20wi-yahoo-'+weatherCode+'\x22></i>',weatherLow[_0x314c('0x2a')]=weather[_0x314c('0x50')]+_0x314c('0x51'),weatherHi[_0x314c('0x2a')]=weather[_0x314c('0x52')]+'°';var _0x131aec=weather[_0x314c('0x53')];if(_0x131aec<=0x14&&(weatherRain[_0x314c('0x2a')]='\x20'),0x14<_0x131aec)weatherRain[_0x314c('0x2a')]=_0x314c('0x54')+0xa*Math[_0x314c('0x55')](_0x131aec/0xa)+_0x314c('0x56');else if(_0x314c('0x57')==_0x9c53f){var _0x557659,_0x3f7685=JSON[_0x314c('0x58')](signedInfo),_0x39ff6f=document[_0x314c('0x21')]('apps');for(_0x39ff6f['innerHTML']='',a=0x0;a<_0x3f7685[_0x314c('0x3b')];a++){var _0x1f772d=_0x3f7685[a]['split']('-'),_0x126aad=_0x1f772d[0x0],_0x1a1c00=new Date(parseInt(_0x1f772d[0x1]));(_0x557659=document['createElement'](_0x314c('0x59')))[_0x314c('0x2a')]=_0x126aad+_0x314c('0x5a')+translate[current]['smonth'][_0x1a1c00[_0x314c('0x5b')]()]+'\x20'+translate[current][_0x314c('0x5c')][_0x1a1c00['getDay']()]+'\x20'+_0x1a1c00[_0x314c('0x5d')](),_0x39ff6f[_0x314c('0x5e')](_0x557659);}}}PurchaseKey>=0xb95d52e930a&&PurchaseKey<=0xb95d52e930d?$(_0x314c('0x6'))[_0x314c('0x9')](''):($(_0x314c('0x6'))[_0x314c('0xb')]('text-decoration',_0x314c('0x5f')),$(_0x314c('0x6'))['css'](_0x314c('0xc'),_0x314c('0x60')),$(_0x314c('0x6'))[_0x314c('0xb')](_0x314c('0x61'),_0x314c('0x62')));