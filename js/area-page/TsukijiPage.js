// 標籤選擇跳轉
// 從地圖最上到下
// 我把淺草寺設為最後
var about=document.querySelector('#about')
var place=document.querySelector('#place')
var goods=document.querySelector('#goods')
var tuna=document.querySelector('#tuna')
var Toyosu=document.querySelector('#Toyosu')
var aboutContent=document.querySelector('#aboutContent')
var placeContent=document.querySelector('#placeContent')
var goodsContent=document.querySelector('#goodsContent')
var tunaContent=document.querySelector('#tunaContent')
var ToyosuContent=document.querySelector('#ToyosuContent')

// 
function to(toEl){
    let bridge = toEl;
    let body = document.body;
    let height = -70;// 因為有最上面的nav所以跳轉時要下推

    do{
        height += bridge.offsetTop;
        bridge = bridge.offsetParent;
    }while(bridge !== body)
    //滾到指定位置 
    window.scrollTo({
        top:height,
        behavior: 'smooth'
    })
}
// $(function(){
//     var $li = $('.map a');
//         $($li. eq(0) .addClass('active').find('a').attr('href')).siblings('.tab-inner').hide();
    
//         $li.click(function(){
//             $($(this).find('a'). attr ('href')).show().siblings ('.tab-inner').hide();
//             $(this).addClass('active'). siblings ('.active').removeClass('active');
//         });
//     });

// function hide(content){
//     let con=content;

// }
$(aboutContent).show();
$(placeContent).hide();
$(goodsContent).hide();
$(tunaContent).hide();
$(ToyosuContent).hide();

$(about).css('opacity','1');
$(place).css('opacity','0.3');
$(goods).css('opacity','0.3');
$(tuna).css('opacity','0.3');
$(Toyosu).css('opacity','0.3');
about.addEventListener('click',function(){
    $(aboutContent).show();
    $(placeContent).hide();
    $(goodsContent).hide();
    $(tunaContent).hide();
    $(ToyosuContent).hide();
    $(about).css('opacity','1');
    $(place).css('opacity','0.3');
    $(goods).css('opacity','0.3');
    $(tuna).css('opacity','0.3');
    $(Toyosu).css('opacity','0.3');
    
})
place.addEventListener('click',function(){
    $(aboutContent).hide();
    $(placeContent).show();
    $(goodsContent).hide();
    $(tunaContent).hide();
    $(ToyosuContent).hide();
    $(about).css('opacity','0.3');
    $(place).css('opacity','1');
    $(goods).css('opacity','0.3');
    $(tuna).css('opacity','0.3');
    $(Toyosu).css('opacity','0.3');
})
goods.addEventListener('click',function(){
    $(aboutContent).hide();
    $(placeContent).hide();
    $(goodsContent).show();
    $(tunaContent).hide();
    $(ToyosuContent).hide();
    $(about).css('opacity','0.3');
    $(place).css('opacity','0.3');
    $(goods).css('opacity','1');
    $(tuna).css('opacity','0.3');
    $(Toyosu).css('opacity','0.3');
})
tuna.addEventListener('click',function(){
    $(aboutContent).hide();
    $(placeContent).hide();
    $(goodsContent).hide();
    $(tunaContent).show();
    $(ToyosuContent).hide();
    $(about).css('opacity','0.3');
    $(place).css('opacity','0.3');
    $(goods).css('opacity','0.3');
    $(tuna).css('opacity','1');
    $(Toyosu).css('opacity','0.3');
})
Toyosu.addEventListener('click',function(){
    $(aboutContent).hide();
    $(placeContent).hide();
    $(goodsContent).hide();
    $(tunaContent).hide();
    $(ToyosuContent).show();
    $(about).css('opacity','0.3');
    $(place).css('opacity','0.3');
    $(goods).css('opacity','0.3');
    $(tuna).css('opacity','0.3');
    $(Toyosu).css('opacity','1');
})
// place5.addEventListener('click',function(){
//     to(place5Content)
// })
// place6.addEventListener('click',function(){
//     to(place6Content)
// })
// place7.addEventListener('click',function(){
//     to(place7Content)
// })
// place8.addEventListener('click',function(){
//     to(place8Content)
// })
// place9.addEventListener('click',function(){
//     to(place9Content)
// })