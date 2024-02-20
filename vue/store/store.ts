import { reactive } from "vue";
import jobs from "../src/assets/data.json";

const store = reactive({
  filters: [],
  jobs,
});

export default store;
