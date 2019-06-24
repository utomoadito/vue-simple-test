<template>
  <div>
    <sidebar></sidebar>
    <div class="main">
        <b-container fluid style="padding-top:10px;">
            <!--Isi konten berada pada router-view-->
            <router-view></router-view>
        </b-container >
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/layout/component/Sidebar'

export default {
  name: 'layout',
  components: {
    Sidebar
  }
}
</script>

<style>
  .main{
    margin-left: 20%;
  }
  @media screen and (max-width: 767px){
    .main{
      margin-left: unset;
    }
  }
</style>
