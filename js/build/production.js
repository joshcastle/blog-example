// Plugins

// Tinynav for responsive
/*! http://tinynav.viljamis.com v1.03 by @viljamis */
(function(a,i,g){a.fn.tinyNav=function(j){var c=a.extend({active:"selected",header:!1},j);return this.each(function(){g++;var h=a(this),d="tinynav"+g,e=".l_"+d,b=a("<select/>").addClass("tinynav "+d);if(h.is("ul,ol")){c.header&&b.append(a("<option/>").text("Navigation"));var f="";h.addClass("l_"+d).find("a").each(function(){f+='<option value="'+a(this).attr("href")+'">'+a(this).text()+"</option>"});b.append(f);c.header||b.find(":eq("+a(e+" li").index(a(e+" li."+c.active))+")").attr("selected",!0);
b.change(function(){i.location.href=a(this).val()});a(e).after(b)}})}})(jQuery,this,0);



// On load
$(function() {

	/* Activate tinynav */
  // $(".nav-primary").tinyNav();
  
  $("#show-nav").click(function(){
    $(".nav-primary").slideToggle();
  });
	
});



