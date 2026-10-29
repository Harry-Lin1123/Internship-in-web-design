


// $('.toggleText').click(function(){
//     $(this).parent('.d-flex').next('.downBox').toggleClass('d-none');
//     $(this).parent('.d-flex').parent('.boxL').toggleClass('col-6');
//     $(this).parent('.d-flex').parent('.boxL').toggleClass('col-12');
//     $(this).parent('.d-flex').parent('.boxL').next('.boxR').toggleClass('d-none');
//     $(this).toggleClass('col-6');
//     $(this).toggleClass('col-12');
//     $(this).next('.word').toggleClass('d-none');
// })

// $('.toggleText2').click(function(){
//     $(this).parent('.d-flex').next('.downBox').toggleClass('d-none');
//     $(this).parent('.d-flex').parent('.boxR').toggleClass('col-6');
//     $(this).parent('.d-flex').parent('.boxR').toggleClass('col-12');
//     $(this).parent('.d-flex').parent('.boxR').prev('.boxL').toggleClass('d-none');
//     $(this).toggleClass('col-6');
//     $(this).toggleClass('col-12');
//     $(this).prev('.word').toggleClass('d-none');
//     $(this).prev('.word').toggleClass('col-6');
//     $(this).parent('.d-flex').prev('.ContentTitle').toggleClass('col-6');
//     $(this).parent('.d-flex').prev('.ContentTitle').toggleClass('col-12');
//     $(this).parent('.d-flex').prev('.ContentTitle').toggleClass('ml-auto');
// })


$(".toggleText").click(function () {
    $(this).siblings(".content").slideToggle();
});

//   let active = null;
// $(".box").click(function () {
//   const $clicked = $(this);
//   const $row = $clicked.closest(".row");
//   const $boxes = $row.find(".box");
//   const $other = $boxes.not($clicked);

//   if ($clicked.hasClass("active")) {
//     // 再次點擊：顯示兩個區塊，隱藏內容
//     $boxes.slideDown().removeClass("hidden active");
//     $boxes.find(".content").slideUp();
//   } else {
//     // 隱藏另一個區塊，顯示內容
//     $other.slideUp(function () {
//       $(this).addClass("hidden").removeClass("active");
//       $(this).find(".content").slideUp();
//     });

//     $clicked.removeClass("hidden").addClass("active").slideDown();
//     $clicked.find(".content").slideDown();
//   }
// });


