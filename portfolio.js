$(document).ready(function () {
    $(".hamburger_icon").click(function () {
        $(".column_box").stop().fadeIn(400);
    });

    $(".close").click(function () {
        $(".column_box").stop().fadeOut(400);
    });

    $(".link_p").click(function () {
        let SubMenu = $(this).siblings(".hamburg_sub");
        let OpenIcon = $(this).find(".open");
        let ShutIcon = $(this).find(".shut");

        if (SubMenu.is(":visible")) {
            SubMenu.slideUp();
            OpenIcon.show();
            ShutIcon.hide();
        } else {
            SubMenu.slideDown();
            OpenIcon.hide();
            ShutIcon.show();
        }
        
    });
    
    $(".quick_menu>.quick_btn").click(function () {
        $(".quick_menu>.quick_sub").slideToggle(500);
    });

    $(".hamburg_sub>li").mouseenter(function () {
        $(".link_p").css({ "color": "#dd4f5f" });
        $(".link_p>a").css({ "color": "#dd4f5f" });
    })
    $(".hamburg_sub>li").mouseleave(function () {
        $(".link_p").css({ "color": "" });
        $(".link_p>a").css({ "color": "" });
    });
});

        $(".hamburg_sub>li").click(function () {
            let targetClass = $(this).data("target");
            let scroll = projects[targetClass];

            if (scroll !== undefined) {
                $("html,body").stop().animate({ scrollTop: scroll }, 100);
            }
        });
        $(".section3_nav>ul>li").click(function () {
            let targetClass = $(this).data("target");
            let scroll = projects[targetClass];

            if (scroll !== undefined) {
                $("html,body").stop().animate({ scrollTop: scroll }, 100);
            }
        });