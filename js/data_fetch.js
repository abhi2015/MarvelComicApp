
function getserieslist(){

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


getJSON("data/serieslist.json").then(function(data) {

  var result = document.getElementById("test");
  result.innerHTML = data.data.results[0].title;






  
}, function(status) {
  alert('Something went wrong.');
});


}


