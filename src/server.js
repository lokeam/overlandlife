import { createServer, Model } from "miragejs/server";

/* Temporarily mock server using mirage.js */

createServer({
  models: {
    rigs: Model,
  },

  seeds(server) {
    server.create(
      "rigs",
      {
        id: "1",
        name: "Battuta",
        price: 60,
        description: "Estibulum nunc turpis, vulputate id faucibus ut, pharetra vitae ex. Duis non posuere orci. Cras pharetra mauris vel magna pellentesque, eu pulvinar elit aliquet.",
        imageUrl: "",
        type: "simple"
      }
    )
    server.create(
      "rigs",
      {
        id: "2",
        name: "Tokubei",
        price: 80,
        description: "In hac habitasse platea dictumst. Vestibulum vitae dui efficitur, vehicula quam at, tincidunt turpis",
        imageUrl: "",
        type: "rugged"
      }
    )
    server.create(
      "rigs",
      {
        id: "3",
        name: "Armstrong",
        price: 100,
        description: "Sed lobortis tristique nulla, non aliquam ligula sollicitudin in. Duis consectetur neque sem, at tempor lectus maximus nec. Fusce eget ligula eget metus consectetur vehicula ut et mauris. Vestibulum ligula odio, faucibus vel odio vel, tempus ornare nisi.",
        imageUrl: "",
        type: "luxury"
      }
    )
    server.create(
      "rigs",
      {
        id: "4",
        name: "Magellan",
        price: 65,
        description: "Nulla dictum orci tempor gravida euismod. Proin euismod, metus ac malesuada tempor, mi augue elementum nisi, in congue urna lorem id ipsum. Nunc vel venenatis libero. Proin maximus, leo non mollis tempor, est sem porttitor velit, sit amet ornare ante velit non ante.",
        imageUrl: "",
        type: "simple"
      }
    )
    server.create(
      "rigs",
      {
        id: "5",
        name: "Polo",
        price: 120,
        description: "Aenean ultrices malesuada quam, bibendum viverra enim sodales vel. Maecenas ut velit eu risus convallis hendrerit in sit amet augue. Suspendisse ultrices varius risus sed tincidunt.",
        imageUrl: "",
        type: "luxury"
      }
    )
    server.create(
      "rigs",
      {
        id: "6",
        name: "Everest",
        price: 70,
        description: "Suspendisse faucibus sollicitudin lectus, at blandit dolor viverra eu. Cras in sodales risus. Curabitur ex mi, efficitur et venenatis sit amet, porttitor a odio. Vestibulum suscipit arcu quis lorem interdum accumsan.",
        imageUrl: "",
        type: "rugged"
      }
    )
    server.create(
      "rigs",
      {
        id: "7",
        name: "Klenova",
        price: 70,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit scelerisque sem, non ornare diam imperdiet ut. Mauris lobortis eget mi eget accumsan. Nulla bibendum urna sed faucibus interdum. Donec at mi eu felis auctor feugiat.",
        imageUrl: "",
        type: "luxury"
      }
    )
    server.create(
      "rigs",
      {
        id: "8",
        name: "Rustah",
        price: 65,
        description: "Nullam libero mauris, suscipit egestas lorem vel, consectetur fringilla lorem. Etiam sagittis elit eu volutpat accumsan. Nulla euismod mi in dui pharetra pretium. Curabitur efficitur pellentesque risus et vehicula.",
        imageUrl: "",
        type: "simple"
      }
    )
    server.create(
      "rigs",
      {
        id: "9",
        name: "Tasman",
        price: 65,
        description: "Maecenas aliquam condimentum lorem non sagittis. Donec ullamcorper dolor augue, non malesuada sem iaculis egestas. Donec euismod ut leo vitae congue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam ut felis magna. Praesent dapibus quam eget ante aliquam sodales.",
        imageUrl: "",
        type: "rugged"
      }
    )
    server.create(
      "rigs",
      {
        id: "9",
        name: "Vespucci",
        price: 95,
        description: "Enean quis massa eu mi blandit dictum in et risus. Aenean congue sodales ultrices. Proin quis nunc venenatis diam consectetur vehicula at vitae urna. Sed aliquet elit a suscipit luctus. Vivamus lorem sem, rhoncus eu porttitor ac, tempus tristique metus. Curabitur sollicitudin ipsum non nunc convallis, vel gravida ante egestas.",
        imageUrl: "",
        type: "rugged"
      }
    )
    server.create(
      "rigs",
      {
        id: "10",
        name: "Moksadeva",
        price: 75,
        description: "Donec at ante porttitor, ultricies ipsum sed, malesuada sem. Vestibulum sagittis facilisis dapibus. Nam mauris augue, accumsan non tellus vel, luctus maximus orci.",
        imageUrl: "",
        type: "simple"
      }
    )
  },

  routes() {
    this.namespace = 'api'

    this.get('/rigs', (schema, request) => {
      return schema.rigs.all()
    });

    this.get('/rigs/:id', (schema, request) => {
      const id = request.params.id;
      return schema.rigs.find(id);
    });
  }
});
