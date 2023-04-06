import { ref, watch } from "vue";

export function useStorage(key, val = null) {
    let storedVal = read()

    if (storedVal) {
        val = ref(storedVal)
    } else {
        val = ref(val)

        write()
    }

    watch(val, write, { deep: true }) // for watching deep objects. i.e. if any of the objects nested values are
    // changed we want to trigger the watch

    function read() {
        return JSON.parse(localStorage.getItem(key))
    }

    function write() {
        if (val.value === null || val.value === '') {
            localStorage.removeItem(key)
        } else {
            localStorage.setItem(key, JSON.stringify(val.value)) // would throttle this in real life
        }
    }

    return val
}

