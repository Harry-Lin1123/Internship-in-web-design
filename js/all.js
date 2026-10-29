$(document).ready(function() {
    $('#navbar-toggler').click(function (e) {
        e.preventDefault();
        $('#navbar-toggler span' ).toggleClass('close');
        $('#navbar-toggler span' ).toggleClass('navbar-toggler-icon');
        
    });
    $(document).ready(function () {
        // 捲軸偵測距離頂部超過 50 才顯示按鈕
        $(window).scroll(function () {
          if ($(window).scrollTop() > 50) {
            if ($(".back-top").hasClass("hide")) {
              $(".back-top").toggleClass("hide");
            }
          } else {
            $(".back-top").addClass("hide");
          }
        });
      
        // 點擊按鈕回頂部
        $(".back-top").on("click", function (event) {
          $("html, body").animate(
            {
              scrollTop: 0
            },
            500 // 回頂部時間為 500 毫秒
          );
        });
      });
    // 讓a連結不可點?不確定
    // $('a.thumb').click(function(event){
    //     event.preventDefault();
    //     var content = $('.modal-body');
    //     content.empty();
    //       var title = $(this).attr("title");
    //       $('.modal-title').html(title);        
    //       content.html($(this).html());
    //       $(".modal-profile").modal({show:true});
    //   });
      // 字數檢查使用...

    var len = 70; // 超過70個字以"..."取代
    $(".JQellipsis").each(function(i){
        if($(this).text().length>len){
            $(this).attr("title",$(this).text());
            var text=$(this).text().substring(0,len-1)+"...";
            $(this).text(text);
        }
    });

    var len2 = 35; // 超過30個字以"..."取代
    $(".JQellipsis35").each(function(i){
        if($(this).text().length>len2){
            $(this).attr("title",$(this).text());
            var text=$(this).text().substring(0,len2-1)+"...";
            $(this).text(text);
        }
    });
});


// 地區 area
$('#carouselExample').on('slide.bs.carousel', function (e) {

  
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $('#carouselExample .carousel-item').length;
    
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('#carouselExample .carousel-item').eq(i).appendTo('#carouselExample .carousel-inner');
            }
            else {
                $('#carouselExample .carousel-item').eq(0).appendTo('#carouselExample .carousel-inner');
            }
        }
    }
  });

//   商店
  $('#carouselExample2').on('slide.bs.carousel', function (e) {

  
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $('#carouselExample2 .carousel-item').length;
    
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('#carouselExample2 .carousel-item').eq(i).appendTo('#carouselExample2 .carousel-inner');
            }
            else {
                $('#carouselExample2 .carousel-item').eq(0).appendTo('#carouselExample2 .carousel-inner');
            }
        }
    }
  });  
  $('#carouselExample2-2').on('slide.bs.carousel', function (e) {

  
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $('#carouselExample2-2 .carousel-item').length;
    
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('#carouselExample2-2 .carousel-item').eq(i).appendTo('#carouselExample2-2 .carousel-inner');
            }
            else {
                $('#carouselExample2-2 .carousel-item').eq(0).appendTo('#carouselExample2-2 .carousel-inner');
            }
        }
    }
  });  
  $('#carouselExample2-3').on('slide.bs.carousel', function (e) {

  
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $('#carouselExample2-3 .carousel-item').length;
    
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('#carouselExample2-3 .carousel-item').eq(i).appendTo('#carouselExample2-3 .carousel-inner');
            }
            else {
                $('#carouselExample2-3 .carousel-item').eq(0).appendTo('#carouselExample2-3 .carousel-inner');
            }
        }
    }
  });  
//   地區1 place1
  $('#carouselExample3-1').on('slide.bs.carousel', function (e) {

  
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 4;
    var totalItems = $('#carouselExample3-1 .carousel-item').length;
    
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('#carouselExample3-1 .carousel-item').eq(i).appendTo('#carouselExample3-1 .carousel-inner');
            }
            else {
                $('#carouselExample3-1 .carousel-item').eq(0).appendTo('#carouselExample3-1 .carousel-inner');
            }
        }
    }
  });  
//   地區2 place2
  $('#carouselExample3-2').on('slide.bs.carousel', function (e) {

  
    var $e = $(e.relatedTarget);
    var idx = $e.index(); 
    var itemsPerSlide = 4;
    var totalItems = $('#carouselExample3-2 .carousel-item').length;
    
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('#carouselExample3-2 .carousel-item').eq(i).appendTo('#carouselExample3-2 .carousel-inner');
            }
            else {
                $('#carouselExample3-2 .carousel-item').eq(0).appendTo('#carouselExample3-2 .carousel-inner');
            }
        }
    }
  }); 
//   地區3 place3
$('#carouselExample3-3').on('slide.bs.carousel', function (e) {

  
    var $e = $(e.relatedTarget);
    var idx = $e.index(); 
    var itemsPerSlide = 4;
    var totalItems = $('#carouselExample3-3 .carousel-item').length;
    
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('#carouselExample3-3 .carousel-item').eq(i).appendTo('#carouselExample3-3 .carousel-inner');
            }
            else {
                $('#carouselExample3-3 .carousel-item').eq(0).appendTo('#carouselExample3-3 .carousel-inner');
            }
        }
    }
  }); 
//   地區4 place4
$('#carouselExample3-4').on('slide.bs.carousel', function (e) {

  
    var $e = $(e.relatedTarget);
    var idx = $e.index(); 
    var itemsPerSlide = 4;
    var totalItems = $('#carouselExample3-4 .carousel-item').length;
    
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('#carouselExample3-4 .carousel-item').eq(i).appendTo('#carouselExample3-4 .carousel-inner');
            }
            else {
                $('#carouselExample3-4 .carousel-item').eq(0).appendTo('#carouselExample3-4 .carousel-inner');
            }
        }
    }
  }); 
