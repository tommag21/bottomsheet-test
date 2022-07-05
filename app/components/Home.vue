<template>
  <Page>
    <ActionBar>
      <Label text="Home" />
    </ActionBar>

    <BottomSheet
      iosOverflowSafeAreaEnabled="false"
      stepIndex="0"
      :steps="[200, 500]"
      scrollViewId="scrollView"
    >
      <GridLayout>
        <Button class="-primary" text="Go to second page" @tap="goToPage" />
      </GridLayout>

      <GridLayout ~bottomSheet rows="100 500" backgroundColor="gray">
        <GridLayout row="0" backgroundColor="lightgray">
          <Label class="text-center" text="Step 1" />
        </GridLayout>

        <ScrollView row="1" id="scrollView">
          <StackLayout>
            <Label
              v-for="(item, i) in items"
              :key="i"
              class="text-center p-y-10"
              :text="'Item ' + item"
            />
          </StackLayout>
        </ScrollView>

        <!-- <RadListView
          row="1"
          for="item in items"
          id="scrollView"
          @itemTap="onItemTap"
        >
          <v-template>
            <GridLayout class="text-center p-y-10">
              <Label :text="'Item ' + item" />
            </GridLayout>
          </v-template>
        </RadListView> -->
      </GridLayout>
    </BottomSheet>
  </Page>
</template>

<script>
import SecondPage from "./SecondPage.vue";
import ItemPage from "./ItemPage.vue";

export default {
  data() {
    return {
      items: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25,
      ],
    };
  },

  methods: {
    goToPage() {
      this.$navigateTo(SecondPage);
    },

    onItemTap({ item }) {
      this.$navigateTo(ItemPage, { props: { title: "Item " + item } });
    }
  },
};
</script>
