// 標籤選擇跳轉
var railway=document.querySelector('#railway')
var bus=document.querySelector('#bus')
var taxi=document.querySelector('#taxi')
var car=document.querySelector('#car')
var railwayContent=document.querySelector('#railwayContent')
var busContent=document.querySelector('#busContent')
var taxiContent=document.querySelector('#taxiContent')
var carContent=document.querySelector('#carContent')
$(railwayContent).show();
$(busContent).hide();
$(taxiContent).hide();
$(carContent).hide();

$(railway).css('opacity','1');
$(bus).css('opacity','0.3');
$(taxi).css('opacity','0.3');
$(car).css('opacity','0.3');
railway.addEventListener('click',function(){
    $(railwayContent).show();
    $(railway).css('opacity','1');
    $(busContent).hide();
    $(bus).css('opacity','0.3');
    $(taxiContent).hide();
    $(taxi).css('opacity','0.3');
    $(carContent).hide();
    $(car).css('opacity','0.3');
})
bus.addEventListener('click',function(){
    $(railwayContent).hide();
    $(railway).css('opacity','0.3');
    $(busContent).show();
    $(bus).css('opacity','1');
    $(taxiContent).hide();
    $(taxi).css('opacity','0.3');
    $(carContent).hide();
    $(car).css('opacity','0.3');
})
taxi.addEventListener('click',function(){
    $(railwayContent).hide();
    $(railway).css('opacity','0.3');
    $(busContent).hide();
    $(bus).css('opacity','0.3');
    $(taxiContent).show();
    $(taxi).css('opacity','1');
    $(carContent).hide();
    $(car).css('opacity','0.3');
})
car.addEventListener('click',function(){
    $(railwayContent).hide();
    $(railway).css('opacity','0.3');
    $(busContent).hide();
    $(bus).css('opacity','0.3');
    $(taxiContent).hide();
    $(taxi).css('opacity','0.3');
    $(carContent).show();
    $(car).css('opacity','1');
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