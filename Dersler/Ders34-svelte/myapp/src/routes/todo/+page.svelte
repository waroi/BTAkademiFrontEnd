<script>
  /**
   * @type {any[]}
   */
  let todos = [];
  let newTodo = "";
  const addTodo = () => {
    todos = [...todos, newTodo];
    newTodo = "";
  };
</script>

<div class="text-column">
  <h1>Todo Uygulaması</h1>
  <input bind:value={newTodo} type="text" />
  <button on:click={addTodo}>Todo Ekle</button>
  <ul>
    {#each todos as todo}
      <li>{todo}</li>
    {/each}
  </ul>
</div>

<div>deneme</div>

<svelte:head>
  <title>Todo</title>
  <meta name="description" content="About this app" />
</svelte:head>

<!-- Selam millet, size bir soru, dom'a =>   [45] şeklinde bir arrayi yazdırmaya kalkarsam ne olur ve neden olur? Bakalım kim bilecek 🙂
yani şöyle bir state var: const [matchCount, setMatchCount] = useState(0);
ve şöyle doluyor: setMatchCount(result.filter((x) => x.isMatched).map((y) => y.count));
label: t('matchingForms', { matchingFormsCounts: matchCount > 0 ? matchCount : 0 }),
böyle de kullanılıyor
yani number bir state içerisine array set ediyor, onu da ekrana basıyor
neler olur bu durumda?
ve neden böyle olur
? -->

<style>
  .text-column {
    max-width: 600px;
    margin: 0 auto;
    padding: 1em;
  }
</style>
