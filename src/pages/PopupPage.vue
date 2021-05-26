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
      <q-card flat class="my-card">
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

                <q-markup-table flat>
                  <thead>
                    <tr>
                      <th class="text-left">ID</th>
                      <th class="text-left">Colleges/Offices</th>
                      <th class="text-right">Status</th>
                      <th class="text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="text-left">001</td>
                      <td class="text-left">College Of Information Technology</td>
                      <td class="text-left">Active</td>
                    </tr>
                    <tr>
                      <td class="text-left">002</td>
                      <td class="text-left">Office Of The President</td>
                      <td class="text-left">Active</td>
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
