<script>
export default {
    props: {
        TeacherName: String
    },
    emits: ['response'],
    methods: {
        showTeacher() {
            this.$emit('response', this.TeacherName)
        }
    }
}
</script>
<template>
    <slot>Ini adalah guru default</slot> <br>
    <span>Hallo ini adalah guru {{ TeacherName }}</span> <button @click="showTeacher">Click Teacher</button> <br> <br>
</template>