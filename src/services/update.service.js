export default {
    update(input){
        return fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/`, {
            method: "POST",
            
        }).then(res => res.json());
    }       
}