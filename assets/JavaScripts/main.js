const gamerInput = document.querySelector(".search-input");
const submitBtn = document.querySelector(".submit-btn");
const playerstats = document.querySelector(".player-stats");

// be87af6a53ca48f4a60efd1a6512495d

async function getPlayer(gamerId) {
    const getData = await fetch(
        `https://fortnite-api.com/v1/stats/br/v2/${gamerId}`
    );
    const data = await getData.json();
    return data;
}


// getBanners().then((res)=>{
//     banners = res.data;
//     console.log(banners)
//     banners.slice(1,34).forEach(x => {
//         const markup=`
//         <div class="all-banners">
//         <img src=${x.images.smallIcon}></img>
//         <h5><h5>
//         </div>
//         `;
//         Banners.insertAdjacentHTML("beforeend", markup);
//     })

// })

const showData = () => {
    getPlayer(gamerInput.value)
        .then((res) => {
            const markup = `
        <div class="player-name">
        <h1>${res.data.account.name}</h1>
        <h4>${res.data.account.id} <h4>
        <div class="player">
                <div class="player-wins">
                    <h5>Total Wins: ${res.data.stats.all.overall.wins}</h5>
                    <h5>Top 3 Placings: ${res.data.stats.all.overall.top3}</h5>
                    <h5>Top 10 Placings: ${res.data.stats.all.overall.top10}</h5>
                <div>
                <div class="player-kills">
                    <h5>KD Ratio: ${res.data.stats.all.overall.kd}</h5>
                    <h5>Kills: ${res.data.stats.all.overall.kills}</h5>
                    <h5>Kills Per Minute: ${res.data.stats.all.overall.killsPerMin}</h5>
                <div>
                <div class="player-ltm">
                    <h5>KD Ratio: ${res.data.stats.all.overall.kd}</h5>
                    <h5>Kills: ${res.data.stats.all.overall.kills}</h5>
                    <h5>Kills Per Minute: ${res.data.stats.all.overall.killsPerMin}</h5>
                <div>
            </div>
        </div>
        `;
            console.log(res);
            playerstats.insertAdjacentHTML("beforeend", markup);
        })
        .catch((err) => console.log(err));
};

const clearField = () => {
    gamerInput.value = "";
};

const clearPlayer = () => {
    playerstats.innerHTML = "";
};

submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    showData();
    clearField();
    clearPlayer();
});
