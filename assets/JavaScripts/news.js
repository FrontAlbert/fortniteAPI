const Banners = document.querySelector(".banners");

async function getBanners() {
    const getData = await fetch(`https://fortnite-api.com/v1/banners`);
    const data = await getData.json();
    console.log(data);
    return data;
}

const showBanners = () => {
    getBanners().then((res)=>{
        banners = res.data;
        console.log(banners)
        banners.slice(1,34).forEach(x => {
            const markup=`
            <img src=${x.images.smallIcon}></img>
            `;
            Banners.insertAdjacentHTML("beforeend", markup);
        })

    })
};

window.onload = (event) => {
    showBanners()
};
