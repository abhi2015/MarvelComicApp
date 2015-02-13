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
    var i = 8;
    while (i<=16){
      var elem = document.createElement("a");
      elem.setAttribute('href','#');

      var imgNew = document.createElement("div");
      imgNew.setAttribute('class','grid');
      var imageurl = data.data.results[i].thumbnail.path+"."+data.data.results[i].thumbnail.extension;
      var img;
      img = new Image();
      img.src = imageurl;
      img.onload = function() {

        imgNew.style.backgroundImage = "url(" + img.src + ")";
        
      };


      var gridTitleNew = document.createElement("span");
      gridTitleNew.setAttribute('class','gridheader');
      gridTitleNew.innerHTML = data.data.results[i].title;


      imgNew.appendChild(gridTitleNew);
      elem.appendChild(imgNew);



      var section = document.getElementById("sec0");
      section.appendChild(elem);
      

      i+=8;
         
      
    }



  }, function(status) {
    alert('Something went wrong.');
  });










}


