var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v2/all', true);
request.send();
request.onload = function() {
    var data = JSON.parse(this.response);
    console.log(data);
    for (var i = 0; i < 250; i++) {
        console.log(data[i].flag);
    }
}