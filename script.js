const cardGrid = document.querySelector('.card-grid');
const cartEmpty = document.querySelector('.cart-empty');
const stackCount = document.querySelector('.stack-count');
const btnRemoveAll = document.querySelector('.btn-remove-all');

let cart = [];

const techData = [
  {
    name: 'React',
    desc: 'A declarative, component-based JavaScript library for building UI.',
    tag: 'Popular',
    cat: 'Frontend',
    level: 'Beginner-Friendly',
    rating: '4.9',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
  },
  {
    name: 'Vue.js',
    desc: 'An approachable, performant and versatile framework for building web UI.',
    tag: 'Versatile',
    cat: 'Frontend',
    level: 'Beginner-Friendly',
    rating: '4.8',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'
  },
  {
    name: 'Svelte',
    desc: 'Cybernetically enhanced web apps with compile-time reactivity.',
    tag: 'Fast',
    cat: 'Frontend',
    level: 'Intermediate',
    rating: '4.8',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg'
  },
  {
    name: 'Next.js',
    desc: 'The React framework for full-stack web applications with hybrid static.',
    tag: 'Popular',
    cat: 'Frontend',
    level: 'Intermediate',
    rating: '4.9',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
  },
  {
    name: 'Node.js',
    desc: 'An asynchronous event-driven JavaScript runtime built on V8 engine.',
    tag: 'Standard',
    cat: 'Backend',
    level: 'Intermediate',
    rating: '4.8',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
  },
  {
    name: 'PostgreSQL',
    desc: 'A powerful, open-source object-relational database system.',
    tag: 'Top SQL',
    cat: 'Database',
    level: 'Intermediate',
    rating: '4.9',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
  },
  {
    name: 'Redis',
    desc: 'In-memory data structure store used as a high-speed database & cache.',
    tag: 'Cache',
    cat: 'Database',
    level: 'Intermediate',
    rating: '4.8',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg'
  },
  {
    name: 'JavaScript',
    desc: 'The versatile, ubiquitous scripting language powering dynamic behavior.',
    tag: 'Ubiquitous',
    cat: 'Language',
    level: 'Beginner-Friendly',
    rating: '4.9',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
  },
  {
    name: 'TypeScript',
    desc: 'A strongly typed programming language that builds on JavaScript.',
    tag: 'Essential',
    cat: 'Language',
    level: 'Intermediate',
    rating: '4.9',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
  },
  {
    name: 'Java',
    desc: 'A secure, object-oriented programming language designed for portability.',
    tag: 'Robust',
    cat: 'Language',
    level: 'Intermediate',
    rating: '4.6',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
  },
  {
    name: 'Tailwind CSS',
    desc: 'A utility-first CSS framework packed with classes that can be composed.',
    tag: 'Modern',
    cat: 'Styling',
    level: 'Beginner-Friendly',
    rating: '4.9',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg'
  },
  {
    name: 'Docker',
    desc: 'A platform designed to build, share, and run containerized applications.',
    tag: 'Containers',
    cat: 'DevOps',
    level: 'Intermediate',
    rating: '4.9',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
  }
];

function showCards() {
  if (!cardGrid) return;
  cardGrid.innerHTML = '';
  techData.forEach((tech) => {
    const isAdded = cart.some(item => item.name === tech.name);
    const div = document.createElement('div');
    div.className = 'card';

    const bgBtn = isAdded ? '#94a3b8' : '#0f172a';
    const cursorBtn = isAdded ? 'not-allowed' : 'pointer';
    const disabledAttr = isAdded ? 'disabled' : '';
    const btnText = isAdded ? 'Added' : 'Add to Stack';

    div.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <img src="${tech.img}" alt="${tech.name}" style="width: 28px; height: 28px;">
        <span style="font-size: 10px; background: #eff6ff; color: #2563eb; padding: 2px 6px; border-radius: 4px; font-weight: bold;">${tech.tag}</span>
      </div>
      <h4 style="text-align: left; margin-top: 10px;">${tech.name}</h4>
      <p style="text-align: left; font-size: 11px; color: #64748b; height: 35px; overflow: hidden;">${tech.desc}</p>
      <div style="display: flex; justify-content: space-between; font-size: 11px; color: #94a3b8; margin: 10px 0;">
        <span>${tech.cat}</span>
        <span>${tech.level}</span>
        <span style="color: #f59e0b;">★ ${tech.rating}</span>
      </div>
      <button class="btn-add" 
        style="background: ${bgBtn}; color: white; width: 100%; padding: 8px; border-radius: 6px; border: none; cursor: ${cursorBtn};" 
        ${disabledAttr} 
        onclick="addToCart('${tech.name}', '${tech.cat}', '${tech.img}')">
        ${btnText}
      </button>
    `;
    
    cardGrid.appendChild(div);
  });
}

function addToCart(name, cat, img) {
  if (!cart.some(item => item.name === name)) {
    cart.push({ name, cat, img });
    updateCart();
    showCards();
  }
}

function removeFromCart(name) {
  cart = cart.filter(item => item.name !== name);
  updateCart();
  showCards();
}

function updateCart() {
  if (stackCount) {
    stackCount.innerText = `${cart.length} technologies selected;`
  }

  if (!cartEmpty) return;

  if (cart.length === 0) {
    cartEmpty.innerHTML = `<p style="color: #94a3b8; font-size: 13px;">No technologies selected yet</p>;  `
    return;
  }

  cartEmpty.innerHTML = '';
  cart.forEach((item) => {
    const div = document.createElement('div');
    div.style.cssText = 'display: flex; justify-content: space-between; align-items: center; border: 1px solid #e2e8f0; border-radius: 10px; padding: 10px 14px; margin-bottom: 10px; background: #fff;';
    div.innerHTML = `
      <div style="display: flex; align-items: center; gap: 10px;">
        <img src="${item.img}" alt="${item.name}" style="width: 22px; height: 22px;">
        <div>
          <h5 style="margin: 0; font-size: 13px; font-weight: bold; color: #0f172a;">${item.name}</h5>
          <span style="font-size: 10px; color: #94a3b8;">${item.cat}</span>
        </div>
      </div>
      <button onclick="removeFromCart('${item.name}')" style="background: none; border: none; color: #94a3b8; font-size: 16px; cursor: pointer;">✕</button>
    `;
    cartEmpty.appendChild(div);
  });
}

if (btnRemoveAll) {
  btnRemoveAll.onclick = function () {
    cart = [];
    updateCart();
    showCards();
  };
}

showCards();
