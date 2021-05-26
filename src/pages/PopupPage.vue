<template>
  <div class="q-pa-md">
    <q-toolbar class="bg-brown text-white" style="width: 500px">
      <q-btn flat round dense icon="mic" />
      <q-toolbar-title>Voice Caster</q-toolbar-title>
      <q-space />
      <q-btn flat round dense icon="speaker" />
    </q-toolbar>

    <div
      class="row no-wrap items-center q-mt-md q-pa-sm bg-grey-3 rounded-borders"
    >
      <q-space />

      <div>VoiceCaster <q-badge>v1.0.0</q-badge></div>
    </div>

    <div class="q-pa-md">
      <q-card class="my-card">
        <q-tabs v-model="tab" class="text-purple ">
          <q-tab icon="mic" label="Broadcast" name="one" />
          <q-tab icon="people" label="Manage Client" name="two" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="one">
            Broadcaster
          </q-tab-panel>

          <q-tab-panel name="two">
            <div class="q-pa-md">
              <q-card class="my-card">
                <q-card-section>
                  <div class="text-h6">Client/s</div>
                </q-card-section>

                <q-markup-table>
                  <thead>
                    <tr>
                      <th class="text-left">Colleges/Offices</th>
                      <th class="text-right">Calories</th>
                      <th class="text-right">Fat (g)</th>
                      <th class="text-right">Carbs (g)</th>
                      <th class="text-right">Protein (g)</th>
                      <th class="text-right">Sodium (mg)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="text-left">Frozen Yogurt</td>
                      <td class="text-right">159</td>
                      <td class="text-right">6</td>
                      <td class="text-right">24</td>
                      <td class="text-right">4</td>
                      <td class="text-right">87</td>
                    </tr>
                    <tr>
                      <td class="text-left">Ice cream sandwich</td>
                      <td class="text-right">237</td>
                      <td class="text-right">9</td>
                      <td class="text-right">37</td>
                      <td class="text-right">4.3</td>
                      <td class="text-right">129</td>
                    </tr>
                    <tr>
                      <td class="text-left">Eclair</td>
                      <td class="text-right">262</td>
                      <td class="text-right">16</td>
                      <td class="text-right">23</td>
                      <td class="text-right">6</td>
                      <td class="text-right">337</td>
                    </tr>
                    <tr>
                      <td class="text-left">Cupcake</td>
                      <td class="text-right">305</td>
                      <td class="text-right">3.7</td>
                      <td class="text-right">67</td>
                      <td class="text-right">4.3</td>
                      <td class="text-right">413</td>
                    </tr>
                    <tr>
                      <td class="text-left">Gingerbread</td>
                      <td class="text-right">356</td>
                      <td class="text-right">16</td>
                      <td class="text-right">49</td>
                      <td class="text-right">3.9</td>
                      <td class="text-right">327</td>
                    </tr>
                  </tbody>
                </q-markup-table>
              </q-card>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'Popup',
  data() {
    return {
      tab: "one"
    };
  }
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 500px
</style>
