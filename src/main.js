import { API } from './doctor.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

let api = new API
api.makeCall();
$(document).ready(function() {
  $("#doctor").submit(function(event) {
    event.preventDefault();
    console.log("hello");
  });
});
