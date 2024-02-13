import { createServer, Model } from "miragejs"


createServer({
    models: {
        rigs: Model,
    },

    seeds(server) {
      server.create("rig", { id: "1", name: "Battuta", price: 70, description: "Estibulum nunc turpis, vulputate id faucibus ut, pharetra vitae ex. Duis non posuere orci. Cras pharetra mauris vel magna pellentesque, eu pulvinar elit aliquet.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png", type: "simple" })
      server.create("rig", { id: "2", name: "Tokubei", price: 80, description: "In hac habitasse platea dictumst. Vestibulum vitae dui efficitur, vehicula quam at, tincidunt turpis.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png", type: "rugged" })
      server.create("rig", { id: "3", name: "Armstrong", price: 100, description: "Sed lobortis tristique nulla, non aliquam ligula sollicitudin in. Duis consectetur neque sem, at tempor lectus maximus nec. Fusce eget ligula eget metus consectetur vehicula ut et mauris. Vestibulum ligula odio, faucibus vel odio vel, tempus ornare nisi.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/reliable-red.png", type: "luxury" })
      server.create("rig", { id: "4", name: "Magellan", price: 90, description: "Nulla dictum orci tempor gravida euismod. Proin euismod, metus ac malesuada tempor, mi augue elementum nisi, in congue urna lorem id ipsum. Nunc vel venenatis libero. Proin maximus, leo non mollis tempor, est sem porttitor velit, sit amet ornare ante velit non ante.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png", type: "simple" })
      server.create("rig", { id: "5", name: "Polo", price: 120, description: "Aenean ultrices malesuada quam, bibendum viverra enim sodales vel. Maecenas ut velit eu risus convallis hendrerit in sit amet augue. Suspendisse ultrices varius risus sed tincidunt", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png", type: "luxury" })
      server.create("rig", { id: "6", name: "Everest", price: 70, description: "Suspendisse faucibus sollicitudin lectus, at blandit dolor viverra eu. Cras in sodales risus. Curabitur ex mi, efficitur et venenatis sit amet, porttitor a odio. Vestibulum suscipit arcu quis lorem interdum accumsan.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png", type: "rugged" })
      server.create("rig", { id: "7", name: "Klenova", price: 80, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit scelerisque sem, non ornare diam imperdiet ut. Mauris lobortis eget mi eget accumsan. Nulla bibendum urna sed faucibus interdum. Donec at mi eu felis auctor feugiat.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png", type: "rugged" })
      server.create("rig", { id: "8", name: "Rustah", price: 90, description: "Nullam libero mauris, suscipit egestas lorem vel, consectetur fringilla lorem. Etiam sagittis elit eu volutpat accumsan. Nulla euismod mi in dui pharetra pretium. Curabitur efficitur pellentesque risus et vehicula.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png", type: "rugged" })
      server.create("rig", { id: "9", name: "Tasman", price: 120, description: "Maecenas aliquam condimentum lorem non sagittis. Donec ullamcorper dolor augue, non malesuada sem iaculis egestas. Donec euismod ut leo vitae congue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam ut felis magna. Praesent dapibus quam eget ante aliquam sodales.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png", type: "rugged" })
      server.create("rig", { id: "10", name: "Vespucci", price: 100, description: "Enean quis massa eu mi blandit dictum in et risus. Aenean congue sodales ultrices. Proin quis nunc venenatis diam consectetur vehicula at vitae urna. Sed aliquet elit a suscipit luctus. Vivamus lorem sem, rhoncus eu porttitor ac, tempus tristique metus. Curabitur sollicitudin ipsum non nunc convallis, vel gravida ante egestas.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png", type: "rugged" })
      server.create("rig", { id: "11", name: "Moksadeva", price: 80, description: "Donec at ante porttitor, ultricies ipsum sed, malesuada sem. Vestibulum sagittis facilisis dapibus. Nam mauris augue, accumsan non tellus vel, luctus maximus orci.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png", type: "rugged" })
    },

    routes() {
        this.namespace = "api";
        this.logging = true;

        this.get("/rigs", (schema, request) => {
            return schema.rigs.all()
        })

        this.get("/rigs/:id", (schema, request) => {
            const id = request.params.id
            return schema.vans.find(id)
        })
    }
})