$(".input-content").on("keyup",function(e){
	if(e.keyCode == 13 && $(".input-content").val() != "") {
		var tasks = $("<div class='task'></div>").text($(".input-content").val());

		var check = $("<button type='button' class='checked' title='Done'><span class='fa fa-check'></span></button>").click(function(){
			$(tasks).addClass("done");
		});

		var remove = $("<button type='button' class='remove' title='remove task'><span class='fa fa-trash'></span></button>").click(function(){
			$(tasks).fadeOut(100);
		});

		$(".item").append(tasks);
		$(tasks).append(check,remove);
		$(".input-content").val("");
	}
});
$(".addBtn").click(function(){
	if($(".input-content").val() != "") {
				var tasks = $("<div class='task'></div>").text($(".input-content").val());

		var check = $("<button type='button' class='checked' title='Done'><span class='fa fa-check'></span></button>").click(function(){
			$(tasks).addClass("done");
		});

		var remove = $("<button type='button' class='remove' title='remove task'><span class='fa fa-trash'></span></button>").click(function(){
			$(tasks).fadeOut(100);
		});

		$(".item").append(tasks);
		$(tasks).append(check,remove);
		$(".input-content").val("");
	}
})