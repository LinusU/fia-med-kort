<?php

$cards = json_decode(file_get_contents("cards.json"));

function when($when) {
	switch($when) {
		case 'end-of-life': return 'Kortet spelas när en pjäs tas ut.';
		case 'end-of-turn': return 'Kortet spelas i slutet av en tur.';
		case 'begining-of-turn': return 'Kortet spelas i början av en tur.';
		case 'after-dice': return 'Kortet spelas efter du slagit tärningen.';
		case 'instantly': return 'Kortet spelas på direkten.';
		case 'anytime': return 'Kortet kan spelas när som helst.';
		default: throw new Exception('Unknown when');
	}
}

$total = 0;
$offset = (isset($_GET['offset'])?$_GET['offset']:0);

?>
<!DOCTYPE html>
<html>
<head>
	<title>Fia med Kort</title>
	<link rel="stylesheet" type="text/css" href="main.css" />
</head>
<body>

	<?php foreach($cards as $card) { ?>
	<?php for($i=0; $i<$card->count; $i++) { ?>
	<?php $total++; ?>
	<?php if(--$offset >= 0) { continue; } ?>
	
	<div class="card">

		<h1><?php echo $card->title; ?></h1>

		<div class="img"><img src="img/<?php echo $card->name; ?>.png" /></div>
		<div class="desc"><?php echo $card->desc; ?></div>
		<div class="when"><?php echo when($card->when); ?></div>

	</div>

	<?php } ?>
	<?php } ?>

	<!-- Number of cards: <?php echo $total; ?> -->

</body>