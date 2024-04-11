const ITEM_LIST = [
    [
        [{ item_no: 0, src: '0.jpg', covered_src: '0_1.jpg', detail_src: '0_2.png', title: '포토카드', o_price: 3000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.' },
        { item_no: 1, src: '1.jpg', covered_src: '1_1.jpg', detail_src: '1_2.png', title: '떡메모지', o_price: 3000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.' },
        { item_no: 2, src: '2.jpg', covered_src: '2_1.jpg', title: '랩핑지', o_price: 20000, s_price: 4000, desc: '상품에 대한 설명이 표시됩니다.' },
        { item_no: 3, src: '3.jpg', covered_src: '3_1.jpg', title: '거울', o_price: 30000, s_price: 5000, desc: '상품에 대한 설명이 표시됩니다.' },
        { item_no: 4, src: '4.jpg', covered_src: '4_1.jpg', title: '클립보드', o_price: 8600, s_price: 4000, desc: '상품에 대한 설명이 표시됩니다.' },
        { item_no: 5, src: '5.jpg', covered_src: '5_1.jpg', title: '클립펜', o_price: 50000, s_price: 6000, desc: '상품에 대한 설명이 표시됩니다.' },
        { item_no: 6, src: '6.jpg', covered_src: '6_1.jpg', title: '마스킹테이프', o_price: 70000, s_price: 5000, desc: '상품에 대한 설명이 표시됩니다.' },
        { item_no: 7, src: '7.jpg', covered_src: '7_1.jpg', title: '머그컵', o_price: 70000, s_price: 8000, desc: '상품에 대한 설명이 표시됩니다.' },
        { item_no: 8, src: '8.jpg', covered_src: '8_1.jpg', title: '도장', o_price: 70000, s_price: 10000, desc: '상품에 대한 설명이 표시됩니다.' }],
        [{ item_no: 0, src: '0.jpg', covered_src: '0_1.jpg', detail_src: '0_2.png', title: '포토카드', o_price: 3000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.' },
        { item_no: 1, src: '1.jpg', covered_src: '1_1.jpg', detail_src: '1_2.png', title: '떡메모지', o_price: 3000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.' },
        { item_no: 2, src: '2.jpg', covered_src: '2_1.jpg', title: '랩핑지', o_price: 20000, s_price: 4000, desc: '상품에 대한 설명이 표시됩니다.' },
        { item_no: 3, src: '3.jpg', covered_src: '3_1.jpg', title: '거울', o_price: 30000, s_price: 5000, desc: '상품에 대한 설명이 표시됩니다.' },
        { item_no: 4, src: '4.jpg', covered_src: '4_1.jpg', title: '클립보드', o_price: 8600, s_price: 4000, desc: '상품에 대한 설명이 표시됩니다.' },
        { item_no: 5, src: '5.jpg', covered_src: '5_1.jpg', title: '클립펜', o_price: 50000, s_price: 6000, desc: '상품에 대한 설명이 표시됩니다.' },
        { item_no: 6, src: '6.jpg', covered_src: '6_1.jpg', title: '마스킹테이프', o_price: 70000, s_price: 5000, desc: '상품에 대한 설명이 표시됩니다.' },
        { item_no: 7, src: '7.jpg', covered_src: '7_1.jpg', title: '머그컵', o_price: 70000, s_price: 8000, desc: '상품에 대한 설명이 표시됩니다.' },
        { item_no: 8, src: '8.jpg', covered_src: '8_1.jpg', title: '도장', o_price: 70000, s_price: 10000, desc: '상품에 대한 설명이 표시됩니다.' }],
        [{ item_no: 0, src: '0.jpg', covered_src: '0_1.jpg', detail_src: '0_2.png', title: '포토카드', o_price: 3000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.' },
        { item_no: 1, src: '1.jpg', covered_src: '1_1.jpg', detail_src: '1_2.png', title: '떡메모지', o_price: 3000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.' },
        { item_no: 2, src: '2.jpg', covered_src: '2_1.jpg', title: '랩핑지', o_price: 20000, s_price: 4000, desc: '상품에 대한 설명이 표시됩니다.' },
        { item_no: 3, src: '3.jpg', covered_src: '3_1.jpg', title: '거울', o_price: 30000, s_price: 5000, desc: '상품에 대한 설명이 표시됩니다.' },
        { item_no: 4, src: '4.jpg', covered_src: '4_1.jpg', title: '클립보드', o_price: 8600, s_price: 4000, desc: '상품에 대한 설명이 표시됩니다.' },
        { item_no: 5, src: '5.jpg', covered_src: '5_1.jpg', title: '클립펜', o_price: 50000, s_price: 6000, desc: '상품에 대한 설명이 표시됩니다.' },
        { item_no: 6, src: '6.jpg', covered_src: '6_1.jpg', title: '마스킹테이프', o_price: 70000, s_price: 5000, desc: '상품에 대한 설명이 표시됩니다.' },
        { item_no: 7, src: '7.jpg', covered_src: '7_1.jpg', title: '머그컵', o_price: 70000, s_price: 8000, desc: '상품에 대한 설명이 표시됩니다.' },
        { item_no: 8, src: '8.jpg', covered_src: '8_1.jpg', title: '도장', o_price: 70000, s_price: 10000, desc: '상품에 대한 설명이 표시됩니다.' }],
        [{ item_no: 0, src: '0.jpg', covered_src: '0_1.jpg', detail_src: '0_2.png', title: '포토카드', o_price: 3000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.' },
        { item_no: 1, src: '1.jpg', covered_src: '1_1.jpg', detail_src: '1_2.png', title: '떡메모지', o_price: 3000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.' },
        { item_no: 2, src: '2.jpg', covered_src: '2_1.jpg', title: '랩핑지', o_price: 20000, s_price: 4000, desc: '상품에 대한 설명이 표시됩니다.' },
        { item_no: 3, src: '3.jpg', covered_src: '3_1.jpg', title: '거울', o_price: 30000, s_price: 5000, desc: '상품에 대한 설명이 표시됩니다.' },
        { item_no: 4, src: '4.jpg', covered_src: '4_1.jpg', title: '클립보드', o_price: 8600, s_price: 4000, desc: '상품에 대한 설명이 표시됩니다.' },
        { item_no: 5, src: '5.jpg', covered_src: '5_1.jpg', title: '클립펜', o_price: 50000, s_price: 6000, desc: '상품에 대한 설명이 표시됩니다.' },
        { item_no: 6, src: '6.jpg', covered_src: '6_1.jpg', title: '마스킹테이프', o_price: 70000, s_price: 5000, desc: '상품에 대한 설명이 표시됩니다.' },
        { item_no: 7, src: '7.jpg', covered_src: '7_1.jpg', title: '머그컵', o_price: 70000, s_price: 8000, desc: '상품에 대한 설명이 표시됩니다.' },
        { item_no: 8, src: '8.jpg', covered_src: '8_1.jpg', title: '도장', o_price: 70000, s_price: 10000, desc: '상품에 대한 설명이 표시됩니다.' }],
        [{ item_no: 0, src: '0.jpg', covered_src: '0_1.jpg', detail_src: '0_2.png', title: '포토카드', o_price: 3000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.' },
        { item_no: 1, src: '1.jpg', covered_src: '1_1.jpg', detail_src: '1_2.png', title: '떡메모지', o_price: 3000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.' },
        { item_no: 2, src: '2.jpg', covered_src: '2_1.jpg', title: '랩핑지', o_price: 20000, s_price: 4000, desc: '상품에 대한 설명이 표시됩니다.' },
        { item_no: 3, src: '3.jpg', covered_src: '3_1.jpg', title: '거울', o_price: 30000, s_price: 5000, desc: '상품에 대한 설명이 표시됩니다.' },
        { item_no: 4, src: '4.jpg', covered_src: '4_1.jpg', title: '클립보드', o_price: 8600, s_price: 4000, desc: '상품에 대한 설명이 표시됩니다.' },
        { item_no: 5, src: '5.jpg', covered_src: '5_1.jpg', title: '클립펜', o_price: 50000, s_price: 6000, desc: '상품에 대한 설명이 표시됩니다.' },
        { item_no: 6, src: '6.jpg', covered_src: '6_1.jpg', title: '마스킹테이프', o_price: 70000, s_price: 5000, desc: '상품에 대한 설명이 표시됩니다.' },
        { item_no: 7, src: '7.jpg', covered_src: '7_1.jpg', title: '머그컵', o_price: 70000, s_price: 8000, desc: '상품에 대한 설명이 표시됩니다.' },
        { item_no: 8, src: '8.jpg', covered_src: '8_1.jpg', title: '도장', o_price: 70000, s_price: 10000, desc: '상품에 대한 설명이 표시됩니다.' }],
        [{ item_no: 0, src: '0.jpg', covered_src: '0_1.jpg', detail_src: '0_2.png', title: '포토카드', o_price: 3000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.' },
        { item_no: 1, src: '1.jpg', covered_src: '1_1.jpg', detail_src: '1_2.png', title: '떡메모지', o_price: 3000, s_price: 50000, desc: '상품에 대한 설명이 표시됩니다.' },
        { item_no: 2, src: '2.jpg', covered_src: '2_1.jpg', title: '랩핑지', o_price: 20000, s_price: 4000, desc: '상품에 대한 설명이 표시됩니다.' },
        { item_no: 3, src: '3.jpg', covered_src: '3_1.jpg', title: '거울', o_price: 30000, s_price: 5000, desc: '상품에 대한 설명이 표시됩니다.' },
        { item_no: 4, src: '4.jpg', covered_src: '4_1.jpg', title: '클립보드', o_price: 8600, s_price: 4000, desc: '상품에 대한 설명이 표시됩니다.' },
        { item_no: 5, src: '5.jpg', covered_src: '5_1.jpg', title: '클립펜', o_price: 50000, s_price: 6000, desc: '상품에 대한 설명이 표시됩니다.' },
        { item_no: 6, src: '6.jpg', covered_src: '6_1.jpg', title: '마스킹테이프', o_price: 70000, s_price: 5000, desc: '상품에 대한 설명이 표시됩니다.' },
        { item_no: 7, src: '7.jpg', covered_src: '7_1.jpg', title: '머그컵', o_price: 70000, s_price: 8000, desc: '상품에 대한 설명이 표시됩니다.' },
        { item_no: 8, src: '8.jpg', covered_src: '8_1.jpg', title: '도장', o_price: 70000, s_price: 10000, desc: '상품에 대한 설명이 표시됩니다.' }]

    ]
]
const CATE_ARR = ['cate0', 'cate1', 'cate2', 'cate3', 'cate4', 'cate5', 'cate6'];
const SUBCATE_ARR = [[['문구'],['아크릴'],['기념품'],['폰액세서리'],['스티커'],['시즌상품']]]

// 특정 위치에 특정 개수만큼 li(item)들 넣어주기
function load_item(cate, subcate, qty) {
    
    let curr_count = $(`#${SUBCATE_ARR[cate][subcate]} .item_li_box > .item_li`).length;
    let last_no = curr_count + qty;

    let limitNo = ITEM_LIST[cate][subcate].length; // best-22개
    if (last_no > limitNo) {
        last_no = limitNo;
    }

    for (let i = curr_count; i < last_no; i++) {
        let tmp = ITEM_LIST[cate][subcate][i];

        /* 
        let tmp_list = `
                <li class="item">
                    <div class="item_img">
                        <a href="#">
                            <img src="./img/theComma/items/${EL_ARR[cate]}/${tmp.src}" alt=""> `
                            
        // if(cate == 1) {
        if(tmp.covered_src != undefined) {
            tmp_list+=` <img src="./img/theComma/items/${EL_ARR[cate]}/${tmp.covered_src}" alt="" class="covered_img"> `
        }
        
        tmp_list+=`     </a>
                    </div>
                    <div class="item_info">
                        <div class="item_info_title">${tmp.title}</div>
                        <div class="o_price">${tmp.o_price}원</div>
                        <div class="s_price">${tmp.s_price}원</div>
                        <div class="item_desc">${tmp.desc}</div>
                    </div>
                </li>
            `
        */

        // tmp_list 내부에 삼항연산자 안쓸거면 여기서 cover에 담아서 그 변수 쓰기
        // let cover = "";
        // if (tmp.covered_src != undefined) {
        //     cover += ` <img src="./img/theComma/items/${EL_ARR[cate]}/${tmp.covered_src}" alt="" class="covered_img"> `
        // }

        let tmp_list = `
        <div class="item_li">
        <a href="00.ohprintme(item).html?cateNo=${cate}&subcateNo=${subcate}&itemNo=${ITEM_LIST[cate][subcate][i].item_no}">
            <div class="item_img_box">
                <img class="item_img" src="./img/ohprintme/items/${CATE_ARR[cate]}/${SUBCATE_ARR[cate][subcate]}/${tmp.src}" alt="">
                ${/*삼항연산자*/
            tmp.covered_src != undefined ? `<img src="./img/ohprintme/items/${CATE_ARR[cate]}/${SUBCATE_ARR[cate][subcate]}/${tmp.covered_src}"} alt="" class="covered_img">` : ``

            }

            </div>
            <div class="item_desc_box">
                <div class="desc_title">${tmp.title}</div>
                <div class="desc_price">${comma(tmp.o_price)}원</div>
                <div class="desc_desc">${tmp.desc}</div>
            </div>
        </a>
        </div>
                
            `

        $(`#${SUBCATE_ARR[cate][subcate]} .item_li_box`).append(tmp_list)
    }
}

// url에서 내가 필요한 정보의 값을 얻어오기

// http://127.0.0.1:5500/302.theComma(item).html?cateNo=0&itemNo=1#product_detail
// 기존 get_info_from_url("itemNo")를 쓰면 itemNo 가 1#product_detail로 반환되기 때문에 아이템 정보가 안 나옴> 함수 수정해야함!! > #으로 split해서 반환.


function get_info_from_url(keyword) { // cateNo, itemNo
    let url = location.href; // 302.theComma(item).html?cateNo=0&itemNo=3

    url = url.split("?") // [302.theComma(item).html , cateNo=0&itemNo=3]
    if (url.length > 1) {

        url = url[1].split("&") // [cateNo=0  , itemNo=3]

        for (let i = 0; i < url.length; i++) {
            let tmp_url = url[i].split("=");   // [cateNo  , 0 ]
            // [itemNo, 3#product_detail]

            if (tmp_url[0] == keyword) {
                return tmp_url[1].split("#")[0]; // [3 , product_detail]
            }
        }
    }

    return null;

}

function comma(num) {
    return num.toLocaleString("KO")
}