<template>
  <div class="app-container">
    <el-form label-width="125px">
      <el-form-item label="Borrow Amount">
        <el-input-number v-model="pointLevel.borrowAmount" :min="0" />
      </el-form-item>
      <el-form-item label="Point Level Start">
        <el-input-number v-model="pointLevel.pointStart" :min="0" />
      </el-form-item>
      <el-form-item label="Point Level End">
        <el-input-number v-model="pointLevel.pointEnd" :min="0" />
      </el-form-item>
      <el-form-item>
        <el-button :disabled="saveBtnDisabled" type="primary" @click="saveOrUpdate()">
          Save
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import pointLevelClient from '@/api/core/point-level'

export default {

  data() {
    return {
      saveBtnDisabled: false,
      pointLevel: {}
    }
  },

  created() {
    if (this.$route.params.id) {
      this.fetchById(this.$route.params.id);
    }
  },
  
  methods: {
    fetchById(id) {
      pointLevelClient.getById(id).then(response => {
        this.pointLevel = response.data;
      })
    },

    saveOrUpdate() {
      this.saveBtnDisabled = true;
      if (!this.pointLevel.id) {
        this.save();
      } else {
        this.update();
      }
    },

    save() {
      pointLevelClient.save(this.pointLevel).then(response => {
        this.$message.success(response.message);
        this.$router.push('/core/point-level/list');
      })
    },

    update() {
      pointLevelClient.updateById(this.pointLevel).then(response => {
        this.$message.success(response.message);
        this.$router.push('/core/point-level/list');
      })
    }
  }
}
</script>

<style scoped>

</style>