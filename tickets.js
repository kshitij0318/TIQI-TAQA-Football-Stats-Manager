function mainClubData() {
  var div = document.getElementById("club-data");
  var mainClubNews = [
    {
      img: "https://resources.premierleague.com/photos/2019/06/06/6d5079d4-d2bb-4cc7-b878-d0bd8f2b77fe/Arsenal-thumbnail_new.png?width=500&height=333",
      note: "Click here to buy Arsenal tickets at Emirates Stadium",
      link: "https://www.arsenal.com/tickets"
    },    
    {
      img:
        "https://resources.premierleague.com/photos/2019/06/06/78271155-3b19-4a1e-9a21-9fcd4f8105fc/Aston_Villa-Thumbnail_new.png?width=500&height=333",
      note: "Click here to buy Aston Villa tickets at Villa Park",
      link: "https://www.avfc.co.uk/fans/fans-charter/ticketing/"
    },
    {
      img:
        "https://resources.premierleague.com/photos/2019/06/06/c7c8e089-3675-4b1c-9be9-e4a3508f6bd3/Brighton-thumbnail_new.png?width=500&height=333",
      note: "Click here to buy Brighton tickets at the Amex Stadium",
      link: "https://tickets.brightonandhovealbion.com/en-gb/categories/home"
    },
    {
      img:
        "https://resources.premierleague.com/photos/2019/06/06/82c2c854-b308-4e61-8322-9500f49b1d30/Burnley-thumbnail_new.png?width=500&height=333",
      note: "Click here to buy Burnley tickets at the Turf Moor Stadium",
      link: "https://tickets.burnleyfootballclub.com/"
    },
    {
      img:
        "https://resources.premierleague.com/photos/2019/06/06/5e690f4a-2f7f-402b-9979-a5d19df70fe6/Chelsea-thumbnail_new.png?width=500&height=333",
      note: "Click here to buy Chelsea tickets at Stamford Bridge",
      link: "https://www.chelseafc.com/en/tickets/mens-tickets"
    },
    {
      img:
        "https://resources.premierleague.com/photos/2019/06/06/caeb9ddd-0236-47c2-b636-a08988035c15/CrystalPalace-thumbnail_new.png?width=500&height=333",
      note: "Click here to buy Crystal Palace tickets at Selhurst Park stadium",
      link: "https://www.cpfc.co.uk/tickets/"
    },
    {
      img:
        "https://resources.premierleague.com/photos/2019/06/06/80890918-6e01-4a37-8c32-f87ea4a58a9b/Everton-thumbnail_new.png?width=500&height=333",
      note: "Click here to buy Everton tickets at Goodison Park",
      link: "https://www.evertonfc.com/tickets/prices-seating-sale-dates"
    },
    {
      img:
        "https://resources.premierleague.com/photos/2020/08/05/23de748f-bf39-4abc-9579-97f72057c9a5/Fulham-1000x667.png?width=500&height=333",
      note: "Click here to buy Fulham tickets at Craven Cottage",
      link: "https://www.fulhamfc.com/tickets-and-hospitality/match-tickets"
    },
    {
      img:
        "https://resources.premierleague.com/photos/2020/08/04/9ba18d31-5c07-4e8b-bc99-2e474b2294f8/LeedsUnited-1000x667.png?width=500&height=333",
      note: "Click here to buy Luton tickets at Kenilworth Road Stadium",
      link: "https://www.lutontown.co.uk/tickets/"
    },
    {
      img:
        "https://resources.premierleague.com/photos/2019/06/06/f698a8b0-d788-4816-919c-5a8bfee5914a/LeicesterCity-thumbnail_new.png?width=500&height=333",
      note: "Click here to buy Leicester tickets at King Power Stadium",
      link: "https://tickets.lcfc.com/en-gb/categories/home%20tickets"
    },
    {
      img:
        "https://resources.premierleague.com/photos/2019/06/06/9ed81272-835d-4ce8-9ed0-a2e96b9609b5/Liverpool-thumbnail_new.png?width=500&height=333",
      note: "Click here to buy Liverpool tickets at Anfield",
      link: "https://www.liverpoolfc.com/tickets/how-to-buy-tickets"
    },

    {
      img:
        "https://resources.premierleague.com/photos/2019/06/06/f062da8f-497a-4e81-b8e2-cc42a5ec40a2/ManchesterCity-thumbnail_new.png?width=500&height=333",
      note: "Click here to buy Man City tickets at Etihad Stadium",
      link: "https://www.mancity.com/tickets"
    },
    {
      img:
        "https://resources.premierleague.com/photos/2019/06/06/ff74db9f-f636-494a-b61a-86989e6c5db7/ManchesterUnited-thumbnail_new.png?width=500&height=333",
      note: "Click here to buy Man Utd tickets at Old Trafford",
      link: "https://www.manutd.com/en/tickets-and-hospitality"
    },
    {
      img:
        "https://resources.premierleague.com/photos/2019/06/06/cd583621-77a7-4d90-87bd-ed48c0ff31a9/NewcastleUnited-thumbnail_new.png?width=500&height=333",
      note: "Click here to buy Newcastle tickets at St. James' Park",
      link: "https://www.newcastleunited.com/tickets/"
    },
    {
      img:
        "https://resources.premierleague.com/photos/2019/06/06/2530e1b2-1e59-4b9b-881a-d9a13bf3bfd3/SheffieldUnited-thumbnail_new.png?width=500&height=333",
      note: "Click here to buy Sheffield Utd tickets at Bramall Lane",
      link: "https://www.sufc.co.uk/tickets-membership/match-tickets"
    },
    {
      img:
        "https://resources.premierleague.com/photos/2019/06/06/af70d44f-bb44-4aa5-8679-55b2feeeebe6/Southampton-thumbnail_new.png?width=500&height=333",
      note: "Click here to buy Southampton tickets at St Mary's Stadium",
      link: "https://tickets.southamptonfc.com/content?lang=en"
    },
    {
      img:
        "https://resources.premierleague.com/photos/2019/06/06/38d84b54-120e-4038-b0f5-4b7754e2cfa5/TottenhamHotspur-thumbnail_new.png?width=500&height=333",
      note: "Click here to buy Spurs tickets at Tottenham Hotspur Stadium",
      link: "https://www.tottenhamhotspur.com/tickets/buy-tickets/home-tickets/"
    },
    {
      img:
        "https://resources.premierleague.com/photos/2020/08/04/cae56a0a-6c84-48c0-bed3-42476f8d35c3/WestBrom-1000x667.png?width=500&height=333",
      note: "Click here to buy tickets at The Hawthorns",
      link: "https://www.wba.co.uk/tickets"
    },
    {
      img:
        "https://resources.premierleague.com/photos/2019/06/06/577acbbc-8b8f-4e37-a381-58660222f659/WestHamUnited-thumbnail_new.png?width=500&height=333",
      note: "Click here to buy West Ham tickets at London Stadium",
      link: "https://www.whufc.com/tickets/home-matches"
    },
    {
      img:
        "https://www.premierleague.com/resources/prod/3a85d04-3470/i/default-thumbnails/t39.png",
      note: "Click here to buy Wolverhampton tickets at Molineux Stadium",
      link: "https://www.wolves.co.uk/tickets/"
    },
  ];
  mainClubNews.forEach((el) => {
    var div1 = document.createElement("div");
    div1.setAttribute("class", "club-data");  

    div1.innerHTML = `
          <div><img src="${el.img}" alt=""></div>
          <div class="hover-border"></div>
          <br>
          <div class="note-container"><a href="${el.link}"><p>${el.note}</p><a></div>;`

    div.appendChild(div1);
  });
}
mainClubData();