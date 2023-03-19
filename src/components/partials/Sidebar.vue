<template>
    <div class="sidebar">
       
        <router-link :to="{ path: '/Student' }" class="list-group-item list-group-item-action nav-link">Student(Laravel)</router-link>
        <router-link :to="{ path: '/Department' }" class="list-group-item list-group-item-action nav-link">Department(Laravel)</router-link>
        <router-link :to="{ path: '/Subject' }" class="list-group-item list-group-item-action nav-link">Subject(Ajax)</router-link>
        <router-link :to="{ path: '/Post' }" class="list-group-item list-group-item-action nav-link">Post(Ajax)</router-link>
        <router-link :to="{ path: '/Section' }" class="list-group-item list-group-item-action nav-link">Section(Axios)</router-link>
        <router-link :to="{ path: '/Session' }" class="list-group-item list-group-item-action nav-link">Session(Api)</router-link>
    </div>
</template>


<script>
export default {
  
}
</script>

<style>

</style>