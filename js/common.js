// search box
$(document).ready(function () {
  const input = $("#txtSearch");
  const btn = $("#btnSearch");

  btn.on("click", function () {
    $(this).css("color", "#050100");
    if (input.hasClass("active")) {
      input.removeClass("active");
      // $(this).css('color', '#CB235D');
      $(this).css("color", "#fff");
    } else input.addClass("active");
  });

  const menu = $(".header__menu");
  let sticky = menu.offset().top + 1;
  $(window).on("scroll", function () {
    sticky_menu(menu, sticky);
  });
});

// sticky menu
function sticky_menu(menu, sticky) {
  if ($(window).scrollTop() >= sticky) menu.addClass("sticky");
  else menu.removeClass("sticky");
}
