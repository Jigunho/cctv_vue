<template>
    <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Activity name">
        <el-col :span="4">
          <el-input v-model="form.name" ></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="Activity zone">
        <el-col :span="4">
        <el-select v-model="form.region" placeholder="please select your zone">
          <el-option label="Zone one" value="shanghai"></el-option>
          <el-option label="Zone two" value="beijing"></el-option>
          <el-option label="Zone three" value="Chungdoo"></el-option>
        </el-select>
        </el-col>
      </el-form-item>
      <el-form-item label="Start time">
        <el-col :span="3">
          <el-date-picker type="date" placeholder="Pick a date" v-model="form.sdate" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="1">-</el-col>
        <el-col :span="3">
          <el-time-picker type="fixed-time" placeholder="Pick a time" v-model="form.stime" style="width: 100%;"></el-time-picker>
        </el-col>
        
      </el-form-item>
      <el-form-item label="End time">
        <el-col :span="3">
          <el-date-picker type="date" placeholder="Pick a date" v-model="form.edate" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="1">-</el-col>
        <el-col :span="3">
          <el-time-picker type="fixed-time" placeholder="Pick a time" v-model="form.etime" style="width: 100%;"></el-time-picker>
        </el-col>
        
      </el-form-item>
      <el-form-item label="Activity type">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="Online activities" name="type"></el-checkbox>
          <el-checkbox label="Promotion activities" name="type"></el-checkbox>
          <el-checkbox label="Offline activities" name="type"></el-checkbox>
          <el-checkbox label="Simple brand exposure" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="Resources">
        <el-radio-group v-model="form.resource">
          <el-radio label="Sponsor"></el-radio>
          <el-radio label="Venue"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Activity form">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
    name: 'Filter',
  data() {
    return {
      form: {
        name: '',
        region: '',
        sdate: '',
        stime: '',
        edate: '',
        etime: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$message('submit!')
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

