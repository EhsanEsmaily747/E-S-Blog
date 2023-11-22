import User from "~/server/models/user";


var num=0;
function generateUsername() {
    const usernames=[
        'mysticRiver'
      ,'silverDust'
      ,'cosmicNinja'
      ,'blazingComet'
      ,'thunderBolt'
      ,'dreamWeaver'
      ,'velvetShadow'
      ,'lunarEclipse'
      ,'neonSpecter'
      ,'phoenixRising'
      ,'midnightWhisper'
      ,'starryKnight'
      ,'quantumWave'
      ,'celestialFlame'
      ,'radiantSpirit'
      ,'stealthRunner'
      ,'solarFlare'
      ,'emberPhoenix'
      ,'arcaneDreamer'
      ,'crimsonTide'];

    let username =usernames[num];
    num++;
    return username;
  }

  
  
export default defineEventHandler(async (event) => {
  
      
        for (let i = 0; i < 20; i++) {
          const username = generateUsername();
          const password = username+'2210';
          const email = `${username}@example.com`;
          const pictureURL = `https://i.pravatar.cc/150?u=${username}`;
      
      
          const newUser = await User.create({
            username: username,
            email: email,
            password: password,
            picture: pictureURL,
            isAdmin: false,
          });
        }
      
       

})

