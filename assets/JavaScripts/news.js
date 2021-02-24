const dailyShop = document.querySelector(".dailyshop");
const weeklyItems = document.createElement("li");
const date = document.getElementById("date")

let d = new Date();
date.innerHTML = d;


async function getBanners() {
    const getData = await fetch(`https://fortnite-api.com/v2/shop/br`);
    const data = await getData.json();
    return data;
}

const showBanners = () => {
    getBanners().then((res) => {
        banners = res.data.daily.entries;
        banners.forEach((x) => {
            console.log(x.items);
            dailyItems = x.items;
            dailyItems
                .forEach((y) => {
                    const markup=`
                    <div class="entire">
                        <div class="inner-entire">
                            <img src=${y.images.smallIcon} class="daily-images">
                            </img>
                            <div class="details">
                                    <p class="hover-text">${y.name}</p>
                                    <p class="hover-text"> ${y.type.value}</p>
                            </div>
                        </div>
                    </div>
                `;
                dailyShop.insertAdjacentHTML("beforeend", markup);
                })
        });
    });
};

window.onload = (event) => {
    showBanners();
};
