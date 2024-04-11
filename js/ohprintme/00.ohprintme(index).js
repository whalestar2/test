

$(document).ready(function () {
    let bn_length = $('#main_banner').find('.swiper-slide').length;
    for(let i=0; i<bn_length; i++) {
        $('#main_banner').find('.swiper-slide').eq(i).append(`
        <div class="banner banner${i+1}">
        <div class="black_pan"><div class="b_txt"data-swiper-parallax="-200">
        <div class="b_title_title" data-swiper-parallax="-600"><span class="yellow_txt" data-shadow='NEW'>NEW</span><br><span class="white_txt" data-shadow='STICKER'>STICKER</span></div>
            <div class="b_title" data-swiper-parallax="-600"><span class="oh_box">세상에 하나뿐인</span><br><span class="oh_box">나만의 스티커</span></div>
            <div class="b_subtitle"data-swiper-parallax="-400" >다양한 사이즈, 원하는 모양대로 만드는<br>맞춤 스티커, 지금 1매부터
                만나보세요. </div>
            <button class="banner_go_btn button--wayra" onclick="location.href='#'" >바로가기</button>
        </div></div>
        </div>`)
    }
    let sub_tab_length = $('.sub_tab_box').length;
    let sub_cate =[
        [{title:'셀프 모양 스티커'},{title:'싱글 자유 스티커'},{title:'프리미엄 투명 스티커'},{title:'롤스티커'},{title:'3D스티커'},{title:'싱글 규격 스티커'},{title:'싱글 비규격 스티커'},{title:'레터링 스티커'},{title:'전체보기'}],
        [{title:'기본명함'},{title:'프리미엄 투명 명함'},{title:'셀프 모양 명함'},{title:'롤명함'},{title:'3D명함'},{title:'싱글 규격 명함'},{title:'싱글 비규격 명함'},{title:'레터링 명함'},{title:'전체보기'}],
        [{title:'A형 자석 철제입간판'},{title:'개폐형 철제입간판'},{title:'걸이형/선반형 철제입간판'},{title:'아크릴 현판'},{title:'메탈 현판'},{title:'메탈 표찰'},{title:'조명 돌출 간판'},{title:'깃발 간판'},{title:'전체보기'}],
        [{title:'싱글 자유 명함'},{title:'프리미엄 투명 명함'},{title:'셀프 모양 명함'},{title:'롤명함'},{title:'3D명함'},{title:'싱글 규격 명함'},{title:'싱글 비규격 명함'},{title:'레터링 명함'},{title:'전체보기'}],
        [{title:'싱글 자유 스티커'},{title:'프리미엄 투명 스티커'},{title:'셀프 모양 스티커'},{title:'롤스티커'},{title:'3D스티커'},{title:'싱글 규격 스티커'},{title:'싱글 비규격 스티커'},{title:'레터링 스티커'},{title:'전체보기'}],
        [{title:'싱글 자유 스티커'},{title:'프리미엄 투명 스티커'},{title:'셀프 모양 스티커'},{title:'롤스티커'},{title:'3D스티커'},{title:'싱글 규격 스티커'},{title:'싱글 비규격 스티커'},{title:'레터링 스티커'},{title:'전체보기'}],
        [{title:'싱글 자유 스티커'},{title:'프리미엄 투명 스티커'},{title:'셀프 모양 스티커'},{title:'롤스티커'},{title:'3D스티커'},{title:'싱글 규격 스티커'},{title:'싱글 비규격 스티커'},{title:'레터링 스티커'},{title:'전체보기'}],
        [{title:'싱글 자유 스티커'},{title:'프리미엄 투명 스티커'},{title:'셀프 모양 스티커'},{title:'롤스티커'},{title:'3D스티커'},{title:'싱글 규격 스티커'},{title:'싱글 비규격 스티커'},{title:'레터링 스티커'},{title:'전체보기'}],
        [{title:'싱글 자유 스티커'},{title:'프리미엄 투명 스티커'},{title:'셀프 모양 스티커'},{title:'롤스티커'},{title:'3D스티커'},{title:'싱글 규격 스티커'},{title:'싱글 비규격 스티커'},{title:'레터링 스티커'},{title:'전체보기'}],
        [{title:'싱글 자유 스티커'},{title:'프리미엄 투명 스티커'},{title:'셀프 모양 스티커'},{title:'롤스티커'},{title:'3D스티커'},{title:'싱글 규격 스티커'},{title:'싱글 비규격 스티커'},{title:'레터링 스티커'},{title:'전체보기'}],
        [{title:'싱글 자유 스티커'},{title:'프리미엄 투명 스티커'},{title:'셀프 모양 스티커'},{title:'롤스티커'},{title:'3D스티커'},{title:'싱글 규격 스티커'},{title:'싱글 비규격 스티커'},{title:'레터링 스티커'},{title:'전체보기'}]
    ]
    let sub_cate_length = sub_cate[0].length;
    for(let i=0; i<sub_tab_length; i++) {
        for(let j=0; j<sub_cate_length; j++){
            $('.sub_tab_box').eq(i).append(`<div class="button_box2">
        <button class="sub_tab">${sub_cate[i][j].title}</button>
    </div>`)
        }
        
    }
    const TXT1 =['키즈/어린이','여행','웨딩','반려동물','커플','일상','졸업','심플','' ]
    const TXT2 =['#사랑스런아이 #육아','#여행에 미치다 #여행스타그램 #설레임','#웨딩 #신혼여행','#냥스타그램 #반려묘','#럽스타그램 #데이트','#여유 #daily','#졸업 #축하해','#모던 #simpleisbest','' ]
    for(let i=0; i<9; i++) {
        $('.pb_body').append(`<div class="posy_up pb_item_li">
                            
        <div class="page page1" style="background: url(././img/ohprintme/photobook/${i+1}.png) no-repeat center/ cover">
            <div class="pb_txt_box">
                <div class="pb_txt1">${TXT1[i]}</div>
                <div class="pb_txt2">${TXT2[i]}</div>
            </div>
        </div>
        <div class="page page2" style="background: url(././img/ohprintme/photobook/${i+1}_1.jpg) no-repeat center/ cover"></div>
        <div class="page page3" style="background: url(././img/ohprintme/photobook/${i+1}_2.jpg) no-repeat center/ cover"></div>
        
        
    </div>`)
    }
//  $('#main_banner .b_txt').fadeOut();
 $('#main_banner .b_title_title').fadeIn(1000);
 $('#main_banner .b_title').css({opacity:1});
 $('.oh_box').css({top:0});
 $('#main_banner .b_subtitle').css({opacity:1});
 $('#main_banner .banner_go_btn').css({opacity:1});
 
//  $('#main_banner .b_title_title').fadeIn(300);


    // let wwidth = $(window).innerWidth();
    // 스와이퍼 배너
    let swiper;
    let swiper2;
    // let swiper3;

    initSwiper()
    initSwiper2()
    // initSwiper3()
    $(window).resize(() => {
        // wwidth = $(window).innerWidth();
        swiper.destroy();
        swiper2.destroy();
        // swiper3.destroy();
        
        initSwiper();
        initSwiper2()
        // initSwiper3()
    });

    function initSwiper() {
        swiper = new Swiper(".mySwiper", {
            slidesPerView: 1, // 한번에 보여줄 칸수
            spaceBetween: 0, // 칸 사이사이마다의 여백
            slidesPerGroup: 1, // 한번에 몇개씩 빠져 나가게
            // centeredSlides: true,
            parallx: true,
            allowTouchMove : true,
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

    function initSwiper2() {
        swiper2 = new Swiper(".mySwiper2", {
            slidesPerView: 5, // 한번에 보여줄 칸수
            spaceBetween: 0, // 칸 사이사이마다의 여백
            slidesPerGroup: 1, // 한번에 몇개씩 빠져 나가게
            speed: 1000, // 들어올때까지 걸리는 시간
            loop: true,
            allowTouchMove : true,
            navigation: {
                enabled: 'enable',
                nextEl: '#template_tab .swiper-button-next',
                prevEl: '#template_tab .swiper-button-prev',
            },

            parallax: true,
            breakpoints: {
                480:{
                    slidesPerView: 6,
                },
                768: {
                    slidesPerView: 7,
                },
                1024: {
                    slidesPerView: 9,
                },
                1200: {
                    slidesPerView: 11,
                    loop: false,
                }
                
            }

        });
    }
    // function initSwiper3() {
    //     swiper3 = new Swiper(".mySwiper3", {
    //         slidesPerView: 8, // 한번에 보여줄 칸수
    //         spaceBetween: 0, // 칸 사이사이마다의 여백
    //         slidesPerGroup: 1, // 한번에 몇개씩 빠져 나가게
    //         speed: 1000, // 들어올때까지 걸리는 시간
    //         loop: true,
    //         allowTouchMove : true,
    //         // navigation: {
    //         //     enabled: 'enable',
    //         //     nextEl: '#template_tab .swiper-button-next',
    //         //     prevEl: '#template_tab .swiper-button-prev',
    //         // },

    //         parallax: true,
    //         breakpoints: {
    //             480:{
    //                 slidesPerView: 8,
    //             },
    //             768: {
    //                 slidesPerView: 8,
    //             },
    //             1024: {
    //                 slidesPerView: 9,loop: false,
    //             },
    //             // 1200: {
    //             //     slidesPerView: 11,
                    
    //             // }
                
    //         }

    //     });


    // }
    let MainSwiper = new Swiper('.main_swiper', {
        slidesPerView: 1, // 한번에 보여줄 칸수
            spaceBetween: 0, // 칸 사이사이마다의 여백
            slidesPerGroup: 1, // 한번에 몇개씩 빠져 나가게
            speed: 1000, // 들어올때까지 걸리는 시간
            loop: true,
        navigation: {
          nextEl: '.main_nav .swiper-button-next',
          prevEl: '.main_nav .swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
      });
      
      let SubSwiper = new Swiper('.sub_swiper', {
        slidesPerView: 3, // 한번에 보여줄 칸수
            spaceBetween: 0, // 칸 사이사이마다의 여백
            slidesPerGroup: 1, // 한번에 몇개씩 빠져 나가게
            speed: 1000, // 들어올때까지 걸리는 시간
            loop: true,
            autoplay: {
                delay: 2000 // setInterval 같은거
            },
        // pagination: {
        //   el: '.swiper-pagination',
        //   type: 'bullets',
        //   clickable: true,
        // },
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
      });
      
    //   MainSwiper.controller.control = SubSwiper;
    //   SubSwiper.controller.control = MainSwiper;










    // 찜 버튼 클릭
    $('#w_ranking .zzim_icon').click(function () {
        $(this).toggleClass('zzim_icon_active')
    })
// 장점 제목 애니
    $('.bf_tit_line').animate({left: `-100`, opacity:0.5},500);
    $('.benefit_box_title').animate({left: `0`, opacity:1},500);


    

    // 스크롤 위치에 따라 각 섹션의 아이템들 샤샤샥 하기
    let week_o_top = $('#w_ranking').offset().top;
    let benefit_o_top = $('#benefit').offset().top;
    let template_o_top = $('#template').offset().top;
    
    let template_o_bot = $('#template').offset().top + $('#template').height();
    let photobook_o_top = $('#photobook').offset().top;
    let s_top = $(window).scrollTop();
    function value_offset(){
        benefit_o_top = $('#benefit').offset().top;
        week_o_top = $('#w_ranking').offset().top;
        template_o_top = $('#template').offset().top;
        template_o_bot = $('#template').offset().top + $('#template').height();
        photobook_o_top = $('#photobook').offset().top;
        s_top = $(window).scrollTop();
    }
    setTimeout(function () {
        value_offset();

    }, 100)

    // let w_ranking_chk = true;
    // let best_chk = true;
    // let new_chk = true;
    let toChk_arr = new Array($('.toChk').length);
    for (let i = 0; i < toChk_arr.length; i++) {
        toChk_arr[i] = true
    }
    console.log("toChk: ", toChk_arr)


    $(window).resize(function(){
        value_offset();
        console.log(s_top,photobook_o_top)
    })
    $(window).scroll(function () {
        let s_top = $(window).scrollTop();
        let s_bot = s_top + $(window).height();

        // best_o_top = $('#best').offset().top
        // new_o_top = $('#new').offset().top
        console.log(s_bot, template_o_bot)

        if(s_bot - 300 >=benefit_o_top ) {
            $('#benefit').removeClass('posx_RR');
            setTimeout(function() { 
                 item_slideUp($('#benefit .benefit'));
            }, 500);
            
        }
        else {
            $('#benefit').addClass('posx_RR');
            item_slideDown($('#benefit .benefit'));
        }
        
    

        if(s_bot - 300 >= template_o_top){
            $('.tape1').addClass('tape1_active')
            $('#template .posx_L ').addClass('posx_active')
        }
        else{
            $('.tape1').removeClass('tape1_active')
            $('#template .posx_L ').removeClass('posx_active')
        }
        if(s_bot - 500 >= template_o_top){
            $('#template .posx_R').addClass('posx_active')
        }
        else{
            $('#template .posx_R').removeClass('posx_active')
        }
        if(s_bot >=template_o_bot) {
            $('.tape2').addClass('tape2_active')
        }
        else {$('.tape2').removeClass('tape2_active') }

        // if(s_bot - 500 >= photobook_o_top){
        //     item_slideUp2($('.photobook_sec'))
        // }
        // else{
        //     item_slideDown2($('.photobook_sec'))
        // }
        if(s_bot - 500 >= photobook_o_top){
            $('.photobook_sec').addClass('photobook_sec_back_active')
        }
        else{
            $('.photobook_sec').removeClass('photobook_sec_back_active')
        }
        if(s_bot - 700 >= photobook_o_top){
            item_slideUp2($('#photobook .posy_up'))
        }
        else{
            item_slideDown2($('#photobook .posy_up'))
        }
        if(s_bot - 900 >= photobook_o_top){
            item_slideUp2($('#photobook .pb_body .posy_up'))

        }
        else{
            item_slideDown2($('#photobook .pb_body .posy_up'))
        }




        if (s_bot - 300 >= week_o_top) {
            item_slideUp($('#w_ranking .pos_init'));
            // w_ranking_chk=false; 
        }
        else {
            item_slideDown($('#w_ranking .pos_init'));
        }

    })

    function item_slideUp(el) {
        for (let i = 0; i < el.length; i++) {
            el.eq(i).css({ transition: `all 0.5s ${i * 0.1}s` })
            el.eq(i).addClass('pos_init_active')

        }
    }
    function item_slideDown(el) {
        for (let i = 0; i < el.length; i++) {
            el.eq(i).css({ transition: `all 0.5s ${i * 0.1}s` })
            el.eq(i).removeClass('pos_init_active')

        }
    }

    function item_slideUp2(el) {
        for (let i = 0; i < el.length; i++) {
            el.eq(i).css({ transition: `all 0.7s ${i * 0.1}s` })
            el.eq(i).addClass('posy_down')

        }
    }
    function item_slideDown2(el) {
        for (let i = 0; i < el.length; i++) {
            el.eq(i).css({ transition: `all 0.5s ${i * 0.1}s` })
            el.eq(i).removeClass('posy_down')

        }
    }

    $('.pb_item_li').hover(function(){
        $('.pb_item_li').addClass('pb_item_active')
    },function(){
        $('.pb_item_li').removeClass('pb_item_active')
    })
    

    // 레이어팝업 
    // big_img_box에 높이 주기
    let img_box_h = $('.img_box').height();
    $('.big_img_box').css({
        height: img_box_h
    })

    $('.sm_item').mouseenter(function () {
        $('.img_box').fadeOut(200);
        $('.img_box').eq($(this).index()).stop(true).fadeIn(200);

    })

    $('.btn_close, .btn_close_today').click(function () {
        $('.layer_popup').remove();
    })


    // 레이어팝업 끌고 다니기
    /*마우스 위치
        e.clientX: 현재 보이는 브라우저 화면 기준 
        e.offsetX: 이벤트 대상 객체 기준
        e.pageX: 문서 전체 기준
        e.screenX: 모니터 화면 기준(브라우저가 아님)
    */
    $('.layer_popup').mousedown(function (e) {
        let m_posx = e.clientX - $('.layer_popup').position().left
        let m_posy = e.clientY - $('.layer_popup').position().top

        $(document).on('mousemove', function (e) {
            let m_x = e.clientX;
            let m_y = e.clientY;

            // 마우스 위치 - 최초의 클릭했을때의 layer_popup의 왼쪽 모서리 부분으로부터의 마우스 거리
            // 그냥 대놓고 마우스 현재 위치를 layer_popup 한테 주면 그냥 layer_popup의 모서리가 마우스의 현재 위치에 가서 붙어버림 그래서 처음에 m_posX에 layer_popup의 모서리부터 최초 클릭된 마우스 위치간의 간격을 저장해놓고, 이동 될떄마다 현재 마우스 위치에서 그만큼을 뺸 값을 left나 top에 주는거
            $('.layer_popup').css({
                // left: m_x ,
                // top: m_y 
                left: m_x - m_posx,
                top: m_y - m_posy
            })
        })
    })

    $('.layer_popup').mouseup(function () {
        $(document).off('mousemove')
    })

    // $('.tab').mouseenter(function(){
    //     $(this).find('.covered_img').addClass('opacity_on')
    // })
    // $('.tab').mouseleave(function(){
    //     $(this).find('.covered_img').removeClass('opacity_on')
    // })

    $('.tab').on({
        mouseenter:function(){
            if(!$(this).find('.covered_img').attr('class').match(/clicked/)){
            $(this).find('.covered_img').addClass('opacity_on');
            $(this).addClass('tab_down');
            $(this).find('.tab_img_box').addClass('t_i_b_on');
            $(this).find('.tab_img_box').next().addClass('tab_txt');
            

            }
        },
        mouseleave:function(){
            if(!$(this).find('.covered_img').attr('class').match(/clicked/)){
                $(this).find('.covered_img').removeClass('opacity_on');
                $(this).removeClass('tab_down');
                $(this).find('.tab_img_box').removeClass('t_i_b_on')
                $(this).find('.tab_img_box').next().removeClass('tab_txt')


            }
            
            
        },
        click:function(){
            
                $('.covered_img').removeClass('opacity_on clicked')
                $(this).find('.covered_img').addClass('opacity_on  clicked');
                $('.tab').removeClass('tab_up tab_down');

                $(this).addClass('tab_up');
                $('.tab_img_box').removeClass('t_i_b_on')
                $('.tab_img_box').removeClass('t_i_b_click')
                $(this).find('.tab_img_box').addClass('t_i_b_click');

                $('.tab_img_box').next().removeClass('tab_txt');
                $(this).find('.tab_img_box').next().addClass('tab_txt');

                let tab_idx = $(this).attr('data-idx');
                $('.sub_tab_box').addClass('off');
                $('.sub_tab_box').eq(tab_idx).removeClass('off')

            $('.sub_tab_box').eq(tab_idx).find('.sub_tab').eq(0).trigger('click')
            
        }
    })

    $('.tab').eq(0).trigger('click')

    
    $('.sub_tab').on({
        mouseenter:function(){
            if(!$(this).attr('class').match(/clicked/)){
            $(this).addClass('sub_tab_hover');
            

            }
        },
        mouseleave:function(){
            if(!$(this).attr('class').match(/clicked/)){
                $(this).removeClass('sub_tab_hover');
            }
            
        },
        click:function(){
            
                $('.sub_tab').removeClass('sub_tab_hover sub_tab_clicked clicked')
                $(this).addClass('sub_tab_clicked clicked');
                
        }
    });
    $('.sub_tab').eq(0).trigger('click')
    tp_ttt=``;
    $('.template_ex').on({
        click:function(){
            let tp_ex_idx = $(this).index();
            $('.template_img').removeClass(tp_ttt);
            $('.template_img').addClass(`template_ex${tp_ex_idx+1}`);
            tp_ttt = `template_ex${tp_ex_idx+1}`

            $('.template_ex_active').remove();
            $(this).append(`<div class="template_ex_active">
            <div class="checked_icon"></div>
        </div>`)
        },

    })
    $('.template_ex').eq(0).trigger('click')


    
});