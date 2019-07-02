<template>
  <q-layout view="lHh Lpr lFf" >
    <q-header elevated>
      <q-toolbar >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Time Tracker
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Essential Links</q-item-label>
        <q-item clickable tag="a" to="projects">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Projects</q-item-label>
            <q-item-label caption>Maintain projects assigned to you.</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" to="tasks">
          <q-item-section avatar>
            <q-icon name="record_voice_over" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Tasks</q-item-label>
            <q-item-label caption>Maintain tasks created by you.</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" to="costCenters">
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Cost Centers</q-item-label>
            <q-item-label caption>Maintain cost centers.</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" to="users">
          <q-item-section avatar>
            <q-icon name="chat" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Users</q-item-label>
            <q-item-label caption>Maintain users and project assignment.</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
