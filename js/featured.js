const apiUrl = "https://www.unipop.no/headlesswp/wp-json/wc/v3/products?consumer_key=ck_44960bbaf982d8c82546750083dc6029a6b14d93&consumer_secret=cs_96e14cc49a1a2bb7cf8926faff0d5a13b672fd95";
const featuredSection = document.querySelector(".product__images");



async function getFeaturedApi(apiUrl) {
    try {
        featuredSection.innerHTML = "";

        const response = await fetch(apiUrl);
        const result = await response.json();

        console.log(result);

        for(let i = 0; i < result.length; i++) {
            const productImageSrc = result[i].images.length > 0 ? result[i].images[0].src : '';

            if(result[i].featured === true) {
                featuredSection.innerHTML += `<a href="thecoate.html?id=${result[i].id}" class="p_image"><img src="${productImageSrc}"></a>`;
            }
        }  

    } catch(error) {
        console.log(error);
    }  
}
getFeaturedApi(apiUrl);