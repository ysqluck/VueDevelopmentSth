<template>
  <div class="home">
    <Cmp html="Demo" />
  </div>
</template>

<script>
// @ is an alias to /src
//use function component
import Cmp from "../components/Cmp/index";
import Demo from "../components/Cmp/demo";

export default {
  name: "Home",
  components: {
    Cmp,
    Demo,
  },
};
</script>
