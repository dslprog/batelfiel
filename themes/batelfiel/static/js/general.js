jQuery(document).ready(function(){
	// Enlaces externos
	jQuery("a[rel=external],.creativeCommons a").attr("target","_blank");
	
	// Visor de miniaturas
});

// Función para centrar una capa en la pantalla.
jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", ((jQuery(window).height() - this.outerHeight()) / 2) + jQuery(window).scrollTop() + "px");
    this.css("left", ((jQuery(window).width() - this.outerWidth()) / 2) + jQuery(window).scrollLeft() + "px");
    return this;
}