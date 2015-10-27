

/**
 * Al pinchar en el elemento del menú o del toggle button
 * resalta la opción del menú
*/
$(function() {
   $('.nav-sidebar li').click(function() {
      $('.nav-sidebar li').removeClass('active');
      $(this).addClass('active');
   });
});

/**
 * Activa la opción indicada del menú principal
*/
function activarMenuOption(clase){
      $('.nav-sidebar li').removeClass('active');
      $('.nav-sidebar li.'+clase).addClass('active');
};