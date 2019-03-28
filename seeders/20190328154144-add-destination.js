'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Destinations", [{
      name: 'Bandungku - Ciwidey',
      description: 'Ciwidey merupakan salah satu destinasi wisata alam yang menyuguhkan pemandangan alamnya yang begitu indah. Disini banyak sekali destinasi tempat wisata yang banyak menyuguhkan panorama alamnya yang begitu menakjubkan.',
      location: 'Bandung, Jawa Barat',
      date: '2019-05-02',
      price: 590000,
      lat: -7.0913017,
      long: 107.4080594,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Belitung – Backpacker',
      description: 'Belitung, atau Belitong, dulunya dikenal sebagai Billiton adalah sebuah pulau di lepas pantai timur Sumatra, Indonesia, diapit oleh Selat Gaspar dan Selat Karimata',
      location: 'Kepulauan Bangka Belitung',
      date: '2019-06-12',
      price: 950000,
      lat: -2.8992914,
      long: 107.3535613,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Pangandaran + Body Rafting',
      description: 'Pantai Pangandaran merupakan salah satu pantai di Jawa Barat yang terkenal karena keindahan dari pemandangan yang diberikan, tidak sedikit wisatawan yang datang ke pantai ini selama musim liburan.',
      location: 'Tlk. Pangandaran, Pangandaran, Jawa Barat 46396',
      date: '2019-06-03',
      price: 550000,
      lat: -7.6814452,
      long: 108.6424126,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Amazing Banyuwangi',
      description: 'Jelajahi setiap sudut Bumi Banyuwangi yang mempesona, bagi anda yang memiliki jiwa petualang dan menyukai aktifitas fisik',
      location: 'Desa, Kampungmandar, Kec. Banyuwangi, Kabupaten Banyuwangi, Jawa Timur 68419',
      date: '2019-04-30',
      price: 800000,
      lat: -8.2260465,
      long: 114.3272924,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Bali Family Tour -Culture and Education-',
      description: 'Berlibur 3 hari 2 malam menikmati adat dan budaya Pulau Dewata lebih berkesan bersama teman atau keluraga',
      location: 'Beraban, Kediri, Kabupaten Tabanan, Bali 82121',
      date: '2019-05-23',
      price: 1200000,
      lat: -8.6212065,
      long: 115.0846145,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Umroh - Hijrah',
      description: 'Gratis untuk anda yang bersungguh-sungguh untuk berhijrah',
      location: 'Mekkah 24231, Arab Saudi',
      date: '2019-05-01',
      price: 0,
      lat: 21.4224804,
      long: 39.8251832,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Destinations', null, {});
  }
};
