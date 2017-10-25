const source   = $("#image-template").html();
const imageTemplate = Handlebars.compile(source);

var currentPage = 0;
var isLoading = false;

$('#main_content').masonry({
  itemSelector: '.image_item',
  columnWidth: '.image_item',
  percentPosition: true
});

$(window).on('scroll', onWindowScrolled);

var interval = setInterval(function(){
  if($(document).height() <= $(window).height()){
    onWindowScrolled();
  }
  else{
    clearInterval(interval);
  }
}, 200);

requestNextPage();

function onWindowScrolled(){
  if(!isLoading && $(window).height()*3/2 + $(window).scrollTop() > $(document).height()){
    requestNextPage();
  }
}

function requestNextPage(){
  const url = `/imagesData.json?p=${currentPage+1}`;

  isLoading = true;
  $.ajax({
    url : url,
    type: 'get'
  }).then((data) => {
    const html = $(imageTemplate(data));
    $("#main_content").append(html).masonry( 'appended', html );
    $('#main_content').imagesLoaded().progress( function() {
      $('#main_content').masonry('layout');
    });
    currentPage += 1;
  }).fail(
    (err) => console.error(err)
  ).always(() => {
    isLoading = false;
  });
}
