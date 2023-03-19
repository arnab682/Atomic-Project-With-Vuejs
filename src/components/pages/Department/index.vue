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
            
            <tr>
                <th scope="row">1</th>
                <td>department_name</td>
                <td>
                <a href="">Edit</a> ||
                <a href="">Delete</a>
                </td>
            </tr>
            
            </tbody>
        </table>
        </div>
    </div>
</template>


<script>
export default {
  
}
</script>

<style>

</style>