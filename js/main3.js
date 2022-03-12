$(function()
{
$.fn.scrollToTop = function() {
$(this).hide().removeAttr("href");

var scrollDiv = $(this);
$(window).scroll(function()
{
if ($(window).scrollTop() >= 1000)
{
$(scrollDiv).fadeIn("slow")
}
else
{
$(scrollDiv).fadeOut("slow")
}
});
$(this).click(function()
{
$("html, body").animate({
scrollTop: 0
}, "slow")
})
}
});
$(function()
{
$('#credit').scrollToTop();
});
