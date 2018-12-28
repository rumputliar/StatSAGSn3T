<script>
    			$(document).ready(function(){
    				window.setInterval(function () {
    					var sisawaktu = $("#waktu").html();
    					sisawaktu = eval(sisawaktu);
    					if (sisawaktu == 0) {
    						location.href = "https://www.proxypandora.xyz/";
    					} else {
    						$("#waktu").html(sisawaktu - 1);
    					}
    				}, 1000);
    			});
</script>