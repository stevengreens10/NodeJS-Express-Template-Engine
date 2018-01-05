$(document).ready(function(){

    $('form').on('submit', function(){
        var username = $('#username').val()
        var password = $('#password').val()

        $.ajax({
            type: 'POST',
            url: '/users',
            data: {
                username: username,
                password: password
            },
            success: function(data){
                console.log(data)

                if(data.error){
                    alert(data.error)
                }else{
                    location.reload()
                }
            }
        })
    })

    $('tr').on('click', function(){
        var tableData = $(this).children('td').map(function () {
                    return $(this).text();
                }).get()
        var username = tableData[0]

        $.ajax({
            type: 'DELETE',
            url: '/users/' + username,
            success: function(data){
                location.reload()
            }
        })
    })

})
