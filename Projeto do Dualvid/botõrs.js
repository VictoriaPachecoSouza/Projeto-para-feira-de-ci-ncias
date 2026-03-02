

$(document).ready(function() {
    $('#toggle').click(function() {

        if (!$(this).hasClass('ativo')) {
            $(this).addClass('ativo');
            $('#menu').fadeIn(300);
        } else {
            $(this).removeClass('ativo');
            $('#menu').fadeOut(300);
        }
    });
});
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}
