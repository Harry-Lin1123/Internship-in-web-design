// 標籤選擇跳轉
var about=document.querySelector('#about')
var place=document.querySelector('#place')
var shop=document.querySelector('#shop')
// var street=document.querySelector('#street')
var goods=document.querySelector('#goods')
var aboutContent=document.querySelector('#aboutContent')
var placeContent=document.querySelector('#placeContent')
var shopContent=document.querySelector('#shopContent')
// var streetContent=document.querySelector('#streetContent')
var goodsContent=document.querySelector('#goodsContent')

$(aboutContent).show();
$(placeContent).hide();
$(shopContent).hide();
// $(streetContent).hide();
$(goodsContent).hide();

$(about).css('opacity','1');
$(place).css('opacity','0.3');
$(shop).css('opacity','0.3');
// $(street).css('opacity','0.3');
$(goods).css('opacity','0.3');

about.addEventListener('click',function(){
    $(aboutContent).show();
    $(placeContent).hide();
    $(shopContent).hide();
    // $(streetContent).hide();
    $(goodsContent).hide();
    $(about).css('opacity','1');
    $(place).css('opacity','0.3');
    $(shop).css('opacity','0.3');
    // $(street).css('opacity','0.3');
    $(goods).css('opacity','0.3');
})

place.addEventListener('click',function(){
    $(aboutContent).hide();
    $(placeContent).show();
    $(shopContent).hide();
    // $(streetContent).hide();
    $(goodsContent).hide();
    $(about).css('opacity','0.3');
    $(place).css('opacity','1');
    $(shop).css('opacity','0.3');
    // $(street).css('opacity','0.3');
    $(goods).css('opacity','0.3');
})

shop.addEventListener('click',function(){
    $(aboutContent).hide();
    $(placeContent).hide();
    $(shopContent).show();
    // $(streetContent).hide();
    $(goodsContent).hide();
    $(about).css('opacity','0.3');
    $(place).css('opacity','0.3');
    $(shop).css('opacity','1');
    // $(street).css('opacity','0.3');
    $(goods).css('opacity','0.3');
})

// street.addEventListener('click',function(){
//     $(aboutContent).hide();
//     $(placeContent).hide();
//     $(shopContent).hide();
//     $(streetContent).show();
//     $(goodsContent).hide();
//     $(about).css('opacity','0.3');
//     $(place).css('opacity','0.3');
//     $(shop).css('opacity','0.3');
//     $(street).css('opacity','1');
//     $(goods).css('opacity','0.3');
// })

goods.addEventListener('click',function(){
    $(aboutContent).hide();
    $(placeContent).hide();
    $(shopContent).hide();
    // $(streetContent).hide();
    $(goodsContent).show();
    $(about).css('opacity','0.3');
    $(place).css('opacity','0.3');
    $(shop).css('opacity','0.3');
    // $(street).css('opacity','0.3');
    $(goods).css('opacity','1');
})




// 滾到指定位置(未使用)
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
// street.addEventListener('click',function(){
//     to(streetContent )
// })
// goods.addEventListener('click',function(){
//     to(goodsContent)
// })