import { reactive} from "vue";

export let counter = reactive({
    count: 0,
    // these are called actions
    increment() {
        this.count++
    }
})