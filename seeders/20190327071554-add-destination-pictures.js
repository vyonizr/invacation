'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Pictures", [{
      url: 'https://traveltourindonesia.com/wp-content/uploads/2018/11/bromo-midnight.jpg',
      DestinationId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      url: 'https://traveltourindonesia.com/wp-content/uploads/2018/11/sunrise-bromo.jpg',
      DestinationId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      url: 'https://traveltourindonesia.com/wp-content/uploads/2018/11/jeep-bromos.jpg',
      DestinationId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      url: 'https://adambromo.files.wordpress.com/2018/02/paket-wisata-kawah-ijen-baluran-banyuwangi.png',
      DestinationId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      url: 'https://cdn-asset.hipwee.com/wp-content/uploads/2014/12/welcome-to-baluran-750x422.jpg',
      DestinationId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      url: 'http://www.nuarthatours.com/wp-content/uploads/2018/03/padang-savana-baluran.jpg',
      DestinationId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      url: 'https://tripjogja.co.id/wp-content/uploads/2017/04/Goa-Pindul-02.jpg',
      DestinationId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      url: 'http://cdn2.tstatic.net/jogja/foto/bank/images/de-mata_2912_20171229_224041.jpg',
      DestinationId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      url: 'http://traveltodayindonesia.com/wp-content/uploads/2018/02/Goa-Pindul-3.jpeg',
      DestinationId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      url: 'http://www.bagustrans.com/wp-content/uploads/2013/08/gili-trawangan.jpg',
      DestinationId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      url: 'https://phinemo.com/wp-content/uploads/2016/06/gili-trawangan.jpg',
      DestinationId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      url: 'https://boardingcallblog.com/wp-content/uploads/2018/10/Resort-Page-Gili-Trawangan-1200x800.jpg',
      DestinationId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
  }, {
      url: 'https://blog.airpaz.com/wp-content/uploads/Pantai-Pandawa.jpg',
      DestinationId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
  }, {
      url: 'https://explorewisata.com/wp-content/uploads/2018/03/pantai-pandawa.jpg',
      DestinationId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
  }, {
      url: 'https://2.bp.blogspot.com/-SN27S7pcUgI/WLbQHLw8mbI/AAAAAAAAACA/5Cocutsx9yUznKcFUWkNkanh-zlIEFLUQCLcB/s1600/pantai-pandawa.jpg',
      DestinationId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
  }, {
      url: 'https://i2.wp.com/www.syakirurohman.net/wp-content/uploads/2018/07/pantai-klayar-pacitan-by-dianrespati.jpg?ssl=1',
      DestinationId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
  }, {
      url: 'https://i2.wp.com/www.syakirurohman.net/wp-content/uploads/2018/07/pantai-klayar-pacitan-bynovemlawalata.jpg?ssl=1',
      DestinationId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
  }, {
      url: 'https://allesgroen.files.wordpress.com/2017/06/pemandangannya-cantik.jpg',
      DestinationId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
  }, {
      url: 'https://cdn-images-1.medium.com/max/800/1*wAaHBZ8BFCDzez_hoargJA.jpeg',
      DestinationId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
  }, {
      url: 'http://anekatempatwisata.com/wp-content/uploads/2018/03/Floating-Market.jpg',
      DestinationId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
  }, {
      url: 'https://mypermatawisata.com/assets/img/paketwisata/Floating-Market-Lembang-1024x590.jpg',
      DestinationId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
}])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pictures', null, {});
  }
};
