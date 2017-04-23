function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}

function getIP(response) {
  var css = "font-size:15px; color: #2ecc71;";
    var IP = JSON.parse(response);
  console.log(`%cHey, it's Will. This is some proof I have script injection or whatever. 😉`, css);
  console.log(`%cYour IP is ${IP.ip} (obv I would't log this, wtf.)`, css);
}

httpGetAsync("https://freegeoip.net/json/", getIP)
