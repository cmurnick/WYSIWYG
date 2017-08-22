var famousPeople = [{
  title: "Author",
  name: "Ayn Rand",
  bio: "During her own lifetime, Rand became a famous and controversial figure. A best-selling author, she also carried her message to university classrooms, to Hollywood, to Congress, to the editorial page, to talk shows and radio programs. Her presence has only increased since her death in 1982, as her philosophy has become more well-known. Today, her books have sold in the millions, and she's the subject of an Oscar-nominated documentary, a U.S. postage stamp, university courses, and a philosophical society devoted to the study of her thought. Fueled by her vision of man as a heroic being and by the original philosophy behind it, more and more people, from all walks of life, from businessmen to students to professors to athletes to artists, are saying the same thing: Ayn Rand's writings changed my life.",
  image: "https://en.wikipedia.org/wiki/File:Ayn_Rand.jpg",
  lifespan: {
    birth: 1905,
    death: 1982
  }
},

{
	title: "President",
  name: "Thomas Jefferson",
  bio: "Thomas Jefferson (April 13 [O.S. April 2] 1743 – July 4, 1826) was an American Founding Father who was the principal author of the Declaration of Independence and later served as the third President of the United States from 1801 to 1809. Previously, he was elected the second Vice President of the United States, serving under John Adams from 1797 to 1801. A proponent of democracy, republicanism, and individual rights motivating American colonists to break from Great Britain and form a new nation, he produced formative documents and decisions at both the state and national level. He was a land owner and farmer.",
  image: "https://en.wikipedia.org/wiki/File:Official_Presidential_portrait_of_Thomas_Jefferson_(by_Rembrandt_Peale,_1800).jpg",
  lifespan: {
    birth: 1743,
    death: 1826	
   }
},

{
	title: "Electrical Engineer",
  name: "Nikola Tesla",
  bio: "Born and raised in the Austrian Empire, Tesla received an advanced education in engineering and physics in the 1870s and gained practical experience in the early 1880s working in telephony and at Continental Edison in the new electric power industry. He emigrated to the United States in 1884, where he would become a naturalized citizen. He worked for a short time at the Edison Machine Works in New York City before he struck out on his own. With the help of partners to finance and market his ideas, Tesla set up laboratories and companies in New York to develop a range of electrical and mechanical devices. His alternating current (AC) induction motor and related polyphase AC patents, licensed by Westinghouse Electric in 1888, earned him a considerable amount of money and became the cornerstone of the polyphase system which that company would eventually market.",
  image: "https://en.wikipedia.org/wiki/File:N.Tesla.JPG",
  lifespan: {
    birth: 1856,
    death: 1943	
   }
},

{
	title: "Inventor",
  name: "Thomas Edison",
  bio: "Edison was a prolific inventor, holding 1,093 US patents in his name, as well as many patents in the United Kingdom, France, and Germany. More significant than the number of Edison's patents was the widespread impact of his inventions: electric light and power utilities, sound recording, and motion pictures all established major new industries worldwide. Edison's inventions contributed to mass communication and, in particular, telecommunications. These included a stock ticker, a mechanical vote recorder, a battery for an electric car, electrical power, recorded music and motion pictures. His advanced work in these fields was an outgrowth of his early career as a telegraph operator. Edison developed a system of electric-power generation and distribution[5] to homes, businesses, and factories – a crucial development in the modern industrialized world. His first power station was on Pearl Street in Manhattan, New York.[5]",
  image: "https://en.wikipedia.org/wiki/File:Thomas_Edison2.jpg",
  lifespan: {
    birth: 1747,
    death: 1797	
   }
},

{
	title: "CEO",
  name: "Steve Jobs",
  bio: "Jobs was the chairman, and the chief executive officer (CEO), and a co-founder of Apple Inc.; CEO and majority shareholder of Pixar;[2] a member of The Walt Disney Company's board of directors following its acquisition of Pixar; and founder, chairman, and CEO of NeXT. Jobs and Apple co-founder Steve Wozniak are widely recognized as pioneers of the microcomputer revolution of the 1970s and 1980s.",
  image: "https://en.wikipedia.org/wiki/File:Steve_Jobs_Headshot_2010-CROP.jpg",
  lifespan: {
    birth: 1955,
    death: 2011	
   }

}]

var counter = 0;

forf (var i =0; i < famousPeople.length; i++) {

  domString += `<person>
    <header>Name and title go here</header>
    <section>Bio and image go here</section>
    <footer>Lifespan info goes here</footer>
  </person>`
}


