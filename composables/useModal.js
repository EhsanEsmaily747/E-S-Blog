export const useModal=()=>{
    let showLogin=ref(false);
    let showSign=ref(false);
    let showEditModal=ref(false);

    function loginopener(){
        this.showLogin=true;
        this.showSign=false;
    }
    function signupopener() {
        this.showSign=true;
        this.showLogin=false;
    }

    return{
        loginopener,
        signupopener,
        showLogin,
        showSign,
        showEditModal
    }
}