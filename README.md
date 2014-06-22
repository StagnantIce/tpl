<h1> jQuery easy template plugin </h1>

This plugin use html selectors to render data from html.

1) JavaScript html template look like simple html code. Template hide after render automaticaly.
```html
<div id="template">
	Name <div class="user_name">-</div>
	
	<div class='game'>
		Game <span class='game_name'>-</span>
	</div>
	<div class="sites">
		<div class="site">
			site url:
			<div class='name'>-</div>
		</div>
	</div>
</div>
```

2) Call jQuery functions to render data with objects, arrays and text.
```javascript
$('#render').append(
	$('#template').tpl({
		'.user_name': 'ivan',
		'.site': [{'.name' : 'google.com'},{'.name' : 'lines-98.ru'},{'.name' : 'pihpi.ru'}],
		'.game' : {'.game_name' : 'World'}
	})
);
```

3) Remove data simple, set false to selector.
```javascript
$('#render').append(
	$('#template').tpl({
		'.user_name': 'Ivan',
		'.site': false,
		'.game' : {'.game_name' : 'World'}
	});
);

```

