$(function()
{
    $("#entrar-btn").click(function(e)
    {
        e.preventDefault();

        var name = $("#name-field").val();
        var pass = $("#password-field").val();
       

        
        $.ajax({
            url: GlobalUtils.serverAddress + 'login',
            type: 'GET',
            crossDomain: true,
            dataType: 'jasonp',
            data: 'session[name]=' + name + '&session[password]=' + pass,
            success: function(response)
            {

                alert(response);
                if (response)
                {
                    alert(response);
                    document.getElementById("test").innerHTML = response;
                    window.location.href = "home.html";
                }
            }
        });
    });
});