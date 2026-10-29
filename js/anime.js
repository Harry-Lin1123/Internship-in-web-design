// 標籤選擇跳轉
var anime=document.querySelector('#anime')
var real=document.querySelector('#real')

var animeContent=document.querySelector('#animeContent')
var realContent=document.querySelector('#realContent')

$(animeContent).show();
$(realContent).hide();


$(anime).css('opacity','1');
$(real).css('opacity','0.3');

anime.addEventListener('click',function(){
    $(animeContent).show();
    $(anime).css('opacity','1');
    $(realContent).hide();
    $(real).css('opacity','0.3');

})
real.addEventListener('click',function(){
    $(animeContent).hide();
    $(anime).css('opacity','0.3');
    $(realContent).show();
    $(real).css('opacity','1');

})





// var subway=document.querySelector('#subway')
// var JR=document.querySelector('#JR')
// var OwnSubway=document.querySelector('#OwnSubway')
// var subwayContent=document.querySelector('#subwayContent')
// var JRContent=document.querySelector('#JRContent')
// var OwnSubwayContent=document.querySelector('#OwnSubwayContent')

// $(subwayContent).show();
// $(JRContent).hide();
// $(OwnSubwayContent).hide();
// $(subway).css('opacity','1');
// $(JR).css('opacity','0.3');
// $(OwnSubway).css('opacity','0.3');

// subway.addEventListener('click',function(){
//     $(subwayContent).show();
//     $(subway).css('opacity','1');
//     $(JRContent).hide();
//     $(JR).css('opacity','0.3');
//     $(OwnSubwayContent).hide();
//     $(OwnSubway).css('opacity','0.3');
// })
// JR.addEventListener('click',function(){
//     $(subwayContent).hide();
//     $(subway).css('opacity','0.3');
//     $(JRContent).show();
//     $(JR).css('opacity','1');
//     $(OwnSubwayContent).hide();
//     $(OwnSubway).css('opacity','0.3');
// })
// OwnSubway.addEventListener('click',function(){
//     $(subwayContent).hide();
//     $(subway).css('opacity','0.3');
//     $(JRContent).hide();
//     $(JR).css('opacity','0.3');
//     $(OwnSubwayContent).show();
//     $(OwnSubway).css('opacity','1');
// })