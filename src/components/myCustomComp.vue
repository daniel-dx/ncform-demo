<template>
  <div>
    <label>{{ mergeConfig.msg }}</label>

    <!-- disabled / readonly / placeholder / hidden : use the computed version, not the config version. defined in controlMixin -->
    <!-- modelVal: for binding value. defined in controlMixin -->
    <input
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="placeholder"
      v-show="!hidden"
      v-model="modelVal"
    />
  </div>
</template>

<style></style>

<script>
import ncformCommon from "@ncform/ncform-common";

export default {
  mixins: [ncformCommon.mixins.vue.controlMixin],

  data() {
    return {
      defaultConfig: {
        // your config's default value（Note: use mergeConfig when use config value）
        msg: "hello"
      }
    };
  },

  methods: {
    // you can handle the modelVal before $emit it (before this.$emit('input'))
    _processModelVal(modelVal) {
      return modelVal;
    }
  }
};
</script>
