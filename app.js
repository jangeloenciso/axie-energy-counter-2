const app = Vue.createApp({
    data() {
        return {
            energy: 3,
        };
    },
    methods: {
        addEnergy() {
            if (this.energy < 10) this.energy++;
        },
        reduceEnergy() {
            if (this.energy > 0) this.energy--;
        },
        endTurn() {
            if (this.energy == 9) {
                this.energy += 1;
            } else if (this.energy < 10) {
                this.energy += 2;
            }
        },
        reset() {
            this.energy = 3;
        },
    },
});

app.mount('#app');
