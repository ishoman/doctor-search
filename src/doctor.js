class API {

  makeCall (displayResult, displayError){
    let promise = new Promise(function (resolve, request){
      let request = XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=chest%20pain&location=or-portland&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject (request.statusText);
        }
      }
    })
  }

}

export { API }
