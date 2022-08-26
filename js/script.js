window.onload = function(){
    var myFull = new fullpage("#fullpage",{
        sectionsColor: ["black", "black", "black"], //각 섹션 컬러
        navigation: true, //도트 유무
        navigationTooltips: ["HOME", "PORTFOLIO", "SKILL"],
        showActiveTooltip: true,
    })

    $("#fp-nav ul li:eq(0)").find("span").text("HOME")
    $("#fp-nav ul li:eq(1)").find("span").text("PORTFOLIO")
    $("#fp-nav ul li:eq(2)").find("span").text("SKILL")

    let portIndex = 0;
    $(".portfolio .portList>ul>li").on({
        "mouseover": function(){
            $(this).addClass("over").siblings().removeClass("over")
        },
        "mouseout": function(){
            $(this).removeClass("over")
        },
        "click": function(){
            portIndex = $(this).index();
            $(".portfolio .portDetail").addClass("active");
            $(this).removeClass("over");
            $(this).addClass("click").siblings().removeClass("click");
            $(".portDetail>div").eq(portIndex).addClass("selected");
        }
    })

    $(".closeBtn").on("click", function(){
        $(".portfolio .portDetail").removeClass("active");
        $(".portDetail>div").eq(portIndex).removeClass("selected")
        $(".portDetail>div").eq(portIndex).find(".viewImg")
        .children().eq(0).css("right", 50+"%").siblings().css("right", -100+"%");
    })

    let viewIndex = 0;
    $(".viewBtn>div").on("click", function(){
        viewIndex = $(this).index();
        $(".portDetail>div").eq(portIndex).find(".viewImg")
        .children().eq(viewIndex).stop().animate({
            right: 50+"%"
        }, 500).siblings().stop().animate({
            right: -100+"%"
        })
        // console.log("viewIndex: "+viewIndex)
        // console.log("portIndex: "+  portIndex)
    })

    let skillIndex;
    $(".skill .skillWrap>.front>ul>li").on({
        "mouseover": function(){
            skillIndex = $(this).index();
            $(this).addClass("active").siblings().removeClass("active")
            $(".skill .skillWrap>.front>.textWrap>div").eq(skillIndex).addClass("active").siblings().removeClass("active")
            // console.log(skillIndex)
        },
        "mouseout": function(){
            $(this).removeClass("active")
            $(".skill .skillWrap>.front>.textWrap>div").eq(skillIndex).removeClass("active")
        },
        "click": function(){
            $(this).addClass("click").siblings().removeClass("click")
            $(".skill .skillWrap>.back>ul>li").removeClass("click");
        }
    })

    $(".skill .skillWrap>.back>ul>li").on({
        "mouseover": function(){
            skillIndex = $(this).index();
            $(this).addClass("active").siblings().removeClass("active")
            $(".skill .skillWrap>.back>.textWrap>div").eq(skillIndex).addClass("active").siblings().removeClass("active")
            // console.log(skillIndex)
        },
        "mouseout": function(){
            $(this).removeClass("active")
            $(".skill .skillWrap>.back>.textWrap>div").eq(skillIndex).removeClass("active")
        },
        "click": function(){
            $(this).addClass("click").siblings().removeClass("click")
            $(".skill .skillWrap>.front>ul>li").removeClass("click");
        }
    })
}