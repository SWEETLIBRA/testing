import { reactive, ref } from "vue";
import { useField } from "./field";

export function useForm(init = {}) {
    const form = reactive({})

    for (const [key, value] of Object.entries(init)) {
        form[key] = useField(value)
    }
    return form
}