$(document).ready(function () {
    let cateNo = get_info_from_url("cateNo")

    let subcate_length = $(SUBCATE_ARR[cateNo]).length;
    if(cateNo != null) {

        for(let i=0; i<subcate_length; i++){
            let subcate_name = SUBCATE_ARR[cateNo][i]
            $('.sub_tab_box').append(`<div class="button_box2">
            <a href="#${subcate_name}" class="sub_tab"><button>${subcate_name}</button></a>
        </div>`)
        $('#item .contents_area1').append(`
        <div class="sec" id="${subcate_name}">
        <div class="sec_title"></div>
        <div class="item_li_box"></div>
        </div>`);
            $('.sec_title').eq(i).text(`${subcate_name}`)

            load_item(cateNo, i, 20)
        }
        

        

    }
    else {
        alert("아이템이 없습니다.")
    }
    // // 무한스크롤
    // let f_o_top = $('.footer').offset().top
    // $(window).scroll(function(){
    //     let s_top = $(window).scrollTop();
    //     let s_bot = s_top + $(window).height();
    //     f_o_top = $('.footer').offset().top

    //     if(s_bot - 200 >= f_o_top) {
    //         console.log("혼자왔니?")


    //         load_item(cateNo, 8)
    //     }

    // });

    let title = ['규조토 코스터', '큐롯토 아크릴', '카드텍', '띠부씰', '카드 스티커', '아크릴 스탠드', '폰케이스', '메탈 액자', '원목 액자', '포토북']
    for (let i = 0; i < 10; i++) {
        $('#main_banner .swiper-wrapper').append(`<div class="swiper-slide">
        <div class="banner" style="background:url(././img/ohprintme/카테고리0/banner/${i}.jpg) no-repeat center / cover;">
        <div class="black_pan">
        <div class="b_txt">
        <div class="b_subtitle" >초간단 커스텀 제작 </div>
            <div class="b_title" >${title[i]}</div>
            <button class="banner_go_btn button--wayra" onclick="location.href='#'">바로 만들기</button>
        </div>
        </div>
        
        </div>
        
    </div>`)
    }



    let swiper;
    // let swiper2;
    // let swiper3;
    initSwiper()
    // initSwiper2()
    // initSwiper3()
    $(window).resize(() => {
        // wwidth = $(window).innerWidth();
        swiper.destroy();
        // swiper2.destroy();
        // swiper3.destroy();

        initSwiper();
        // initSwiper2()
        // initSwiper3()
    });

    function initSwiper() {
        swiper = new Swiper(".mySwiper", {
            slidesPerView: 1, // 한번에 보여줄 칸수
            spaceBetween: 0, // 칸 사이사이마다의 여백
            slidesPerGroup: 1, // 한번에 몇개씩 빠져 나가게
            // centeredSlides: true,
            effect: 'fade',
            parallx: true,
            allowTouchMove: true,
            pagination: {
                el: "#main_banner .swiper-pagination",
                clickable: true,
                type: 'progressbar', //'progressbar' | 'bullets' | 'fraction' | 'custom'
            },

            // autoplay: {
            //     delay: 3000 // setInterval 같은거
            // },
            speed: 1000, // 들어올때까지 걸리는 시간
            loop: true,

            parallax: true,
            breakpoints: {
                768: {
                    pagination: {
                        el: "#main_banner .swiper-pagination2",
                        clickable: true,
                        type: 'bullets', //'progressbar' | 'bullets' | 'fraction' | 'custom'
                        bulletActiveClass: 'bullet_active'
                    },
                    navigation: {
                        enabled: 'enable',
                        nextEl: '#main_banner .swiper-button-next',
                        prevEl: '#main_banner .swiper-button-prev',
                    },

                }
            }

        });
    }




    // 서브탭 이벤트
    let s_length = $('.sec').length;
    let pos_y = new Array(s_length);
    let sub_tab_h = $('.sub_tab_box').height();
    let sub_tab_o_top = $('.sub_tab_box').offset().top;
    for (let i = 0; i < s_length; i++) {
        pos_y[i] = $('.sec').eq(i).offset().top;
    }

    
    $('.sub_tab').on({
        mouseenter: function () {
            if (!$(this).attr('class').match(/clicked/)) {
                $(this).addClass('sub_tab_hover');


            }
        },
        mouseleave: function () {
            if (!$(this).attr('class').match(/clicked/)) {
                $(this).removeClass('sub_tab_hover');
            }

        },
        click: function (e) {
e.preventDefault(); //a 태그 눌러도 href링크로 이동하지 않게. 안 그럼 깜빡거림. 
            $('.sub_tab').removeClass('sub_tab_hover sub_tab_clicked clicked')
            $(this).addClass('sub_tab_clicked clicked');

            

            let href = $(this).attr('href');
            let o_top = $(href).offset().top;
            //스크롤 부드럽게 움직이게 하는 방법!!
            $('html, body').animate({
                scrollTop: (o_top - sub_tab_h +1)
            }, 1000)

        }


    });

    // $('.sub_tab').eq(0).trigger('click')

    let s_top = $(window).scrollTop();
    let header_h = $('.header').height();
    let container_o_top = $('.container').offset().top;
    function value_offset(){
        header_h = $('.header').height();
        container_o_top = $('.container').offset().top;
        s_top = $(window).scrollTop();
    }
    setTimeout(function () {
        value_offset();

    }, 100)
    
    $(window).resize(function () {
        for (let i = 0; i < s_length; i++) {
            pos_y[i] = $('.sec').eq(i).offset().top;
        }
        sub_tab_o_top = $('.sub_tab_box').offset().top;
        value_offset();
    })
    $(window).scroll(function () {
        let s_top = $(window).scrollTop();
        for (let i = 0; i < s_length; i++) {
            pos_y[i] = $('.sec').eq(i).offset().top;
        }
        for (let i = 0; i < s_length; i++) {
            if (s_top + sub_tab_h >= pos_y[i]) {

                $('.sub_tab').removeClass('sub_tab_clicked')
                $('.sub_tab').eq(i).addClass('sub_tab_clicked')
                //break; //0들어와서 실행되면 탈출해서 1234안 돌음
                //0, 1들어와서 실행되면 탈출해서 234안 돌음
            }

        }
        console.log(s_top,sub_tab_h ,sub_tab_o_top ,pos_y[1])
        if (s_top >= sub_tab_o_top) {
            $('.sub_tab_body').addClass('sub_tab_fixed');
            $('.item_body').css({ paddingTop: sub_tab_h })

        }
        else {
            $('.sub_tab_body').removeClass('sub_tab_fixed');
            $('.item_body').css({ paddingTop: 0 })
        }
        if(s_top + header_h >= container_o_top){
            $('.header').css({display: 'none'})
        }
        else {
            $('.header').css({display: 'block'})
        }
    });

})