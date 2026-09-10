import bootstrap from "./app"
import env from "./env"

function start() {
    const app = bootstrap()

    try {
        app.listen({ port: env.PORT, host: "0.0.0.0" })
    } catch (error) {
        app.log.fatal(error);
        process.exit(1);
    }

}

start()