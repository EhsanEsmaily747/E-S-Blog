export const useAuth =()=> {
    
    function decode(token) {

        const value = token.trim().split("=");
        const parts = value[0].split(".");
            
        const base64 = parts[1].replace(/-/g, "+").replace(/_/g, "/");
        const rawData = atob(base64);
            return JSON.parse(rawData);
        }
    

        function getToken (){
            const token =  localStorage.getItem('token')
            return token;
        }
    
        return {
            decode,
            getToken
        }

    }