<template>
  <div>
    <ncform
      :form-schema="formSchema"
      form-name="your-form-name"
      v-model="formSchema.value"
      @submit="submit()"
    ></ncform>
    <el-button @click="submit()">Submit</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formSchema: {
        type: "object",
        properties: {
          name: {
            type: "string"
          },
          custom: {
            type: "string",
            ui: {
              widget: "my-custom-comp",
              widgetConfig: {
                msg: "hi"
              }
            }
          }
        }
      }
    };
  },
  methods: {
    submit() {
      this.$ncformValidate("your-form-name").then(data => {
        if (data.result) {
          console.log(this.$data.formSchema.value);
          // do what you like to do
        }
      });
    }
  }
};
</script>
