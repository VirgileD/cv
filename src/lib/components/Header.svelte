<script>
	import Avatar from './Avatar.svelte';
	import MailIcon from './icons/Mail.svelte';
	import PhoneIcon from './icons/Phone.svelte';
	import LocationIcon from './icons/Location.svelte';
	import DiplomaIcon from './icons/Diploma.svelte';
    import LinkedinIcon from './icons/Linkedin.svelte';
	import Gcp from './Gcp.svelte';
	import { page } from '$app/stores';
    
    const isPdf = $page.url.searchParams.has('pdf');

</script>

<div class="root">
    <div class="header-container">
        <div class="avatar">
            <Avatar />
        </div>
		<Gcp/>
        <div class="main">
            <div class="name">Virgile Devaux</div>
            <div class="current-position">Senior Backend Engineer<sup>++</sup></div>
            <div class="diploma">
                <DiplomaIcon size="18" color="white" />&nbsp;<span class="prefix">Master in CS</span>
            </div>
        </div>

        <div class="reach">
            <div class="location">
                <LocationIcon size="18" color="white" />&nbsp;&nbsp;<span class="prefix"
                    >I live in&nbsp;&nbsp;</span
                ><span class="info">Lyon, France</span>
            </div>
            <div class="email">
                <MailIcon size="18" color="white" />&nbsp;&nbsp;<span class="prefix"
                    >Reach me at&nbsp;&nbsp;</span
                ><span class="info"
                    ><a class="soft-link" href="mailto:vdevaux@gmail.com" alt="Email">vdevaux@gmail.com</a
                    ></span
                >
            </div>
            <div class="phone">
                <PhoneIcon size="18" color="white" />&nbsp;&nbsp;<span class="prefix"
                    >just give me a call&nbsp;&nbsp;</span
                ><span class="info">+33 (0)6 18 18 43 01</span>
            </div>
            <div class="linkedin">
                <LinkedinIcon size="18" color="white" />&nbsp;&nbsp;<span class="prefix"
                    >or through&nbsp;</span
                ><span class="info"><a class="soft-link" href="https://www.linkedin.com/in/virgile-devaux-67088882/" target="_blank">LinkedIn</a></span>
            </div>
        </div>
    </div>
	{#if !isPdf}
		<div class="cv">
			<div><a href="VirgileDevaux-CV-202409.pdf" class="soft-link" target="_blank">Get the pdf version!</a></div>
		</div>
	{/if}
</div>

<style>
	@font-face {
		font-family: RobotoSlab-VariableFont_wght;
		src: url('/RobotoSlab-VariableFont_wght.ttf');
	}
	.header-container {
		font-family: RobotoSlab-VariableFont_wght;
		color: whitesmoke;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		justify-content: space-between;
		background-color: var(--banner-color);
		padding-left: 1em;
		padding-top: 1em;
		padding-right: 1em;
		border-top: 2px solid var(--banner-color);
		border-top-right-radius: 1em;
		border-top-left-radius: 1em;
	}
	.main {
		flex-grow: 10;

		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.main .name {
		font-weight: 700;
		font-size: x-large;
	}
	.main .current-position {
		font-size: large;
	}

	.reach {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-end;
	}
	.location,
	.email,
	.phone {
		display: flex;
		flex-direction: row;
		align-items: baseline;
        padding-bottom: 0.5em;
	}
    .location {
        padding-top: 1.5em;
    }
	.linkedin {
		padding-bottom: 1.5em;
	}
	.soft-link {
		all: unset;
		text-decoration: underline;
		cursor: pointer;
	}
    .cv {
        font-size: small;
        color: whitesmoke;
        padding-left: 1em;
        padding-top: 0.7em;
        padding-bottom: 0.3em;
        background-color: var(--banner-color);
        border-bottom-right-radius: 1em;
        border-bottom-left-radius: 1em;
    }
	.avatar {
		margin-right: 1em;
	}
	.prefix {
		font-weight: 300;
		font-size: small;
		align-items: baseline;
	}
	.info {
		font-weight: 700;
		font-size: larger;
		align-items: baseline;
		color: white;
	}
</style>
