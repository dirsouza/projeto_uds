<template>
  <v-overlay :value="startLoad">
    <v-progress-circular indeterminate size="64" />
  </v-overlay>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

const moduleLoad = namespace('load')

@Component({
  name: 'Load'
})
export default class Load extends Vue {
  @moduleLoad.Getter('getStartLoad')
  public startLoad!: boolean
}
</script>
