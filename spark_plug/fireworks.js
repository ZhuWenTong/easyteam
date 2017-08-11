/**
 *
 *@time 2017-4-29
 *@author  zwt
 */
;(function($,window,document,undefined){
	function Spark(ele,obj){
		this.$element=ele;
		this.obj=obj;
		this.defaults={
			flyTime:500,
			fireRound:300,
			fireNum:30,
			fireTime:500
		},
		this.options=$.extend({},this.defaults,obj);
	}
	Spark.prototype={
		init:function(){
			var self=this;
			this.$element.mousedown(function(e){
				e=e||window.event;
				var startX=e.offsetX;
				var startY=e.offsetY;
				self.fly(startX,startY);
			});
		},
		fly:function(x,y){
			var self=this;
			var oSpark=$('<div class="spark"></div>');
			oSpark.css('background',colorVal())
			this.$element.append(oSpark);
			oSpark.animate({'left':x,'top':y},self.flyTime,function(){
				$(this).remove();
				self.boom(self.$element,x,y);
			});
		},
		boom:function(ele,x,y){
			for(var i=0;i<this.options.fireNum;i++){
				new Fire(ele,x,y,this.options.fireRound,this.options.fireTime);
			}
		}
	}
	function Fire(ele,x,y,fireRound,fireTime){
		this.init(ele,x,y,fireRound,fireTime);
	}
	Fire.prototype={
		init:function(ele,x,y,fireRound,fireTime){
			var oFire=$('<div class="fire"></div>');
			oFire.css({'left':x,'top':y,'background':colorVal()});
			ele.append(oFire);
			var speedX=Math.random();
			var speedY=Math.random();
			var left=Math.random()*fireRound;
			var top=Math.sqrt(fireRound*fireRound-left*left);
			if(speedX>0.5&&speedY>0.5){
				oFire.animate({'left':x+left,'top':y-top},fireTime,function(){
					$(this).remove();
				});
			}else if(speedX>0.5&&speedY<0.5){
				oFire.animate({'left':x+left,'top':y+top},fireTime,function(){
					$(this).remove();
				});
			}else if(speedX<0.5&&speedY>0.5){
				oFire.animate({'left':x-left,'top':y-top},fireTime,function(){
					$(this).remove();
				});
			}else{
				oFire.animate({'left':x-left,'top':y+top},fireTime,function(){
					$(this).remove();
				});
			}
		}
	}
	function colorVal(){
		var r=parseInt(Math.random()*256);
		var g=parseInt(Math.random()*256);
		var b=parseInt(Math.random()*256);
		var colorValue='RGB('+r+','+g+','+b+')';//console.log(colorValue)
		return colorValue;
	}
	$.fn.air=function(obj){
		new Spark(this,obj).init();
	}
})(jQuery,window,document);
