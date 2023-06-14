
export async function fetchPeople({pageParam = 0}) {
    const res = await fetch(URL_PEOPLE);
    if(!res.ok) 
        throw new Error('fetched is failed')
    return res.json()
}








export const URL_PEOPLE = `https://swapi.dev/api/people/`