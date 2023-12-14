$( function() {
    $.get( "./templates/head.html", function(content){
        $( ".template.head" ).prepend( content);
    });
    $( ".template.header" ).load( "./templates/header.html" );
    $( ".template.footer" ).load( "./templates/footer.html" );
})
