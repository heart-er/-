<template>
  <div id="app">
    <calendarWeek />
    <calendarEntry />
  </div>
</template>

<script>
import CalendarEntry from './components/CalendarEntry'
import CalendarWeek from './components/CalendarWeek'
export default {
  name: 'app',
  components: {
   CalendarEntry,
   CalendarWeek
  }
}
</script>

<style>
html, body {
  height: 100%;
  width:100%;
}
#app {
  height: inherit;
  background: #6e6e6e;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-align-items: center;
  justify-content: center;
  -webkit-justify-content: center;
}
</style>
