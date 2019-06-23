<template>
  <div class="row">
    <div class="col-md-12">
        <ol class="breadcrumb">
          <li><a href="#"><i class="glyphicon glyphicon-home"></i></a></li>
        </ol>
    </div>
    <div class="col-md-12">
        <div class="row">
            <div class="col-md-6">
                <h3>STAFF DETAILS</h3>
            </div>
            <div class="col-md-6">
                <a href="#" class="btn btn-primary" style="float:right;margin-top:15px;border-radius:50px;padding:1px 12px;">
                    <h5><i class="glyphicon glyphicon-plus"></i> ADD EMPLOYEE</h5>
                </a>
            </div>
        </div>
    </div>
    <div class="col-md-12">
        <div class="panel panel-default" style="margin-top:20px;">
          <div class="panel-heading">
            <div class="row">
                <div class="col-md-3">
                    <h2 class="panel-title"><b>STAFF</b></h2>
                </div>
                <div class="col-md-4">
                    <span style="font-size:12px;"><b>SEARCH</b> &nbsp;</span>
                    <input type="text" name="search" class="form-control" placeholder="Search for..." v-model="search" style="width: 80%;display: inline-block;">
                </div>
                <div class="col-md-5">
                    <div style="float:right;">
                    <span style="font-size:12px;"><b>SHOWING</b> &nbsp;</span>
                    <select class="form-control" v-on:change="showing" style="width: 60%;display: inline-block;">
                        <option value="">All</option>
                        <option v-for="(department, index) in departments" :key="index" :value="department">{{department}}</option>
                    </select>
                    </div>
                </div>
            </div>
          </div>
          <div class="panel-body">
            <div class="table-responsive">
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
          </div>
        </div>
    </div>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
