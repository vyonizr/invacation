'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Destinations", [{
      name: 'Bromo Midninght',
      description: 'Paket wisata bromo midnight sangat cocok bagi Anda yang hanya memiliki waktu liburan tidak lama, hanya membutuhkan waktu sekitar 12 jam dan Anda bisa menikmati keindahan gunung bromo.',
      location: 'Area Gn. Bromo, Podokoyo, Tosari, Pasuruan, Jawa Timur',
      date: '2020-04-01',
      price: 350000,
      lat: -7.9424934,
      long: 112.9442574,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Kawah Ijen – Baluran – Pulau Menjangan',
      description: 'Paket Wisata di mana Anda bisa menikmati Pantai di pesisir Timur dan menikmati keindahan Kawah Ijen yang terkenal dengan Blue Fire nya.',
      location: 'Pt. Perk. Lidjen, Tamansari, Licin, Kabupaten Banyuwangi, Jawa Timur',
      date: '2020-04-15',
      price: 1999000,
      lat: -8.0588221,
      long: 114.2176935,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Best of Jogja: Advanture and Fun',
      description: 'Berfoto cantik Museum De Mata, mengexlpore wisata di kota Jogja hingga berbasah-basah di Goa Pindul. Paket wisata seru bagi kalian pencari keseruan.',
      location: 'Jl. Raya Solo - Yogyakarta No.16, Kranggan, Bokoharjo, Prambanan, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55571',
      date: '2020-05-02',
      price: 1715000,
      lat: -7.7520206,
      long: 110.4892787,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Lombok Exotis + Gili Islands',
      description: 'Berenang bersama kura-kura di Gili Trawangan, sunset di pantai Kuta dan mencicip lezatnya masakan khas suku Sasak di Lombok',
      location: 'Gili Indah, Pemenang, Kabupaten Lombok Utara, Nusa Tenggara Bar.',
      date: '2020-04-20',
      price: 1782500,
      lat: -8.3518425,
      long: 116.0211436,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Bali - Pulau Dewa',
      description: 'Mengunjungi Pantai Pandawa, Pura Luhur Uluwatu, makan malam di pantai Jimbaran sambil menikmati sunset.',
      location: 'Jl. Pantai Pandawa, Jl. Raya Nusa Dua Selatan, Kutuh, Kuta Sel., Kabupaten Badung, Bali 80361',
      date: '2020-04-19',
      price:  1427150,
      lat: -8.844808,
      long: 115.1777707,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Surga Tersembunyi di Pacitan',
      description: 'Pacitan merupakan surga tersembunyi. Deretan pantai berpasir putih yang masih murni dan ombak bergulung menjadi primadona bagi peselancar. Paket wisata Pacitan fullday tour ini akan memberikan Anda pengalaman berkesan dalam mengekplorasi dan air fun!',
      location: 'Desa Widoro, Donorojo, Bolo, Kalak, Donorojo, Kabupaten Pacitan, Jawa Timur 63554',
      date: '2020-04-23',
      price: 409000,
      lat: -8.2185793,
      long: 110.9177629,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Yogyakarta - Bandung Overland',
      description: 'Tujuan Lokasi Wisata : Lembang Tangkuban perahu Floating market Farmhouse Cibaduyut Kawah putih-Situ patenggang',
      location: 'Cikahuripan, Lembang, Kabupaten Bandung Barat, Jawa Barat',
      date: '2020-11-03',
      price: 995000,
      lat: -6.7594563,
      long: 107.6056823,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Destinations', null, {});
  }
};
