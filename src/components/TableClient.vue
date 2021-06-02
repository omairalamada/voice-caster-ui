<template>
  <div class="q-pa-sm">
    <q-card class="my-card">
      <q-table
        title="Client/s"
        :data="clientList"
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
    <div class="q-gutter-y-sm">
      <q-input v-model="clientInfo.client"  type="text" label="College/Office Name" />
      <q-input v-model="clientInfo.status" type="text" label="Status" />
      <q-btn
        color="primary"
        icon="add"
        label="Add College"
        @click="addCollege()"      />
    </div>
  </div>
</template>

<script>
import TableClient from 'components/TableClient.vue'
import {mapState, mapActions} from 'vuex';

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
      clientList: [],
      clientInfo: [
          {
            id: '',
            client: '',
            status: '',
          }
      ]
      
    };
  },
  mounted() {
    this.clientList = this.data;
  },
  computed: {
      ...mapState('broadcaster', ['data', 'clientInfo'])
  },
  methods: {
    //   ...mapActions('broadcaster', []),
      async addCollege() {
          await this.$store.dispatch('broadcaster/addCollege', this.clientInfo);
          this.clientInfo = { id: '', client: '', status: '' };
      }
  },
  
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 600px
</style>
