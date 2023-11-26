// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  
  auth:{
    provider:{
      type: 'authjs'
    }
  },

  devtools: { enabled: true },
  modules:
    [
      'nuxt-icon',
      '@nuxtjs/supabase',
      '@vueuse/nuxt',
      '@sidebase/nuxt-auth'

    ],
    
    runtimeConfig:{
      mongodbUri:process.env.MONGODB_URI
    },

    supabase:{
      
      redirect:false,
      
    
    }
})



