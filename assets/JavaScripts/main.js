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
        <div class="player-header">
            <p>Total Wins ${res.data.stats.all.overall.wins}</p>
            <p>Win% ${res.data.stats.all.overall.winRate}</p>
            <p>Kills  ${res.data.stats.all.overall.kills}</p>
            <p>K/D  ${res.data.stats.all.overall.kd}</p>
        </div>
        <div class="player">
                <div class="solo-stats">
                    <h2>Solos</h2>
                    <p>Wins: ${res.data.stats.all.solo.wins}</p>
                    <p>Win% ${res.data.stats.all.solo.winRate}</p>
                    <p>K/D: ${res.data.stats.all.solo.kd}</p>
                    <p>Top 10:  ${res.data.stats.all.solo.top10}</p>
                </div>
                <div class="duo-stats">
                    <h2>Duos</h2>
                    <p>Wins: ${res.data.stats.all.duo.wins}</p>
                    <p>Win% ${res.data.stats.all.duo.winRate}</p>
                    <p>K/D: ${res.data.stats.all.duo.kd}</p>
                    <p>Top 5:  ${res.data.stats.all.duo.top5}</p>
                </div>
                <div class="quad-stats">
                    <h2>Quads</h2>
                    <p>Wins: ${res.data.stats.all.squad.wins}</p>
                    <p>Win% ${res.data.stats.all.squad.winRate}</p>
                    <p>K/D: ${res.data.stats.all.squad.kd}</p>
                    <p>Top 3:  ${res.data.stats.all.squad.top3}</p>
                </div>
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
