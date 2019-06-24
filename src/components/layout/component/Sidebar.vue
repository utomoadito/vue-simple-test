<template>
  <b-navbar toggleable="lg" type="dark" class="sidebar">
    <div style="padding:10px;height:100%;width:100%;">
        <div class="navbar-header">
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <div class="d-block d-sm-none">
              <div style="float:right;">
                <img src="@/assets/default-user.png" style="width:50px;margin-top:-65px;">
              </div>
          </div>
        </div>
        <div class="d-none d-sm-block">
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
        <b-collapse id="nav-collapse" is-nav>
            <b-nav pills style="border-top:1px solid #363c84;">
              <b-nav-item :to="'/'">
                  <i class="fa fa-home"></i>DASHBOARD
              </b-nav-item>
              <b-nav-item :to="'staff'">
                  <i class="fa fa-user"></i>STAFF DETAILS
              </b-nav-item>
            </b-nav>
        </b-collapse>
    </div>
  </b-navbar>
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
  .nav>li {
    width: 100%;
  }
  .nav>li>a {
    text-align: left;
    color: #e5f3ff;
  }
  .nav>li>a>i {
    margin-right:20px;font-size:30px;
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
  .navbar-default .navbar-toggle .icon-bar {
    background-color: #fff;
  }
  @media screen and (max-width: 767px){
    .sidebar{
      position: unset;
      width: unset;
      height: auto;
    }
    .nav{
      border-top: unset !important;
    }
    .navbar-default .navbar-collapse {
      border: unset;
    }
  }
</style>
