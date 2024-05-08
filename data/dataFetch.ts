export default async function fetchData(url:string){
    const res = await fetch(url);
    
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    const data = res.json()
    return data 
}