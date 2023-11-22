
import Post from "~/server/models/post"

function getImg(){
    const images=[
        'https://uhqrkikymwnejdgghkus.supabase.co/storage/v1/object/public/Images/public/9.jpg',
        'https://uhqrkikymwnejdgghkus.supabase.co/storage/v1/object/public/Images/public/8.jpg',
        'https://uhqrkikymwnejdgghkus.supabase.co/storage/v1/object/public/Images/public/7.webp',
        'https://uhqrkikymwnejdgghkus.supabase.co/storage/v1/object/public/Images/public/6.webp',
        'https://uhqrkikymwnejdgghkus.supabase.co/storage/v1/object/public/Images/public/5.webp?t=2023-11-17T13%3A17%3A13.460Z',
        'https://uhqrkikymwnejdgghkus.supabase.co/storage/v1/object/public/Images/public/4.jpg',
        'https://uhqrkikymwnejdgghkus.supabase.co/storage/v1/object/public/Images/public/30.jpg',
        'https://uhqrkikymwnejdgghkus.supabase.co/storage/v1/object/public/Images/public/29.jpg',
        'https://uhqrkikymwnejdgghkus.supabase.co/storage/v1/object/public/Images/public/28.jpg',
        'https://uhqrkikymwnejdgghkus.supabase.co/storage/v1/object/public/Images/public/27.avif',
        'https://uhqrkikymwnejdgghkus.supabase.co/storage/v1/object/public/Images/public/26.jpg?t=2023-11-17T13%3A16%3A51.513Z',
        'https://uhqrkikymwnejdgghkus.supabase.co/storage/v1/object/public/Images/public/25.jpg',
        'https://uhqrkikymwnejdgghkus.supabase.co/storage/v1/object/public/Images/public/24.jpg',
        'https://uhqrkikymwnejdgghkus.supabase.co/storage/v1/object/public/Images/public/23.jpg',
        'https://uhqrkikymwnejdgghkus.supabase.co/storage/v1/object/public/Images/public/22.jpg',
        'https://uhqrkikymwnejdgghkus.supabase.co/storage/v1/object/public/Images/public/21.jpg',
        'https://uhqrkikymwnejdgghkus.supabase.co/storage/v1/object/public/Images/public/20.jpg',
        'https://uhqrkikymwnejdgghkus.supabase.co/storage/v1/object/public/Images/public/2.jpg',
        'https://uhqrkikymwnejdgghkus.supabase.co/storage/v1/object/public/Images/public/19.jpg',
        'https://uhqrkikymwnejdgghkus.supabase.co/storage/v1/object/public/Images/public/18.jpg',
        'https://uhqrkikymwnejdgghkus.supabase.co/storage/v1/object/public/Images/public/17.jpg',
        'https://uhqrkikymwnejdgghkus.supabase.co/storage/v1/object/public/Images/public/16.webp',
        'https://uhqrkikymwnejdgghkus.supabase.co/storage/v1/object/public/Images/public/15.jpg',
        'https://uhqrkikymwnejdgghkus.supabase.co/storage/v1/object/public/Images/public/14.jpeg',
        'https://uhqrkikymwnejdgghkus.supabase.co/storage/v1/object/public/Images/public/11.avif',
        'https://uhqrkikymwnejdgghkus.supabase.co/storage/v1/object/public/Images/public/10.jpg',
        'https://uhqrkikymwnejdgghkus.supabase.co/storage/v1/object/public/Images/public/1.jpg'
    ]
    return images[Math.floor(Math.random()*images.length)]
}

function getUser(){
    const users=[
        '6556081cc6fa1fc3a1c9d104',
        '6556081cc6fa1fc3a1c9d102',
        '6556081cc6fa1fc3a1c9d100',
        '6556081cc6fa1fc3a1c9d0fe',
        '6556081cc6fa1fc3a1c9d0fc',
        '6556081cc6fa1fc3a1c9d0fa',
        '6556081cc6fa1fc3a1c9d0f8',
        '6556081cc6fa1fc3a1c9d0f6',
        '6556081cc6fa1fc3a1c9d0f4',
        '6556081cc6fa1fc3a1c9d0f2',
        '6556081cc6fa1fc3a1c9d0f0',
        '6556081cc6fa1fc3a1c9d0ee',
        '6556081cc6fa1fc3a1c9d0ec',
        '6556081cc6fa1fc3a1c9d0ea',
        '6556081cc6fa1fc3a1c9d0e8',
        '6556081cc6fa1fc3a1c9d0e6',
        '6556081cc6fa1fc3a1c9d0e4',
        '6556081cc6fa1fc3a1c9d0e2',
        '6556081cc6fa1fc3a1c9d0e0',
        '6556081cc6fa1fc3a1c9d0de',
        '651c6791d08b636d86017a8c',
        '651c298273a1ff553216c5fd',
        '651c164e98b4884c838fd07f',
    ]
return users[Math.floor(Math.random()*users.length)]
}

