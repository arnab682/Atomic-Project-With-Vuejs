<template>
    <div class="card">
        <div class="card-header">
        <h4 class="card-title text-center">
        Department List 
        <div class="float-right">
            <router-link :to="{ path: '/Department/Create' }" class="btn btn-success easyAccess mr-2 float-right">
            <i class="mdi mdi-playlist-plus">Create</i>
            </router-link>
        </div></h4>

        </div>

        <div class="card-body table-responsive" >
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Department Name</th>
                <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="(department, index) in departments">
                    <td scope="row">{{ index+1 }}</td>
                    <td>{{ department.department_name }}</td>
                    <td>
                        <router-link :to="{ path: /Department/+ department.id+/Edit/ }">Edit</router-link> ||
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
            departments: []
        }
    },
    
    mounted() {
        this.fetchDepartment()
    },
    methods: {
        
        fetchDepartment() {
            var self = this
            axios.get('http://localhost:3000/departments').then(response => {
                //console.log(response)
                setTimeout(function() {
                    self.departments = response.data
                    self.loading = false
                }, 1000)
                
            })
        }
    },
}
</script>

<style>

</style>