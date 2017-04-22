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
  var css = "font-size:18px; background: #222; color: #bada55;";
  var IP = JSON.parse(response);
  console.log(`%cNice weather we're having in ${IP.city}, right?`, css);
  console.log(`%cYour IP is ${IP.ip}`, css);
}

httpGetAsync("https://freegeoip.net/json/", getIP)
