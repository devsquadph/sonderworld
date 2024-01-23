$(document).ready(function(){
    checkScrollAmount();

    document.body.addEventListener('scroll', function(){
        checkScrollAmount();
    })

    function checkScrollAmount(){
        if(document.body.scrollTop > document.body.clientHeight / 2){
            $(".topnav").css("position", "fixed");
            $(".topnav").css("left", "50%");
            $(".topnav").css("transform", "translateX(-50%)");
            $(".topnav").css("width", "70%");
            $(".topnav").css("background-color", "white");
            $(".topnav").css("border-bottom-left-radius", "5rem");
            $(".topnav").css("border-bottom-right-radius", "5rem");
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