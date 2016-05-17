 $(document).ready(function(){
 	
 	  $(document).ready(function(){
    	loadedIscrollo();
    	loadedIscrollo2();
    });

  
	
	var myScroll;
	
	function loadedIscrollo () {
		myScroll = new IScroll('#wrapper', {
			scrollbars: true,
			mouseWheel: true,
			interactiveScrollbars: true,
			shrinkScrollbars: 'scale',
			fadeScrollbars: false
		});
	}
	
	
	function loadedIscrollo2 () {
		myScroll = new IScroll('#wrapper2', {
			scrollbars: true,
			mouseWheel: true,
			interactiveScrollbars: true,
			shrinkScrollbars: 'scale',
			fadeScrollbars: false
		});
	}
	
	
	 /*客户专区首页左侧滚动*/
  $('.khzq_cus_li').css({
  	"height":($('.content_right_cus').height()+24)+'px'
  });
  
  	 setTimeout(function(){
   	 	 myScroll.refresh();
   	 },200);
  
   var khzq_cus_lih=$('.khzq_cus_li').height();
   
   $(document).on('click','.cp_but',function(){
   	
   	 if($('.content_right_cus').height()>$('.khzq_cus_li').height()){
		   $('.khzq_cus_li').css({
		  	"height":$('.content_right_cus').height()+24+'px'
		  });
   	 }else{
   	 	$('.khzq_cus_li').css({
		  	"height":khzq_cus_lih+'px'
		  });
   	 }
   	 
   	 setTimeout(function(){
   	 	 myScroll.refresh();
   	 },200);
   	
   	 
   });
	
	
 	
 });



 