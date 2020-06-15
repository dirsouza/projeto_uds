<template>
  <v-card
    class="mx-lg-auto ma-3"
    max-width="374"
  >
    <v-img
      height="250"
      src="../assets/acai-frozen.jpeg"
    />
    <v-card-title>
      {{ produto.nome }}
      <v-spacer />
      <span class="subtitle-1">{{ $helpers.formatarValor.format(produto.valor) }}</span>
    </v-card-title>
    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        {{ produto.descricao }}
        <v-spacer />
        <span class="overline">{{ produto.categoria }}</span>
      </v-row>
    </v-card-text>
    <v-divider class="mx-4" />
    <v-card-actions>
      <v-btn
        dark
        color="deep-purple darken-3"
        text
        block
        @click="formPedido"
      >
        selecionar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { IProduto } from '@/interfaces'

const moduloProduto = namespace('produto')
const moduloLoad = namespace('load')

@Component({
  name: 'Produto'
})
export default class Produto extends Vue {
  @Prop({
    type: Object,
    required: true
  }) readonly produto!: IProduto

  @moduloProduto.Action
  public insertProduto!: Function

  @moduloLoad.Action
  public insertLoad!: Function

  public async formPedido () {
    try {
      await this.insertLoad(true)
      await this.insertProduto(this.produto)
      await this.insertLoad(false)
        .then(() => {
          this.$emit('openDialog', true)
        })
    } catch (e) {
      console.error(e)
    }
  }
}
</script>
