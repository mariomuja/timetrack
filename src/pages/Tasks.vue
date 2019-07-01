<template>
<q-page class="flex flex-center page">
    <q-table
      title="Tasks"
      :data="data"
      :columns="columns"
      row-key="name"
    />
</q-page>
</template>

<script>
export default {
  data () {
    return {
      columns: [
        {
          name: 'description',
          label: 'Description',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'start', label: 'Start', field: 'start', sortable: true },
        { name: 'end', label: 'End', field: 'end', sortable: true }
      ],
      data: [
        {
          description: 'database schema',
          start: 159,
          end: 6.0
        },
        {
          name: 'database views',
          calories: 237,
          fat: 9.0
        },
        {
          name: 'database functions (parameterizing views)',
          calories: 262,
          fat: 16.0
        },
        {
          name: 'rest api',
          calories: 305,
          fat: 3.7
        },
        {
          name: 'user interface',
          calories: 356,
          fat: 16.0
        },
        {
          name: 'test',
          calories: 356,
          fat: 16.0
        },
        {
          name: 'test it againg',
          calories: 356,
          fat: 16.0
        },
        {
          name: 'test it again to be absolutely sure',
          calories: 356,
          fat: 16.0
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
