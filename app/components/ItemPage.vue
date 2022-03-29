<template>
  <Page>
    <ActionBar>
      <Label :text="title" />
    </ActionBar>

    <GridLayout>
      <Button
        class="-primary"
        text="$navigateBack"
        @tap="$navigateBack"
      />
    </GridLayout>
  </Page>
</template>

<script>
export default {
  props: { title: String }
};
</script>
