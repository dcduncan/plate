import io.ktor.application.call
import io.ktor.application.install
import io.ktor.features.CORS
import io.ktor.http.ContentType
import io.ktor.response.respondText
import io.ktor.routing.get
import io.ktor.routing.routing
import io.ktor.server.engine.embeddedServer
import io.ktor.server.jetty.Jetty

fun main(args: Array<String>) {

    embeddedServer(Jetty, 8080) {
        install(CORS) {
            host("localhost:3000")
        }
        routing {
            get("/") {
                call.respondText(ContentType.Application.Json) { """{"response":"root of le plate"}""" }
            }
        }
    }.start(wait = true)

}