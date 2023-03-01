const getGifs = async(category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=7PNSzp6MVAo8Tp9h4EDlcKa0VUMGqITg&q=${category}`;
  const resp = await fetch( url );
  const {data} = await resp.json();

  const gifs = data.map( img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }));

  return gifs;
}

export default getGifs;