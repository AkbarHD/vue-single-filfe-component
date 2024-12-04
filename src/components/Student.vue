<script>
export default {
    props: {
        StudentName: String
    },
    emits:['response'],
    methods: {
        showData() {
            this.$emit('response', this.StudentName)
        },
    }
}
</script>
<template>
    <slot>ini pesan default jika di app.vue tidak di berikan</slot> <br>
    <span>Hallo ini adalah murid {{ StudentName }}</span> <button @click="showData">Show Detail</button> <br><br>
</template>