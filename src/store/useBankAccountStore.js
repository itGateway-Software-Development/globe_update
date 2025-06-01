import { defineStore } from "pinia";
import { ref } from "vue";

export const useBankAccountStore = defineStore('bankAccountStore', () => {
    const bankAccounts = ref([]);

    function storeBankAccounts(accounts) {
        bankAccounts.value = accounts;
    }

    return { bankAccounts, storeBankAccounts }
});