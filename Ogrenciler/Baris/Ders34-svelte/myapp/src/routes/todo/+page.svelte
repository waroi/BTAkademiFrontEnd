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

<svelte:head>
  <title>Todo</title>
  <meta name="description" content="About this app" />
</svelte:head>

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
