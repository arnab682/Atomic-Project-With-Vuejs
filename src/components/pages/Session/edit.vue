<template>
    <div class="card">
        <div class="card-header">
        <h4 class="card-title text-center">
            Session Edit 
        <div class="float-right">
            <router-link :to="{ path: '/Session' }" class="btn btn-success easyAccess mr-2 float-right">
                <i class="mdi mdi-playlist-plus">Back</i>
            </router-link>
        </div></h4>

        </div>

        <div class="card-body table-responsive" >
            <form method="post" action="" enctype="multipart/form-data">
                <div class="form-group">
                    <label for="">Session :</label>
                    <input type="text" name="department_name" class="form-control" id="" placeholder="">
                    <small id="" class="form-text text-muted">Give Session. </small>
                </div>

                <div class="form-group">
                    <label for="">Year :</label>
                    <input type="text" name="department_name" class="form-control" id="" placeholder="">
                    <small id="" class="form-text text-muted">Give Year. </small>
                </div>
                
                <button type="submit" class="btn btn-primary">Update</button>
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