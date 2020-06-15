<template>
  <v-container>
    <div v-if="getSacola.length">
      <v-card-title class="pb-0">Resumo do pedido</v-card-title>
      <v-row>
        <v-col sm="12" md="9">
          <ListaResumoPedido
            v-for="(pedido, index) of getSacola"
            :key="index"
            :pedido="{index, ...pedido}"
          />
        </v-col>

        <v-col sm="12" md="3">
          <TotaisResumoPedido />
        </v-col>
      </v-row>
    </div>

    <v-row v-else>
      <v-col class="text-center">
        <v-card-text class="headline">
          <v-icon x-large>mdi-emoticon-cry-outline</v-icon>
          <div>Sacola vazia!</div>
        </v-card-text>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import ListaResumoPedido from '@/components/ListaResumoPedido.vue'
import TotaisResumoPedido from '@/components/TotaisResumoPedido.vue'
import { INotificacao, ISacola } from "@/interfaces";

const moduloSacola = namespace('sacola')

@Component({
  name: 'Sacola',
  components: {
    ListaResumoPedido,
    TotaisResumoPedido
  }
})
export default class Sacola extends Vue {
  @moduloSacola.Getter
  public getSacola!: ISacola[]
}
</script>
