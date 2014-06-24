var statusNamespace = {
	submitStatus: function(v1,v2){
      $.post("/message/submit", { name: v1, status: v2 },   function(data,status){
    $('HTML').html(data);
  });
	},
	replaceDate:function(){

		$( document ).ready(function() {
			$("date").each(function(){

				var d = new Date(0);
				d.setUTCSeconds($(this).text()/1000);

				$(this).text(d.toLocaleDateString() + ' ' +d.toLocaleTimeString());
				
			});
		});

	}
	
};

statusNamespace.replaceDate();