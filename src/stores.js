import { writable, derived } from 'svelte/store';

function createBills() {
    const { subscribe, set, update } = writable([['']]);

    function addBill() {
        update(billsToUpdate => {
            billsToUpdate.push(['']);
            
            return billsToUpdate;
        });
    }

    function addItem(billIndex) {
        update(billsToUpdate => {
            billsToUpdate[billIndex].push('');
            
            return billsToUpdate;
        });
    }

    function removeItem(billIndex) {
        update(billsToUpdate => {
            if (billsToUpdate[billIndex].length > 1) {
                billsToUpdate[billIndex].pop();
            } else {
                billsToUpdate.splice(billIndex, 1);
            }

            return billsToUpdate
        });
    }

    function updateBill(billIndex, valueIndex, price) {
        update(billsToUpdate => {
            billsToUpdate[billIndex][valueIndex] = price;

            return billsToUpdate;
        });
    }

    return {
        subscribe,
        addBill,
        addItem,
        removeItem,
        updateBill
    }
}

export const bills = createBills();

export const totalSum = derived(
    bills,
    ($bills, set) => {
        let total = 0;
        $bills.forEach(billItems => {
            billItems.forEach(item => 
                total += parseFloat(item) ? parseFloat(item) : 0);
        });
        set(total);
    },
    0
);
