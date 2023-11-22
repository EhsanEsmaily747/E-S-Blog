<template>
  <div>
      <NuxtPage/>
  </div>
</template>


<style>
body::-webkit-scrollbar{
  width: 15px;
}
body::-webkit-scrollbar-thumb{
background: lightgray;
border-radius:12px ;
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