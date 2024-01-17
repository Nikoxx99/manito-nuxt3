<template>
<v-carousel
  style="height:100svh;"
  :show-arrows="false"
  hide-delimiters
  interval="4000"
  >
  <v-carousel-item
    src="https://static.crunchyroll.com/fms/landscape_large/1920x1080/94/png/42e809bd-f025-4b88-b21e-f1aae392427e.webp"
    cover
    gradient="to bottom, rgba(0, 0, 0, 0), rgba(18, 18, 18, 1)"
  >
  <v-container style="height:100%;display:grid;align-items:center;">
    <div>
      <h2>Classroom of the Elite</h2>
       <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti aliquid blanditiis quisquam cum, minus dignissimos aperiam ab laborum voluptates excepturi.</h4>
    </div>
  </v-container>
</v-carousel-item>

  <v-carousel-item
    src="https://static.crunchyroll.com/fms/landscape_large/1920x1080/94/png/e988c4ae-474d-496a-abdb-41cd69fd6b9f.webp"
    cover
    gradient="to bottom, rgba(0, 0, 0, 0), rgba(18, 18, 18, 1)"
  ></v-carousel-item>

  <v-carousel-item
    src="https://static.crunchyroll.com/fms/landscape_large/1920x1080/94/png/da28536e-f8d3-4c8d-a11d-8bca850d267e.webp"
    cover
    gradient="to bottom, rgba(0, 0, 0, 0), rgba(18, 18, 18, 1)"
  ></v-carousel-item>
</v-carousel>
</template>