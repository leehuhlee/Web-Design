window.onload = function(){
    var event = {
        title : [
            'Wedding',
            'Mosque',
            'Film Festival',
            'Wing Tuesday',
            'Thanksgiving Pies'
        ],
        image : [
            'wedding',
            'mosque',
            'film-festival',
            'wing-tuesday',
            'thanksgiving-pies'
        ],
        description : [
            'Turn the unforgettable moments of your wedding night, the happiest, the most special and the most exciting day of your life, the day that you dream of, together with your relatives and guests who shall witness your night with accompany of the glorious İstanbul landscape.',
            'We have prepared for you the environment where your can get your religious needs during your stay in our restaurant.',
            'Film Festival is an independent non-competitive film festival in The Bahamas. TIHFF celebrates and focuses on films and filmmakers that emerge from the Caribbean region, celebrating Bahamian premieres of international, regional and local narrative films and documentaries.',
            'Wings on the menu ALL DAY every Tuesday',
            'Enjoy delicious house-baked pies from pastry Chef Stephane Motir.<br>Pumpkin Pie $36 | Apple Pie $36 | Pecan Pie $38',
        ],
        start : [
            'Always',
            'Always',
            new Date(2019,10,1),
            'Always',
            new Date(2019,10,22),
        ],
        end : [
            'Always',
            'Always',
            new Date(2019, 11, 31),
            'Always',
            new Date(2019,10,22),
        ],
    };

    var container = document.getElementById('event-right');

    if(container != null){
        basicEvent(container, event);
    }

    var container = document.getElementById('event-right-progress');

    if(container != null){
        eventInProgress(container, event);
    }

    var container = document.getElementById('event-right-terminated');

    if(container != null){
        terminatedEvents(container, event);
    }
}

function basicEvent(container, event) {
    for(i=0; i<event.title.length; i++){
        if(typeof(event.start[i])=='string'){
            container.innerHTML += '<div class = "event-right-content">' +
                                               '<img src = "images/' + event.image[i] + '.jpg" class = "event-right-image">' +
                                               '<div class = "event-right-title"><h2>' + event.title[i] +'</h2></div>' +
                                               '<div class = "event-right-description">' + event.description[i] +'</div>' +
                                               '<div class = "event-right-date">' + event.start[i] + '</div>' +
                                        '</div>';
            }
        }
}

function eventInProgress(container, event) {
        var date = new Date();
        for(i=0; i<event.title.length; i++){
            if((typeof(event.start[i])=='object') && (event.end[i].getTime() >= date)){
                start = event.start[i];
                end = event.end[i]
                startYear = start.getFullYear();
                startMonth = new String(start.getMonth() + 1);
                startDay = new String(start.getDate());
                endYear = end.getFullYear();
                endMonth = new String(end.getMonth() + 1);
                endDay = new String(end.getDate());

                if(startMonth.length == 1){
                    startMonth = "0" + startMonth;
                }
                if(startDay.length == 1){
                    startDay = "0" + startDay;
                }
                if(endMonth.length == 1){
                    endMonth = "0" + endMonth;
                }
                if(endDay.length == 1){
                    endDay = "0" + endDay;
                }

                container.innerHTML += '<div class = "event-right-content">' +
                                               '<img src = "images/' + event.image[i] + '.jpg" class = "event-right-image">' +
                                               '<div class = "event-right-title"><h2>' + event.title[i] +'</h2></div>' +
                                               '<div class = "event-right-description">' + event.description[i] +'</div>' +
                                               '<div class = "event-right-date">' + startDay + '/' + startMonth + '/' + startYear + ' - ' + endDay + '/' + endMonth + '/' + endYear + '</div>' +
                                        '</div>';
            }
        }
}


function terminatedEvents(container, event) {
        var date = new Date();
        for(i=0; i<event.title.length; i++){
            if((typeof(event.start[i])=='object') && (event.end[i].getTime() < date)){
                start = event.start[i];
                end = event.end[i]
                startYear = start.getFullYear();
                startMonth = new String(start.getMonth() + 1);
                startDay = new String(start.getDate());
                endYear = end.getFullYear();
                endMonth = new String(end.getMonth() + 1);
                endDay = new String(end.getDate());

                if(startMonth.length == 1){
                    startMonth = "0" + startMonth;
                }
                if(startDay.length == 1){
                    startDay = "0" + startDay;
                }
                if(endMonth.length == 1){
                    endMonth = "0" + endMonth;
                }
                if(endDay.length == 1){
                    endDay = "0" + endDay;
                }

                container.innerHTML += '<div class = "event-right-content">' +
                                               '<img src = "images/' + event.image[i] + '.jpg" class = "event-right-image">' +
                                               '<div class = "event-right-title"><h2>' + event.title[i] +'</h2></div>' +
                                               '<div class = "event-right-description">' + event.description[i] +'</div>' +
                                               '<div class = "event-right-date">' + startDay + '/' + startMonth + '/' + startYear + ' - ' + endDay + '/' + endMonth + '/' + endYear + '</div>' +
                                        '</div>';
            }
        }
}
