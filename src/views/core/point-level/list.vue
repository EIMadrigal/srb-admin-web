<template>
  <div class="app-container">
    <el-table :data="list" border stripe>
      <el-table-column type="index" width="50" />
      <el-table-column prop="borrowAmount" label="Borrow Amount" />
      <el-table-column prop="pointStart" label="Point Start" />
      <el-table-column prop="pointEnd" label="Point End" />
      <el-table-column label="Action">
        <template slot-scope="scope">
          <el-button type="danger" size="mini" icon="el-icon-delete" @click="removeById(scope.row.id)">
            delete
          </el-button>
        </template>
      </el-table-column>
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
    },

    removeById(id) {
      this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        return pointLevelClient.removeById(id);
      }).then(response => {
        this.$message({
          showClose: true,
          message: response.message,
          type: 'success'
        })
        this.fetchData();
      }).catch((error) => {
        if (error === 'cancel') {
          this.$message({
            type: 'info',
            message: 'Delete canceled'
          });
        }
      });
    }
  }
}
</script>

<style scoped>

</style>