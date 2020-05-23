const welcomeCarousel = [
  {image: require('../assets/images/illustration_1.png')},
  {image: require('../assets/images/illustration_2.png')},
  {image: require('../assets/images/illustration_3.png')},
];

const topBar = [
  {
    name: 'Products',
    products: [
      {
        image: require('../assets/icons/plants.png'),
        name: 'Plants',
        total: 147,
      },
      {
        image: require('../assets/icons/seeds.png'),
        name: 'Seeds',
        total: 16,
      },
      {
        image: require('../assets/icons/flowers.png'),
        name: 'Flowers',
        total: 68,
      },
      {
        image: require('../assets/icons/sprayers.png'),
        name: 'Sprayers',
        total: 17,
      },
      {
        image: require('../assets/icons/pots.png'),
        name: 'Pots',
        total: 47,
      },
      {
        image: require('../assets/icons/fertilizers.png'),
        name: 'Fertilizers',
        total: 9,
      },
      {
        image: require('../assets/icons/plants.png'),
        name: 'Plants',
        total: 147,
      },
      {
        image: require('../assets/icons/seeds.png'),
        name: 'Seeds',
        total: 16,
      },
      {
        image: require('../assets/icons/flowers.png'),
        name: 'Flowers',
        total: 68,
      },
      {
        image: require('../assets/icons/sprayers.png'),
        name: 'Sprayers',
        total: 17,
      },
      {
        image: require('../assets/icons/pots.png'),
        name: 'Pots',
        total: 47,
      },
      {
        image: require('../assets/icons/fertilizers.png'),
        name: 'Fertilizers',
        total: 9,
      },
    ],
  },
  {
    name: 'Inspirations',
    products: [
      {
        image: require('../assets/icons/plants.png'),
        name: 'Plants',
        total: 147,
      },
      {
        image: require('../assets/icons/seeds.png'),
        name: 'Seeds',
        total: 16,
      },
      {
        image: require('../assets/icons/flowers.png'),
        name: 'Flowers',
        total: 68,
      },
      {
        image: require('../assets/icons/sprayers.png'),
        name: 'Sprayers',
        total: 17,
      },
      {
        image: require('../assets/icons/pots.png'),
        name: 'Pots',
        total: 47,
      },
      {
        image: require('../assets/icons/fertilizers.png'),
        name: 'Fertilizers',
        total: 9,
      },
    ],
  },
  {
    name: 'Shop',
    products: [
      {
        image: require('../assets/icons/plants.png'),
        name: 'Plants',
        total: 147,
      },
      {
        image: require('../assets/icons/seeds.png'),
        name: 'Seeds',
        total: 16,
      },
      {
        image: require('../assets/icons/flowers.png'),
        name: 'Flowers',
        total: 68,
      },
      {
        image: require('../assets/icons/sprayers.png'),
        name: 'Sprayers',
        total: 17,
      },
      {
        image: require('../assets/icons/pots.png'),
        name: 'Pots',
        total: 47,
      },
      {
        image: require('../assets/icons/fertilizers.png'),
        name: 'Fertilizers',
        total: 9,
      },
    ],
  },
];

const explore = [
  // images
  require('../assets/images/explore_1.png'),
  require('../assets/images/explore_2.png'),
  require('../assets/images/explore_3.png'),
  require('../assets/images/explore_4.png'),
  require('../assets/images/explore_5.png'),
  require('../assets/images/explore_6.png'),
];

const products = [
  {
    id: 1,
    name: '16 Best Plants That Thrive In Your Bedroom',
    description:
      'Bedrooms deserve to be decorated with lush greenery just like every other room in the house – but it can be tricky to find a plant that thrives here. Low light, high humidity and warm temperatures mean only certain houseplants will flourish.',
    tags: ['Interior', '27 m²', 'Ideas'],
    images: [
      require('../assets/images/plants_1.png'),
      require('../assets/images/plants_2.png'),
      require('../assets/images/plants_3.png'),
      // showing only 3 images, show +6 for the rest
      require('../assets/images/plants_1.png'),
      require('../assets/images/plants_2.png'),
      require('../assets/images/plants_3.png'),
      require('../assets/images/plants_1.png'),
      require('../assets/images/plants_2.png'),
      require('../assets/images/plants_3.png'),
    ],
  },
];

export default {
  welcomeCarousel,
  topBar,
  explore,
  products,
};
