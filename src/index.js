import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Superhero from './super';
import getRandomInt from './number';

function getCharacter(response) {
  if (response.response === "success") {
    $('#').text(`Name: ${response.name}`);
    $('#').text(`Alignment: ${response.biography.alignment}`);
    $('#').html(`<img src="${response.image.url}">`);
  } else {
    $('.showErrors').text(`There was an error: ${response.error}`)
  }
}