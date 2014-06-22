<h1> jQuery easy template plugin </h1>

&lt;div id='render'&gt;
  &lt;div id="template"&gt;
  	Name: &lt;div class="user_name"&gt;-&lt;/div&gt;
  	
  	&lt;div class='game'&gt;
  		Game: &lt;span class='game_name'&gt;-&lt;/span&gt;
  	&lt;/div&gt;
  	&lt;div class="sites"&gt;
  		&lt;div class="site"&gt;
  			Site name:
  			&lt;div class='name'&gt;-&lt;/div&gt;
  		&lt;/div&gt;
  	&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;
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

&lt;/script&gt;
