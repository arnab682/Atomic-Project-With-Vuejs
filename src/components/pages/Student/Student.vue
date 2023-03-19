<template>
    <div class="card">
        <div class="card-header">
        <h4 class="card-title text-center">
            Student List 
        <div class="float-right">
            <a class="btn btn-success easyAccess mr-2 float-right" href="">
            <i class="mdi mdi-playlist-plus">Create</i>
            </a>
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
            
            <tr>
                <th scope="row">1</th>
                <td>s_name</td>
                <td>id</td>
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