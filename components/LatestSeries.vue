<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="position-relative">
        <h1 style="z-index:999;">Latest Series</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="2" v-for="series in series" :key="series.id">
        <v-card rounded="xl">
          <v-img :src="series.image" :alt="series.title" cover :aspect-ratio="10/16"></v-img>
          <v-card-title>{{ series.title }}</v-card-title>
          <v-card-text>{{ series.description }}</v-card-text>
          <v-card-actions>
            <v-btn color="primary" text>Read More</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const series = [
  {
    id: 1,
    title: "The Mandalorian",
    description:
      "The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.",
    image:
      "https://images.unsplash.com/photo-1705179573286-495f1b4fabaf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
  },
  {
    id: 2,
    title: "The Falcon and the Winter Soldier",
    description:
      "Following the events of 'Avengers: Endgame,' Sam Wilson/Falcon and Bucky Barnes/Winter Soldier team up in a global adventure that tests their abilities -- and their patience.",
    image:
      "https://plus.unsplash.com/premium_photo-1681412205404-e4a7c9b21824?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "WandaVision",
    description:
      "Blends the style of classic sitcoms with the MCU in which Wanda Maximoff and Vision -two super-powered beings living their ideal suburban lives-begin to suspect that everything is not as it seems.",
    image:
      "https://images.unsplash.com/photo-1705315274702-6e2d02d3fb61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Loki",
    description:
      "The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of 'Avengers: Endgame.'",
    image:
      "https://images.unsplash.com/photo-1705179910581-7f3465999f05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "What If...?",
    description:
      "Exploring pivotal moments from the Marvel Cinematic Universe and turning them on their head, leading the audience into uncharted territory.",
    image:
      "https://static.wikia.nocookie.net/disney/images/7/7f/The_Mandalorian_Logo.png/revision/latest?cb=20191113182648",
  },
  {
    id: 6,
    title: "Hawkeye",
    description:
      "Series based on the Marvel Comics superhero Hawkeye, centering on the adventures of Young Avenger, Kate M. Bishop, who took on the role after the original Avenger, Clint Barton.",
    image:
      "https://static.wikia.nocookie.net/disney/images/7/7f/The_Mandalorian_Logo.png/revision/latest?cb=20191113182648",
  }
]

</script>