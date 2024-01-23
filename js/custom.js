$(document).ready(function(){
    checkScrollAmount();

    document.body.addEventListener('scroll', function(){
        checkScrollAmount();
    })

    $("#drawer-toggle, #drawer-close").click(function(e){
        e.preventDefault();

        $(".topnav-drawer").toggle();
    })

    $(".topnav-drawer a").click(function(e){
        $(".topnav-drawer").toggle();
    })

    function checkScrollAmount(){
        if(document.body.scrollTop > document.body.clientHeight / 2){
            $(".topnav").css("position", "sticky");
            $(".topnav").css("top", "0");
            $(".topnav").css("background-color", "white");
            $(".topnav").css("box-shadow", "0 1px 5px rgba(0,0,0,0.5)");
        }else{
            $(".topnav").css("position", "static");
            $(".topnav").css("left", "0");
            $(".topnav").css("transform", "translateX(0)");
            $(".topnav").css("width", "100%");
            $(".topnav").css("background-color", "transparent");
            $(".topnav").css("border-bottom-left-radius", "0");
            $(".topnav").css("border-bottom-right-radius", "0");
            $(".topnav").css("box-shadow", "none");
        }
    }
})