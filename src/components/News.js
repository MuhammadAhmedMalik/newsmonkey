import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    article = [
        {
            "source": {
                "id": "bbc-sport",
                "name": "BBC Sport"
            },
            "author": "BBC Sport",
            "title": "Pele recovering after colon surgery",
            "description": "Brazilian football legend Pele is recovering in intensive care in hospital after having colon surgery.",
            "url": "http://www.bbc.co.uk/sport/football/58527781",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/5E4D/production/_120514142_gettyimages-1139987095.jpg",
            "publishedAt": "2021-09-11T07:37:23.7054979Z",
            "content": "Pele is the only player to win the World Cup three times\r\nBrazilian football legend Pele remains in intensive care but is making a satisfactory recovery after having surgery for a suspected colon tum… [+1374 chars]"
        },
        {
            "source": {
                "id": "fox-sports",
                "name": "Fox Sports"
            },
            "author": "FOX Sports",
            "title": "College Football Week 2: Win $25,000 free with FOX Super 6",
            "description": "Oregon-Ohio State and the battle for Iowa highlight the major matchups in Week 2, and you could win big – for free! Here's how.",
            "url": "http://www.foxsports.com/stories/college-football/week-2-oregon-ohio-state-texas-am-colorado-arkansas-iowa-washington-michigan-stanford-usc-win-free-fox-super-6",
            "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2021/09/1408/814/9.11.21_CFB-Super-6-week-2-16x9.jpg?ve=1&tl=1",
            "publishedAt": "2021-09-11T00:35:33Z",
            "content": "By Kevin CooneySpecial to FOX Sports\r\nGreat finishes. Heavyweight matchups. Packed crowds. All of that highlighted the first full weekend of the college football season.\r\nIt was a heck of an opener. … [+4218 chars]"
        },
        {
            "source": {
                "id": "fox-sports",
                "name": "Fox Sports"
            },
            "author": "FOX Sports",
            "title": "College football Week 2 odds: Why you should bet on Iowa State, Ohio State and more",
            "description": "Texas? Iowa State? Betting expert Jason McIntyre is back with his five best CFB bets for the weekend.",
            "url": "http://www.foxsports.com/stories/college-football/college-football-week-2-odds-why-you-should-bet-on-iowa-state-ohio-state-and-more",
            "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2021/09/1408/814/9.10.21_JMacs-Best-CFB-Bets-16x9.jpg?ve=1&tl=1",
            "publishedAt": "2021-09-10T23:40:03Z",
            "content": "By Jason McIntyreFOX Sports Betting Analyst\r\nWeek 1 in college football was profitable in this space, especially if you took the recommendation to sprinkle some on the moneyline in UCLA vs. LSU. \r\nBu… [+7060 chars]"
        },
        {
            "source": {
                "id": "four-four-two",
                "name": "FourFourTwo"
            },
            "author": "PA Staff",
            "title": "Brazil stars cleared for Premier League duty as associations agree to waive ban",
            "description": "Premier League clubs will be allowed to field their Brazilian stars this weekend after the country’s football confederation dropped its demands for FIFA to enforce rules relating to their non-appearance for international duty.",
            "url": "https://www.fourfourtwo.com/news/brazil-stars-cleared-for-premier-league-duty-as-associations-agree-to-waive-ban-1631315746000",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/Dh2UCRaeLMzVxbJ9MmgaAF-1200-80.jpg",
            "publishedAt": "2021-09-10T23:35:20Z",
            "content": "Premier League clubs will be allowed to field their Brazilian stars this weekend after the countrys football confederation dropped its demands for FIFA to enforce rules relating to their non-appearan… [+3110 chars]"
        },
        {
            "source": {
                "id": "fox-sports",
                "name": "Fox Sports"
            },
            "author": "FOX Sports",
            "title": "Ohio State, Oregon, Alabama and more: College football Week 2 by the numbers",
            "description": "Week 2 of the college football season features multiple ranked matchups. Here are the numbers to know before Saturday.",
            "url": "http://www.foxsports.com/stories/college-football/college-football-by-the-numbers-ohio-state-oregon-ducks-alabama-crimson-tide-georgia-bulldogs-usc-trojans-stanford-cardinal-florida-gators-iowa-hawkeyes-iowa-state-cyclones",
            "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2021/09/1408/814/9.10.21_CFB-By-the-Numbers-16x9.jpg?ve=1&tl=1",
            "publishedAt": "2021-09-10T22:26:22Z",
            "content": "Week 1 of the college football season was a lot of fun. Now it's time to keep the momentum rolling into Week 2.\r\nThis Saturday's slate of games features two more ranked matchups as well as multiple o… [+4192 chars]"
        },
        {
            "source": {
                "id": "fox-sports",
                "name": "Fox Sports"
            },
            "author": "FOX Sports",
            "title": "New Orleans Saints looking to bring excitement, and a win, to a city in need",
            "description": "In moments of struggle, the city of New Orleans has leaned on its football team as a beacon of support and something to rally around.",
            "url": "http://www.foxsports.com/stories/nfl/new-orleans-saints-green-bay-packers-hurricane-ida-jacksonville-newsletter-martin-rogers",
            "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2021/09/1408/814/540_Newsletter_1920x1080_NFL_SaintsRelocation.jpg?ve=1&tl=1",
            "publishedAt": "2021-09-10T21:39:08Z",
            "content": "By Martin RogersFOX Sports Columnist\r\nIn the aftermath of Hurricane Ida, the New Orleans Saints have stepped up.\r\nAlvin Kamara and Jameis Winston personally called the mayor of New Orleans to ask wha… [+4954 chars]"
        },
        {
            "source": {
                "id": "nfl-news",
                "name": "NFL News"
            },
            "author": null,
            "title": "Michael F. Florio's Week 1 fantasy football matchups",
            "description": "With the first Sunday of the 2021 just days away, Michael F. Florio breaks down matchups to help you set your fantasy lineups!",
            "url": "https://www.nfl.com/news/michael-f-florio-s-week-1-fantasy-football-matchups",
            "urlToImage": "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/knng8rw4xt2y2l0p9pyf",
            "publishedAt": "2021-09-10T21:22:28.462265Z",
            "content": "This is a rematch from last season. In that game, Ben Roethlisberger threw for 187 yards, two touchdowns and two interceptions. Not a great stat line, plus the Bills issued just 245 passing yards per… [+4690 chars]"
        },
        {
            "source": {
                "id": "fox-sports",
                "name": "Fox Sports"
            },
            "author": "FOX Sports",
            "title": "The 5 best bets you can make this weekend in the NFL and college football",
            "description": "Sammy P highlights the five wagers he’s making right now ahead of this weekend's college football and NFL slates.",
            "url": "http://www.foxsports.com/stories/nfl/five-best-bets-college-football-nfl-betting-sammy-p-coastal-carolina-kansas-illinois-iowa-steelers-bills",
            "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2021/09/1408/814/9.10.21_Sammy-Ps-Best-Bets_NFL-16x9.jpg?ve=1&tl=1",
            "publishedAt": "2021-09-10T20:26:47Z",
            "content": "By Sam PanayotovichFOX Sports Betting Analyst\r\nThursday nights seesaw battle between the Tampa Bay Buccaneers and Dallas Cowboys was just the opening course of a jam-packed betting weekend with the f… [+3556 chars]"
        },
        {
            "source": {
                "id": "nfl-news",
                "name": "NFL News"
            },
            "author": null,
            "title": "Washington placing WR Curtis Samuel (groin) on injured reserve",
            "description": "The Washington Football Team will be without receiver Curtis Samuel to start the season. Coach Ron Rivera announced Friday that Samuel would be placed on injured reserve due to a groin injury.",
            "url": "https://www.nfl.com/news/washington-placing-wr-curtis-samuel-groin-on-injured-reserve",
            "urlToImage": "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/rnnvluktky0bkc0kmgvt",
            "publishedAt": "2021-09-10T20:22:37.5869333Z",
            "content": "The Washington Football Team will be without receiver Curtis Samuel to start the season.\r\nCoach Ron Rivera announced Friday that Samuel would be placed on injured reserve due to a groin injury.\r\nThe … [+638 chars]"
        },
        {
            "source": {
                "id": "bleacher-report",
                "name": "Bleacher Report"
            },
            "author": "Maurice Moton",
            "title": "Fantasy Football Week 1: Biggest Sleepers at Every Position",
            "description": "Some fantasy football managers are looking back at their draft results in disappointment, but they can find hope among free agents before Week 1.   Don't hold on to a bad pick—that's a poor strategy for  NFL  and fantasy managers alike...",
            "url": "https://bleacherreport.com/articles/2948131-fantasy-football-week-1-biggest-sleepers-at-every-position",
            "urlToImage": "https://img.bleacherreport.net/img/slides/photos/004/474/376/hi-res-8aba442887a29d9edee6b9943b9d4183_crop_exact.jpg?w=1200&h=1200&q=75",
            "publishedAt": "2021-09-10T12:51:49Z",
            "content": "Ron Schwane/Associated Press\r\nDraftKings DFS Price: $4,000\r\nLast year, quarterback Baker Mayfield and Austin Hooper learned a new system under head coach Kevin Stefanski. The latter saw his receiving… [+1221 chars]"
        },
        {
            "source": {
                "id": "espn",
                "name": "ESPN"
            },
            "author": "Eric KarabellESPN Senior Writer ",
            "title": "Fantasy football flex and superflex rankings for Week 1",
            "description": "Trying to decide between a couple of closely ranked fantasy football players for Week 1? Eric Karabell ranks the top 150 QBs, RBs, WRs and TEs to make the decision easy for you.",
            "url": "http://espn.go.com/fantasy/football/insider/story/_/id/32172258/fantasy-football-flex-superflex-rankings-week-1",
            "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F0908%2Fr906290_1296x729_16%2D9.jpg",
            "publishedAt": "2021-09-09T21:15:00Z",
            "content": "Welcome to the 2021 fantasy football season and the newest version of our weekly flex rankings, the debut of the Superflex 150! This season, we decided to add quarterbacks to these PPR rankings and e… [+10244 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
            "description": "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
            "urlToImage": "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
            "publishedAt": "2020-04-27T07:20:43Z",
            "content": "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]"
        }
    ]
    constructor(){
        super();
        this.state = {
            article: this.article,
            loading: false
        }
    }
    render() {
        return (
            <div className="container">
                <h2 className="my-3">NewsMonkey Top HeadLines</h2>
                <div className="row">
                    {this.state.article.map((element)=>{
                         return <div className="col-md-4">
                        <NewsItem title={element.title.slice(0, 45)} description={element.description.slice(0, 88)} imgUrl={element.urlToImage} newsUrl={element.url}/>
                    </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News
