$(document).ready(function() {

    //handle deleting users when clicked

    $('h3').on('click', function() {

        console.log("being clicked on");

        var item = $(this).text().replace(/ /g, "-");
        console.log(item);

        $.ajax({
            type: 'DELETE',
            url: '/add-events/' + item,
            success: function(data) {
                console.log(location);
                window.location = "/add-events";
            }
        })

    });

});