//import { XMLHttpRequest } from 'xmlhttprequest';

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let API = 'https://rickandmortyapi.com/api/character/';


function fetchData(url_api, callback) {
    let xmlRequest = new XMLHttpRequest();
    xmlRequest.open('GET', url_api, true);
    xmlRequest.onreadystatechange = function (event) {
        if (this.readyState === 4) {
            if (this.status === 200) {
                callback(null, JSON.parse(xmlRequest.responseText))
            } else {
                let error = new Error('Error' + url_api);
                return callback(error, null)
            }

        }
    }
    xmlRequest.send();
}

fetchData(API,function(error1,data1){
    if(error1) return console.error(error1);
    fetchData(API+data1.results[0].id,function(error2,data2){
        if(error2) return console.error(error2);
        fetchData(data2.origin.url,function(error3,data3){
            if(error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        })

    })
})