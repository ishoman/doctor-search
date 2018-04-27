class API {

makeCall () {
  debugger;
  let promise = new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=&location=or-portland&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;
    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    }
    request.open("GET", url, true);
    request.send();
  });

    promise.then(function(response) {
      const body = JSON.parse(response);
      console.log(body);
    });
  }

}

export { API }
