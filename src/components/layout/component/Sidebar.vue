<template>
  <nav class="navbar navbar-default sidebar">
    <div style="padding:10px;">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false" v-on:click="close = !close">
            <span class="sr-only">Toggle navigation</span>
            <!-- <div v-if="close">
                <span class="icon-bar"></span>
            </div>
            <div v-else> -->
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            <!-- </div> -->
          </button>
        </div>
        <div class="hidden-xs">
            <div style="padding:10px;text-align:left;margin-bottom:20px;">
                <div style="float:left;">
                    <img src="@/assets/default-user.png" style="width:50px;">
                </div>
                <div style="margin-left:60px;">
                    <span style="font-size:18px;color:white;">Jim</span><br>
                    <span style="color:#9cb0c1;">Admin</span>
                </div>
            </div>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav nav-pills nav-stacked" style="border-top:1px solid #363c84;">
              <li role="presentation">
                  <router-link :to="'/'">
                      <i class="glyphicon glyphicon-home"></i>
                      <span style="vertical-align:text-bottom;">DASHBOARD</span>
                  </router-link>
              </li>
              <li role="presentation">
                  <router-link :to="'staff'">
                      <i class="glyphicon glyphicon-user"></i>
                      <span style="vertical-align:text-bottom;">STAFF DETAILS</span>
                  </router-link>
              </li>
            </ul>
        </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'sidebar',
  data () {
    return {
      // close: false
    }
  }
}
</script>

<style>
  .navbar-default{
    border-color: unset;
  }
  .navbar{
    border-radius: unset;
  }
  .sidebar{
    background:#161665;
    position: fixed;
    width: 20%;
    height: 100%;
  }
  .nav>li>a {
    text-align: left;
    color: #e5f3ff;
  }
  .nav>li>a>i {
    margin-right:20px;font-size:20px;
  }
  .nav>li>a:hover {
    background-color: #7887bd;
  }
  .navbar-default .navbar-toggle:focus, .navbar-default .navbar-toggle:hover {
     background-color: unset;
  }
  .navbar-default .navbar-toggle {
     border-color: unset;
  }
  .navbar-toggle {
     border: unset;
     float: left;
  }
  @media screen and (max-width: 767px){
    .sidebar{
      position: unset;
      width: unset;
      height: auto;
    }
  }
</style>
