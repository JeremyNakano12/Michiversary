const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const message = document.getElementById('message');
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

let yesClicks = 0;
let noClicks = 0;

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuToggle.classList.toggle('active'); // ✨ Activamos también el botón
});

const loveMessages = [
  "Waos te amo mucho mi amor",
  "Te amo demasiao",
  "Weño",
  "Te amo mucho sabes?",
  "Te amo más que nada en el mundo",
  "Te amo tanto corashon",
  "Ya she que me amas mucho pero y chi le das al botón de ño?",
  "De verdad que es divertido"
];

const noMessages = [
    "Te dije que ño pueyes",
    "Te dije que ño pueyes",
    "Te dije que ño pueyes",
    "Po que insistes acaso ño me amas?",
    "Si sigues te wa a sacar de mi prepucio",
    "aaah degraciao asi que quieres que te saque de mi prepucio",
    "Ya detenteeeeee",
    "No pos ya me enoje",
    "Jum, ya no te hablo",
    "Sha te dije que me enoje",
    "Jum",
    "Te amo",
    "Me seguirias amando si fuera un michito panzon?",
    "Piensa en nuestro hijo (inserte hamter tite)",
    "Te amo",
    "Debemos seguir muntitos por siempre mi amor :c",
    "Ya se, si te casas conmigo te doy un michito"
  ];

yesBtn.addEventListener('click', () => {
  if (yesClicks < loveMessages.length) {
    message.textContent = loveMessages[yesClicks];
  } else {
    message.textContent = "Waos muz muz";
  }
  yesClicks++;
});

noBtn.addEventListener('click', () => {
  noClicks++;
  if(noClicks > 15)
    noClicks = 0;

  // Redúcelo de tamaño o muévelo para "escapar"
  if (noClicks < 3) {
    noBtn.style.transform = `scale(${1 - noClicks * 0.2})`;
    message.textContent = "Ño pueyes decir que ño";
  } else {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.position = 'relative';
    noBtn.style.transform = `translate(${x}px, ${y}px) scale(0.5)`;
    message.textContent = noMessages[noClicks];
    if (noClicks < noMessages.length) {
        message.textContent = noMessages[noClicks];
      }
    else {
        message.textContent = "Ño pueyes decir que ño";
      }
  }
});
