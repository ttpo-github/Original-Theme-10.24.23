var outerHeight = $('.section-header').outerHeight();
var innerSticky = $('.header-main').outerHeight();
$(window).scroll(function() {
  if($(window).scrollTop() > outerHeight ){
    $('.section-header').addClass('sticky').css('padding-bottom',innerSticky);
  }
  else{
    $('.section-header').removeClass('sticky').css('padding-bottom',0);
  }
});

$('.menu-grid h4').click(function(){
  $(this).siblings().slideToggle();
  $(this).toggleClass('active');
});

$('.feature-blog__list').slick({
  arrows: true,
  dots: false,
  slidesToShow: 4,
  unslick: true,
  slidesToScroll: 1,
  infinite: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow:3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow:2
      }
    }
  ]
});


if ($('variant-radios input[value*="Custom"],variant-radios input[value*="custom"]').prop("checked") == true){
  $('variant-radios input[value*="Custom"],variant-radios input[value*="custom"]').siblings('.custom_variant').show();
}
$('variant-radios input[type="radio"]').change(function(){
  if ($('variant-radios input[value*="Custom"],variant-radios input[value*="custom"]').is(":checked")){
    $(this).siblings('.custom_variant').show();
  }
  else {
    $('.custom_variant input').val('');
    $(this).siblings('.custom_variant').hide();
  }
});

$('.blog-filter').slick({
  arrows: true,
  dots: false,
  slidesToShow: 6,
  unslick: true,
  slidesToScroll: 1,
  infinite: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow:3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow:2
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow:1
      }
    }
  ]
});
$('.blog-filter').slick('slickGoTo', document.querySelector('.custom-btn.active')?.dataset.slickIndex);

function getElement(elementName){
  if(elementName == 'chat_widget'){
    return document.querySelector('#chat-widget-container');
  }
  return document.querySelector('#livechat-eye-catcher');
};
function addClass(element){
  element?.classList.add('display-chat-widget')
}
setTimeout(function(){
  let chat_widget = getElement('chat_widget');
  let chat_widget_eye_catcher = getElement();
  if(chat_widget){
    addClass(chat_widget)
  }else{
   setTimeout(function(){
     chat_widget = getElement('chat_widget');
     if(chat_widget){
       addClass(chat_widget)
     }
   },5000)
  }
  if(chat_widget_eye_catcher){
     addClass(chat_widget_eye_catcher);
  }else{
   setTimeout(function(){
     chat_widget_eye_catcher = getElement();
     if(chat_widget_eye_catcher){
       addClass(chat_widget_eye_catcher);
     }
   },5000)
  }
},10000)