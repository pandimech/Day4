var request = new XMLHttpRequest();
request.open('GET', 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json', true);
request.send();
request.onload = function() {
    var data = JSON.parse(this.response);
    console.log(data);
    for (var i = 0; i < 250; i++) {
        console.log(data[i].flag);
    }
}
