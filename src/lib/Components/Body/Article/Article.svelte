<script>
    export let
        title,
        classList

</script>

<article class="{classList}">
    <h2 class="font-bold uppercase text-2xl mb-2">{title}</h2>
    <slot>Article compontent</slot>
</article>