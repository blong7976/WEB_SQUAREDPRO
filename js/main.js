$(function(){


    resize();
    $(window).resize(function(event) {
        resize();
    });



    var isindex;
     if ($(".header").hasClass("pos")) {
        isindex = true;
    }
    else isindex = false;
    $(window).scroll(function () {
        
        if ($(window).scrollTop() > 20) {
            $(".header").addClass("fixed");
            $(".header_ht,.topMenuBtnContainer").show();
            $(".topMenuBtnContainer").hide();
            $(".submenu").css("top","80px")
            if (isindex) { $(".header").removeClass("pos"); }
        }
        else {
            $(".header_ht,.topMenuBtnContainer").hide();
            if(document.body.clientWidth>750){
                $(".topMenuBtnContainer").show();
            }
            $(".header").removeClass("fixed")
         
            $(".submenu").css("top","120px")
            if (isindex) { $(".header").addClass("pos"); }
        }
    })

    $(".bottom").click(function () {
        $("body,html").animate({ scrollTop: ($(".banner").height() - 50) }, 1000)
    })

    $(".banner").each(function () {
        if ($(this).find(".item").length > 2) {
            var owl = $(this).owlCarousel({ items: 1, loop: true, autoplay: true });
            owl.on('changed.owl.carousel', function (event) {
                owl.find(".animated").each(function () { $(this).removeClass($(this).attr("data-animation")); })
                owl.find(".owl-item").eq(event.item.index).find(".animated").each(function () { $(this).addClass($(this).attr("data-animation")); });
            })
        }
    })
    $(".banner .owl-item").eq(2).find(".animated").each(function () {
        $(this).addClass($(this).attr("data-animation"));
    })
    $(window).scroll(function () {
        $(".animated").each(function () {
            if ($(this).offset().top - $(window).scrollTop() > $(window).height() - 80)
                $(this).removeClass($(this).attr("data-animation"));
            else
                $(this).addClass($(this).attr("data-animation"));
        })
    })

    $(".menu_wrap").click(function () {
        $(".menu").slideToggle()
    })

});

/*main*/
//

function font() {


}


/*call*/
//
function resize(){
    var ht=$(window).height();

} 