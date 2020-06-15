<template>
  <v-col>
    <v-card
      class="mx-auto"
      outlined
    >
      <v-simple-table dense light>
        <template v-slot:default>
          <thead>
          <tr>
            <th>Descrição</th>
            <th>Sabor</th>
            <th class="text-center">Tamanho</th>
            <th class="text-center">Preço</th>
            <th class="text-center"></th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>{{ pedido.nome }}</td>
            <td class="text-capitalize">{{ pedido.sabor }}</td>
            <td class="text-center">{{ pedido.tamanho }}{{ pedido.unidade }}</td>
            <td class="text-center">{{ $helpers.formatarValor.format(pedido.valor) }}</td>
            <td :rowspan="getAdicionaisLength(pedido.adicionais)" width="5" class="text-right">
              <v-tooltip
                bottom
                color="purple darken-1"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    icon
                    color="red"
                    v-bind="attrs"
                    v-on="on"
                    @click="deletePedido(pedido.index)"
                  >
                    <v-icon>mdi-delete-forever</v-icon>
                  </v-btn>
                </template>
                <span>Remover</span>
              </v-tooltip>
            </td>
          </tr>
          <tr v-for="(adicional, i) of pedido.adicionais" :key="i">
            <td class="font-weight-light font-italic">Adicional</td>
            <td class="text-capitalize">{{ adicional.nome }}</td>
            <td class="text-center">-</td>
            <td class="text-center">{{ $helpers.formatarValor.format(adicional.valor) }}</td>
          </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </v-col>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { IAdicional, ISacola } from '@/interfaces'

const moduloSacola = namespace('sacola')

@Component({
  name: 'ListaResumoPedido'
})
export default class ListaResumoPedido extends Vue {
  @Prop({
    type: Object,
    required: true
  }) public pedido!: ISacola

  @moduloSacola.Getter
  public getSacola!: ISacola[]

  @moduloSacola.Mutation
  public deletePedido!: Function

  public getAdicionaisLength (adicionais: IAdicional[]) {
    if (adicionais.length) {
      return adicionais.length + 1
    }

    return adicionais.length
  }
}
</script>

<style lang="scss" scoped>
  table {
    & thead {
      & tr {
        & th {
          white-space: nowrap !important;
        }
      }
    }
    & tbody {
      & tr {
        background: none !important;

        & td {
          border-bottom-color: transparent !important;
          white-space: nowrap !important;
        }
      }
    }
  }
</style>
