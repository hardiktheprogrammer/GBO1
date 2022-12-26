/* ===============================================
  OPEN CLOSE Menu
============================================= */

function green_farm_elementor_open_menu() {
    jQuery('button.menu-toggle').addClass('close-panal');
    setTimeout(function() {
        jQuery('nav#main-menu').show();
    }, 100);

    return false;
}

jQuery("button.menu-toggle").on("click", green_farm_elementor_open_menu);

function green_farm_elementor_close_menu() {
    jQuery('button.close-menu').removeClass('close-panal');
    jQuery('nav#main-menu').hide();
}

jQuery("button.close-menu").on("click", green_farm_elementor_close_menu);

/* ===============================================
  TRAP TAB FOCUS ON MODAL MENU
============================================= */

jQuery('button.close-menu').on('keydown', function(e) {
    if (jQuery("this:focus") && (e.which === 9)) {
        e.preventDefault();
        jQuery(this).blur();
        jQuery('button.menu-toggle').focus();
    }
});