let cateNo = get_info_from_url("cateNo")
let itemNo = get_info_from_url("itemNo") - 1

// http://127.0.0.1:5500/302.theComma(item).html?cateNo=0&itemNo=1#product_detail
// 기존 get_info_from_url("itemNo")를 쓰면 itemNo 가 1#product_detail로 반환되기 때문에 아이템 정보가 안 나옴> 함수 수정해야함. 

// console.log(cateNo, itemNo)



// let item = `
//     <div class="img_box">
//         <img src="./img/theComma/items/${EL_ARR[cateNo]}/${ITEM_LIST[cateNo][itemNo].src}" alt="">
//         <div class="magnifier" style="background-image: url(./img/theComma/items/${EL_ARR[cateNo]}/${ITEM_LIST[cateNo][itemNo].src})" ></div>
//     </div>
//     <div class="info_box">
//         <div class="item_title">${ITEM_LIST[cateNo][itemNo].title}</div>

//         <table class="item_info">
//             <tbody>
//                 <tr>
//                     <td class="tb_title">소비자가</td>
//                     <td class="tb_desc"><del>${comma(ITEM_LIST[cateNo][itemNo].o_price)}원</del></td>
//                 </tr>
//                 <tr>
//                     <td class="tb_title">판매가</td>
//                     <td class="tb_desc">${comma(ITEM_LIST[cateNo][itemNo].s_price)}원</td>
//                 </tr>
//                 <tr>
//                     <td class="tb_title" rowspan="2">배송비</td>
//                     <td class="tb_desc">
//                         <select class="tb_order_opt">
//                             <option value="">주문시 결제(선결제)</option>
//                             <option>수령시 결제(착불)</option> 
//                         </select>
//                     </td>
//                 </tr>
//                 <tr>
//                     <td class="tb_desc">2,500원 (3,000,000원 이상 구매 시 무료)</td>
//                 </tr>
//                 <tr>
//                     <td class="tb_title">적립금</td>
//                     <td class="tb_desc">10,000원(20%)</td>
//                 </tr>
//             </tbody>
//         </table> 

//         <div class="color_pick">
//             <div class="cp_L">색상</div> 
//             <div class="cp_R">
//                 <div class="color_box">
//                     <div class="color_opt">
//                         <div class="cb_black" data-color="black"></div>
//                     </div>
//                     <div class="color_opt">
//                         <div class="cb_white" data-color="white"></div>
//                     </div>
//                     <div class="color_opt">
//                         <div class="cb_gray" data-color="gray"></div>
//                     </div>
//                 </div>
//                 <div class="color_desc">[필수] 옵션을 선택해 주세요</div>
//             </div>
//         </div>

//         <div class="selected_opt">
//             <div class="so_desc">(최소주문수량 1개 이상)</div>
//             <div class="selected_item_box">

//             </div>
//         </div>

//         <div class="total_price_box">
//             TOTAL: <span class="final_price">0원</span> (<span class="final_qty">0</span>개)
//         </div>

//         <div class="btn_item_box">
//             <div class="btn_buy">BUY IT NOW</div>
//             <div class="btn_addcart">ADD TO CART</div>
//             <div class="btn_wishlist">WISH LIST</div>
//         </div>
//     </div>
//     `

// $('.detail_box').append(item)




$(document).ready(function () {
    let s_length = $('.sec').length;
    let pos_y = new Array(s_length);
    let indi_h = $('.indi').height();
    let indi_o_top = $('.indi').offset().top;

    let header_h = $('.header').height();
    let container_o_top = $('.container').offset().top;
    
    function value_offset(){
        header_h = $('.header').height();
        container_o_top = $('.container').offset().top;
    }
    setTimeout(function () {
        value_offset();

    }, 100)

    for (let i = 0; i < s_length; i++) {
        pos_y[i] = $('.sec').eq(i).offset().top;
    }
    $(window).resize(function () {
        for (let i = 0; i < s_length; i++) {
            pos_y[i] = $('.sec').eq(i).offset().top;
        }
        indi_o_top= $('.indi').offset().top;
        value_offset();
    })
    $(window).scroll(function () {
        let s_top = $(window).scrollTop();
        for (let i = 0; i < s_length; i++) {
            pos_y[i] = $('.sec').eq(i).offset().top;
        }
        for (let i = 0; i < s_length; i++) {
            if (s_top + 50 >= pos_y[i]) {

                $('.indi_bar').removeClass('indi_bar_active')
                $('.indi_bar').eq(i).addClass('indi_bar_active')
                //break; //0들어와서 실행되면 탈출해서 1234안 돌음
                //0, 1들어와서 실행되면 탈출해서 234안 돌음
            }

        }
        if (s_top + header_h >= indi_o_top) {
            $('.indi').addClass('indi_fixed');
            $('.sec_box').css({ marginTop: 50 })
            $('.header').css({display: 'none'})

        }
        else {
            $('.indi').removeClass('indi_fixed');
            $('.sec_box').css({ marginTop: 0 })
            $('.header').css({display: 'block'})
        }
    });
    $('.indi_bar').click(function (e) {
        e.preventDefault() //a 태그 눌러도 href링크로 이동하지 않게. 안 그럼 깜빡거림. 

        let href = $(this).attr('href');
        let o_top = $(href).offset().top;
$(this).addClass('indi_bar_active')
        //스크롤 부드럽게 움직이게 하는 방법!!
        $('html, body').animate({
            scrollTop: (o_top - indi_h)
        }, 1000)

    })

    
    $('.btn_wishlist').click(function () {
        $('.zzim_icon').toggleClass('zzim_icon_active')
    })
let option_price = 0;
    let total_qty = 1;

    $('.tb_option').click(function(){

        $('.tb_option').removeClass('tb_option_active')
        $(this).toggleClass('tb_option_active');

        let option_img_idx = $(this).attr('data-idx');
        console.log(option_img_idx);
        $('.img_box').children('img').attr('src',`./img/ohprintme/아이템_상세페이지/main/main_card_${option_img_idx}.png`);

        $('.img_box').children('img').removeClass('img_active');
        setTimeout(function(){
            $('.img_box').children('img').addClass('img_active');
        },30)
        
        option_price = $(this).data('price');
        
        total_price()

    })
    $('.tb_order_opt').change(function(){
        total_qty = $(this).val();
        total_price();
    })
    

function total_price() {
    let total_price = 0;

        total_price = total_qty * option_price;
    $('.final_price').text(comma(total_price) + "원")
console.log(total_qty);
    $('.final_qty').text(total_qty)
    
}   

    $('.tb_option').eq(0).trigger('click')


    
})