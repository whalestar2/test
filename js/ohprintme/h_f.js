$(document).ready(function () {

for(let i=0; i<7; i++) {
    $('.pan .contents_area1').append(`<div class="pan_item pan_item${i+1}">
    <div class="c_pan">
        <a href="00.ohprintme(product).html?cateNo=0"><div class="c_pan_img_box">
            <div class="c_pan_img c_pan_img0"></div>
            <div class="menu_icon best_icon"></div>
        </div><div class="c_pan_desc">웰컴키트</div>
    </a>
        
        
    </div>
    <div class="c_pan">
        <a href="00.ohprintme(product).html?cateNo=0">
        <div class="c_pan_img_box">
            <div class="c_pan_img c_pan_img1"></div>
            <div class="menu_icon new_icon"></div>
        </div>
        <div class="c_pan_desc">포스터</div></a>
    </div>
    <div class="c_pan">
        <a href="00.ohprintme(product).html?cateNo=0">
            <div class="c_pan_img_box">
            <div class="c_pan_img c_pan_img2"></div>
            <div class="menu_icon hot_icon"></div>
        </div>
        <div class="c_pan_desc">일러스트굿즈</div>
        </a>
        
    </div>
    <div class="c_pan">
        <a href="00.ohprintme(product).html?cateNo=0">
            <div class="c_pan_img_box">
            <div class="c_pan_img c_pan_img3"></div>
        </div>
        <div class="c_pan_desc">메모지</div>
        </a>
        
    </div>
    <div class="c_pan">
        <a href="00.ohprintme(product).html?cateNo=0">
            <div class="c_pan_img_box">
            <div class="c_pan_img c_pan_img4"></div>
        </div>
        <div class="c_pan_desc">스티커</div>
        </a>
        
    </div>
    <div class="c_pan">
        <a href="00.ohprintme(product).html?cateNo=0">
            <div class="c_pan_img_box">
            <div class="c_pan_img c_pan_img5"></div>
        </div>
        <div class="c_pan_desc">명함</div>
        </a>
        
    </div>
    <div class="c_pan">
        <a href="00.ohprintme(product).html?cateNo=0">
            <div class="c_pan_img_box">
            <div class="c_pan_img c_pan_img6"></div>
        </div>
        <div class="c_pan_desc">전체보기</div>
        </a>
        
    </div>
</div>`)
}



    let h1 = document.querySelector("h1");

h1.addEventListener("input", function() {
  this.setAttribute("data-heading", this.innerText);
});


    // nav에 hover 하면 메뉴100%, 판의 알맹이 나타나게 하기 
    $('.nav_item').hover(function () {
        $('.pan').stop().slideDown(300)

        $('.pan_item').css({ display: 'none' })
        $('.pan_item').eq($(this).index()).css({
            display: 'flex'
        })
    }, function () {
        $('.pan').stop().slideUp(300)
    })

    $('.nav_event').hover(function () {
        $('.pan').stop().slideUp(300)


    }, function () {
        $('.pan').css({ display: 'none' })
    })

    $('.pan').hover(function () {
        $('.pan').stop().slideDown(300)


    }, function () {
        $('.pan').stop().slideUp(300)
    })

//헤더 호버하면 판 액티브 

    // 햄버거버튼 누르면 판 나오게
    let chk = false;
    $('.btn_ham').click(function(){ 

        // 판 들어왔다 나갔다 하게 하기
        // $('.ham_pan').toggleClass('ham_active')
        if(chk) {
            ham('-400px', 'rotate45', 'mid_setting', 'rotate_45', 'mid_setting') 
            $('.logo').css({ display: 'block'})
            $('body').css({ position:"static"})
        }
        else {
            ham(0, 'mid_setting', 'rotate45', 'mid_setting', 'rotate_45')
        $('.logo').css({ display: 'none'})
        $('body').css({ position:"fixed"})
        }
        chk = !chk;
 
    })

        $('.header').hover(function(){
        $('.header').addClass('nav_active');
        $('.logo_img').addClass('logo_a_active');
                    for(let i=0; i<3; i++){
                        $(`.icon${i+1}`).addClass(`icon${i+1}_active`)
                    }
    },function(){
        $('.header').removeClass('nav_active');
        $('.logo_img').removeClass('logo_a_active');
                    for(let i=0; i<3; i++){
                        $(`.icon${i+1}`).removeClass(`icon${i+1}_active`)
                    }
    })
    
    
    $('.blackpan_overlay').on({
        click:function(){
            $('.btn_ham').trigger('click')
        }
    })
    function ham(leftt, a, b, c, d) {
        $('.ham_pan').animate({
            left: leftt
        }, 500)
        $('.blackpan_overlay').toggleClass('blackpan_overlay_active')

        // 버튼 X로 하기
        $('.line_top').toggleClass(a)
        setTimeout(function(){
            $('.line_top').toggleClass(b)
        }, 500)
        
        $('.line_mid').toggleClass('opa_0')

        $('.line_bot').toggleClass(c)
        setTimeout(function(){
            $('.line_bot').toggleClass(d)
        }, 500)

    }
    setTimeout(() => {
        $('.menu_tab_pan').slideUp();
    }, 100);
    
    $('.menu_tab').click(function(){
        $('.menu_tab_pan').slideUp(300);
        setTimeout(() => {
            $(this).next().slideToggle(300)
        }, 300);

        $('.ham_pan_tape').removeClass('ham_pan_tape_posx')
        $(this).children('.ham_pan_tape').addClass('ham_pan_tape_posx')
        
    })


//     $('.menu_tab').hover(function(){

//     },
// function(){

// })














    let container_o_top = $('.container').offset().top;

    let w_width = $(window).width() + 14;

    // 스크롤 내려가면 nav바 끌고 다니게 하기
    // let nav_o_top = $('.nav').offset().top;
    
    // let tb_h = $('.top_banner').height();
    // let nav_h = $('.nav').height();
    // console.log(nav_o_top,nav_h)
    $(window).resize(function () {
        w_width = $(window).width() + 14;
        container_o_top =  $('.container').offset().top;
        // nav_o_top = $('.nav').offset().top;
        // nav_h = $('.nav').height();
    })


    $(window).scroll(function () {
        let s_top = $(window).scrollTop();

        if (w_width > 768) {
            $('.logo_img').removeClass('logo_img2')
            if (container_o_top <= s_top) {
                $('.header').addClass('nav_active');
                $('.logo_img').addClass('logo_a_active');
                for(let i=0; i<3; i++){
                    $(`.icon${i+1}`).addClass(`icon${i+1}_active`)
                }
                
      
            }
            else {
                $('.header').removeClass('nav_active');
                $('.logo_img').removeClass('logo_a_active');
                for(let i=0; i<3; i++){
                    $(`.icon${i+1}`).removeClass(`icon${i+1}_active`)
                }
            }
        }

        else {
            // $('.logo_img').addClass('logo_img2')
            if (container_o_top <= s_top) {
                $('.header').addClass('nav_active');
                $('.logo_img').addClass('logo_a_active');
                // for(let i=0; i<3; i++){
                //     $(`.icon${i+1}`).addClass(`icon${i+1}_active`)
                // }
                
      
            }
            else {
                $('.header').removeClass('nav_active');
                $('.logo_img').removeClass('logo_a_active');
                // for(let i=0; i<3; i++){
                //     $(`.icon${i+1}`).removeClass(`icon${i+1}_active`)
                // }
            }
        }




    })





    $('.quick_btn').click(function () {
        $('#quick .quick_list').slideToggle(500);
    });

    // $('#quick').toggleClass('on');

    $("#quick .top_btn").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 700);
        return false;
    });



})