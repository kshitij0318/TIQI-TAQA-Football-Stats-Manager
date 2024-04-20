// script.js
const logos1 = [
    'TEAM BADGES/Arsenal.png',
    'TEAM BADGES/AstonVilla.png',
    'TEAM BADGES/BarnsleyFC.png',
    'TEAM BADGES/BirminghamFC.png',
    'TEAM BADGES/BlackBurnRovers.png',
    'TEAM BADGES/BlackpoolFC.png',
    'TEAM BADGES/BoltonWanderersFC.png',
    'TEAM BADGES/AFCBournemouth.png',
    'TEAM BADGES/BradfordCityAFC.png',
    'TEAM BADGES/BrentfordFC.png',
    'TEAM BADGES/Brighton&HoveAlbion.png',
    'TEAM BADGES/BurnleyFC.png',
    'TEAM BADGES/CardiffCityFC.png',
    'TEAM BADGES/CharltonFC.png',
    'TEAM BADGES/ChelseaFC.png',
    'TEAM BADGES/CoventryCityFC.png',
    'TEAM BADGES/CrystalPalaceFC.png',
    'TEAM BADGES/DerbyCounty.png',
    'TEAM BADGES/EVERTON.png',
    'TEAM BADGES/FulhamFC.png',
    'TEAM BADGES/HuddersfieldTownAFC.png',
    'TEAM BADGES/HullCityAFC.png',
    'TEAM BADGES/IpswichTown.png',
    'TEAM BADGES/LeedsUnitedFC.png',
    'TEAM BADGES/LeicesterCityFC.png',
    'TEAM BADGES/LIVERPOOL.png',
    'TEAM BADGES/LutonTown.png',
    'TEAM BADGES/ManchesterCity.png',
    'TEAM BADGES/ManUnited.png',
    'TEAM BADGES/MiddlesbroughFC.png',
    'TEAM BADGES/NewcastleUnited.png',
    'TEAM BADGES/NORWICH.png',
    'TEAM BADGES/NottinghamForestFC.png',
    'TEAM BADGES/OldhamAthleticAFC.svg',
    'TEAM BADGES/PortsmouthFC.png',
    'TEAM BADGES/QueensParkRangers.png',
    'TEAM BADGES/ReadingFC.png',
    'TEAM BADGES/SheffieldUnitedFC.png',
    'TEAM BADGES/SheffieldWednesday.png',
    'TEAM BADGES/SOUTHAMPTON.png',
    'TEAM BADGES/StokeCity.png',
    'TEAM BADGES/SUNDERLAND.png',
    'TEAM BADGES/SWANSEA.png',
    'TEAM BADGES/SwindonTownFC.png',
    'TEAM BADGES/TOTTENHAM.png',
    'TEAM BADGES/WATFORD.png',
    'TEAM BADGES/WestBromwich.png',
    'TEAM BADGES/WestHam.png',
    'TEAM BADGES/WiganAthletic.png',
    'TEAM BADGES/AFCWimbledon.png',
    'TEAM BADGES/WolverhamptonWanderers.png'
];

const logoImage1 = document.getElementById('logoImage1');
const prevButton1 = document.getElementById('prevButton1');
const nextButton1 = document.getElementById('nextButton1');
const selectButton1 = document.getElementById('selectButton1');
let currentLogoIndex1 = 0;
let selectedLogo1 = '';

logoImage1.src = logos1[currentLogoIndex1]; // Set initial logo

prevButton1.addEventListener('click', function() {
    currentLogoIndex1 = (currentLogoIndex1 - 1 + logos1.length) % logos1.length;
    logoImage1.src = logos1[currentLogoIndex1];
});

nextButton1.addEventListener('click', function() {
    currentLogoIndex1 = (currentLogoIndex1 + 1) % logos1.length;
    logoImage1.src = logos1[currentLogoIndex1];
});

selectButton1.addEventListener('click', function() {
    selectedLogo1 = logos1[currentLogoIndex1];
    console.log('Selected Left Logo:', selectedLogo1);
});

