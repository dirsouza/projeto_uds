<template>
  <div>
    <v-snackbar
      v-model="startNotificacao"
      :color="notificacao.color"
      :timeout="notificacao.timeout"
      @input="clearNotificacao"
      app
      bottom
      right
      multi-line
    >
      {{ notificacao.message }}
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { INotificacao } from '@/interfaces'

const moduloNotificacao = namespace('notificacao')

@Component({
  name: 'Notificacao'
})
export default class Notificacao extends Vue {
  @moduloNotificacao.Getter('getStartNotificacao')
  public startNotificacao!: boolean

  @moduloNotificacao.Getter('getNoficacao')
  public notificacao!: INotificacao

  @moduloNotificacao.Action
  public insertNotificacao!: Function

  public clearNotificacao () {
    this.insertNotificacao({
      start: false,
      color: '',
      timeout: 0,
      message: ''
    } as INotificacao)
  }
}
</script>
