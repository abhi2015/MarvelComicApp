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



function populateSeriesPage(){

  getJSON("data/serieslist.json").then(function(data) {
    var seriesindex = [8,16];
    var seriesjson =['spider.json','hulk.json'];
    
    for (var x =0 ; x < seriesindex.length; x++){

      var elem = document.createElement("a");
      elem.setAttribute('href','characters.html?json='+seriesjson[x]);

      var imgNew = document.createElement("div");
      imgNew.setAttribute('class','grid');
      var imageurl = data.data.results[seriesindex[x]].thumbnail.path+"."+data.data.results[seriesindex[x]].thumbnail.extension;
      var img;
      img = new Image();
      img.src = imageurl;
      img.onload = function() {

        imgNew.style.backgroundImage = "url(" + img.src + ")";
        
      };


      var gridTitleNew = document.createElement("span");
      gridTitleNew.setAttribute('class','gridheader');
      gridTitleNew.innerHTML = data.data.results[seriesindex[x]].title;


      imgNew.appendChild(gridTitleNew);
      elem.appendChild(imgNew);



      var section = document.getElementById("sec0");
      section.appendChild(elem);
      
    }



  }, function(status) {
    alert('Something went wrong.');
  });










}


