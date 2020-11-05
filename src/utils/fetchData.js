let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        let xmlRequest = new XMLHttpRequest();
        xmlRequest.open('GET', url_api, true);
        xmlRequest.onreadystatechange = (() => {
            if (xmlRequest.readyState === 4) {
                if (xmlRequest.status === 200) {
                    resolve(JSON.parse(xmlRequest.responseText))
                } else {
                    reject(new Error('Error', url_api))
                }

            }
        });
        xmlRequest.send();
    });
}

module.exports = fetchData

