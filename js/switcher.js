window.console = window.console || function() {
    var o = {};
    return o.log = o.warn = o.debug = o.info = o.error = o.time = o.dir = o.profile = o.clear = o.exception = o.trace = o.assert = function() {}, o
}(), jQuery(document).ready(function(o) {
o("ul.pattern .color1").click(function() {
	return o("#select_color_style").attr("href", "css/color/default_color.css"), !1
}), o("ul.pattern .color2").click(function() {
	return o("#select_color_style").attr("href", "css/color/blue_color.css"), !1
}), o("ul.pattern .color3").click(function() {
	return o("#select_color_style").attr("href", "css/color/green_color.css"), !1
}), o("ul.pattern .color4").click(function() {
	return o("#select_color_style").attr("href", "css/color/purple_color.css"), !1
}), o("ul.pattern .color5").click(function() {
	return o("#select_color_style").attr("href", "css/color/skyblue_color.css"), !1
}), o("ul.pattern .color6").click(function() {
	return o("#select_color_style").attr("href", "css/color/yellow_color.css"), !1
}), o("ul.pattern .color7").click(function() {
	return o("#select_color_style").attr("href", "css/color/orange_color.css"), !1
}), o("ul.pattern .color8").click(function() {
	return o("#select_color_style").attr("href", "css/color/amber_color.css"), !1
}), o("ul.pattern .color9").click(function() {
	return o("#select_color_style").attr("href", "css/color/candy_color.css"), !1	
}), o("#select_color_switcher_option .bottom a.settings").click(function(t) {
	t.preventDefault(), "-189px" === o("#select_color_switcher_option").css("left") ? o("#select_color_switcher_option").animate({
		left: "0px"
	}) : o("#select_color_switcher_option").animate({
		left: "-189px"
	})
}), o("ul.pattern li a").click(function(t) {
	t.preventDefault(), o(this).parent().parent().find("a").removeClass("active"), o(this).addClass("active")
}), o("#select_color_switcher_option").animate({
	left: "-189px"
})
});