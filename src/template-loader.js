$( function() {
    // ---------- head ----------
    $.get( "./templates/head.html", function(content){
        $( ".template.head" ).prepend( content);
    });
    // ---------- head - end ----------

    // ---------- header ----------
    $( ".template.header" ).load( "./templates/header.html" );
    // ---------- header - end ----------

    // ---------- content ----------
    $.get( `./pages/${ new URLSearchParams(window.location.search).get( "page" ) }.html`, function(content){
        $( ".template.content" ).html( content );
    });
    // ---------- content - end ----------

    // ---------- footer ----------
    $( ".template.footer" ).load( "./templates/footer.html" );
    // ---------- footer - end ----------
})
