const data = [
  {
    image: "./img/card1.svg",
    title: "Qualuty",
    description:
      "Lorem ipsum dolor sit consectetur adipiscing elit. Viverra in ul",
    link: "Read more",
  },
  {
    image: "./img/card2.svg",
    title: "Flexible",
    description:
      "Lorem ipsum dolor sit consectetur adipiscing elit. Viverra in ul",
    link: "Read more",
  },
  {
    image: "./img/card3.svg",
    title: "Long Lasting",
    description:
      "Lorem ipsum dolor sit consectetur adipiscing elit. Viverra in ul",
    link: "Read more",
  },
];

const parentElement = document.getElementById("parent");

const blocks = data.map((item) => {
  const block = document.createElement("div");
  block.className = "block";

	
  const image = document.createElement("img");
  image.className = "image";
  image.textContent = item.image;
  image.src = item.image;
	
  const title = document.createElement("h2");
  title.className = "title";
  title.textContent = item.title;
	
  const description = document.createElement("p");
  description.className = "description";
  description.textContent = item.description;
	
	const link = document.createElement("a");
	link.className = "link";
  link.textContent = item.link;
	link.href = '#';

  block.appendChild(image);
  block.appendChild(title);
  block.appendChild(description);
	block.appendChild(link);


  return block;
});

blocks.forEach((block) => {
  parentElement.appendChild(block);
});
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
