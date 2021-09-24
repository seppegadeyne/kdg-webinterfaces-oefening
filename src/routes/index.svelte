<script>
	import Article from '$lib/Components/Body/Article/Article.svelte'
	import Soundboard from '$lib/Components/Body/Element/Soundboard.svelte'
	import SoundboardItem from '$lib/Components/Body/Element/SoundboardItem.svelte'
	import { data } from '$lib/Database/data'
	import { activeQuote } from '$lib/stores'

</script>

<svelte:head>
	<title>Soundboard</title>
</svelte:head>

<Article title="{$activeQuote === '' ? 'Soundboard' : `Soundboard: ${$activeQuote}`}" classList="lg:container mx-auto m-8 p-8 bg-yellow-300">
	<Soundboard>
		{#each data.items as card}
			<SoundboardItem sound="{card.sound}" image="{card.image}" width="{card.with}" height="{card.height}" title="{card.title}" alt="{card.alt}" quote="{card.quote}" />
		{/each}
	</Soundboard>
	<footer class="mt-4 text-xs text-right">
		<a href="https://www.bensound.com/" target="_blank" rel="noopener">Credits to Bensound</a>
	</footer>
</Article>
