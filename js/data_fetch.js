
var data; 
function getserieslist(){

 var result = fetch('data/serieslist.json');
 
 var sendtext = result.then(

  function(response)
  {
    return response.text()
  }

  ).
 then(
  function(text) {
    console.log('got text', text)
    data = text;
  }
  ).then(
  alert("data loaded")
  )

  .catch(function(ex) {
    console.log('failed', ex)
  })

  return sendtext;

}