<template>
  <div class="app-container">
    <el-table :data="list" border stripe>
      <el-table-column type="index" width="50" />
      <el-table-column prop="borrowAmount" label="Borrow Amount" />
      <el-table-column prop="pointStart" label="Point Start" />
      <el-table-column prop="pointEnd" label="Point End" />
    </el-table>
  </div>
</template>

<script>
import pointLevelClient from '@/api/core/point-level'

export default {
  data() {
    return {
      list: []
    }
  },

  created() {
    this.fetchData();
  },

  methods: {
    fetchData() {
      pointLevelClient.list().then(response => {
        this.list = response.data;
      })
    }
  }
}
</script>

<style scoped>

</style>