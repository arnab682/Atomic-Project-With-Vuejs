<template>
    <div class="card">
        <div class="card-header">
        <h4 class="card-title text-center">
            Student List 
        <div class="float-right">
            <router-link :to="{ path: '/Student/Create' }" class="btn btn-success easyAccess mr-2 float-right">
            <i class="mdi mdi-playlist-plus">Create</i>
            </router-link>
        </div></h4>

        </div>

        <div class="card-body table-responsive" >
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Student Name</th>
                <th scope="col">ID</th>
                <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>
            
                <tr v-for="(student, index) in students">
                    <td scope="row">{{ index+1 }}</td>
                    <td>{{ student.student_name }}</td>
                    <td>{{ student.student_id }}</td>
                    <td>
                        <router-link :to="{ path: /Student/+ student.id+/Edit/ }">Edit</router-link> ||
                    <a href="#">Delete</a>
                    </td>
                </tr>
            
            </tbody>
        </table>
        </div>
    </div>
</template>


<script>
import axios from 'axios'
export default {
    //props: ['items'],
    data() {
        return {
            loading: true,
            students: []
        }
    },
    
    mounted() {
        this.fetchDepartment()
    },
    methods: {
        
        fetchDepartment() {
            var self = this
            axios.get('http://localhost:3000/Students').then(response => {
                //console.log(response)
                setTimeout(function() {
                    self.students = response.data
                    self.loading = false
                }, 1000)
                
            })
        }
    },
}
</script>

<style>

</style>