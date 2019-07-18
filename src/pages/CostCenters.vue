<template>
<q-page>
    <q-table
      title="Cost Centers"
      :data="data"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="description" :props="props">{{ props.row.description }}</q-td>
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
        { name: 'description', label: 'Description', align: 'left', field: 'description', sortable: true }
      ],
      data: [
        {
          description: 'Cost Center 1'
        },
        {
          description: 'Cost Center 2'
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
