$(document).ready(function(){

  // This works, but it is not pulling in any data.
  // $('#map').vectorMap({map: 'world_mill'});

  // This is from an example they provded.
  $(function(){
    $('#map').vectorMap({
      map: 'world_mill',
      series: {
        regions: [{
          values: gdpData,
          scale: ['#C8EEFF', '#0071A4'],
          normalizeFunction: 'polynomial'
        }]
      },
      onRegionTipShow: function(e, el, code){
        el.html(el.html()+' (GDP - '+gdpData[code]+')');
      }
    });
  });

});
