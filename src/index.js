import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Superhero from './super';

function getCharacter(response) {
  if (response[2].id) {
    $('#char1').text(`Name: ${response[0].name}`);
    $('#com1').text(`Combat: ${response[0].powerstats.combat}`);
    $('#dur1').text(`Durability: ${response[0].powerstats.durability}`);
    $('#int1').text(`Intelligence: ${response[0].powerstats.intelligence}`);
    $('#pow1').text(`Power: ${response[0].powerstats.power}`);
    $('#speed1').text(`Speed: ${response[0].powerstats.speed}`);
    $('#str1').text(`Strength: ${response[0].powerstats.strength}`);
    $('#img1').html(`<img src="${response[0].image.url}">`);
  } else {
    $('.showErrors').text(`There was an error: ${response[0].error}`);
  }
  if (response[1].id) {
    $('#char2').text(`Name: ${response[1].name}`);
    $('#com2').text(`Combat: ${response[1].powerstats.combat}`);
    $('#dur2').text(`Durability: ${response[1].powerstats.durability}`);
    $('#int2').text(`Intelligence: ${response[1].powerstats.intelligence}`);
    $('#pow2').text(`Power: ${response[1].powerstats.power}`);
    $('#speed2').text(`Speed: ${response[1].powerstats.speed}`);
    $('#str2').text(`Strength: ${response[1].powerstats.strength}`);
    $('#img2').html(`<img src="${response[1].image.url}">`);
  } else {
    $('.showErrors').text(`There was an error: ${response[1].error}`);
  }
  if (response[2].id) {
    $('#char3').text(`Name: ${response[2].name}`);
    $('#com3').text(`Combat: ${response[2].powerstats.combat}`);
    $('#dur3').text(`Durability: ${response[2].powerstats.durability}`);
    $('#int3').text(`Intelligence: ${response[2].powerstats.intelligence}`);
    $('#pow3').text(`Power: ${response[2].powerstats.power}`);
    $('#speed3').text(`Speed: ${response[2].powerstats.speed}`);
    $('#str3').text(`Strength: ${response[2].powerstats.strength}`);
    $('#img3').html(`<img src="${response[2].image.url}">`);
  } else {
    $('.showErrors').text(`There was an error: ${response[2].error}`);
  }
  if (response[3].id) {
    $('#char4').text(`Name: ${response[3].name}`);
    $('#com4').text(`Combat: ${response[3].powerstats.combat}`);
    $('#dur4').text(`Durability: ${response[3].powerstats.durability}`);
    $('#int4').text(`Intelligence: ${response[3].powerstats.intelligence}`);
    $('#pow4').text(`Power: ${response[3].powerstats.power}`);
    $('#speed4').text(`Speed: ${response[3].powerstats.speed}`);
    $('#str4').text(`Strength: ${response[3].powerstats.strength}`);
    $('#img4').html(`<img src="${response[3].image.url}">`);
  } else {
    $('.showErrors').text(`There was an error: ${response[3].error}`);
  }
}

async function makeApiCall() {
  const response = await Superhero.getHero();
  getCharacter(response);
}

$(document).ready(function() {
  $('#random').click(function() {
    $('.showErrors').text("");
    makeApiCall();
  });
});