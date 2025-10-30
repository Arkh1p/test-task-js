// Данные для ссылок в первом табе

const linksData = [
  {
    link: 'https://www.komus.ru',
    title: 'Главная Комус',
  },
  {
    link: 'https://www.komus.ru/store/',
    title: 'Магазины Комус',
  },
  {
    link: 'https://www.komus.ru/cart/',
    title: 'Корзина Комус',
  },
  {
    link: 'https://www.komus.ru/news/',
    title: 'Новости Комус',
  },
];
  const list = document.querySelector('.komus-links__list');
  const template = document.querySelector('#komus-links-item-template');

  linksData.forEach(element => {
    const item = template.content.cloneNode(true);
    const linkItem = item.querySelector('.komus-links__link');

    linkItem.href = element.link;
    linkItem.textContent = element.title;
  
    list.append(item);
  });


