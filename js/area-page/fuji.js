$(document).ready(function () {
    // 捲軸偵測距離頂部超過 50 才顯示按鈕
    $(window).scroll(function () {
      if ($(window).scrollTop() > 50) {
        if ($(".back-top2").hasClass("hide")) {
          $(".back-top2").toggleClass("hide");
        }
      } else {
        $(".back-top2").addClass("hide");
      }
    });
  
    // 點擊按鈕回頂部
    $(".back-top2").on("click", function (event) {
      $("html, body").animate(
        {
          scrollTop: 0
        },
        500 // 回頂部時間為 500 毫秒
      );
    });
  });


  // 標籤選擇開關
var journey=document.querySelector('#journey')
var paradise=document.querySelector('#paradise')
var play=document.querySelector('#play')
var live=document.querySelector('#live')

var journeyContent=document.querySelector('#journeyContent')
var playContent=document.querySelector('#playContent')
var paradiseContent=document.querySelector('#paradiseContent')
var liveContent=document.querySelector('#liveContent')
live
$(journeyContent).show();
$(paradiseContent).hide();
$(playContent).hide();
$(liveContent).hide();

$(journey).css('opacity','1');
$(play).css('opacity','0.3');
$(paradise).css('opacity','0.3');
$(live).css('opacity','0.3');



journey.addEventListener('click',function(){
$(journeyContent).show();
$(journey).css('opacity','1');
$(playContent).hide();
$(paradise).css('opacity','0.3');
$(paradiseContent).hide();
$(play).css('opacity','0.3');
$(liveContent).hide();
$(live).css('opacity','0.3');
})


paradise.addEventListener('click',function(){
$(journeyContent).hide();
$(journey).css('opacity','0.3');
$(playContent).hide();
$(play).css('opacity','0.3');
$(paradiseContent).show();
$(paradise).css('opacity','1');
$(liveContent).hide();
$(live).css('opacity','0.3');
})


play.addEventListener('click',function(){
$(journeyContent).hide();
$(journey).css('opacity','0.3');
$(playContent).show();
$(play).css('opacity','1');
$(paradiseContent).hide();
$(paradise).css('opacity','0.3');
$(liveContent).hide();
$(live).css('opacity','0.3');
})


live.addEventListener('click',function(){
$(journeyContent).hide();
$(journey).css('opacity','0.3');
$(playContent).hide();
$(paradise).css('opacity','0.3');
$(paradiseContent).hide();
$(play).css('opacity','0.3');
$(liveContent).show();
$(live).css('opacity','1');
})




// 標籤選擇跳轉
var place1=document.querySelector('#place1')
var place2=document.querySelector('#place2')
var place3=document.querySelector('#place3')
var place4=document.querySelector('#place4')
var place5=document.querySelector('#place5')
var place6=document.querySelector('#place6')

var place1Content=document.querySelector('#place1Content')
var place2Content=document.querySelector('#place2Content')
var place3Content=document.querySelector('#place3Content')
var place4Content=document.querySelector('#place4Content')
var place5Content=document.querySelector('#place5Content')
var place6Content=document.querySelector('#place6Content')

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
place1.addEventListener('click',function(){
    to(place1Content)
})
place2.addEventListener('click',function(){
    to(place2Content)
})
place3.addEventListener('click',function(){
    to(place3Content )
})
place4.addEventListener('click',function(){
    to(place4Content)
})
place5.addEventListener('click',function(){
    to(place5Content)
})
place6.addEventListener('click',function(){
    to(place6Content)
})