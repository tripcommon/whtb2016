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

$("#gop").on("click", function(){
  console.log(this);
  var data; // a global

  d3.json("/data/gop.json", function(error, json) {
    if (error) return console.warn(error);
    data = json;
    console.log(data);
    visualizeit(data, map);
  });
});

$("#bush").on("click", function(){
  console.log(this);
  var data; // a global

  d3.json("/data/bush.json", function(error, json) {
    if (error) return console.warn(error);
    data = json;
    console.log(data);
    visualizeit(data, map);
  });
});

$("#carson").on("click", function(){
  console.log(this);
  var data; // a global

  d3.json("/data/carson.json", function(error, json) {
    if (error) return console.warn(error);
    data = json;
    console.log(data);
    visualizeit(data, map);
  });
});

$("#christie").on("click", function(){
  console.log(this);
  var data; // a global

  d3.json("/data/christie.json", function(error, json) {
    if (error) return console.warn(error);
    data = json;
    console.log(data);
    visualizeit(data, map);
  });
});

$("#cruz").on("click", function(){
  console.log(this);
  var data; // a global

  d3.json("/data/cruz.json", function(error, json) {
    if (error) return console.warn(error);
    data = json;
    console.log(data);
    visualizeit(data, map);
  });
});

$("#cruz").on("click", function(){
  console.log(this);
  var data; // a global

  d3.json("/data/cruz.json", function(error, json) {
    if (error) return console.warn(error);
    data = json;
    console.log(data);
    visualizeit(data, map);
  });
});

$("#huckabee").on("click", function(){
  console.log(this);
  var data; // a global

  d3.json("/data/huckabee.json", function(error, json) {
    if (error) return console.warn(error);
    data = json;
    console.log(data);
    visualizeit(data, map);
  });
});

$("#kasich").on("click", function(){
  console.log(this);
  var data; // a global

  d3.json("/data/kasich.json", function(error, json) {
    if (error) return console.warn(error);
    data = json;
    console.log(data);
    visualizeit(data, map);
  });
});

$("#paul").on("click", function(){
  console.log(this);
  var data; // a global

  d3.json("/data/paul.json", function(error, json) {
    if (error) return console.warn(error);
    data = json;
    console.log(data);
    visualizeit(data, map);
  });
});

$("#rubio").on("click", function(){
  console.log(this);
  var data; // a global

  d3.json("/data/rubio.json", function(error, json) {
    if (error) return console.warn(error);
    data = json;
    console.log(data);
    visualizeit(data, map);
  });
});

$("#trump").on("click", function(){
  console.log(this);
  var data; // a global

  d3.json("/data/trump.json", function(error, json) {
    if (error) return console.warn(error);
    data = json;
    console.log(data);
    visualizeit(data, map);
  });
});

$("#walker").on("click", function(){
  console.log(this);
  var data; // a global

  d3.json("/data/walker.json", function(error, json) {
    if (error) return console.warn(error);
    data = json;
    console.log(data);
    visualizeit(data, map);
  });
});

function visualizeit(data, map) {

  var codes = {};
  for(i = 0; i < data.length; i++) {
    var country = data[i];
    codes[country['code']] = {fillKey: 'authorHasTraveledTo'};
  }

  map.updateChoropleth(codes);
}
