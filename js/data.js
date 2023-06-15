/* exported data */
var data = {
  set: [],
  card: {
    name: '',
    hp: '',
    attack0: '',
    attack1: '',
    weakness: '',
    resistance: '',
    retreatCost: ''
  }
};

function getPokemonCardData() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.pokemontcg.io/v2/cards?q=set.id:base1');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    const baseSet = xhr.response;
    data.set.unshift(baseSet);
  });
  xhr.send();
}
getPokemonCardData();
