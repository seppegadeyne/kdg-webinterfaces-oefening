<script>
    export let
        sound = '/music/bensound-betterdays.mp3',
        image = '/images/betterdays.jpg',
        width = '800',
        height = '450',
        title = 'Betterdays',
        alt = 'Betterdays',
        quote = false

    import { activeQuote } from '$lib/stores'

    let
        audio,
        isPlaying

    function playSound (url) {
        audio = new Audio(url)

        audio.addEventListener('ended', () => {
            isPlaying = false
            $activeQuote = ''
        })

        audio.play()
        if (quote) $activeQuote = quote
        isPlaying = true
    }

    function stopSound () {
        audio.pause()
        audio.currentTime = 0
        isPlaying = false
        $activeQuote = ''
    }
</script>

<section class="relative overflow-hidden group">
    <h2 class="sr-only">{title}</h2>

    <div class="absolute w-full h-full flex items-center justify-center z-10">
        <div class="absolute flex h-12 w-12">
            <div
                    class:animate-ping={isPlaying}
                    class="absolute inline-flex h-full w-full bg-yellow-300 rounded-full opacity-75"
            ></div>
            <div class="relative inline-flex h-12 w-12 bg-yellow-400 rounded-full items-center justify-center">
                {#if !isPlaying}
                    <button on:click={() => playSound(sound)} aria-label="Play">
                        <img src="/icons/play-solid.svg" width="448" height="512" class="w-6 h-6 text-white" alt="Play" />
                    </button>
                {:else}
                    <button on:click={stopSound} aria-label="Stop">
                        <img src="/icons/stop-solid.svg" width="448" height="512" class="w-6 h-6 text-white" alt="Stop" />
                    </button>
                {/if}
            </div>
        </div>
    </div>

    <img src="{image}" width="{width}" height="{height}" alt="{alt}" class="transition-transform duration-500 transform scale-105 group-hover:scale-125 w-full h-full object-cover" />
</section>