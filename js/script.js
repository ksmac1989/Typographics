$('#search').keyup(function(){

    var searchField = $('#search').val();
    var myExp = new RegExp(searchField, "i");

    $.getJSON('data.json', function(data) {
        var output = '<ul class = "searchresults">';
        $.each(data, function(key, val){

            if ((val.name.search(myExp) != -1) || 
            (val.company.search(myExp) != -1) || 
            (val.bio.search(myExp)!= -1)) {
                output += '<li>';
                output += '<h2>' + val.name + '</h2>';
                output += '<h3>' + val.company + '</h3>';
                output += '<div class="slide"><img src = "images/'+val.shortname+'.jpg" alt=" '+val.name+' " />';
                output += '<p>' + val.bio + '</p></div>';
                output += '</li>';
            }
            
        });
        output += '</ul>';
        $('#update').html(output);

        
        $('ul').click(function() {
            if ( $( ".slide" ).is( ":hidden" ) ) {
              $( ".slide" ).show( "slow" );
            } else {
              $( ".slide" ).slideUp();
            }
        });
        

    });
})