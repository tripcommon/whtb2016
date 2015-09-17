$(document).ready(function(){

});


var map = new Datamap({
    element: document.getElementById('map'),
    responsive: true,
    fills: {
        defaultFill: '#424651',
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