const logos2 = [
    'TEAM BADGES/Arsenal.png',
    'TEAM BADGES/AstonVilla.png',
    'TEAM BADGES/BarnsleyFC.png',
    'TEAM BADGES/BirminghamFC.png',
    'TEAM BADGES/BlackBurnRovers.png',
    'TEAM BADGES/BlackpoolFC.png',
    'TEAM BADGES/BoltonWanderersFC.png',
    'TEAM BADGES/AFCBournemouth.png',
    'TEAM BADGES/BradfordCityAFC.png',
    'TEAM BADGES/BrentfordFC.png',
    'TEAM BADGES/Brighton&HoveAlbion.png',
    'TEAM BADGES/BurnleyFC.png',
    'TEAM BADGES/CardiffCityFC.png',
    'TEAM BADGES/CharltonFC.png',
    'TEAM BADGES/ChelseaFC.png',
    'TEAM BADGES/CoventryCityFC.png',
    'TEAM BADGES/CrystalPalaceFC.png',
    'TEAM BADGES/DerbyCounty.png',
    'TEAM BADGES/EVERTON.png',
    'TEAM BADGES/FulhamFC.png',
    'TEAM BADGES/HuddersfieldTownAFC.png',
    'TEAM BADGES/HullCityAFC.png',
    'TEAM BADGES/IpswichTown.png',
    'TEAM BADGES/LeedsUnitedFC.png',
    'TEAM BADGES/LeicesterCityFC.png',
    'TEAM BADGES/LIVERPOOL.png',
    'TEAM BADGES/LutonTown.png',
    'TEAM BADGES/ManchesterCity.png',
    'TEAM BADGES/ManUnited.png',
    'TEAM BADGES/MiddlesbroughFC.png',
    'TEAM BADGES/NewcastleUnited.png',
    'TEAM BADGES/NORWICH.png',
    'TEAM BADGES/NottinghamForestFC.png',
    'TEAM BADGES/OldhamAthleticAFC.svg',
    'TEAM BADGES/PortsmouthFC.png',
    'TEAM BADGES/QueensParkRangers.png',
    'TEAM BADGES/ReadingFC.png',
    'TEAM BADGES/SheffieldUnitedFC.png',
    'TEAM BADGES/SheffieldWednesday.png',
    'TEAM BADGES/SOUTHAMPTON.png',
    'TEAM BADGES/StokeCity.png',
    'TEAM BADGES/SUNDERLAND.png',
    'TEAM BADGES/SWANSEA.png',
    'TEAM BADGES/SwindonTownFC.png',
    'TEAM BADGES/TOTTENHAM.png',
    'TEAM BADGES/WATFORD.png',
    'TEAM BADGES/WestBromwich.png',
    'TEAM BADGES/WestHam.png',
    'TEAM BADGES/WiganAthletic.png',
    'TEAM BADGES/AFCWimbledon.png',
    'TEAM BADGES/WolverhamptonWanderers.png'
];



const logoImage2 = document.getElementById('logoImage2');
const prevButton2 = document.getElementById('prevButton2');
const nextButton2 = document.getElementById('nextButton2');
const selectButton2 = document.getElementById('selectButton2');
let currentLogoIndex2 = 0;
let selectedLogo2 = '';

logoImage2.src = logos2[currentLogoIndex2]; // Set initial logo

prevButton2.addEventListener('click', function() {
    currentLogoIndex2 = (currentLogoIndex2 - 1 + logos2.length) % logos2.length;
    logoImage2.src = logos2[currentLogoIndex2];
});

nextButton2.addEventListener('click', function() {
    currentLogoIndex2 = (currentLogoIndex2 + 1) % logos2.length;
    logoImage2.src = logos2[currentLogoIndex2];
});

selectButton2.addEventListener('click', function() {
    selectedLogo2 = logos2[currentLogoIndex2];
    console.log('Selected Right Logo:', selectedLogo2);
});



// matches.js
function toggleDropdown() {
    var seasonDropdown = document.getElementById("season");
    var selectedYear = seasonDropdown.value;
    console.log("Selected Year: " + selectedYear);
    // You can do more with the selected year here
}

document.addEventListener("DOMContentLoaded", function() {
    var seasonDropdown = document.getElementById("season");
    seasonDropdown.addEventListener("change", toggleDropdown);
});
