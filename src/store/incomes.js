import {defineStore} from "pinia";
import {Directory, Encoding, Filesystem} from '@capacitor/filesystem';

export const useIncomesStore = defineStore('incomes', {
    state: () => ({
        incomes: [
            {
                timestamp: '0',
                tags: ['еда', 'машина'],
                cost: '0',
                currency: 'rubble', //dollar, euro
                description: 'Ляляля',
            }
        ],
        nextID: 0,
    }),
    getters: {
        getIncomes: (state) => state.incomes
    },
    actions: {
        async fetchIncomes() {
            try {
                await Filesystem.readFile({
                    path: 'allIncomes.json',
                    directory: Directory.Documents,
                    encoding: Encoding.UTF8,
                }).then((contents) => {
                    this.incomes = JSON.parse(contents.data);
                });
            } catch (error) {
                console.log(error);
            }
        },
        async addIncome() {
            try {
                await Filesystem.writeFile({
                    path: 'allIncomes.json',
                    directory: Directory.Documents,
                    encoding: Encoding.UTF8,
                    data: JSON.stringify(this.incomes)
                })
            } catch (error) {
                console.log(error);
            }
        },
        deleteIncome() {

        }
    }
})