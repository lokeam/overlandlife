import { createServer, Model } from "miragejs"


createServer({
    models: {
        rigs: Model,
        users: Model,
    },

    seeds(server) {
      server.create("rig", { id: "1", hostId: "123", name: "Battuta", price: 70, description: "Estibulum nunc turpis, vulputate id faucibus ut, pharetra vitae ex. Duis non posuere orci. Cras pharetra mauris vel magna pellentesque, eu pulvinar elit aliquet.", imageUrl: "../src/assets/images/suvlogo.jpg", type: "simple" })
      server.create("rig", { id: "2", hostId: "123", name: "Tokubei", price: 80, description: "In hac habitasse platea dictumst. Vestibulum vitae dui efficitur, vehicula quam at, tincidunt turpis.", imageUrl: "../src/assets/images/suvlogo.jpg", type: "rugged" })
      server.create("rig", { id: "3", hostId: "456", name: "Armstrong", price: 100, description: "Sed lobortis tristique nulla, non aliquam ligula sollicitudin in. Duis consectetur neque sem, at tempor lectus maximus nec. Fusce eget ligula eget metus consectetur vehicula ut et mauris. Vestibulum ligula odio, faucibus vel odio vel, tempus ornare nisi.", imageUrl: "../src/assets/images/suvlogo.jpg", type: "luxury" })
      server.create("rig", { id: "4", hostId: "789", name: "Magellan", price: 90, description: "Nulla dictum orci tempor gravida euismod. Proin euismod, metus ac malesuada tempor, mi augue elementum nisi, in congue urna lorem id ipsum. Nunc vel venenatis libero. Proin maximus, leo non mollis tempor, est sem porttitor velit, sit amet ornare ante velit non ante.", imageUrl: "../src/assets/images/suvlogo.jpg", type: "simple" })
      server.create("rig", { id: "5", hostId: "879", name: "Polo", price: 120, description: "Aenean ultrices malesuada quam, bibendum viverra enim sodales vel. Maecenas ut velit eu risus convallis hendrerit in sit amet augue. Suspendisse ultrices varius risus sed tincidunt", imageUrl: "../src/assets/images/suvlogo.jpg", type: "luxury" })
      server.create("rig", { id: "6", hostId: "745", name: "Everest", price: 70, description: "Suspendisse faucibus sollicitudin lectus, at blandit dolor viverra eu. Cras in sodales risus. Curabitur ex mi, efficitur et venenatis sit amet, porttitor a odio. Vestibulum suscipit arcu quis lorem interdum accumsan.", imageUrl: "../src/assets/images/suvlogo.jpg", type: "rugged" })
      server.create("rig", { id: "7", hostId: "054", name: "Klenova", price: 80, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit scelerisque sem, non ornare diam imperdiet ut. Mauris lobortis eget mi eget accumsan. Nulla bibendum urna sed faucibus interdum. Donec at mi eu felis auctor feugiat.", imageUrl: "../src/assets/images/suvlogo.jpg", type: "simple" })
      server.create("rig", { id: "8", hostId: "375", name: "Rustah", price: 90, description: "Nullam libero mauris, suscipit egestas lorem vel, consectetur fringilla lorem. Etiam sagittis elit eu volutpat accumsan. Nulla euismod mi in dui pharetra pretium. Curabitur efficitur pellentesque risus et vehicula.", imageUrl: "../src/assets/images/suvlogo.jpg", type: "rugged" })
      server.create("rig", { id: "9", hostId: "518", name: "Tasman", price: 120, description: "Maecenas aliquam condimentum lorem non sagittis. Donec ullamcorper dolor augue, non malesuada sem iaculis egestas. Donec euismod ut leo vitae congue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam ut felis magna. Praesent dapibus quam eget ante aliquam sodales.", imageUrl: "../src/assets/images/suvlogo.jpg", type: "rugged" })
      server.create("rig", { id: "10", hostId: "603", name: "Vespucci", price: 100, description: "Enean quis massa eu mi blandit dictum in et risus. Aenean congue sodales ultrices. Proin quis nunc venenatis diam consectetur vehicula at vitae urna. Sed aliquet elit a suscipit luctus. Vivamus lorem sem, rhoncus eu porttitor ac, tempus tristique metus. Curabitur sollicitudin ipsum non nunc convallis, vel gravida ante egestas.", imageUrl: "../src/assets/images/suvlogo.jpg", type: "luxury" })
      server.create("rig", { id: "11", hostId: "123", name: "Moksadeva", price: 80, description: "Donec at ante porttitor, ultricies ipsum sed, malesuada sem. Vestibulum sagittis facilisis dapibus. Nam mauris augue, accumsan non tellus vel, luctus maximus orci.", imageUrl: "../src/assets/images/suvlogo.jpg", type: "simple" })
      server.create("user", { id: "123", email: "test@example.com", password: "123456", name: "Bob" })
    },

    routes() {
        this.namespace = "api";
        this.logging = true;

        this.get("/rigs", (schema, request) => {
            return schema.rigs.all();
        });

        this.get("/rigs/:id", (schema, request) => {
            const id = request.params.id;
            return schema.rigs.find(id);
        });

        this.get("/host/rigs", (schema, request) => {
            // Temporarily hard code hostID
            return schema.rigs.where({ hostId: "123" });
        });

        this.get("/host/rigs/:id", (schema, request) => {
            const id = request.params.id;
            return schema.rigs.findBy({ id, hostId: "123" });
        });

        this.post("/login", (schema, request) => {
            /* poc only: do not save text credentials into db */
            const { email, password } = JSON.parse(request.requestBody)
            const foundUser = schema.users.findBy({ email, password })
            if (!foundUser) {
                return new Response(401, {}, { message: "No user with those credentials found!" })
            }

            /* poc: send token back to user (do not do this in production) */
            foundUser.password = undefined
            return {
                user: foundUser,
                token: "Token testing"
            }
        });
    }
})