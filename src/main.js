import { API } from './doctor.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

let displayResult = function (body) {
  $('#output').empty();
  $('#errorOutput').empty();
  // let yesNo = function(){
  //   if (body.data[i].practices[0].accepts_new_patients === true) {
  //     return "Yes";
  //   } else {
  //     return "No";
  //   }
  // }
  let doctorArray = body.data
  for (let i = 0; i < doctorArray.length; i++) {
    $("#output").append(`<ul id="doctorNames">${body.data[i].profile.first_name} ${body.data[i].profile.last_name}
                          <div id="doctorInfo">
                            <ul>
                              <li>Accepting new patients: ${body.data[i].practices[0].accepts_new_patients}</li>
                              <li>address</li>
                              <li>phone number</li>
                              <li>website</li>
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

$("li#doctorNames").click(function(){
  $("div#doctorInfo").toggle();
});

});
