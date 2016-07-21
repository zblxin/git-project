// JavaScript Document

;$(function(){
	$stopall=$('.stopall');
	$down=$('.down');
	$allbaby=$('.allbaby');
	$menu=$('.menu')
	$down_menu=$('.down_menu')
	$godown=$('.godown');
	$goup=$('.goup');
	$menu.on('mouseenter',function(){
		
		$godown.hide();
		$down.show();
		$goup.show();
		
	}).on('mouseleave',function(){
		$godown.show()
		$down.hide()
		$goup.hide();
	});
	$down.on('mouseenter',function(){
		
		$down.show()
	}).on('mouseleave',function(){
		$down.hide()
	});
	$allbaby.on('mouseenter',function(){
		
		$allbaby.addClass('active');
		$down_menu.show();
	}).on('mouseleave',function(){
		$down_menu.hide()
	});
	
})