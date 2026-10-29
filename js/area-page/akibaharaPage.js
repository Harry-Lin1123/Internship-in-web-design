// 標籤選擇跳轉
var about=document.querySelector('#about')
var place=document.querySelector('#place')
var shop=document.querySelector('#shop')
var food=document.querySelector('#food')
var aboutContent=document.querySelector('#aboutContent')
var placeContent=document.querySelector('#placeContent')
var shopContent=document.querySelector('#shopContent')
var foodContent=document.querySelector('#foodContent')
$(aboutContent).show();
$(placeContent).hide();
$(shopContent).hide();
$(foodContent).hide();

$(about).css('opacity','1');
$(place).css('opacity','0.3');
$(shop).css('opacity','0.3');
$(food).css('opacity','0.3');
about.addEventListener('click',function(){
    $(aboutContent).show();
    $(about).css('opacity','1');
    $(placeContent).hide();
    $(place).css('opacity','0.3');
    $(shopContent).hide();
    $(shop).css('opacity','0.3');
    $(foodContent).hide();
    $(food).css('opacity','0.3');
})
place.addEventListener('click',function(){
    $(aboutContent).hide();
    $(about).css('opacity','0.3');
    $(placeContent).show();
    $(place).css('opacity','1');
    $(shopContent).hide();
    $(shop).css('opacity','0.3');
    $(foodContent).hide();
    $(food).css('opacity','0.3');
})
shop.addEventListener('click',function(){
    $(aboutContent).hide();
    $(about).css('opacity','0.3');
    $(placeContent).hide();
    $(place).css('opacity','0.3');
    $(shopContent).show();
    $(shop).css('opacity','1');
    $(foodContent).hide();
    $(food).css('opacity','0.3');
})
food.addEventListener('click',function(){
    $(aboutContent).hide();
    $(about).css('opacity','0.3');
    $(placeContent).hide();
    $(place).css('opacity','0.3');
    $(shopContent).hide();
    $(shop).css('opacity','0.3');
    $(foodContent).show();
    $(food).css('opacity','1');
})





// // 滾到指定位置(未使用)
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

// about.addEventListener('click',function(){
//     to(aboutContent)
// })
// place.addEventListener('click',function(){
//     to(placeContent)
// })
// shop.addEventListener('click',function(){
//     to(shopContent )
// })
// food.addEventListener('click',function(){
//     to(foodContent)
// })