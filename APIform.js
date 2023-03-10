const form= document.querySelector('#searchForm');
form.addEventListener('submit',async (e) => {
        e.preventDefault();
        deleteImages();
        const searchTerm = form.elements.query.value;
        const res = await axios.get(` https://api.tvmaze.com/search/shows?q=${searchTerm}`);
        makeImages(res.data)
        
    });
const makeImages=(shows)=>{
    for(let result of shows){
        if(result.show.image){
           const img =document.createElement('IMG');
           img.src=result.show.image.medium;
           document.body.append(img);
        }
    }
}

const deleteImages=()=>{
    const images=document.querySelectorAll('img');
    for(let image of images){
        image.remove();
    }
}
