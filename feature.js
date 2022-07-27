const firstSpk = {
  name: 'Jesse Powell',
  position: 'CEO of Kraken.',
  role: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam fuga rem sequi dolore',
  img: 'img/jesse-powell-kraken.jpeg',
};

const secondSpk = {
  name: 'Marcus Swanepoel',
  position: 'CEO of Luno.',
  role: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam fuga rem sequi dolore',
  img: 'img/Marcus-Swanepoel-luno.jpg',
};

const thirdSpk = {
  name: 'Sergey Nazarov',
  position: 'CEO of Chainlink.',
  role: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam fuga rem sequi dolore',
  img: 'img/Sergey-Nazarov-chainlink.jpg',
};

const fourthSpk = {
  name: 'Vitalik Buterin',
  position: 'Founder of Ethereum.',
  role: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam fuga rem sequi dolore',
  img: 'img/vitalik-buterin.jpg',
};

const fifthSpk = {
  name: 'CZ',
  position: 'CEO of Binance.',
  role: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam fuga rem sequi dolore',
  img: 'img/CZ-binance.jpg',
};

const lastSpk = {
  name: 'Brian Armstrong',
  position: 'CEO of Coinbase.',
  role: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam fuga rem sequi dolore',
  img: 'img/brian-armstrong-coinbase.jpg',
};

const spkArr = [firstSpk, secondSpk, thirdSpk, fourthSpk, fifthSpk, lastSpk];

window.addEventListener('load', () => {
  const fspCont = document.querySelector('#fsp');

  fspCont.innerHTML += `<h3 class="feat">Featured speakers</h3>
    <div class="sub-cont">
       <div class="hold">
            <div class="speaker">
               <img class="spk-img" src="${spkArr[0].img}" alt="speaker one">
               <div class="spk-text">
                  <h3 class="name">${spkArr[0].name}</h3>
                  <i class="position">${spkArr[0].position}</i>
                  <p class="role">${spkArr[0].role}</p>
               </div>
            </div>
            <div class="speaker">
               <img class="spk-img" src="${spkArr[1].img}" alt="speaker two">
               <div class="spk-text">
                  <h3 class="name">${spkArr[1].name}</h3>
                  <i class="position">${spkArr[1].position}</i>
                  <p class="role">${spkArr[1].role}</p>
               </div>
            </div>
       </div>
       <span id="break"></span>
       <div class="hold activ">
            <div class="speaker">
               <img class="spk-img" src="${spkArr[2].img}" alt="speaker three">
               <div class="spk-text">
                  <h3 class="name">${spkArr[2].name}</h3>
                  <i class="position">${spkArr[2].position}</i>
                  <p class="role">${spkArr[2].role}</p>
               </div>
            </div>
            <div class="speaker">
               <img class="spk-img" src="${spkArr[3].img}" alt="speaker four">
               <div class="spk-text">
                  <h3 class="name">${spkArr[3].name}</h3>
                  <i class="position">${spkArr[3].position}</i>
                  <p class="role">${spkArr[3].role}</p>
               </div>
            </div>
       </div>

       <div class="hold activ">
            <div class="speaker">
               <img class="spk-img" src="${spkArr[4].img}" alt="speaker five">
               <div class="spk-text">
                  <h3 class="name">${spkArr[4].name}</h3>
                  <i class="position">${spkArr[4].position}</i>
                  <p class="role">${spkArr[4].role}</p>
               </div>
            </div>
            <div class="speaker">
               <img class="spk-img" src="${spkArr[5].img}" alt="speaker six">
               <div class="spk-text">
                  <h3 class="name">${spkArr[5].name}</h3>
                  <i class="position">${spkArr[5].position}</i>
                  <p class="role">${spkArr[5].role}</p>
               </div>
            </div>
       </div>
   </div>
    `;
});
