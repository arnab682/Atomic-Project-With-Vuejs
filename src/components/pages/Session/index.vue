<template>
    <div class="card">
        <div class="card-header">
        <h4 class="card-title text-center">
            Session List 
        <div class="float-right">
            <router-link :to="{ path: '/Session/Create' }" class="btn btn-success easyAccess mr-2 float-right" href="">
            <i class="mdi mdi-playlist-plus">Create</i>
            </router-link>
        </div></h4>

        </div>

        <div class="card-body table-responsive" >
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th>Session</th>
                <th>Year</th>
                <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>
            
                <tr v-for="(session, index) in sessions">
                    <td scope="row">{{ index+1 }}</td>
                    <td>{{ session.session }}</td>
                    <td>{{ session.year }}</td>
                    <td>
                        <router-link :to="{ path: /Session/+ session.id+/Edit/ }">Edit</router-link> ||
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
            sessions: []
        }
    },
    
    mounted() {
        this.fetchDepartment()
    },
    methods: {
        
        fetchDepartment() {
            var self = this
            axios.get('http://localhost:3000/Sessions').then(response => {
                //console.log(response)
                setTimeout(function() {
                    self.sessions = response.data
                    self.loading = false
                }, 1000)
                
            })
        }
    },
}
</script>

<style>

</style>