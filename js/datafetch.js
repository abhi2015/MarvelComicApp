function fetchdata(url)
{
  var response = fetch('http://gateway.marvel.com/v1/public/comics?apikey=6506279e79b884fa4acd3c468489b293&ts=1&hash=38f955af79c97608d21ccacced4b004c', {
  method: 'get',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  
})
}