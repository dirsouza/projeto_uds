<template>
  <v-dialog v-model='dialog' scrollable persistent max-width="600px">
    <v-card>
      <v-card-title
        class="d-inline-block text-truncate white--text purple darken-2"
      >
        Selecione suas preferências
      </v-card-title>
      <v-divider />
      <v-card-text>

        <ListaSabor v-if="dialog" />

        <v-divider />

        <ListaAdicional v-if="dialog" />

      </v-card-text>
      <v-divider />
      <v-card-actions>
        <v-col class="py-0">
          <v-btn small outlined dark color="amber darken-3" @click="onClose">
            cancelar <v-icon right>mdi-close-circle-outline</v-icon>
          </v-btn>
        </v-col>
        <v-col class="py-0 text-right">
          <v-btn small outlined dark color="deep-purple darken-3" @click="adicionarPedido">
            adicionar <v-icon right>mdi-check-circle-outline</v-icon>
          </v-btn>
        </v-col>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import ListaSabor from '@/components/ListaSabor.vue'
import ListaAdicional from '@/components/ListaAdicional.vue'
import { INotificacao, ISabor } from '@/interfaces'

const moduloProduto = namespace('produto')
const moduloSabor = namespace('sabor')
const moduloAdicional = namespace('adicional')
const moduloSacola = namespace('sacola')
const moduloLoad = namespace('load')
const moduloNotificacao = namespace('notificacao')

@Component({
  name: 'Pedido',
  components: {
    ListaSabor,
    ListaAdicional
  }
})
export default class Pedido extends Vue {
  @Prop({
    type: Boolean,
    required: true,
    default: false
  }) public dialog!: boolean

  @moduloSabor.Getter
  public getSabor!: ISabor

  @moduloSacola.Action
  public insertPedido!: Function

  @moduloProduto.Mutation
  public clearProduto!: Function

  @moduloSabor.Mutation
  public clearSabor!: Function

  @moduloAdicional.Mutation
  public clearAdicionais!: Function

  @moduloLoad.Action
  public insertLoad!: Function

  @moduloNotificacao.Action
  public insertNotificacao!: Function

  @Emit('closeDialog')
  onClose () {
    this.cancelarPedido()
    return false
  }

  public cancelarPedido () {
    this.clearProduto()
    this.clearSabor()
    this.clearAdicionais()
    this.insertNotificacao({
      start: true,
      color: 'primary',
      message: 'Pedido cancelado com sucesso!',
      timeout: 3000
    } as INotificacao)
  }

  public adicionarPedido () {
    if (this.getSabor.nome !== '') {
      this.insertLoad(true)
      this.insertPedido()
        .then(() => {
          this.$emit('closeDialog', false)
          this.insertLoad(false)
          this.insertNotificacao({
            start: true,
            color: 'success',
            timeout: 3000,
            message: 'Pedido adicionado com sucesso'
          } as INotificacao)
        })
    } else {
      this.insertNotificacao({
        start: true,
        color: 'warning',
        timeout: 3000,
        message: 'O Sabor não foi selecionado'
      } as INotificacao)
    }
  }
}
</script>
