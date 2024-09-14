<script>
	import { page } from '$app/stores';
    
    const isPdf = $page.url.searchParams.has('pdf');
	const imgSize = isPdf ? '102' : '172';
	const gcpNewClass = isPdf ? 'pdf' : 'browser';
</script>

<div class="root">
	<div class="{gcpNewClass}">
		<img src="GCP.png" width="{imgSize}" height="{imgSize}" alt="gcp ace certified"/>
	</div>
</div>

<style>
	.pdf {
		position: absolute;
		z-index: 200;
		top: 0cm;
		left: 10.5cm;
	}
	.browser {
		position: absolute;
		z-index: 200;
		top: 58px;
		left: 850px;
	}
</style>
