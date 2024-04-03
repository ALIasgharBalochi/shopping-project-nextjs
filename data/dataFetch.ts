export default async function getAllProducts(){
    const res = await fetch('http://localhost:9000/prodcts');
    
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    const data = res.json()
    return data 
}


