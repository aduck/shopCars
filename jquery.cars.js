;(function($){
	$.fn.extend({
		shopCars:function(opts){
			var setting={
				btn:$(this),
				show:$(".J_cars_num"),  //购物车条数
				thumb:null,  //商品缩略图
				speed:1000,  //滑行速度
				disabled:true  //是否禁用按钮
			};
			opts=$.extend(setting,opts);
			var $cars_btn=opts.btn,
				$cars_show=opts.show,
				btn_off_left=$cars_btn.offset().left,
				btn_off_top=$cars_btn.offset().top,
				show_off_left=$cars_show.offset().left,
				show_off_top=$cars_show.offset().top;
			$cars_btn.click(function(){
				//禁用按钮
				if(opts.disabled){
					this.disabled=true;
				}
				//发送ajax请求，添加到购物车
				$.ajax({
					url:"",
					type:"GET",
					data:"",
					dataType:"json",
					success:function(data){
						//
					},
					error:function(){

					}
				});
				//新建图层
				var $layer=$("<div></div>"),
					$thumb=$("<img src="+opts.thumb+" />").css("max-width","100%");
				$thumb.appendTo($layer);
				$layer.css({
					"position":"absolute",
					"z-index":"999",
					"left":btn_off_left,
					"top":btn_off_top,
					"width":"80px",
					"height":"80px",
					"border":"2px solid #ccc",
					"overflow":"hidden"
				}).appendTo($("body"));	
				//开启动画
				$layer.animate({
					"left":show_off_left,
					"top":show_off_top,
					"opacity":"0"
				},opts.speed,function(){
					$layer.remove();
					$cars_show.text(parseInt($cars_show.text())+1);
				});
				return false;
			});
			return this;
		}
	});
})(jQuery);