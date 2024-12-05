<!-- <script   >
import Anjing from './components/Student.vue';
import Teacher from './components/Teacher.vue';
export default {
  components: {
    Anjing,
    Teacher
  },
  data() {
    return {
        selectedStudent: '',
        selectedTeacher: '',
      }
    }, 
  methods: {
    showData(whatever) {
        this.selectedStudent = whatever
    },
    showTeacher(teacher) {
      this.selectedTeacher = teacher
    }
    
  }
  }
</script>
<template>
  <Anjing @response="showData" StudentName="Fajar"> Ini adalah murid pertama </Anjing>
  <Anjing @response="showData" StudentName="Akbar"/> 
  <Anjing @response="showData" StudentName="Anjely"/> 

  <Teacher @response="showTeacher" TeacherName="Ali"/>
  <Teacher @response="showTeacher" TeacherName="Budi"> ini adalah teacher kedua </Teacher>


  <p>Studen yang dipilih adalah : {{ selectedStudent }}</p>
  <p>Teacher yang dipilih adalah : {{ selectedTeacher }}</p>
</template>
 -->

  <script>
import Navbar from './components/Navbar.vue';
export default {
  components: {
      Navbar
    }
  }
</script>

 <template>
  <!-- ada di src\components\Navbar.vue -->
   <div class="menu">
     <Navbar/>
   </div>

   <main>
     <routerView/>
   </main>
 </template>



<!-- berlaku global -->
<style> 
  body{
    margin: 0;
  }
</style>
<!-- berlaku hanya di file ini -->
<style scoped>
  .menu{
    background-color: cornsilk;
    line-height: 2.5rem;
    padding: 10px;
  }
  .main{
    padding: 10px;
  }
</style>


