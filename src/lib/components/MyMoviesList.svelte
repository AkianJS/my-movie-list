<script lang="ts">
    interface MovieInterface {
        movie_id: number;
        title: string;
        image: string;
    }

    export let movies: MovieInterface[] = [];
</script>

<ul>
    {#each movies as movie}
        <li>
            <a href={`/movies/${movie.movie_id}`}>
                <img
                    class="h-[348px]"
                    width="232"
                    height="348"
                    src={movie.image}
                    alt={movie.title} />
                <h2 class="text-center">{movie.title}</h2>
            </a>
        </li>
    {/each}
</ul>

<style>
    ul {
        display: grid;
        grid-template-columns: repeat(auto-fit, 232px);
        gap: 2rem;
    }
</style>
