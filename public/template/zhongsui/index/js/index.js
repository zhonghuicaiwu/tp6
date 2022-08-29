if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
	new WOW().init();
};
$(document).ready(function(){
	//indexbox
	jQuery(".indexbox6").slide({mainCell:".indexbox6_nr",titCell:".indexbox6_bt li",effect:"left",trigger:"click",easing:"easeOutElastic"});
 
});


