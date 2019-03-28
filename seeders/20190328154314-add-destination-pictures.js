'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert("Pictures", [{
      url: 'https://www.spotpedia.id/wp-content/uploads/2017/02/glamping-lakeside-pinisi-resto-ciwidey-etet_teterekel.jpg',
      DestinationId: 8,
      createdAt: new Date(),
      updatedAt: new Date()
      }, {
      url: 'https://www.spotpedia.id/wp-content/uploads/2017/02/ciwidey-valley-ciwidey-bandung.jpg',
      DestinationId: 8,
      createdAt: new Date(),
      updatedAt: new Date()
      }, {
      url: 'https://www.spotpedia.id/wp-content/uploads/2017/02/green-hill-park-ciwidey-bandung-810x455.jpg',
      DestinationId: 8,
      createdAt: new Date(),
      updatedAt: new Date()
      }, {
      url: 'https://content.shopback.com/id/wp-content/uploads/2017/10/12143932/shutterstock_58935172.jpg',
      DestinationId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      url: 'http://ajourneybespoke.com/wp-content/uploads/2018/06/boat-stop-on-way-to-Pulau-Lengkuas.jpg',
      DestinationId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      url: 'http://cdn2.tstatic.net/belitung/foto/bank/images/pulau-lengkuas_20180913_143221.jpg',
      DestinationId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      url: 'https://pesona.travel/media/pangandaran-cocok-banget-buat-yang-hobi-bertualang_192451_1140.jpeg',
      DestinationId: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      url: 'https://akcdn.detik.net.id/community/media/visual/2016/07/27/72cf8ad4-a998-4b15-82eb-cfc8d0e48b1d_169.jpg?w=700&q=80',
      DestinationId: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      url: 'https://foresteract.com/wp-content/uploads/2018/09/Pantai-Pangandaran.jpg',
      DestinationId: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      url: 'https://www.pegipegi.com/travel/wp-content/uploads/2018/09/kawah-ijen-banyuwangi-.jpg',
      DestinationId: 11,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      url: 'https://fajar.co.id/wp-content/uploads/2018/08/5b86bb712628e1535556465-banyuwangi.jpg',
      DestinationId: 11,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      url: 'https://img.jakpost.net/c/2017/12/03/2017_12_03_36753_1512267062._large.jpg',
      DestinationId: 11,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      url: 'https://odis.homeaway.com/odis/destination/f0765036-371f-4a8b-b820-91922aa853e9.hw1.jpg',
      DestinationId: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      url: 'https://cdn.newsapi.com.au/image/v1/8be4783c02b423a71c8d021632702910?width=1024',
      DestinationId: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      url: 'https://handluggageonly.co.uk/wp-content/uploads/2015/08/IMG_1123.jpg',
      DestinationId: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      url: 'http://4.bp.blogspot.com/-XzmOfWY5taE/VpXIc_hveaI/AAAAAAAAF2Q/o3lV7zMcFmg/s1600/DSC00802.jpg',
      DestinationId: 13,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      url: 'https://www2.kemenag.go.id/files/www/file/foto/14427.jpg',
      DestinationId: 13,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      url: 'http://bhq.web.id/wp-content/uploads/2015/02/Miqat-Antara-Mekkah-dan-Madinah-Terlebih-Dahulu.jpg',
      DestinationId: 13,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pictures', null, {});
  }
};
