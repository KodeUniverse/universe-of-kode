<script lang="ts">
  import { Button } from "../button";

  let currTheme = $state<string>("dark");

  function switchTheme() {
    if (currTheme === "dark") {
      currTheme = "light";
    } else {
      currTheme = "dark";
    }
  }
</script>

<div>
  <p>{currTheme}</p>
  <Button onclick={switchTheme} />
</div>
