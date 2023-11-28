<template>
  <div>
      <NuxtPage/>
  </div>
</template>


<style>
body::-webkit-scrollbar {
    width: 1em;
}
 
body::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px gray;
}
 
body::-webkit-scrollbar-thumb {
  
  background-color:lightgray;
  border-radius: 10px;
  outline: 1px solid slategrey;
  box-shadow: inset 0 0 6px white;
  margin: 20px;

}
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}



</style>