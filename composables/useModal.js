export const useModal=()=>{
    let showLogin=ref(false);
    let showSign=ref(false);
    let showEditModal=ref(false);

    function loginopener(){
        showLogin.value=true;
        showSign.value=false;
    }
    function signupopener() {
        showSign.value=true;
        showLogin.value=false;
    }

    return{
        loginopener,
        signupopener,
        showLogin,
        showSign,
        showEditModal
    }
}