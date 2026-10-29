//   // 標籤選擇開關
//   var pre1=document.querySelector('#pre1')
//   var pre2=document.querySelector('#pre2')
//   var pre3=document.querySelector('#pre3')
//   var pre4=document.querySelector('#pre4')
//   var pre5=document.querySelector('#pre5')
//   var pre6=document.querySelector('#pre6')
//   var pre7=document.querySelector('#pre7')
//   var pre8=document.querySelector('#pre8')

//   var pre1Content=document.querySelector('#pre1Content')
//   var pre2Content=document.querySelector('#pre2Content')
//   var pre3Content=document.querySelector('#pre3Content')
//   var pre4Content=document.querySelector('#pre4Content')
//   var pre5Content=document.querySelector('#pre5Content')
//   var pre6Content=document.querySelector('#pre6Content')
//   var pre7Content=document.querySelector('#pre7Content')
//   var pre8Content=document.querySelector('#pre8Content')


//   function to(toEl){
//     let bridge = toEl;
//     let body = document.body;
//     let height = -70;// 因為有最上面的nav所以跳轉時要下推

//     do{
//         height += bridge.offsetTop;
//         bridge = bridge.offsetParent;
//     }while(bridge !== body)
//     //滾到指定位置 
//     window.scrollTo({
//         top:height,
//         behavior: 'smooth'
//     })
// }
// pre1.addEventListener('click',function(){
//     to(pre1Content)
// })
// pre2.addEventListener('click',function(){
//     to(pre2Content)
// })
// pre3.addEventListener('click',function(){
//     to(pre3Content)
// })
// pre4.addEventListener('click',function(){
//     to(pre4Content)
// })
// pre5.addEventListener('click',function(){
//     to(pre5Content)
// })
// pre6.addEventListener('click',function(){
//     to(pre6Content)
// })
// pre7.addEventListener('click',function(){
//     to(pre7Content)
// })
// pre8.addEventListener('click',function(){
//     to(pre8Content)
// })










