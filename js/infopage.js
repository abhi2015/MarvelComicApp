function displayCharInfo() {

    var getJSON = function(url) {
        return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('get', url, true);
            xhr.responseType = 'json';
            xhr.onload = function() {
                var status = xhr.status;
                if (status == 200) {
                    resolve(xhr.response);
                } else {
                    reject(status);
                }
            };
            xhr.send();
        });
    };



    getJSON("data/spiderman.json").then(function(data) {

        //console.log("reached break");
        var imgNew = document.getElementById("image");

        var imageurl = data.data.results[1].thumbnail.path+"."+data.data.results[1].thumbnail.extension;

        var img;
        img = new Image();
        img.src = imageurl;
        //console.log("reached break0");
        img.onload = function() {

           imgNew.style.backgroundImage = "url(" + img.src + ")";
       };
       //console.log("reached break1");
       var textMain = document.getElementById("charactername");
       textMain.innerHTML = data.data.results[1].name;
       var textDesc = document.getElementById("charinfo");
       textDesc.innerHTML = data.data.results[1].description;
       var i = 0;
       //console.log("reached break2");

       var charmovies = document.getElementById('charmovies');
       console.log(data.data.results[1].series.items[i].name);
       while(data.data.results[1].series.items[i].name != undefined)
        {      
            //console.log(data.data.results[0].series.items[i].name);
            var listItemNew = document.createElement("li");
            listItemNew.setAttribute('class','listitem');
            var itemText = document.createTextNode(data.data.results[1].series.items[i].name);
            //listItemNew.innerHTML = data.data.results[0].series.items[i].name;
            listItemNew.appendChild(itemText);
            charmovies.appendChild(listItemNew);
            //console.log(data.data.results[0].series.items[i].name);
            i++;
        }



    }, function(status) {
        alert('Something went wrong.');
    });


}