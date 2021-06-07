<template>
  <q-layout view="lHh Lpr lFf">
    <q-header flat>
      <q-toolbar class="text-white bg-blue-9">
        <q-btn flat round dense icon="mic" />
        <q-toolbar-title>Voice Caster</q-toolbar-title>
        <q-space />
        <div>VoiceCaster <q-badge color="yellow">v1.0.0</q-badge></div>
        <q-btn flat round dense icon="speaker" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
