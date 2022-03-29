# @nativescript-community/ui-persistent-bottomsheet navigation test

From issue #5: https://github.com/nativescript-community/ui-persistent-bottomsheet/issues/5

---

In my NS-Vue app I navigate from a page that contains a bottom sheet and then I navigate back to it clearing the navigation history.  

On Android it works flawlessly, but on iOS when I navigate back to the starting page the bottom sheet does not respond to gestures. A scrollview inside the component does.

```js
this.$navigateTo(Page, { clearHistory: true });
```

After a bit of debug it seems that the navigation history gets cleared after navigating to the new page and the `disposeNativeView` method of the "old" BottomSheet is called after the initialization of the new BottomSheet, detaching the `panGestureHandler` in the process.

Is there any way I can prevent this?

I don't have much code to share, the page layout is very simple:
```xml
<Page>
  <BottomSheet v-model="stepIndex" :steps="bottomSheetSteps" scrollViewId="contentScrollView">
    <GridLayout>
      <!-- content -->
    </GridLayout>

    <GridLayout ~bottomSheet rows="auto *">
      <StackLayout row="0">
        <!-- content -->
      </StackLayout>

      <ScrollView row="1" id="contentScrollView">
        <StackLayout>
          <!-- scrollview content -->
        </StackLayout>
      </ScrollView>
    </GridLayout>
  </BottomSheet>
</Page>
```
