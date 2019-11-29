window.onload = function(){
    var gallery = {
        image : [
            'yeni-haber',
            'steakburgerle-tanisin',
            'dogum-gunu-organisazyonu',
            'steakhouse-yedinizmi',
            'steakhouse',
            'istanbuldaki-en-iyi-steakhouse',
            'steak',
        ],
        title : [
            'Yeni Haber',
            'Steakburgerle Tanisin',
            'Dogum Gunu Organisazyonu',
            'Steakhouse Yedinizmi',
            'Steakhouse',
            'Istanbuldaki En Iyi Steakhouse',
            'Steak',
        ],
        store : [
            'main',
            'main',
            'main',
            'second',
            'main',
            'second',
            'second',
        ],
    };

    var container = document.getElementById('gallery-right');

    if(container != null){
        basicGallery(container, gallery);
    }

    var container = document.getElementById('gallery-right-main');

    if(container != null){
        console.log("A");
        mainGallery(container, gallery);
    }

    var container = document.getElementById('gallery-right-second');

    if(container != null){
        secondGallery(container, gallery);
    }

}

function basicGallery(container, gallery) {
    for(i=0; i<gallery.title.length; i++){
        container.innerHTML += '<a href="images/' + gallery.image[i] + '.jpg" data-lightbox="example-set" data-title="' + gallery.title[i] + '">' +
                                '<img src = "images/' + gallery.image[i] + '.jpg" class = "gallery-right-image" />' +
                                '</a>';
        }
}

function mainGallery(container, gallery) {
    for(i=0; i<gallery.title.length; i++){
        if(gallery.store[i] == 'main'){
            container.innerHTML += '<a href="images/' + gallery.image[i] + '.jpg" data-lightbox="example-set" data-title="' + gallery.title[i] + '">' +
                                '<img src = "images/' + gallery.image[i] + '.jpg" class = "gallery-right-image" />' +
                                '</a>';
                                }
        }
}


function secondGallery(container, gallery) {
    for(i=0; i<gallery.title.length; i++){
        if(gallery.store[i] == 'second'){
            container.innerHTML += '<a href="images/' + gallery.image[i] + '.jpg" data-lightbox="example-set" data-title="' + gallery.title[i] + '">' +
                                '<img src = "images/' + gallery.image[i] + '.jpg" class = "gallery-right-image" />' +
                                '</a>';
                                }
        }
}
