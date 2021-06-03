<template>
  <q-page padding style="width: 600px">
    <div class="q-pt-md">
      <div class="q-pa-md">
        <q-card flat class="my-card">
          <q-tabs v-model="tab" class="text-purple ">
            <q-tab icon="mic" label="Broadcast" name="one" />
            <q-tab icon="people" label="Manage Client" name="two" />
          </q-tabs>

          <q-separator />

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="one">
              <div class="q-pa-md">
                <q-card class="my-card" flat>
                  <q-card-section class="text-center">
                    <q-btn size="35px" round color="info" icon="mic" />
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
      tab: "one"
    };
  }
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 600px
</style>
