<script>
</script>

<div class="skills-container">
	<div class="hard">
		<div class="title">Hard Skills</div>
		<div class="skill-level">
			<div class="level">Used daily:</div>
			<ul class="skills">
				<li>NodeJs</li>
				<li>Python</li>
				<li>JavaScript</li>
				<li>Git</li>
				<li>Linux Admin</li>
				<li>Shell scripting (Bash)</li>
				<li>Gitlab CI/CD</li>
				<li>Docker</li>
				<li>MongoDB</li>
				<li>Redis</li>
				<li>Tests</li>
			</ul>
		</div>
		<div class="skill-level">
			<div class="level">Used to be good at:</div>
			<ul class="skills">
				<li>C</li>
				<li>C++</li>
				<li>Java</li>
				<li>MySQL</li>
				<li>PostgreSQL</li>
				<li>ElasticSearch</li>
			</ul>
		</div>
		<div class="skill-level">
			<div class="level">I'd rather do:</div>
			<ul class="skills">
				<li>Go</li>
				<li>NodeJs</li>
				<li>Python</li>
				<li class="endit">But I'm very open-minded there...</li>
				<li class="level except endit">Except maybe:</li>
				<li>Java</li>
			</ul>
		</div>
	</div>
	<div class="soft">
		<div class="title">Soft Skills</div>
		<div class="sskills">
			Relaxed but true and natural leadership - Resource person - Experience of addressing a wide
			range of audiences from CTOs to trainees, through researchers, developers, architects and
			managers, in a multicultural environment - Always good mood and kind &#128521;
		</div>
	</div>
</div>

<style>
	@font-face {
		font-family: RobotoSlab-VariableFont_wght;
		src: url('/RobotoSlab-VariableFont_wght.ttf');
	}
	.skills-container {
		font-family: RobotoSlab-VariableFont_wght;
		margin-left: 1em;
		margin-right: 1em;
		margin-top: 2.5em;
	}

	.hard {
		width: 100%;
		margin-bottom: 2em;
	}

	div.title {
		font-weight: 700;
		font-size: 1.2em;
		border-bottom: 1px solid var(--banner-color);
	}
	.skill-level {
		flex-grow: 1;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		margin-left: 1em;
		height: 2em;
	}
	.level {
		font-weight: 500;
		background-color: #323947cb;
		color: white;
		padding: 1px 3px;
		border-radius: 3px;
		width: 13%;
		margin-top: 1em;
		align-self: flex-start;
	}
	.except {
		margin-left: 2em;
		margin-right: 1em;
		padding-right: 1em;
	}
	.skills {
		display: inline;
		list-style: none;
		align-self: flex-start;
	}
	.skills li {
		display: inline;
	}
	.skills li:after {
		content: ', ';
	}
	.skills li:last-child:after {
		content: '';
	}
	.skills li.endit:after {
		content: '';
	}
	.sskills {
		margin-left: 1em;
		margin-top: 1em;
	}
</style>
