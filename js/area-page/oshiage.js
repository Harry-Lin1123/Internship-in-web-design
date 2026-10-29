  // 標籤選擇開關
  var about=document.querySelector('#about')
  var tower=document.querySelector('#tower')
  var deck=document.querySelector('#deck')
  var food=document.querySelector('#food')

  var aboutContent=document.querySelector('#aboutContent')
  var towerContent=document.querySelector('#towerContent')
  var deckContent=document.querySelector('#deckContent')
  var foodContent=document.querySelector('#foodContent')

  $(aboutContent).show();
  $(towerContent).hide();
  $(deckContent).hide();
  $(foodContent).hide();

  $(about).css('opacity','1');
  $(tower).css('opacity','0.3');
  $(deck).css('opacity','0.3');
  $(food).css('opacity','0.3');

  about.addEventListener('click',function(){
    $(aboutContent).show();
    $(towerContent).hide();
    $(deckContent).hide();
    $(foodContent).hide();
    $(food).css('opacity','0.3');
    $(about).css('opacity','1');
    $(deck).css('opacity','0.3');
    $(tower).css('opacity','0.3');
  })
  tower.addEventListener('click',function(){
      $(towerContent).show();
      $(deckContent).hide();
      $(aboutContent).hide();
      $(foodContent).hide();
      $(food).css('opacity','0.3');
      $(tower).css('opacity','1');
      $(deck).css('opacity','0.3');
      $(about).css('opacity','0.3');
  
      
  })
  deck.addEventListener('click',function(){
    $(towerContent).hide();
    $(deckContent).show();
    $(aboutContent).hide();
    $(foodContent).hide();
    $(food).css('opacity','0.3');
    $(tower).css('opacity','0.3');
    $(deck).css('opacity','1');
    $(about).css('opacity','0.3');

})
  food.addEventListener('click',function(){
    $(towerContent).hide();
    $(foodContent).show();
    $(aboutContent).hide();
    $(deckContent).hide();
    $(tower).css('opacity','0.3');
    $(food).css('opacity','1');
    $(about).css('opacity','0.3');
    $(deck).css('opacity','0.3');

})