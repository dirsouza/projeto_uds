<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-row align="start" justify="center">

          <Produto
            v-for="(produto, i) of produtos"
            :key="i"
            :produto="produto"
            @openDialog="openDialog = $event"
          />

        </v-row>
      </v-col>
    </v-row>

    <Pedido
      :dialog="openDialog"
      @closeDialog="openDialog = $event"
    />

  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import Produto from '@/components/Produto.vue'
import Pedido from '@/components/Pedido.vue'
import { INotificacao, IProduto } from '@/interfaces'

const moduloLoad = namespace('load')
const moduloNotificacao = namespace('notificacao')

@Component({
  name: 'Catalogo',
  components: {
    Produto,
    Pedido
  }
})
export default class Catalogo extends Vue {
  private produtos: IProduto[] = []

  mounted () {
    this.fetchProdutos()
  }

  @moduloLoad.Action
  public insertLoad!: Function

  @moduloNotificacao.Action
  public insertNotificacao!: Function

  public async fetchProdutos () {
    try {
      this.insertLoad(true)
      this.produtos = await this.$axios.get("produtos")
        .then(res => res.data)
      this.insertLoad(false)
    } catch (e) {
      this.insertLoad(false)
      this.insertNotificacao({
        start: true,
        color: 'warning',
        timeout: 3000,
        message: e.message || 'Erro ao carregar os produtos'
      } as INotificacao)
    }
  }

  private dialogPedido = false

  get openDialog () {
    return this.dialogPedido
  }

  set openDialog (value: boolean) {
    this.dialogPedido = value
  }
}
</script>
