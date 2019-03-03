<template>
  <div class="my-custom-comp">
    <label
      >This is a custom form widget: {{ $t("hi", { name: mergeConfig.name }) }}
    </label>

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

<script>
import ncformCommon from "@ncform/ncform-common";

export default {
  mixins: [ncformCommon.mixins.vue.controlMixin],

  i18nData: {
    // i18n
    en: {
      hi: "Hi <%= name %>"
    },
    zh_cn: {
      hi: "你好 <%= name %>"
    }
  },

  data() {
    return {
      defaultConfig: {
        // your config's default value（Note: use mergeConfig when use config value）
        name: "daniel"
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

<style scoped>
.my-custom-comp {
  text-align: left;
  line-height: 3;
}
</style>
