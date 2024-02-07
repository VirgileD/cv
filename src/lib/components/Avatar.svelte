<script>
	let images = ['avatar1.png', 'avatar2.png', 'avatar3.png'];
	let cur = 0;
	let next = 1;
	setInterval(() => {
		cur = (cur + 1) % images.length;
		next = (next + 1) % images.length;
	}, 10000);
</script>

<div class="root">
	<div class="avatar">
		{#each images as image, i}
			<img src={image} alt="avatar" class:visible={i === cur} class:hidden={i != cur} />
		{/each}
	</div>
</div>

<style>
	@font-face {
		font-family: RobotoSlab-VariableFont_wght;
		src: url('/RobotoSlab-VariableFont_wght.ttf');
	}
	.root {
		position: relative;
		width: 160px;
		height: 160px;
		margin: auto;
	}
	img {
		position: absolute;
		border-radius: 50%;
		opacity: 1;
		border-width: 3px;
		border-style: solid;
		border-color: #fff;
		width: 150px;
		height: 150px;
	}
	.visible {
		opacity: 1;
		transition: opacity 5s linear;
	}
	.hidden {
		opacity: 0;
		transition: opacity 5s linear;
	}
</style>
