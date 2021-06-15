<template>
  <q-page padding style="width: 600px">
    <div class="q-pa-md">
        <q-card flat class="my-card">
          <q-tabs 
            dense
            v-model="tab" 
            class="text-grey-10" 
            narrow-indicator 
            active-color="blue-9" 
            indicator-color="blue-9"
            >
            <q-tab icon="keyboard_voice" label="Broadcast" name="one" />
            <q-tab icon="manage_accounts" label="Manage Client" name="two" />
          </q-tabs>

          <q-separator />

          <q-tab-panels v-model="tab" animated >
            <q-tab-panel name="one">
              <div class="q-pt-xs">
                <q-toolbar class="text-primary">
                  <q-icon dense color="blue-9" size="30px" name="speaker" />
                  <q-toolbar-title v-if="isMicOn">
                    <q-badge text-color="black" color="yellow-11" :label="status_message.status_on_air" />
                  </q-toolbar-title>
                  <q-toolbar-title v-else>
                    <q-badge color="red" :label="status_message.mic_off" />
                  </q-toolbar-title>
                </q-toolbar>
                <q-card class="my-card" flat>
                  <q-card-section v-if="isMicOn" class="text-center">
                    <q-btn 
                    class="shadow-16" 
                    size="35px" 
                    round 
                    color="red-6" 
                    icon="mic"
                    @click="stopAnnounce()"
                    />
                  </q-card-section>

                  <q-card-section v-else class="text-center">
                    <q-btn 
                    class="shadow-1" 
                    size="35px" 
                    round 
                    color="green-6" 
                    icon="mic_off"
                    @click="startAnnounce()"
                    />
                  </q-card-section>
                  <q-card-section>
                    <div class="text-subtitle2 text-blue-grey-9 q-pb-sm">Microphone: </div>
                    <q-btn
                      no-caps
                      outline
                      color="blue-9"
                      icon="mic"
                      label="Test Mic"
                      style="width: 140px"
                    >
                    </q-btn>
                  </q-card-section>
                </q-card>
              </div>
            </q-tab-panel>

            <q-tab-panel name="two">
              <TableClient />
            </q-tab-panel>
          </q-tab-panels>
        </q-card>

    </div>
  </q-page>
</template>

<script>
import TableClient from "components/TableClient.vue";

export default {
  name: "Popup",
  components: { TableClient },
  
  data() {  
    return {
      tab: "one",
      isMicOn: false,
      status_message: {
        mic_on: 'Press to Start Announce',
        btn_stop: 'STOP',
        mic_off: 'Muted',
        status_on_air: 'On-Air' 
      }
    };
  },
  methods: {
    startAnnounce() {
      return this.isMicOn = true;
    },
    stopAnnounce() {
      return this.isMicOn = false;
    }
  },

};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 600px
</style>