function getCat(index){
    const cats=[
        '655610e32321be4092d5d2dd',
        '655612ec2321be4092d5d2f0',
        '655612f32321be4092d5d2f3',
        '655612f92321be4092d5d2f6',
        '655613042321be4092d5d2f9',
        '655613412321be4092d5d302',
        '655617262321be4092d5d309',
        '6556176d2321be4092d5d30c',
        '6556130c2321be4092d5d2fc',
        '65576fedfbdf37c88b835229'
    ]
    return cats[index]
}

export default defineEventHandler(async (event) => {

  



// Titles array
const titles = [
  "Exploring the Unseen Depths: The Ocean's Mysteries",
  "The Art of Culinary Delights: A Gastronomic Journey",
  // ... (other titles)
  "Unveiling the Enigmatic Universe: Celestial Wonders",
  "The Power of Mindfulness: Finding Tranquility",
  "Art and Creativity: Expression Beyond Boundaries",
  "Journey Through History: Unraveling the Past",
  "The Intricacies of Quantum Physics: Understanding the Subatomic Realm",
  "Human Psychology: Unraveling the Mind's Complexity",
  "Literature and Imagination: Navigating Fictional Realms",
  "Environmental Conservation: Preserving Nature's Splendor"
];

// Subtitles array
const subtitles = [
  "Discovering Underwater Wonders and Marine Life",
  "From Kitchen Chronicles to Tantalizing Tastebuds",
  // ... (other subtitles)
  "Cosmic Marvels and Celestial Phenomena",
  "Mindful Practices for Inner Peace and Serenity",
  "Exploring Artistic Expression in Various Forms",
  "Tracing the Footsteps of Ancient Times",
  "Diving into Quantum Mechanics and Particle Behavior",
  "Understanding Behavior and Mental Processes",
  "Unveiling Worlds in Literary Narratives",
  "Protecting Biodiversity and Ecosystems"
];

// Contents array
const contents = [
  "The ocean holds untold mysteries. Explore the unseen depths and discover the wonders of marine life. Dive into the world of underwater ecosystems, from coral reefs to deep-sea creatures. Learn about ocean conservation and the importance of preserving these habitats.",
  "Culinary artistry delights the senses. Embark on a gastronomic journey, exploring culinary traditions, recipes, and the art of cooking. Discover diverse cuisines, flavors, and the cultural significance of food in different societies.",
  // ... (other content snippets)
  "The universe is a canvas of celestial wonders. Explore galaxies, stars, and cosmic phenomena. Discover the mysteries of space exploration, from planets to black holes, and the quest to understand the vastness of the universe.",
  "Mindfulness offers tranquility amidst chaos. Dive into mindfulness practices, meditation, and techniques for achieving inner peace. Learn how mindfulness fosters mental well-being and emotional resilience.",
  "Art knows no boundaries. Explore various forms of artistic expression, from painting to sculpture, and their impact on society. Discover the significance of creativity in human culture and self-expression.",
  "History tells stories of our past. Explore ancient civilizations, historical events, and the evolution of societies. Delve into the rich tapestry of human history and the lessons it offers for the present.",
  "Quantum physics unveils the mysteries of the subatomic world. Explore quantum mechanics, particle behavior, and the intricate nature of the smallest particles that make up our universe.",
  "Human psychology is a complex realm. Explore behavior, cognitive processes, and the workings of the human mind. Understand psychological theories and their applications in everyday life.",
  "Literature invites exploration of imaginary realms. Delve into fictional worlds, literary narratives, and the power of storytelling. Discover the beauty and imagination woven into literary works.",
  "Environmental conservation is crucial for our planet's future. Explore biodiversity, ecosystems, and the importance of protecting nature. Learn about conservation efforts and sustainable practices for preserving the environment."
];



    for (let i = 0; i < 10; i++) {
     const author = getUser()
      const category = getCat(9);
      const title = titles[i];
      const subtitle = subtitles[i];
      const content = contents[i]; // Change 300 to desired content length
      const img =  getImg()
  
       await Post.create({
        title: title,
        content: content,
        subtitle:subtitle,
        author: author,
        likes: [],
        picture: img,
        category: category,
      });

  
    }
  
  
  


})