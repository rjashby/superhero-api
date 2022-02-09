import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Superhero from './super';

function getCharacter(response) {
  if (response.response === "success") {
    $('#name').text(`Name: ${response.name}`);
    $('#alignment').text(`Alignment: ${response.biography.alignment}`);
    $('#image').html(`<img src="${response.image.url}">`);
  } else {
    $('.showErrors').text(`There was an error: ${response.error}`);
  }
}

async function makeApiCall() {
  const response = await Superhero.getHero();
  getCharacter(response);
}

$(document).ready(function() {
  $('#random').click(function() {
    makeApiCall();
  });
});