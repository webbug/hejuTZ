 $(document).ready(function(){
 	
 	setTimeout(function(){
 		 	$('#content_customerzone .content_right_cus').css({
		 		"opacity":1
		 	});
 	},400)

 	
 	 /*问卷调查选择效果*/
    $('#content_risk .xzxx input').click(function(){
    	$(this).parent().parent().find('.xzxx').removeClass('xzxx_check');
    	$(this).parent('.xzxx').addClass('xzxx_check');
    });
    
    
    /*留言咨询模拟placeholder*/
   
	 $('.f_in').each(function(){
	  	$(this).attr('fin_flag',"false");
	  	$(this).attr('fin_vale',"");
	  });
		  

	 $(document).on('focus','.f_in',function(){
	 	
    	if($(this).attr('fin_flag')=='false'){
    		$(this).attr('fin_vale',$(this).val());
    	    $(this).val('');
    	    $(this).addClass('f_in2')
    	    $(this).attr('fin_flag','true');
    	}	
 	        
	 });
    	 
    	 
    	 
  	$(document).on('blur','.f_in',function(){
  		
    	if($(this).val()==''){
    		$(this).val($(this).attr('fin_vale'));
    		$(this).removeClass('f_in2');
    		$(this).attr('fin_flag','false');
    	}
    	
    	
    });
    	 
    	 
    	
    


    
    
    
    /*服务体系*/
    var windowHeight=getInner().height;
    var headerHeight=$('#header').height();
    var navHeight=$('#nav').height();
    var bannerHeight=$('#banner').height();
    var contentHeight=$('#content_ju').height();
    var contentHeight2=$('#content_customerzone').height();
    var footerHeight=$('#footer').height();
    var conH=headerHeight+navHeight+bannerHeight+contentHeight;
    var conH2=headerHeight+navHeight+contentHeight2;
    
    anifooter();
//  anifooter2();
    
    $('.anws_hover').mouseover(function(){
    	anifooter();
    });
    $('.anws_hover').mouseleave(function(){
    	anifooter();
    });
    
    function anifooter(){
    	
	    if((windowHeight-conH)>=footerHeight){
//	    	alert('wef');
	    	$('.footer_sys').css({
	    		"position":"fixed",
	    		"bottom":0,
	    		"left":0
	    	});
	    }
	    
    }
    
//  function anifooter2(){
//  	
//	    if((windowHeight-conH2)>=footerHeight && !$('#footer').hasClass('frisk')){
////	    	alert('wef');
//	    	$('#footer').css({
//	    		"position":"fixed",
//	    		"bottom":0,
//	    		"left":0
//	    	});
//	    }
//	    
//  }
    
    
    
    $('.con_right_title2_sys').click(function(){
    	$(this).parent().find('.con_right_title2_sys').toggleClass('con_right_title2_sysbot');
    	$(this).parent().find('.sys_cjwt_p').toggleClass('sys_cjwt_pk');
    	$(this).parent().siblings().find('.con_right_title2_sys').removeClass('con_right_title2_sysbot');
    	$(this).parent().siblings().find('.sys_cjwt_p').removeClass('sys_cjwt_pk');
    });
    
    
    
    
    //客户专区
    
    $(window).resize(function(){
    	cusresize();
    });
    
    cusresize();
    function cusresize(){
    	$('.content_right_cus').css({
    		"width":($(window).width()-257)+'px'
    	});
    }

   $('#content_customerzone .content_left_cus .cus_ul li').mouseover(function(){
   	$('#content_customerzone .content_left_cus .cus_ul li').removeClass('checked');
   	$(this).addClass('checked');
   });
    
    
   var indexcp; 
   $('#content_customerzone .content_right_cus .cp_but').click(function(){
   	indexcp=$(this).index();
   	$('.cpqh_con').hide();
   	$('.cpqh_con').eq(indexcp).show();
   	$('#content_customerzone .content_right_cus .cp_but').removeClass('checked');
   	$(this).addClass('checked');
   });
    
    
    $('.jz_con tbody tr').each(function(){
    	if(($(this).index()+1)%2==0){
    		$(this).addClass('ccc');
    		
    	}
    });
    

    $('.jz_con tbody').each(function(index,elem){
    	
    	if($(elem).hasClass('noscalccc')){
    		$(elem).find('tr').addClass('ccc');
    	}
 	
    	
    });
    
    
    $('.tr_head').css({
    	"background":"#78818b",
    	"border":"1px solid #78818B",
    	"border-top":"none"
    });
    
    $('.tr_body').css({
    	"background":"#c3c8cd",
    	"border":"1px solid #78818B",
    	"border-top":"none"
    });
    $('.tr_head td').css({
    	"color":"#fff"
    });
    $('.tr_body td').css({
    	"color":"#333"
    });
   
   
    $(document).on('click','tbody .sj_icon',function(){
    	$(this).find('span').toggleClass('dsj');
    	$(this).parent().parent().next().slideToggle(1);
    })
   
  
   
// $('.sefef').hide();
    
    
    
    
    
    $('#content_customerzone .content_right_cus .table_page_con ul li').click(function(){
    	
    	if(($(this).index()!=0 || $(this).index()!=$(this).length-1) && !$(this).hasClass('slh')){
    		$('#content_customerzone .content_right_cus .table_page_con ul li').removeClass('clicked');
    		$(this).addClass('clicked');
    	}
    });
    
    $('#content_customerzone .content_right_cus .tb_title2_tab .tabbut').click(function(){
    	$('#content_customerzone .content_right_cus .tb_title2_tab .tabbut').removeClass('tabbut_check');
    	$(this).addClass('tabbut_check');
    	$('#content_customerzone .content_right_cus .yj_conc').hide();
    	$('#content_customerzone .content_right_cus .yj_conc').eq($(this).index()).show();
    		
    });
    
    
    /*解决左右不相等问题*/
    
     setInterval(function(){
     	lr();
     },1);
      
     
    	
    

    
    
    /*个人中心*/
   $(document).on('click','#content_customerzone .content_left_cus .pcen_ul li',function(){
   	$('#content_customerzone .content_left_cus .pcen_ul li').removeClass('checked');
   	$(this).addClass('checked');
   });
    
    $('.pro_tab ul .pro_tab_but').last().css({
    	"border-right":"1px solid #e0e0e0"
    });
     
    
    
    $('.pro_cen_but').each(function(){
    	if($(this).text()=="相关策略"){
		    		$(this).css({
		    	"border-right":"1px solid #e0e0e0"
		    });
    	}
    });
 
   
    $(document).on('click','.pro_tab ul .pro_tab_but',function(){
    	$('.pro_tab ul .pro_tab_but').removeClass('pro_tab_but_checked');
    	$(this).addClass('pro_tab_but_checked');
    	$('.product_cen').hide();
    	$('.product_cen').eq($(this).index()).show();
    });
    
    
    $(document).on('click','.pro_cen_but',function(){
    	var parent=$(this).parent().parent();
    	$(parent).find('.pro_cen_but').removeClass(' pro_cen_but_checked');
    	$(this).addClass(' pro_cen_but_checked');
    	$(parent).siblings('.product_cen_small').hide();
    	$(parent).siblings('.product_cen_small').eq($(this).index()).show();
    });
    
   
   
// console.log($('.pro_tab').width());
// console.log($('.pro_tab_but').length);
// console.log($('.pro_tab_but').width());
   if(($('.pro_tab_but').width())*$('.pro_tab_but').length>$('.pro_tab').width()){
   	  $('.pro_tab_but').css({
   	  	"width":(($('.pro_tab').width()/$('.pro_tab_but').length).toFixed(6)-0.2)+'px'
   	  });
   }else{
   }
   
   $(document).on('click','.modify_lie span',function(){
   	   $('.modify_lie span').removeClass('ch');
   	   $(this).addClass('ch');
   });
   
// document.documentElement.style.overflow='hidden';
   
   $('.tmc').click(function(){
     document.documentElement.style.overflow='auto';
     cusresize();
   	 $('#modify_screen').hide();
   	 $('#modify_screen .modify_panel').hide();
   });
   
   $('.tel_but').click(function(){
    document.documentElement.style.overflow='hidden';
    cusresize();
   	$('#modify_screen').show();
   	$('#modify_screen .tel_panel').show();	
   });
   
   
   $('.mail_but').click(function(){
    document.documentElement.style.overflow='hidden';
    cusresize();
   	$('#modify_screen').show();
   	$('#modify_screen .mail_panel').show();	
   });
    
   $('.loc_but').click(function(){
    document.documentElement.style.overflow='hidden';
    cusresize();
   	$('#modify_screen').show();
   	$('#modify_screen .loction_panel').show();	
   });
   
   
   $('.modify_pasword').click(function(){
    document.documentElement.style.overflow='hidden';
    cusresize();
   	$('#modify_screen').show();
   	$('#modify_screen .password_panel').show();	
   });
   
  
   
    
    
 });
 
 
 

 function lr(){
   	if(!$('.content_left_cus').hasClass('khzq_cus_li')){
 		
 		$('.content_left_cus,.content_right_cus').css({
    		"height":"auto"
    	});
	    if($('.content_left_cus').height()<$('.content_right_cus').height()){
	    	$('.content_left_cus').height($('.content_right_cus').height());
	    }else{
	    	$('.content_right_cus').height($('.content_left_cus').height());
	    }
   	}
      	
	    
}

 function getInner() {
			if (typeof window.innerWidth != "undefined") {
				return {
					width: window.innerWidth,
					height: window.innerHeight
				}
			} else {
				return {
					width: document.documentElement.clientWidth,
					height: document.documentElement.clientHeight
				}
			}
		}
function getScroll() {
	return {
		top: document.documentElement.scrollTop || document.body.scrollTop,
		left: document.documentElement.scrollLeft || document.body.scrollLeft,
		width: document.documentElement.scrollWidth || document.body.scrollWidth,
		height: document.documentElement.scrollHeight || document.body.scrollHeight
	}
}