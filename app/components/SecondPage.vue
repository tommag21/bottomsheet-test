<template>
  <Page>
    <ActionBar>
      <Label text="Second page" />
    </ActionBar>

    <GridLayout>
      <Button
        class="-primary"
        text="$navigateTo Home + clearHistory"
        @tap="goBack"
      />
    </GridLayout>
  </Page>
</template>

<script>
import Home from "./Home.vue";

export default {
  methods: {
    goBack() {
      this.$navigateTo(Home, { clearHistory: true });
    }
  },
};
</script>
