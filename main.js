$('.button[filter]').click(function () {
  $(".hide").removeClass("unvisible")
  if ($(this).attr('filter') == 'all') {
    if ($(this).attr('val') == 'off') {
      $('.button[filter]').attr('val', 'off');
      $(this).attr('val', 'on');
      $('.button[filter]').removeClass('focused');
      $(this).addClass('focused')
      $('.filter > div').show(300);
    }
  } else
    if ($(this).attr('val') == 'off') {
      $('.button[filter]').attr('val', 'off');
      $(this).attr('val', 'on');
      $('.button[filter]').removeClass('focused');
      $(this).addClass('focused')
      $('.filter > div').hide(300);
      var filter = $(this).attr('filter');
      $('.filter > div[filter=' + filter + ']').show(300)
    }
});

function galleryAll() {
  if ($(".hide").hasClass("unvisible")) {
    $(".hide").removeClass("unvisible")
  } else {
    $(".hide").addClass("unvisible")
  }
}
function barAction(tag) {
  const element = document.getElementById(tag);
  element.classList.toggle("visible");
}

function SomeFuncToSearch() {
  const search = document.getElementById('search').value;
  console.log(search)
}

function changePage() {  
  $('ul.nav__bar a[val^="."]').click(function () {
    let target = $(this).attr('val');
    if (target == '.home') {
      $('.home').removeClass("unvisible");
    }
    
  })
  // FINISH LATER
}

function subsNewsletter() {
  console.log('subscribed!')
}

function today() {
  var month = new Date('December 25, 1995 23:15:30');
  var nM = month.getMonth();

  console.log(nM); // 11
  const today = new Date();
  const day = today.getDate();
  const empty = "";
  $('.link__date').text(day)
   if ( day == 30)  {
    if (nM == 11 || nM == 0 || nM == 2 || nM == 4 || nM == 6 || nM == 7 || nM == 4 || nM == 9) {
      $('#yesterday').text(day - 1)
      $('#today').text(day)
      $('#tomorrow').text(day + 1)
      $('#dayAfterTomorrow').text(empty)
    } else if (nM == 10  || nM == 3 || nM == 5 || nM == 8) {
      $('#yesterday').text(day - 1)
      $('#today').text(day)
      $('#tomorrow').text(empty)
      $('#dayAfterTomorrow').text(empty)
    }
  } else  if ( day == 28){
    $('#yesterday').text(day - 1)
    $('#today').text(day)
    $('#tomorrow').text(empty)
    $('#dayAfterTomorrow').text(empty)
  }
  console.log(day)
}
today();

changePage();

$('.autoplay').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 900,
  arrows:false,
});

$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  infinite: false,
  arrows: false,
  dots: true,
});

$('.single-item').slick({
  slidesToShow: 1,
  arrows:false,
  dots:true
});