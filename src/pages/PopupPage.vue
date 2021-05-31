<template>
  <q-page padding>
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
              Broadcasterds
              <q-card>
                <TableClient/>
              </q-card>
                  
            </q-tab-panel>

            <q-tab-panel name="two">
              <div class="q-pa-sm">
                <q-card class="my-card">
                  <q-table
                    title="Client/s"
                    :data="data"
                    :columns="columns"
                    row-key="client"    
                    selection="multiple"
                    :selected.sync="selected"
                  >
                    <template v-slot:header-selection="scope">
                      <q-toggle v-model="scope.selected" />
                    </template>

                    <template v-slot:body-selection="scope">
                      <q-toggle v-model="scope.selected" />
                    </template>
                  </q-table>
                </q-card>
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import TableClient from 'components/TableClient.vue'
export default {
  name: 'Popup',
  components: {TableClient},
  data() {
    return {
      tab: "one",
      selected: [],
      columns: [
        {
          name: 'client',
          required: true,
          label: 'Colleges/Offices',
          align: 'left',
          field: 'client',
          sortable: true
        },
        { name: 'status', align: 'left', label: 'Status', field: 'status', sortable: true },
        { name: 'id', label: 'Code Number', field: 'id', sortable: true, align: 'left' },
      ],
      data: [
        {
          client: 'College of Information Technology',
          statdsus: 'Online',
          id: 1001
        },
        {
          client: 'College of Education',
          status: 'Online',
          id: 1002
        },
        {
          client: 'Office of the President',
          status: 'Online',
          id: 1003
        }
      ]
    };
  }
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 600px
</style>
