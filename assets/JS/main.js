var form = document.querySelector("#formularioPokemon");
var quantidade = form.querySelector("#quantidade");

quantidade.addEventListener('click', function(e){
  console.log(e.target.value);
});