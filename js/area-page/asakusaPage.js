// 標籤選擇跳轉
// 從地圖最上到下
// 我把淺草寺設為最後
var place1=document.querySelector('#place1')
var place2=document.querySelector('#place2')
var place3=document.querySelector('#place3')
var place4=document.querySelector('#place4')
var place5=document.querySelector('#place5')
var place6=document.querySelector('#place6')
var place7=document.querySelector('#place7')
var place8=document.querySelector('#place8')
var place9=document.querySelector('#place9')

var place1Content=document.querySelector('#place1Content')
var place2Content=document.querySelector('#place2Content')
var place3Content=document.querySelector('#place3Content')
var place4Content=document.querySelector('#place4Content')
var place5Content=document.querySelector('#place5Content')
var place6Content=document.querySelector('#place6Content')
var place7Content=document.querySelector('#place7Content')
var place8Content=document.querySelector('#place8Content')
var place9Content=document.querySelector('#place9Content')


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


place1.addEventListener('click',function(){
    to(place1Content)
})
place2.addEventListener('click',function(){
    to(place2Content)
})
place3.addEventListener('click',function(){
    to(place3Content)
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
place7.addEventListener('click',function(){
    to(place7Content)
})
place8.addEventListener('click',function(){
    to(place8Content)
})
place9.addEventListener('click',function(){
    to(place9Content)
})