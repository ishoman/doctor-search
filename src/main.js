import { API } from './doctor.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


let displayResult = function (body) {
  $('#output').empty();
  $('#errorOutput').empty();
  let doctorArray = body.data
  for (let i = 0; i < doctorArray.length; i++) {
    let acceptingPatients = function(){
      if (body.data[i].practices[0].accepts_new_patients === true) {
        return "Yes";
      } else {
        return "No";
      }
    };
    let patientsYesNo = acceptingPatients();

    let websiteAvailable = function(){
      if (body.data[i].practices[0].website !== undefined) {
        return body.data[i].practices[0].website;
      } else {
        return "N/A";
      }
    }

    let websiteYesNo = websiteAvailable();
    $("#output").append(`<ul id="doctorNames">${body.data[i].profile.first_name} ${body.data[i].profile.last_name}, ${body.data[i].profile.title}
                          <div id="doctorInfo">
                            <ul>
                              <li>Accepting new patients: ${ patientsYesNo }</li>
                              <li>Address: ${body.data[i].practices[0].visit_address.street}, ${body.data[i].practices[0].visit_address.city}, ${body.data[i].practices[0].visit_address.state} ${body.data[i].practices[0].visit_address.zip}</li>
                              <li>Phone Number: ${body.data[i].practices[0].phones[0].number} </li>
                              <li>Website: <a href="${websiteYesNo}">${websiteYesNo}</a></li>
                              <li>${body.data[i].profile.bio}</li>
                            <ul>
                          </div>
                        </ul>`);
  }
  console.log(doctorArray)
}

let displayError = function(error) {
  $('#output').empty();
  $('#errorOutput').empty();
  $("#errorOutput").text(`There was an error processing your request: ${error.message}`);
}

let displayNoResults = function(body) {
  $('#output').empty();
  $('#errorOutput').empty();
  $("#errorOutput").text(`Your search returned no results.`);
}

$(document).ready(function() {
  $("#doctor").submit(function(event) {
    event.preventDefault();
    let input = $('#search').val();
    let api = new API
    api.makeCall(input, displayResult, displayError, displayNoResults);
  });

// $("li#doctorNames").click(function(){
//   $("div#doctorInfo").toggle();
// });

});
