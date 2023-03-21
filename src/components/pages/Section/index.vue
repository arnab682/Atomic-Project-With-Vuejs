<template>
    <div class="card">
        <div class="card-header">
        <h4 class="card-title text-center">
        Section List 
        <div class="float-right">
            <router-link :to="{ path: '/Section/Create' }" class="btn btn-success easyAccess mr-2 float-right" href="">
            <i class="mdi mdi-playlist-plus">Create</i>
            </router-link>
        </div></h4>

        </div>

        <div class="card-body table-responsive" >
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th>Class Name</th>
                <th>Section</th>
                <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>
            
                <tr v-for="(section, index) in sections">
                    <td scope="row">{{ index+1 }}</td>
                    <td>{{ section.class_name }}</td>
                    <td>{{ section.section }}</td>
                    <td>
                        <router-link :to="{ path: /Section/+ section.id+/Edit/ }">Edit</router-link> ||
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
            sections: []
        }
    },
    
    mounted() {
        this.fetchDepartment()
    },
    methods: {
        
        fetchDepartment() {
            var self = this
            axios.get('http://localhost:3000/Sections').then(response => {
                //console.log(response)
                setTimeout(function() {
                    self.sections = response.data
                    self.loading = false
                }, 1000)
                
            })
        }
    },
}
</script>

<style>

</style>