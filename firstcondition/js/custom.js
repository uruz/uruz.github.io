$(document).ready(function(){
    $('#run').click(function(){
        $('#buttoncontainer').remove();
        var replacement = '<iframe allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated" id="game_drop" ' +
            'src="/firstcondition/unity/test_final4/index.html" mozallowfullscreen="true" allowtransparency="true" webkitallowfullscreen="true" frameborder="0" allowfullscreen="true";' +
            'scrolling="no" msallowfullscreen="true" style="width: 100%; height: 100%;"></iframe>';
        $('#game').html(replacement);
    });
});
