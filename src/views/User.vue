<template>
    <h1>Ini Halaman User</h1>
    <ul>
        <li v-for="user in users" :key="user.params"> <!-- Tambahkan atribut :key -->
            <RouterLink :to="'/user/'+user.params">
                {{ user.name }}
            </RouterLink>
        </li>
    </ul>
</template>


<script>
export default {
    data() {
        return {
            users: [
                {params: 'meg', name:'Meg'},
                {params: 'ben', name:'Ben'},
                {params: 'greg', name:'Greg'}
            ]
        }
    }
}
</script>