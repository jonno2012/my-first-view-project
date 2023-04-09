import {defineStore} from "pinia";

export let useTeamStore = defineStore('team', {
    // * if you use the arrow function format below it offers better typescript support
    state: () => ({ // we can set the actual values of state from within an actions() method by using the this.$state value
        name: '',
        spots: 0,
        members: []
    }),
    actions: {
        async fill() {
            // console.log(r.default)
            // let data = r.default

            // this.name = data.name
            // this.spots = data.spots
            // this.members = data.members

            // an alternative way of defining values like above:
            // this.$patch({
            //     name: data.name,
            //     spots: data.spots,
            //     members: data.members
            // })
            let r = await import('@/team.json')
            this.$state = r.default
        },
        grow(spots) {
            this.spots = spots
        }
    },
    getters: {
        spotsRemaining() {
            return this.spots - this.members.length
        }
    }
})