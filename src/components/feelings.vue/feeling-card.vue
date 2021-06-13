<template>
    <div class="d-flex flex-wrap">
        <div class="text-center container" :key="index" v-for="(item,index) in feelings">
             <div  outlined class="face">
                 {{key}}
                 <img class="expression" :src="require(`../../../src/assets/feeling-faces/${item.expression}.svg`)">
            </div>
            <p class="mt-3 name">{{item.name}}</p></div>
        </div>
</template>

<script>
export default {
  data() {
    return {
      feelings: [
        {
          expression: 'peace',
          name: 'Paz',
        },
        {
          expression: 'joy',
          name: 'Alegria',
        },
        {
          expression: 'love',
          name: 'Carinho',
        },
        {
          expression: 'wonder',
          name: 'Admiração',
        },
        {
          expression: 'confidence',
          name: 'Confiança',
        },
        {
          expression: 'satisfaction',
          name: 'Satisfação',
        },
        {
          expression: 'shame',
          name: 'Vergonha',
        },
        {
          expression: 'disgust',
          name: 'Nojo',
        },
        {
          expression: 'anguish',
          name: 'Angústia',
        },
        {
          expression: 'anger',
          name: 'Raiva',
        },
        {
          expression: 'fear',
          name: 'Medo',
        },
        {
          expression: 'sadness',
          name: 'Tristeza',
        },
      ],
    }
  },
}
</script>

<style>
.container {
    width: fit-content;
}
.face {
    display: flex;
    background: #e5e8f3;
    width: 6em;
    height: 6em;
    padding-top: 25%;
    border-radius: 13%;
    border: rgb(224, 226, 230) 1px solid;
 }

.expression {
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 50%;
    opacity: 75%;
}

.name {
    color: rgb(118, 122, 129);
    font-weight: 500;
}
.container:hover {
    cursor: pointer;
}
.container:hover > .face {
    background-color: cornflowerblue;;
    border:rgb(62, 124, 240) 2px solid
    }
.container:hover > .name {
    color: cornflowerblue;
    font-weight: 700;
    }
.container:hover > .face >.expression {
    opacity: 100%;
}
</style>
