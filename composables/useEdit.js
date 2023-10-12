export const useEdit=()=>{
    let edit=ref({
        pTitle:'',
        pSubtitle:'',
        pContent:''
    });
  
    return {edit}
}