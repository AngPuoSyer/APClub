import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import ToastService from "primevue/toastservice";
import Toast from "primevue/toast";
import Menu from "primevue/menu";
import Avatar from "primevue/avatar";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import InputText from "primevue/inputtext";
import Message from "primevue/message";
import InlineMessage from "primevue/inlinemessage";
import Password from "primevue/password";
import Checkbox from "primevue/checkbox";
import OverlayPanel from "primevue/overlaypanel";
import ProgressBar from "primevue/progressbar";
import Toolbar from "primevue/toolbar";
import Tooltip from "primevue/tooltip";
import Textarea from "primevue/textarea";
import Dropdown from "primevue/dropdown";
import AutoComplete from "primevue/autocomplete";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import Skeleton from "primevue/skeleton";
import OrganizationChart from "primevue/organizationchart";
import Calendar from "primevue/calendar";
import InputSwitch from "primevue/inputswitch";
import DynamicDialog from "primevue/dynamicdialog";
import DialogService from "primevue/dialogservice";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });
  nuxtApp.vueApp.use(ToastService);
  nuxtApp.vueApp.use(DialogService);

  nuxtApp.vueApp.component("Button", Button);
  nuxtApp.vueApp.component("Toast", Toast);
  nuxtApp.vueApp.component("Menu", Menu);
  nuxtApp.vueApp.component("Avatar", Avatar);
  nuxtApp.vueApp.component("DataTable", DataTable);
  nuxtApp.vueApp.component("Column", Column);
  nuxtApp.vueApp.component("InputText", InputText);
  nuxtApp.vueApp.component("Message", Message);
  nuxtApp.vueApp.component("InlineMessage", InlineMessage);
  nuxtApp.vueApp.component("Password", Password);
  nuxtApp.vueApp.component("Checkbox", Checkbox);
  nuxtApp.vueApp.component("OverlayPanel", OverlayPanel);
  nuxtApp.vueApp.component("ProgressBar", ProgressBar);
  nuxtApp.vueApp.component("Toolbar", Toolbar);
  nuxtApp.vueApp.component("Textarea", Textarea);
  nuxtApp.vueApp.component("Dropdown", Dropdown);
  nuxtApp.vueApp.component("AutoComplete", AutoComplete);
  nuxtApp.vueApp.component("TabView", TabView);
  nuxtApp.vueApp.component("TabPanel", TabPanel);
  nuxtApp.vueApp.component("OrganizationChart", OrganizationChart);
  nuxtApp.vueApp.component("Calendar", Calendar);
  nuxtApp.vueApp.component("InputSwitch", InputSwitch);
  nuxtApp.vueApp.component("Skeleton", Skeleton);
  nuxtApp.vueApp.component("DynamicDialog", DynamicDialog);

  nuxtApp.vueApp.directive("Tooltip", Tooltip);

  //other components that you need
});
