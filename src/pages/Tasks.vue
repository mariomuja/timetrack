<template>
<q-page>
    <div class="q-pa-md">
    <q-btn-dropdown color="primary" label="Projects"  >
      <q-list>
        <q-item clickable v-close-popup>
          <q-item-section>
            <q-item-label>Project 1</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup>
          <q-item-section>
            <q-item-label>Project 2</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-btn-dropdown>
    </div>

    <q-table
      title="Tasks"
      :data="data"
      :columns="columns"
      :pagination-label="test"
      row-key="name"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="description" :props="props">{{ props.row.description }}</q-td>
          <q-td key="start" :props="props">{{ props.row.start }}</q-td>
          <q-td auto-width>
            <q-btn color="primary" label="Start" @click="onClickStart" />
          </q-td>
          <q-td key="end" :props="props">{{ props.row.end }}</q-td>
          <q-td auto-width>
            <q-btn color="primary" label="End" @click="onClickEnd" />
          </q-td>
        </q-tr>
        <q-tr v-show="props.expand" :props="props">
          <q-td colspan="100%">
            <div class="text-left">This is expand slot for row above: {{ props.row.name }}.</div>
          </q-td>
        </q-tr>
      </template>
    </q-table>
</q-page>
</template>

<script>
export default {
  data () {
    return {
      columns: [
        { name: 'description', label: 'Description', align: 'left', field: 'description', sortable: true },
        { name: 'start', label: 'Start', field: 'start', sortable: true },
        { name: 'startButton', label: '', sortable: false },
        { name: 'end', label: 'End', field: 'end', sortable: true },
        { name: 'endButton', label: '', sortable: false }
      ],
      data: [
        {
          description: 'database schema',
          start: '01.01.2019 13:26',
          end: '01.01.2019 14:26'
        },
        {
          description: 'database views',
          start: '01.01.2019 13:26',
          end: '01.01.2019 14:26'
        },
        {
          description: 'database functions (parameterizing views)',
          start: '01.01.2019 13:26',
          end: '01.01.2019 14:26'
        },
        {
          name: 'rest api',
          start: '01.01.2019 13:26',
          end: '01.01.2019 14:26'
        },
        {
          name: 'user interface',
          start: '01.01.2019 13:26',
          end: '01.01.2019 14:26'
        }
      ]
    }
  }
}
</script>

<style>
.page {
   opacity:1;
}
</style>
