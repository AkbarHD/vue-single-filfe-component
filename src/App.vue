<script   >
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

