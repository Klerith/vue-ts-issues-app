import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useIssuesStore = defineStore('issues', () => {

    // TODO: arreglar tipo de dato
    const state = ref(''); // all = '', open, closed
    const labels = ref<string[]>([]);


    return {
        // State
        state,
        labels,

        // Getters

        // Actions
        toggleLabel( labelName: string ) {
          //TODO: implementar
          throw new Error('No implementado');
        }

    }
});
