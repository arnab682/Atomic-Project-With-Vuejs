<template>
    <div class="card">
        <div class="card-header">
        <h4 class="card-title text-center">
        Subject List 
        <div class="float-right">
            <router-link :to="{ path: '/Subject/create' }" class="btn btn-success easyAccess mr-2 float-right" href="">
            <i class="mdi mdi-playlist-plus">Create</i>
            </router-link>
        </div></h4>

        </div>

        <div class="card-body table-responsive" >
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Subject Name</th>
                <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>
            
                <tr v-for="(subject, index) in subjects">
                    <td scope="row">{{ index+1 }}</td>
                    <td>{{ subject.subject_name }}</td>
                    <td>
                        <router-link :to="{ path: /Subject/+ subject.id+/Edit/ }">Edit</router-link> ||
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
            subjects: []
        }
    },
    
    mounted() {
        this.fetchSubject()
    },
    methods: {
        
        fetchSubject() {
            var self = this
            axios.get('http://localhost:3000/Subjects').then(response => {
                //console.log(response)
                setTimeout(function() {
                    self.subjects = response.data
                    self.loading = false
                }, 1000)
                
            })
        }
    },
}
</script>

<style>

</style>