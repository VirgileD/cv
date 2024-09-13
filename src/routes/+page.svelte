<script>
	import Header from '$lib/components/Header.svelte';
	import LookingFor from '$lib/components/LookingFor.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Experience from '../lib/components/Experience.svelte';
	import Personal from '../lib/components/Personal.svelte';
	import Gcp from '../lib/components/Gcp.svelte';
</script>

<div class="root">
	<div class="blue-frame">
		<Header />
		<div class="frame">
			<LookingFor />
			<Skills />
			<Experience />
			<Personal />
		</div>
	</div>
</div>

<style>
	.root {
		background-color: whitesmoke;
	}
	.blue-frame {
		background-color: var(--banner-color);
		border-top: 2px solid var(--banner-color);
		border-top-right-radius: 1em;
		border-top-left-radius: 1em;
		border-left: 2px solid var(--banner-color);
		border-right: 2px solid var(--banner-color);
		padding-bottom: 2em;
		border-bottom: 2px solid var(--banner-color);
		border-bottom-right-radius: 1em;
		border-bottom-left-radius: 1em;
	}
	.frame {
		background-color: whitesmoke;
		margin-top: 1em;
		padding-top: 0.5em;
		border-top: 2px solid whitesmoke;
		border-top-right-radius: 1em;
		border-top-left-radius: 1em;
		border-left: 2px solid var(--banner-color);
		border-right: 2px solid var(--banner-color);
		padding-bottom: 2em;
		border-bottom: 2px solid whitesmoke;
		border-bottom-right-radius: 1em;
		border-bottom-left-radius: 1em;
	}
</style>
