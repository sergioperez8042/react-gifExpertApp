



export const getGifs = async (category) => {
        
    const url = `https://api.giphy.com/v1/gifs/search?api_key=7wlzbLcQKz0oH5iLQNEkB56mXJEaSYYK&q=${encodeURI(category)}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(img => {
        //retornar mediante el map la info del arreglo q interesa
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs;
}
