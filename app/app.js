import Vue from 'nativescript-vue'

import Home from './components/Home'

import { install } from "@nativescript-community/ui-persistent-bottomsheet";
import PersistentBottomSheet from "@nativescript-community/ui-persistent-bottomsheet/vue";
import RadListView from "nativescript-ui-listview/vue";

install();

Vue.use(PersistentBottomSheet);
Vue.use(RadListView);

new Vue({
  render: (h) => h('frame', [h(Home)]),
}).$start()
