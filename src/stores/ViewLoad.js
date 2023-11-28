import { ref } from "vue"
import { defineStore } from "pinia";

export const useViewLoad = defineStore("view-load", () => {
    const isLoading = ref(false)

    function setLoadingTrue() {
        isLoading.value = true
    }

    function setLoadingFalse() {
        isLoading.value = false
    }

    return { isLoading, setLoadingFalse, setLoadingTrue }
})
