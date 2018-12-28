<script type="text/javascript">
		var uptime = setInterval(    function ()
		{
			$('#terhubung').load('reload/uptime.html').fadeIn("fast");
		}, 1000);
		
		var session = setInterval(    function ()
		{
			$('#session').load('reload/session.html').fadeIn("fast");
		}, 1000);

		var quota = setInterval(    function ()
		{
			$('#quota').load('reload/quota.html').fadeIn("fast");
		}, 1000);		
	</script>	