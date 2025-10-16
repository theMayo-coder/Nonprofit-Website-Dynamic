$(document).ready(function() {

    //handle deleting users when clicked

    $('h3').on('click', function() {

        console.log("being clicked on");

        var item = encodeURIComponent($(this).text());
        console.log(item);

        $.ajax({
            type: 'DELETE',
            url: '/add-events/' + item,
            success: function(data) {
                window.location = "/add-events";
            }
        })

    });

});