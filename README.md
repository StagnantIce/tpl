<h1> jQuery easy template plugin <h1>

<div id='render'>
  <div id="template">
  	Name: <div class="user_name">-</div>
  	
  	<div class='game'>
  		Game: <span class='game_name'>-</span>
  	</div>
  	<div class="sites">
  		<div class="site">
  			Site name:
  			<div class='name'>-</div>
  		</div>
  	</div>
  </div>
</div>

<script>
$('#render').append(
	$('#template').model({
		'.user_name': 'Петр',
		'.site': [{'.name' : 1},{'.name' : 2},{'.name' : 3}],
		'.game' : {'.game_name' : 'World'}
	})
);
	
$('#render').append(
	$('#template').model({
		'.user_name': 'Петр' + i,
		'.site': false,
		'.game' : {'.game_name' : 'World'}
	});
);

</script>
