export const useImg=()=>{
    const file=ref();
    const uploadFile=(e)=>{
        file.value=e.target.files[0];
    }
    const generateUrl = (file) => {
        if (file) {
            // console.log(file);
            let fileSrc = URL.createObjectURL(file);
            // setTimeout(() => {
            //     URL.revokeObjectURL(fileSrc);
            // }, 1000);
            return fileSrc;
            }
            else return ''
    };
    return {
        file,
        uploadFile,
        generateUrl
    }
}