<template>
  <div>
    <v-subheader class="px-0">Adicionais (opcional)</v-subheader>
    <v-list subheader shaped>
      <v-list-item-group multiple>
        <template v-for="(adicional, index) of adicionais">
          <v-list-item
            :key="`adicional-${index}`"
            :value="adicional.nome"
            active-class="deep-purple--text text--darken-4"
            @click="selectAdicional(adicional)"
          >
            <template v-slot:default="{ active, toggle }">
              <v-list-item-action>
                <v-checkbox
                  :input-value="active"
                  :true-value="adicional.nome"
                  color="deep-purple darken-4"
                  @click="toggle"
                />
              </v-list-item-action>
              <v-list-item-content>
                <v-row class="ma-auto">
                  <v-col class="pa-0">
                    <v-list-item-title class="text-capitalize" v-text="adicional.nome"/>
                  </v-col>
                  <v-col v-if="adicional.valor > 0" class="pa-0 text-right">
                    <v-list-item-subtitle>
                      + {{ $helpers.formatarValor.format(adicional.valor) }}
                    </v-list-item-subtitle>
                  </v-col>
                </v-row>
              </v-list-item-content>
            </template>
          </v-list-item>
        </template>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { IAdicional, INotificacao } from '@/interfaces'

const moduloAdicional = namespace('adicional')
const moduloNotificacao = namespace('notificacao')

@Component({
  name: 'ListaAdicional'
})
export default class ListaAdicional extends Vue {
  private adicionais: IAdicional[] = []

  mounted () {
    this.fetchAdicionais()
  }

  @moduloAdicional.Action
  public insertAdicional!: Function

  @moduloNotificacao.Action
  public insertNotificacao!: Function

  public async fetchAdicionais () {
    try {
      this.adicionais = await this.$axios.get('adicionais')
        .then(res => res.data)
    } catch (e) {
      this.insertNotificacao({
        start: true,
        color: 'warning',
        timeout: 3000,
        message: e.message || 'Erro ao carregar os adicionais'
      } as INotificacao)
    }
  }

  public selectAdicional (adicional: IAdicional): void {
    this.insertAdicional(adicional)
  }
}
</script>
