function displayCharacters() {

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


    getJSON("data/"+jsonfile).then(function(data) {

        var name = document.getElementById("character-name");
        name.innerHTML = data.data.results[0].name;
        var charimage = document.getElementById("cimage");
        urlimg = data.data.results[0].thumbnail.path + ".jpg";
        console.log(urlimg);
        alert("loading");
        charimage.style.backgroundImage = "\"url('" + urlimg + "'')\"";
        var i = 0;
        while (data.data.results[i].name != undefined) {
            console.log(data.data.results[i].name);
            var elem = document.createElement("div");
            elem.class = "element";

            var imgNew = document.createElement("div");
            imgNew.setAttribute('class','photo')

            var characterNameNew = document.createElement("span");
            characterNameNew.setAttribute('class','character');


            elem.appendChild(characterNameNew);
            elem.appendChild(imgNew);

            characterNameNew.innerHTML = data.data.results[i].name;
            var section = document.getElementById("sec1");
            section.appendChild(elem);
            console.log("breakpoint");
            i++;
          }

    }, function(status) {
        alert('Something went wrong.');
    });


}
