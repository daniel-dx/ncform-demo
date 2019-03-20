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
          // standard component: input
          name: {
            type: "string",
            ui: {
              columns: 6
            },
            rules: {
              required: true,
              myCustom: {
                // your custom rule
                value: "daniel",
                errMsg: 'Fill in "daniel" pls'
              }
            }
          },
          // custom widget: my-custom-comp
          custom: {
            type: "string",
            ui: {
              columns: 6,
              widget: "my-custom-comp",
              widgetConfig: {
                name: "daniel" // try "dx: {{$root.name}}" and fill in the name input
              }
            }
          }
        },
        ui: {
          widgetConfig: {
            layout: "h"
          }
        }
      }
    };
  },
  methods: {
    submit() {
      this.$ncformValidate("your-form-name").then(data => {
        if (data.result) {
          alert(JSON.stringify(this.$data.formSchema.value, null, 2));
          console.log(this.$data.formSchema.value);
          // do what you like to do
        }
      });
    }
  }
};
</script>
