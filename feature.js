const spkArr = [
  {
    names: 'Jesse Powell',
    position: 'CEO of Kraken.',
    role: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam fuga rem sequi dolore',
    img: 'img/jesse-powell-kraken.jpeg',
    alt: 'speaker one',
  },
  {
    names: 'Marcus Swanepoel',
    position: 'CEO of Luno.',
    role: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam fuga rem sequi dolore',
    img: 'img/Marcus-Swanepoel-luno.jpg',
    alt: 'speaker two',
  },
  {
    names: 'Sergey Nazarov',
    position: 'CEO of Chainlink.',
    role: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam fuga rem sequi dolore',
    img: 'img/Sergey-Nazarov-chainlink.jpg',
    alt: 'speaker three',
  },
  {
    names: 'Vitalik Buterin',
    position: 'Founder of Ethereum.',
    role: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam fuga rem sequi dolore',
    img: 'img/vitalik-buterin.jpg',
    alt: 'speaker four',
  },
  {
    names: 'CZ',
    position: 'CEO of Binance.',
    role: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam fuga rem sequi dolore',
    img: 'img/CZ-binance.jpg',
    alt: 'speaker five',
  },
  {
    names: 'Brian Armstrong',
    position: 'CEO of Coinbase.',
    role: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam fuga rem sequi dolore',
    img: 'img/brian-armstrong-coinbase.jpg',
    alt: 'speaker six',
  },
];

function generate(speakerObj, index) {
  const speaker = document.createElement('div');
  speaker.classList.add('speaker');

  const imgs = document.createElement('img');
  imgs.classList.add('spk-img');
  imgs.src = speakerObj[index].img;
  imgs.alt = speakerObj[index].alt;

  speaker.appendChild(imgs);

  const speakerText = document.createElement('div');
  speakerText.classList.add('spk-text');

  const names = document.createElement('h3');
  names.classList.add('name');
  names.textContent = speakerObj[index].names;

  const positions = document.createElement('i');
  positions.classList.add('position');
  positions.textContent = speakerObj[index].position;

  const roles = document.createElement('p');
  roles.classList.add('role');
  roles.textContent = speakerObj[index].role;

  speakerText.append(names, positions, roles);
  speaker.appendChild(speakerText);
  return speaker;
}

function renderSpeakers() {
  const fspCont = document.querySelector('#fsp');
  const header = document.createElement('h3');
  header.classList.add('feat');
  header.innerText = 'Featured Speakers';

  const spkWrapper = document.createElement('div');
  spkWrapper.classList.add('sub-cont');

  for (let i = 0; i < spkArr.length; i += 2) {
    const spkCont = document.createElement('div');
    spkCont.classList.add('hold');
    spkCont.append(generate(spkArr, i), generate(spkArr, i + 1));
    spkWrapper.appendChild(spkCont);
  }

  fspCont.append(header, spkWrapper);
}

document.addEventListener('DOMContentLoaded', renderSpeakers);