(function () {
    initPage();
    $(function () {
        // 表單步驟進度元素設定說明：
        // 1. 用物件陣列進行設定，並透過Template繪製HTML
        // 2. 未完成(預設)步驟設定：stepStatus = "", setpTitle = "{步驟編號}"
        // 3. 目前步驟設定：stepStatus = "active", setpTitle = "{步驟編號}"
        // 4. 完成步驟設定：stepStatus = "done", setpTitle = "<i class='fa fa-check' aria-hidden='true'></i>"
        // 5. 屬性說明：
        //    (1) stepId = HTML元素Id，不可重複
        //    (2) progressDelayTime = 顯示步驟延遲時間，搭配步驟先後可自行設定
        //    (3) stepStatus = 步驟狀態(done：已完成、active：目前步驟、""：未完成(預設))
        //    (4) setpTitle = 步驟編號(圓形內)
        //    (5) stepText = 步驟說明文字

var progressSteps1=[
{"stepId":"line1step1","stepHtml":"prepare.html","progressDelayTime":300,"stepStatus":"active","stepTitle":"1", "stepText": "前往日本"},
{"stepId":"line1step2","stepHtml":"prepare2.html","progressDelayTime":300,"stepStatus":"","stepTitle":"2", "stepText": "購買機票"},
{"stepId":"line1step3","stepHtml":"prepare3.html","progressDelayTime":300,"stepStatus":"","stepTitle":"3", "stepText": "選擇住宿"},
{"stepId":"line1step4","stepHtml":"prepare4.html","progressDelayTime":300,"stepStatus":"","stepTitle":"4", "stepText": "打包行李"},
{"stepId":"line1step5","stepHtml":"prepare5.html","progressDelayTime":300,"stepStatus":"","stepTitle":"5", "stepText": "入境問題"},
{"stepId":"line1step6","stepHtml":"prepare6.html","progressDelayTime":300,"stepStatus":"","stepTitle":"6", "stepText": "行程安排"},
{"stepId":"line1step7","stepHtml":"prepare7.html","progressDelayTime":300,"stepStatus":"","stepTitle":"7", "stepText": "交通方式"},
{"stepId":"line1step8","stepHtml":"prepare8.html","progressDelayTime":300,"stepStatus":"","stepTitle":"8", "stepText": "回程安排"},
{"stepId":"line1step9","stepHtml":"prepare9.html","progressDelayTime":300,"stepStatus":"","stepTitle":"9", "stepText": "出發遊玩"},
];
var progressSteps2=[
{"stepId":"line2step1","stepHtml":"prepare.html","progressDelayTime":300,"stepStatus":"done","stepTitle":"<i class='fa fa-check'aria-hidden='true'></i>", "stepText": "前往日本"},
{"stepId":"line2step2","stepHtml":"prepare2.html","progressDelayTime":300,"stepStatus":"active","stepTitle":"2", "stepText": "購買機票"},
{"stepId":"line2step3","stepHtml":"prepare3.html","progressDelayTime":300,"stepStatus":"","stepTitle":"3", "stepText": "選擇住宿"},
{"stepId":"line2step4","stepHtml":"prepare4.html","progressDelayTime":300,"stepStatus":"","stepTitle":"4", "stepText": "打包行李"},
{"stepId":"line2step5","stepHtml":"prepare5.html","progressDelayTime":300,"stepStatus":"","stepTitle":"5", "stepText": "入境問題"},
{"stepId":"line2step6","stepHtml":"prepare6.html","progressDelayTime":300,"stepStatus":"","stepTitle":"6", "stepText": "行程安排"},
{"stepId":"line2step7","stepHtml":"prepare7.html","progressDelayTime":300,"stepStatus":"","stepTitle":"7", "stepText": "交通方式"},
{"stepId":"line2step8","stepHtml":"prepare8.html","progressDelayTime":300,"stepStatus":"","stepTitle":"8", "stepText": "回程安排"},
{"stepId":"line2step9","stepHtml":"prepare9.html","progressDelayTime":300,"stepStatus":"","stepTitle":"9", "stepText": "出發遊玩"},
];
var progressSteps3=[
{"stepId":"line3step1","stepHtml":"prepare.html","progressDelayTime":300,"stepStatus":"done","stepTitle":"<i class='fa fa-check'aria-hidden='true'></i>", "stepText": "前往日本"},
{"stepId":"line3step2","stepHtml":"prepare2.html","progressDelayTime":300,"stepStatus":"done","stepTitle":"<i class='fa fa-check'aria-hidden='true'></i>", "stepText": "購買機票"},
{"stepId":"line3step3","stepHtml":"prepare3.html","progressDelayTime":300,"stepStatus":"active","stepTitle":"3", "stepText": "選擇住宿"},
{"stepId":"line3step4","stepHtml":"prepare4.html","progressDelayTime":300,"stepStatus":"","stepTitle":"4", "stepText": "打包行李"},
{"stepId":"line3step5","stepHtml":"prepare5.html","progressDelayTime":300,"stepStatus":"","stepTitle":"5", "stepText": "入境問題"},
{"stepId":"line3step6","stepHtml":"prepare6.html","progressDelayTime":300,"stepStatus":"","stepTitle":"6", "stepText": "行程安排"},
{"stepId":"line3step7","stepHtml":"prepare7.html","progressDelayTime":300,"stepStatus":"","stepTitle":"7", "stepText": "交通方式"},
{"stepId":"line3step8","stepHtml":"prepare8.html","progressDelayTime":300,"stepStatus":"","stepTitle":"8", "stepText": "回程安排"},
{"stepId":"line3step9","stepHtml":"prepare9.html","progressDelayTime":300,"stepStatus":"","stepTitle":"9", "stepText": "出發遊玩"},
];
var progressSteps4=[
{"stepId":"line4step1","stepHtml":"prepare.html","progressDelayTime":300,"stepStatus":"done","stepTitle":"<i class='fa fa-check'aria-hidden='true'></i>", "stepText": "前往日本"},
{"stepId":"line4step2","stepHtml":"prepare2.html","progressDelayTime":300,"stepStatus":"done","stepTitle":"<i class='fa fa-check'aria-hidden='true'></i>", "stepText": "購買機票"},
{"stepId":"line4step3","stepHtml":"prepare3.html","progressDelayTime":300,"stepStatus":"done","stepTitle":"<i class='fa fa-check'aria-hidden='true'></i>", "stepText": "選擇住宿"},
{"stepId":"line4step4","stepHtml":"prepare4.html","progressDelayTime":300,"stepStatus":"active","stepTitle":"4", "stepText": "打包行李"},
{"stepId":"line4step5","stepHtml":"prepare5.html","progressDelayTime":300,"stepStatus":"","stepTitle":"5", "stepText": "入境問題"},
{"stepId":"line4step6","stepHtml":"prepare6.html","progressDelayTime":300,"stepStatus":"","stepTitle":"6", "stepText": "行程安排"},
{"stepId":"line4step7","stepHtml":"prepare7.html","progressDelayTime":300,"stepStatus":"","stepTitle":"7", "stepText": "交通方式"},
{"stepId":"line4step8","stepHtml":"prepare8.html","progressDelayTime":300,"stepStatus":"","stepTitle":"8", "stepText": "回程安排"},
{"stepId":"line4step9","stepHtml":"prepare9.html","progressDelayTime":300,"stepStatus":"","stepTitle":"9", "stepText": "出發遊玩"},
];
var progressSteps5=[
{"stepId":"line5step1","stepHtml":"prepare.html","progressDelayTime":300,"stepStatus":"done","stepTitle":"<i class='fa fa-check'aria-hidden='true'></i>", "stepText": "前往日本"},
{"stepId":"line5step2","stepHtml":"prepare2.html","progressDelayTime":300,"stepStatus":"done","stepTitle":"<i class='fa fa-check'aria-hidden='true'></i>", "stepText": "購買機票"},
{"stepId":"line5step3","stepHtml":"prepare3.html","progressDelayTime":300,"stepStatus":"done","stepTitle":"<i class='fa fa-check'aria-hidden='true'></i>", "stepText": "選擇住宿"},
{"stepId":"line5step4","stepHtml":"prepare4.html","progressDelayTime":300,"stepStatus":"done","stepTitle":"<i class='fa fa-check'aria-hidden='true'></i>", "stepText": "打包行李"},
{"stepId":"line5step5","stepHtml":"prepare5.html","progressDelayTime":300,"stepStatus":"active","stepTitle":"5", "stepText": "入境問題"},
{"stepId":"line5step6","stepHtml":"prepare6.html","progressDelayTime":300,"stepStatus":"","stepTitle":"6", "stepText": "行程安排"},
{"stepId":"line5step7","stepHtml":"prepare7.html","progressDelayTime":300,"stepStatus":"","stepTitle":"7", "stepText": "交通方式"},
{"stepId":"line5step8","stepHtml":"prepare8.html","progressDelayTime":300,"stepStatus":"","stepTitle":"8", "stepText": "回程安排"},
{"stepId":"line5step9","stepHtml":"prepare9.html","progressDelayTime":300,"stepStatus":"","stepTitle":"9", "stepText": "出發遊玩"},
];
var progressSteps6=[
{"stepId":"line6step1","stepHtml":"prepare.html","progressDelayTime":300,"stepStatus":"done","stepTitle":"<i class='fa fa-check'aria-hidden='true'></i>", "stepText": "前往日本"},
{"stepId":"line6step2","stepHtml":"prepare2.html","progressDelayTime":300,"stepStatus":"done","stepTitle":"<i class='fa fa-check'aria-hidden='true'></i>", "stepText": "購買機票"},
{"stepId":"line6step3","stepHtml":"prepare3.html","progressDelayTime":300,"stepStatus":"done","stepTitle":"<i class='fa fa-check'aria-hidden='true'></i>", "stepText": "選擇住宿"},
{"stepId":"line6step4","stepHtml":"prepare4.html","progressDelayTime":300,"stepStatus":"done","stepTitle":"<i class='fa fa-check'aria-hidden='true'></i>", "stepText": "打包行李"},
{"stepId":"line6step5","stepHtml":"prepare5.html","progressDelayTime":300,"stepStatus":"done","stepTitle":"<i class='fa fa-check'aria-hidden='true'></i>", "stepText": "入境問題"},
{"stepId":"line6step6","stepHtml":"prepare6.html","progressDelayTime":300,"stepStatus":"active","stepTitle":"6", "stepText": "行程安排"},
{"stepId":"line6step7","stepHtml":"prepare7.html","progressDelayTime":300,"stepStatus":"","stepTitle":"7", "stepText": "交通方式"},
{"stepId":"line6step8","stepHtml":"prepare8.html","progressDelayTime":300,"stepStatus":"","stepTitle":"8", "stepText": "回程安排"},
{"stepId":"line6step9","stepHtml":"prepare9.html","progressDelayTime":300,"stepStatus":"","stepTitle":"9", "stepText": "出發遊玩"},
];
var progressSteps7=[
{"stepId":"line7step1","stepHtml":"prepare.html","progressDelayTime":300,"stepStatus":"done","stepTitle":"<i class='fa fa-check'aria-hidden='true'></i>", "stepText": "前往日本"},
{"stepId":"line7step2","stepHtml":"prepare2.html","progressDelayTime":300,"stepStatus":"done","stepTitle":"<i class='fa fa-check'aria-hidden='true'></i>", "stepText": "購買機票"},
{"stepId":"line7step3","stepHtml":"prepare3.html","progressDelayTime":300,"stepStatus":"done","stepTitle":"<i class='fa fa-check'aria-hidden='true'></i>", "stepText": "選擇住宿"},
{"stepId":"line7step4","stepHtml":"prepare4.html","progressDelayTime":300,"stepStatus":"done","stepTitle":"<i class='fa fa-check'aria-hidden='true'></i>", "stepText": "打包行李"},
{"stepId":"line7step5","stepHtml":"prepare5.html","progressDelayTime":300,"stepStatus":"done","stepTitle":"<i class='fa fa-check'aria-hidden='true'></i>", "stepText": "入境問題"},
{"stepId":"line7step6","stepHtml":"prepare6.html","progressDelayTime":300,"stepStatus":"done","stepTitle":"<i class='fa fa-check'aria-hidden='true'></i>", "stepText": "行程安排"},
{"stepId":"line7step7","stepHtml":"prepare7.html","progressDelayTime":300,"stepStatus":"active","stepTitle":"7", "stepText": "交通方式"},
{"stepId":"line7step8","stepHtml":"prepare8.html","progressDelayTime":300,"stepStatus":"","stepTitle":"8", "stepText": "回程安排"},
{"stepId":"line7step9","stepHtml":"prepare9.html","progressDelayTime":300,"stepStatus":"","stepTitle":"9", "stepText": "出發遊玩"},
];
var progressSteps8=[
{"stepId":"line8step1","stepHtml":"prepare.html","progressDelayTime":300,"stepStatus":"done","stepTitle":"<i class='fa fa-check'aria-hidden='true'></i>", "stepText": "前往日本"},
{"stepId":"line8step2","stepHtml":"prepare2.html","progressDelayTime":300,"stepStatus":"done","stepTitle":"<i class='fa fa-check'aria-hidden='true'></i>", "stepText": "購買機票"},
{"stepId":"line8step3","stepHtml":"prepare3.html","progressDelayTime":300,"stepStatus":"done","stepTitle":"<i class='fa fa-check'aria-hidden='true'></i>", "stepText": "選擇住宿"},
{"stepId":"line8step4","stepHtml":"prepare4.html","progressDelayTime":300,"stepStatus":"done","stepTitle":"<i class='fa fa-check'aria-hidden='true'></i>", "stepText": "打包行李"},
{"stepId":"line8step5","stepHtml":"prepare5.html","progressDelayTime":300,"stepStatus":"done","stepTitle":"<i class='fa fa-check'aria-hidden='true'></i>", "stepText": "入境問題"},
{"stepId":"line8step6","stepHtml":"prepare6.html","progressDelayTime":300,"stepStatus":"done","stepTitle":"<i class='fa fa-check'aria-hidden='true'></i>", "stepText": "行程安排"},
{"stepId":"line8step7","stepHtml":"prepare7.html","progressDelayTime":300,"stepStatus":"done","stepTitle":"<i class='fa fa-check'aria-hidden='true'></i>", "stepText": "交通方式"},
{"stepId":"line8step8","stepHtml":"prepare8.html","progressDelayTime":300,"stepStatus":"active","stepTitle":"8", "stepText": "回程安排"},
{"stepId":"line8step9","stepHtml":"prepare9.html","progressDelayTime":300,"stepStatus":"","stepTitle":"9", "stepText": "出發遊玩"},
];
var progressSteps9=[
{"stepId":"line9step1","stepHtml":"prepare.html","progressDelayTime":300,"stepStatus":"done","stepTitle":"<i class='fa fa-check'aria-hidden='true'></i>", "stepText": "前往日本"},
{"stepId":"line9step2","stepHtml":"prepare2.html","progressDelayTime":300,"stepStatus":"done","stepTitle":"<i class='fa fa-check'aria-hidden='true'></i>", "stepText": "購買機票"},
{"stepId":"line9step3","stepHtml":"prepare3.html","progressDelayTime":300,"stepStatus":"done","stepTitle":"<i class='fa fa-check'aria-hidden='true'></i>", "stepText": "選擇住宿"},
{"stepId":"line9step4","stepHtml":"prepare4.html","progressDelayTime":300,"stepStatus":"done","stepTitle":"<i class='fa fa-check'aria-hidden='true'></i>", "stepText": "打包行李"},
{"stepId":"line9step5","stepHtml":"prepare5.html","progressDelayTime":300,"stepStatus":"done","stepTitle":"<i class='fa fa-check'aria-hidden='true'></i>", "stepText": "入境問題"},
{"stepId":"line9step6","stepHtml":"prepare6.html","progressDelayTime":300,"stepStatus":"done","stepTitle":"<i class='fa fa-check'aria-hidden='true'></i>", "stepText": "行程安排"},
{"stepId":"line9step7","stepHtml":"prepare7.html","progressDelayTime":300,"stepStatus":"done","stepTitle":"<i class='fa fa-check'aria-hidden='true'></i>", "stepText": "交通方式"},
{"stepId":"line9step8","stepHtml":"prepare8.html","progressDelayTime":300,"stepStatus":"done","stepTitle":"<i class='fa fa-check'aria-hidden='true'></i>", "stepText": "回程安排"},
{"stepId":"line9step9","stepHtml":"prepare9.html","progressDelayTime":300,"stepStatus":"active","stepTitle":"9", "stepText": "出發遊玩"},
];
        
        
        // 產生表單步驟HTML樣板
        $("#progressbar-content1").html(tmpl("template-progressbar", progressSteps1));
        $("#progressbar-content2").html(tmpl("template-progressbar", progressSteps2));
        $("#progressbar-content3").html(tmpl("template-progressbar", progressSteps3));
        $("#progressbar-content4").html(tmpl("template-progressbar", progressSteps4));
        $("#progressbar-content5").html(tmpl("template-progressbar", progressSteps5));
        $("#progressbar-content6").html(tmpl("template-progressbar", progressSteps6));
        $("#progressbar-content7").html(tmpl("template-progressbar", progressSteps7));
        $("#progressbar-content8").html(tmpl("template-progressbar", progressSteps8));
        $("#progressbar-content9").html(tmpl("template-progressbar", progressSteps9));
        // // 顯示步驟進度動畫
        showProgress(progressSteps1);
        showProgress(progressSteps2);
        showProgress(progressSteps3);
        showProgress(progressSteps4);
        showProgress(progressSteps5);
        showProgress(progressSteps6);
        showProgress(progressSteps7);
        showProgress(progressSteps8);
        showProgress(progressSteps9);
        // 移至共用commonlib.js
        //function showProgress(progressSteps) {
        //    // 目前步驟才顯示進度動畫
        //    for (var i = 0; i < progressSteps.length; i++) {
        //        if (progressSteps[i].stepStatus == "active") $('#' + progressSteps[i].stepId).delay(progressSteps[i].progressDelayTime).animate({ width: '100%' }, 600, "linear");
        //    }
        //}
    });
}());