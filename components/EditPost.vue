<script setup>


const props = defineProps({
    post: Object,
    id: String
})

const emit=defineEmits(['post-add','post-update'])

const data = await useFetch('/api/categories/category')
let cats = ref(toRaw(data.data.value.cats))

const { file, generateUrl, uploadFile } = useImg()
const supabase = useSupabaseClient()


const HandleImage = async (event) => {
    uploadFile(event);
}


const url = ref()

const refreshData=(post)=>{
    emit('post-add',post)
    props.post.title=props.post.author=props.post.category=props.post.content=props.post.subtitle=props.post.picture=''
                    
}

const savePost = async () => {

        if (props.post.editing) {
            const updatedPost={
                _id:props.post._id,
                title : props.post.title,
                subtitle : props.post.subtitle,
                author : props.id,
                content : props.post.content,
                picture : props.post.picture,
                category : props.post.category
            }
            props.post.editing=false
            refreshData(updatedPost)
        
            try {
                await useFetch(`/api/posts/post?id=${props.post._id}`,{
                    method:'PUT',
                    body:{
                        updatedPost
                    }

                })
            } catch (error) {
                console.log(error);
            }
            
            
        } else {
            
            if (file.value) {
                const fileName = Math.floor(Math.random() * 10000000000000)
                const { error, data } = await supabase.storage.from("Images").upload('public/' + fileName, file.value)
                url.value = `https://uhqrkikymwnejdgghkus.supabase.co/storage/v1/object/public/Images/${data.path}`
            }
            const newPost={
                _id:props.post._id,
                title : props.post.title,
                subtitle : props.post.subtitle,
                author : props.id,
                content : props.post.content,
                picture : file.value?url.value:'/bg.jpg',
                category : props.post.category
            }
            
            
                    refreshData(newPost)
                    file.value=null
               try {
                   
                   const res=await useFetch('/api/posts/post',{
                   method:'POST',
                   body: {
                       newPost
                   }
               })
               } catch (error) {
                console.log(error);
               }
            
        }
}


</script>

<template>
    <div class="container">
        <form class="createPost">
            <div class="row">

                <label for="Title">Title :</label>
                <input type="text" v-model="post.title" placeholder="Post main title..">
            </div>

            <div class="row">

                <label for="Title">Subtitle :</label>
                <input type="text" v-model="post.subtitle" placeholder="Your feeling about post">
            </div>

            <div class="row">
                <label for="Title">Content :</label>
                <textarea name="" v-model="post.content" id="Title" cols="30" rows="10"
                    placeholder="post content here...."></textarea>
            </div>
            <div class="cats" >
                <label for="cat">Select One Category :</label>
                <select name="cat" v-model="post.category" id="">
                    <option v-for="cat in cats" :value="cat._id" :selected="post.category">{{ cat.name }}</option>

                </select>
            </div>
            <div class="input-img">

                <label v-if="!file && !post.editing" for="img">+
                    <input class="file" type="file" id="img" @change="HandleImage($event)">
                </label>
                <div class="imgContainer" v-if="file">
                    <img class="uploadedImage" :src="generateUrl(file)" alt="">
                    <Icon class="icon" name="material-symbols:close" @click="file=null"></Icon>
                </div>


            </div>
        </form>
        <button @click="savePost">{{ post.editing?'Edit':'Add' }}</button>
    </div>
</template>

<style scoped>
.container {
    height: fit-content;
    background: transparent;
    backdrop-filter: blur(40px);
    box-shadow: 0 2px 10px gray;
    position: sticky;
    top: 7rem;
    left: 0;
    box-shadow: 0 0 4px black;
    font-size: 14px;
    border-radius: 1em;
    padding-inline: .5rem;
    padding-block: 1.5rem;
    box-sizing: border-box;
    width: 340px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}

input,
textarea {
    margin-top: 3px;
    border: solid 1px gray;
    padding: 5px;
    width: 100%;
    font-size: 13px;
    box-sizing: border-box;
    outline: none;
    border-radius: .5em;
}

textarea {
    height: 160px;
    overflow: scrolly;
    resize: none;
}

.row {
    display: flex;
    flex-direction: column;
    margin: 8px;
    margin-bottom: 10px;
}

label {
    font-weight: 500;
}

.input-img label {
    position: relative;
    font-size: 30px;
    cursor: pointer;
    padding-inline: .5em;
    border-radius: .2em;
}

.input-img {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    text-align: center;
    margin-bottom: 1em;
    border-radius: .5em;
}

input[type=file] {
    display: none;
}

.uploadedImage {
    height: 70px;
    width: 100px;
    border-radius: 1.5em;
    box-shadow: 0 0 6px black;
}

.icon {

    position: relative;
    top: -70px;
    font-size: smaller;
    /* font-size: large; */
    /* background: red; */
    cursor: pointer;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    box-shadow: 0 0 4px black;
}

.cats {
    display: flex;
    justify-content: space-evenly;
    margin-block: 1rem;
    align-items: center;
}

.cats select {
    background: transparent;
    border: solid 1px gray;
    border: none;
    outline: none;
    padding: .5em;
    border-radius: .3em;

}

.cats select option {
    /* background: gray; */
    border: none;
    margin-block: 50px;
    padding: 10px;
}


button {
    padding: 1em;
    width: 80%;
    border-radius: .5em;
    border: none;
    cursor: pointer;
    background: gray;
    color: white;
}

</style>