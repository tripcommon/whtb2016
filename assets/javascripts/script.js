$(document).ready(function(){

});

var map = new Datamap({
    element: document.getElementById('map'),
    responsive: true,
    fills: {
        defaultFill: '#424651',
        authorHasTraveledTo: "#FF0000"
    },
    geographyConfig: {
        highlightOnHover: false,
        borderColor: '#22262e'
    }
});

// Making it respoinsive
window.addEventListener('resize', function() {
  map.resize();
});

var currentCountries = {};

$("#gop").on("click", function(){
  // console.log(this);
  var data; // a global

  d3.json("/data/gop.json", function(error, json) {
    if (error) return console.warn(error);
    data = json;
    // console.log(data);
    visualizeit(data, map);
  });

});

$("#bush").on("click", function(){
  // console.log(this);
  var data; // a global

  d3.json("/data/bush.json", function(error, json) {
    if (error) return console.warn(error);
    data = json;
    // console.log(data);
    visualizeit(data, map);
    loadsources(data);
  });
});

$("#carson").on("click", function(){
  // console.log(this);
  var data; // a global

  d3.json("/data/carson.json", function(error, json) {
    if (error) return console.warn(error);
    data = json;
    // console.log(data);
    visualizeit(data, map);
    loadsources(data);
  });
});

$("#christie").on("click", function(){
  // console.log(this);
  var data; // a global

  d3.json("/data/christie.json", function(error, json) {
    if (error) return console.warn(error);
    data = json;
    // console.log(data);
    visualizeit(data, map);
    loadsources(data);
  });
});

$("#cruz").on("click", function(){
  // console.log(this);
  var data; // a global

  d3.json("/data/cruz.json", function(error, json) {
    if (error) return console.warn(error);
    data = json;
    // console.log(data);
    visualizeit(data, map);
    loadsources(data);
  });
});

$("#huckabee").on("click", function(){
  // console.log(this);
  var data; // a global

  d3.json("/data/huckabee.json", function(error, json) {
    if (error) return console.warn(error);
    data = json;
    // console.log(data);
    visualizeit(data, map);
    loadsources(data);
  });
});

$("#kasich").on("click", function(){
  // console.log(this);
  var data; // a global

  d3.json("/data/kasich.json", function(error, json) {
    if (error) return console.warn(error);
    data = json;
    // console.log(data);
    visualizeit(data, map);
    loadsources(data);
  });
});

$("#paul").on("click", function(){
  // console.log(this);
  var data; // a global

  d3.json("/data/paul.json", function(error, json) {
    if (error) return console.warn(error);
    data = json;
    // console.log(data);
    visualizeit(data, map);
    loadsources(data);
  });
});

$("#rubio").on("click", function(){
  // console.log(this);
  var data; // a global

  d3.json("/data/rubio.json", function(error, json) {
    if (error) return console.warn(error);
    data = json;
    // console.log(data);
    visualizeit(data, map);
    loadsources(data);
  });
});

$("#trump").on("click", function(){
  console.log(this);
  var data; // a global

  d3.json("/data/trump.json", function(error, json) {
    if (error) return console.warn(error);
    data = json;
    // console.log(data);
    visualizeit(data, map);
    loadsources(data);
  });
});

$("#walker").on("click", function(){
  // console.log(this);
  var data; // a global

  d3.json("/data/walker.json", function(error, json) {
    if (error) return console.warn(error);
    data = json;
    // console.log(data);
    visualizeit(data, map);
    loadsources(data);
  });
});

function visualizeit(data, map) {

  resetit(map);

  var codes = {};
  for(i = 0; i < data.length; i++) {
    var country = data[i];
    // console.log(country['code']);
    codes[country['code']] = {fillKey: 'authorHasTraveledTo'};
  }

  currentCountries = codes;

  map.updateChoropleth(codes);

  // console.log(map.options.data);
};

function resetit(map) {

  _.forEach(currentCountries, function(value,key) {
    // console.log(key);
    currentCountries[key] = {fillKey: 'defaultFill'};
  });

    map.updateChoropleth(currentCountries);

};

function loadsources(data) {

  $('#source').html("");

  var listitems = "";
  _.map(data, function(value){
    console.log(value.source);
    if(value.source){
      var listitem = "<li>" + value.source + "</li>";
      listitems = listitems + listitem;
    }
  });

  $('#source').html(listitems);

};
