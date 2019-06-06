<template>
  <div id="app" style="width: fit-content; margin: auto;" ref="content">
    <h1>Дипломный проект на тему:</h1>
    <h2>«Медицинская диагностика раковых клеток методами машинного обучения»</h2>
    <h3>Со спецчастью: «Разработка экспертной системы медицинской диагностики с использованием методов
      классификации»</h3>
    <h4 style="text-align: left;">АВТОР ДИПЛОМНОГО ПРОЕКТА БАКАЛАВРА Чернышов Богдан Сергеевич</h4>
    <h4 style="text-align: left;">РУКОВОДИТЕЛЬ ДИПЛОМНОГО ПРОЕКТА БАКАЛАВРА Доцент каф. ПИ Федяев Олег Иванович</h4>
    <div class="content">
      <el-upload
        class="upload-demo"
        ref="upload"
        :limit="1"
        action="/api/predict"
        :on-success="showResult"
        :auto-upload="false">
        <el-button slot="trigger" size="small" type="primary">Выберите файл для проверки</el-button>
        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">Проверить</el-button>
        <div class="el-upload__tip" slot="tip">Тип файла: CSV</div>
      </el-upload>
      <h3 v-if="result" style="margin-top: 100px;">Вероятность наличия клеток злокачественной опухоли:</h3>
      <el-progress v-if="result" type="dashboard" :percentage="result" :color="colors" width="300"></el-progress>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      loading: null,
      result: null,
      colors: [
        {
          color: '#f56c6c',
          percentage: 20,
        },
        {
          color: '#e6a23c',
          percentage: 40,
        },
        {
          color: '#5cb87a',
          percentage: 60,
        },
        {
          color: '#1989fa',
          percentage: 80,
        },
        {
          color: '#6f7ad3',
          percentage: 100,
        },
      ],
    };
  },
  methods: {
    submitUpload() {
      this.$refs.upload.submit();
      this.loading = this.$loading({
        // target: this.$refs.content,
        lock: true,
        text: 'Загрузка',
        background: 'rgba(0, 0, 0, 0.2)',
      });
    },
    showResult(res, file) {
      console.log(file);
      this.$refs.upload.uploadFiles = [];
      this.result = parseInt(res, 10);
      this.loading.close();
    },
  },
};
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .content {
    width: max-content;
    margin: auto;
  }
</style>
