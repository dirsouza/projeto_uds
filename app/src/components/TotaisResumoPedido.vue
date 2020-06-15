<template>
  <v-col>
    <v-card
      class="mx-auto"
      outlined
    >
      <v-row class="ma-auto">
        <v-col class="pa-0">
          <v-card-title class="pa-2">Total:</v-card-title>
        </v-col>
        <v-col class="pa-0">
          <v-card-text class="subtitle-1 text-right pa-2">{{ $helpers.formatarValor.format(getValorTotal) }}</v-card-text>
        </v-col>
      </v-row>
      <v-row class="ma-auto">
        <v-col class="pa-0">
          <v-card-title class="pa-2">Tempo:</v-card-title>
        </v-col>
        <v-col class="pa-0">
          <v-card-text class="subtitle-1 text-right pa-2">{{ getTempoTotal }}</v-card-text>
        </v-col>
      </v-row>

      <v-divider />

      <v-btn
        block
        outlined
        tile
        color="deep-purple darken-3"
        @click="confirmarPedido"
      >
        confirmar pedido <v-icon right>mdi-check-all</v-icon>
      </v-btn>
    </v-card>
  </v-col>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { INotificacao, ISacola } from "@/interfaces";

const moduloSacola = namespace('sacola')
const moduloLoad = namespace('load')
const moduloNotificacao = namespace('notificacao')

@Component({
  name: 'TotaisResumoPeido'
})
export default class TotaisResumoPedido extends Vue {
  mounted () {
    this.insertLoad(true)
    this.insertLoad(false)
  }

  @moduloLoad.Action
  public insertLoad!: Function

  @moduloNotificacao.Action
  public insertNotificacao!: Function

  @moduloSacola.Getter
  public getSacola!: ISacola[]

  @moduloSacola.Mutation
  public clearSacola!: Function

  @moduloSacola.Getter
  public getValorTotal!: number

  @moduloSacola.Getter
  public getTempoTotal!: string

  public async confirmarPedido () {
    try {
      this.insertLoad(true)
      await this.createPedido()
        .then(() => {
          this.clearSacola()
          this.insertLoad(false)
          this.$router.push({ name: 'Catalogo' })
          this.insertNotificacao({
            start: true,
            color: 'success',
            timeout: 3000,
            message: 'Pedido realizado com sucesso'
          } as INotificacao)
        })
    } catch (e) {
      this.insertLoad(false)
      this.insertNotificacao({
        start: true,
        color: 'success',
        timeout: 3000,
        message: e.message || 'Erro ao realizar o pedido'
      } as INotificacao)
    }
  }

  public createPedido (): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      try {
        this.getSacola.forEach(sacola => {
          this.$axios.post('pedidos', sacola)
        })
        resolve()
      } catch (e) {
        reject(e)
      }
    })
  }
}
</script>
