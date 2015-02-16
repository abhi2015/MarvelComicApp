    var audio = new Audio('audio/hulk.mp3');

    function playAudio(){
      
      audio.play();
  }

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
    

    var jsonfile = getQueryVariable("jsonfile");

    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] == variable) {

                
                return pair[1];
            }
        }
        alert('Query Variable ' + variable + ' not found');
    }




    getJSON("data/" + jsonfile).then(function(data) {

        //console.log("reached break");
        var imgNew = document.getElementById("image");

        var imageurl = data.data.results[0].thumbnail.path+"."+data.data.results[0].thumbnail.extension;

        var img;
        img = new Image();
        img.src = imageurl;
        //console.log("reached break0");
        img.onload = function() {

           imgNew.style.backgroundImage = "url(" + img.src + ")";
       };
       //console.log("reached break1");
       var textMain = document.getElementById("charactername");
       textMain.innerHTML = data.data.results[0].name;
       var textDesc = document.getElementById("charinfo");
       textDesc.innerHTML = data.data.results[0].description;
       var i = 0;
       //console.log("reached break2");

       var charmovies = document.getElementById('charmovies');
       console.log(data.data.results[0].series.items[i].name);
       while(data.data.results[0].series.items[i].name != undefined)
        {      
            //console.log(data.data.results[0].series.items[i].name);
            var listItemNew = document.createElement("li");
            listItemNew.setAttribute('class','listitem');
            var itemText = document.createTextNode(data.data.results[0].series.items[i].name);
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