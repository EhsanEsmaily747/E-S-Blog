// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  

  devtools: { enabled: true },
  modules:
    [
      'nuxt-icon',
      '@nuxtjs/supabase',
      '@vueuse/nuxt',

    ],
    
    runtimeConfig:{
      mongodbUri:process.env.MONGODB_URI
    },

    supabase:{
      redirect:false,
    }
})



