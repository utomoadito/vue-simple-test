<template>
  <div class="row">
    <b-col md="12">
        <ol class="breadcrumb">
          <li><a href="#"><i class="fa fa-home"></i></a></li>
        </ol>
    </b-col>
    <b-col md="12">
        <div class="row">
            <b-col md="6" cols="7">
                <h3 style="font-size:20px;"><b>STAFF DETAILS</b></h3>
            </b-col>
            <b-col md="6" cols="5">
                <b-button pill variant="primary" size="sm" href="#" style="float:right;font-size:13px;">
                    <i class="fa fa-plus"></i> Add Employee
                </b-button>
            </b-col>
        </div>
    </b-col>
    <b-col md="12">
        <b-card-group deck style="margin-top:20px;">
          <b-card header-tag="header">
          <div slot="header">
            <div class="row">
                <b-col md="3" cols="12">
                    <h5><b>STAFF</b></h5>
                </b-col>
                <b-col md="4" cols="12">
                    <b-form inline>
                        <label class="mr-sm-2">Search</label>
                        <b-input type="text" name="search" placeholder="Search for..." v-model="search" style="width:75%;display: inline-block;"></b-input>
                    </b-form>
                </b-col>
                <b-col md="5" cols="12">
                    <div class="right-filter">
                        <b-form inline>
                            <label class="mr-sm-2">Showing</label>
                            <select class="form-control" v-on:change="showing" style="width:60%;display:inline-block;">
                                <option value="">All</option>
                                <option v-for="(department, index) in departments" :key="index" :value="department">{{department}}</option>
                            </select>
                        </b-form>
                    </div>
                </b-col>
            </div>
          </div>
          <b-card-text>
            <div class="table-responsive">
                <div class="d-none d-sm-block">
                    <table class="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>NAME</th>
                                <th>DEPARTMENT</th>
                                <th>EMPLOYEE NUMBER</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(data, index) in staffs" :key="index">
                                <td>{{data.name}}</td>
                                <td>{{data.department}}</td>
                                <td>{{data.emp_number}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="d-block d-sm-none">
                    <table class="table borderless table-mstriped">
                        <tbody v-for="(data, index) in staffs" :key="index">
                            <tr>
                                <th>NAME</th>
                                <td>{{data.name}}</td>
                            </tr>
                            <tr>
                                <th>DEPARTMENT</th>
                                <td>{{data.department}}</td>
                            </tr>
                            <tr>
                                <th>EMPLOYEE NUMBER</th>
                                <td>{{data.emp_number}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
          </b-card-text>
          </b-card>
        </b-card-group>
    </b-col>
  </div>
</template>

<script>
export default {
  data () {
    return {
      search: '',
      datas: [
        {name: 'Jim', department: 'Primary', emp_number: '100001'},
        {name: 'Susi', department: 'Preschool', emp_number: '100005'},
        {name: 'Bambang', department: 'Primary', emp_number: '111002'},
        {name: 'Andi', department: 'Preschool', emp_number: '100002'},
        {name: 'Asep', department: 'Laboratory', emp_number: '100042'}
      ]
    }
  },
  computed: {
    staffs () {
      return this.datas.filter(data => {
        return data.name.toLowerCase().includes(this.search.toLowerCase()) || data.department.toLowerCase().includes(this.search.toLowerCase()) || data.emp_number.toString().includes(this.search.toLowerCase())
      })
    },
    /* Check if element have same value */
    departments () {
      return Array.from(new Set(this.datas.map(p => p.department)))
    }
  },
  methods: {
    showing (e) {
      console.log(e.target.value)
      this.search = e.target.value
    }
  }
}
</script>

<style>
  .right-filter{
    float:right;
  }
  .table-mstriped>tbody:nth-of-type(odd) {
    background-color: #f9f9f9;
  }
  .table.borderless tr td, .table.borderless tr th {
    border-width: 0;
  }
  @media screen and (max-width: 767px){
    .right-filter{
      float:left;
    }
  }
</style>
