<template>
    <div class="card">
        <div class="card-header">
        <h4 class="card-title text-center">
            Subject Create 
        <div class="float-right">
            <router-link :to="{ path: '/Subject' }" class="btn btn-success easyAccess mr-2 float-right">
                <i class="mdi mdi-playlist-plus">Back</i>
            </router-link>
        </div></h4>

        </div>

        <div class="card-body table-responsive" >
            <form method="post" action="" enctype="multipart/form-data">
                <div class="form-group">
                    <label for="">Department Name :</label>
                    <input type="text" name="department_name" class="form-control" id="" placeholder="">
                    <small id="" class="form-text text-muted">Give Department Name. </small>
                </div>
                
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>


<script>
export default {
  
}
</script>

<style>

</style>