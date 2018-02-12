const categoriesMock = [
  {
    id: 1,
    key: 1,
    name: 'Massagem',
    minimal_price: 10.0,
    professionals: [1],
    services: [
      {
        id: 1,
        key: 1,
        price: 20.0,
        uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
        professional: {
          avatar:
            'https://lh3.googleusercontent.com/-DG3l5nRUvH4/AAAAAAAAAAI/AAAAAAAAAFs/sZxS069VKig/s180-c-k-no/photo.jpg',
          key: 2,
          id: 1,
          name: 'Matheus Souza Lima',
          average_reputation: 5.0,
          hygiene: 10,
          cordiality: 0,
          punctuality: 0,
        },
      },
    ],
    icon: 'home',
  },
];

export default categoriesMock;