//   地區5 place5
$('#carouselExample3-5').on('slide.bs.carousel', function (e) {


    var $e = $(e.relatedTarget);
    var idx = $e.index(); 
    var itemsPerSlide = 4;
    var totalItems = $('#carouselExample3-5 .carousel-item').length;

    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('#carouselExample3-5 .carousel-item').eq(i).appendTo('#carouselExample3-5 .carousel-inner');
            }
            else {
                $('#carouselExample3-5 .carousel-item').eq(0).appendTo('#carouselExample3-5 .carousel-inner');
            }
        }
    }
}); 
//   地區6 place6
$('#carouselExample3-6').on('slide.bs.carousel', function (e) {

  
    var $e = $(e.relatedTarget);
    var idx = $e.index(); 
    var itemsPerSlide = 4;
    var totalItems = $('#carouselExample3-6 .carousel-item').length;
    
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('#carouselExample3-6 .carousel-item').eq(i).appendTo('#carouselExample3-6 .carousel-inner');
            }
            else {
                $('#carouselExample3-6 .carousel-item').eq(0).appendTo('#carouselExample3-6 .carousel-inner');
            }
        }
    }
  }); 
//   地區7 place7
$('#carouselExample3-7').on('slide.bs.carousel', function (e) {

  
    var $e = $(e.relatedTarget);
    var idx = $e.index(); 
    var itemsPerSlide = 4;
    var totalItems = $('#carouselExample3-7 .carousel-item').length;
    
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('#carouselExample3-7 .carousel-item').eq(i).appendTo('#carouselExample3-7 .carousel-inner');
            }
            else {
                $('#carouselExample3-7 .carousel-item').eq(0).appendTo('#carouselExample3-7 .carousel-inner');
            }
        }
    }
  }); 
//   地區8 place8
$('#carouselExample3-8').on('slide.bs.carousel', function (e) {

  
    var $e = $(e.relatedTarget);
    var idx = $e.index(); 
    var itemsPerSlide = 4;
    var totalItems = $('#carouselExample3-8 .carousel-item').length;
    
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('#carouselExample3-8 .carousel-item').eq(i).appendTo('#carouselExample3-8 .carousel-inner');
            }
            else {
                $('#carouselExample3-8 .carousel-item').eq(0).appendTo('#carouselExample3-8 .carousel-inner');
            }
        }
    }
  }); 



//交通圖片縮放
var modal=document.getElementById("modal");
var modalImg=document.getElementById("modalImage");
var images = document.querySelectorAll(".zoomable");

images.forEach(function(image){
    image.addEventListener("click", function (){
        modal.style.display="block";
        modalImg.src = this.src;
    });
});

var span=document.querySelector(".close");

span.addEventListener("click", function (){
        modal.style.display="none";
});

modal.addEventListener("click", function (event){
    if (event.target==modal){
        modal.style.display="none";
    }
});

var modal2=document.getElementById("modal2");
var modal2Img=document.getElementById("modal2Image");
var images = document.querySelectorAll(".zoomable");

images.forEach(function(image){
    image.addEventListener("click", function (){
        modal2.style.display="block";
        modal2Img.src = this.src;
    });
});

var span2=document.querySelector(".close2");

span2.addEventListener("click", function (){
        modal2.style.display="none";
});

modal2.addEventListener("click", function (event){
    if (event.target==modal2){
        modal2.style.display="none";
    }
});
// 頁簽展示
var hidWidth;
var scrollBarWidths = 40;

var widthOfList = function() {
    var itemsWidth = 0;
    $('.list a').each(function() {
        var itemWidth = $(this).outerWidth();
        itemsWidth += itemWidth;
    });
    return itemsWidth;
};

var widthOfHidden = function(){
    var ww = 0 - $('.wrapper-nav').outerWidth();

    var hw = (($('.wrapper-nav').outerWidth()) - widthOfList() - getLeftPosi()) - scrollBarWidths;

    var rp = $(document).width() - ($('.nav-item.nav-link').last().offset().left + $('.nav-item.nav-link').last().outerWidth());

    if (ww > hw) {
        //return ww;
        return (rp > ww ? rp : ww);
    }
    else {
        //return hw;
        return (rp > hw ? rp : hw);
    }
};

var getLeftPosi = function(){
    
    var ww = 0 - $('.wrapper-nav').outerWidth();
    var lp = $('.list').position().left;
    
    if (ww > lp) {
        return ww;
    }
    else {
        return lp;
    }
};

var reAdjust = function(){
    // check right pos of last nav item
    var rp = $(document).width() - ($('.nav-item.nav-link').last().offset().left + $('.nav-item.nav-link').last().outerWidth());

    if (($('.wrapper-nav').outerWidth()) < widthOfList() && (rp < 0)) {
        $('.scroller-right').show().css('display', 'flex');
    }
    else {
        $('.scroller-right').hide();
    }
    
    if (getLeftPosi() < 0) {
        $('.scroller-left').show().css('display', 'flex');
    }
    else {
        $('.scroller-left').hide();
    }
}

reAdjust();

$(window).on('resize',function(e){
    reAdjust();
});

$('.scroller-right').click(function() {
    $('.scroller-left').fadeIn('slow');
    $('.scroller-right').fadeOut('slow');

    $('.list').animate({ left: `+=${widthOfHidden()}px` }, 'slow', function() {
        reAdjust();
    });
});

$('.scroller-left').click(function() {

    $('.scroller-right').fadeIn('slow');
    $('.scroller-left').fadeOut('slow');

    $('.list').animate({ left: `-=${getLeftPosi()}px` }, 'slow', function() {
        reAdjust();
    });
});