$(function(){

	 //cont1 변수선언
	 var listA = $('.listNum > a');
	 var pic = $('.cont1_img').find('.conB');
	 var index=0;
	 var playOn = false;
	 var roll;
	 pic.hide();

	 // 자동스크롤
	 function play(){
		 if (!playOn){
			 playOn = true;
			 roll = setInterval(function(){
				 $('.foreard').click();
			 },5000);
		 }
	 }
	 function stop(){
		 if (playOn){
			 playOn =false;
			 clearInterval(roll);
		 }
	 }

	 //버튼클릭 이미지 전환
	 listA.click(function(){
		 stop();
		 index = $(this).index(); // 0~3
		 pic.hide();
		 pic.eq(index).show();
		 listA.find('img').each(function(){
			 $(this).attr('src',$(this).attr('src').replace('on','off'));
		 });
		 $(this).find('img').attr('src',$(this).find('img').attr('src').replace('off','on'));

		 play();
		 return false;
	 }); //listA.click() end
		 
		 // 왼쪽버튼클릭
	 $('.back').click(function(){
		 index--;
		 if(index < 0){
			 index =listA.length-1;
		 }
		 listA.eq(index).click();
		 return false;
	 });

	 // 오른쪽버튼클릭
	 $('.foreard').click(function(){
		 index++;
		 if(index > listA.length-1){
			 index = 0;
		 }
		 listA.eq(index).click();
		 return false;
	 });

	 // 시작하기
	 listA.eq(index).click();


	 //tab_cont3
	 $('.tab > li').click(function(){
		 var tab_id =$(this).attr('data-tab');
		 $('.tab > li').removeClass('current');
		 $('.cont3_product').removeClass('current');
  
		 $(this).addClass('current');
		 $('#'+tab_id).addClass('current');

	 });

	 //cont3
	 $('.tab > li').click(function(){
		 $('.tab > li').removeClass()
		 $(this).addClass('current')
	 });

	


 });

