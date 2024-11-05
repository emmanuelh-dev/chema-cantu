import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Heart, BrainCog, Users, Activity, CalendarDays, ArrowRight } from "lucide-react";

const services = [
  {
    icon: <Heart />,
    title: "Masaje de descarga",
    description: "Sesión de masaje de 30 minutos para aliviar la tensión muscular.",
    pricing: 350,
  },
  {
    icon: <BrainCog />,
    title: "Masaje reductivo (linfático)",
    description: "Masaje linfático para reducir retención de líquidos y mejorar la circulación.",
    pricing: 400,
  },
  {
    icon: <Users />,
    title: "Ajuste quiropráctico",
    description: "Ajuste especializado para la alineación de la columna.",
    pricing: 150,
  },
  {
    icon: <Activity />,
    title: "Plan de entrenamiento",
    description: "Programa de entrenamiento personalizado para optimizar rendimiento y recuperación.",
    pricing: 500,
  },
  {
    icon: <CalendarDays />,
    title: "Ajuste quiropráctico de cuerpo completo",
    description: "Ajuste quiropráctico integral para todo el cuerpo.",
    pricing: 400,
  },
];

export default function ClinicaSaludIntegral() {
  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-grow">

        <section className="bg-gradient-to-b from-blue-500 to-cyan-500 text-black">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="md:w-1/2 py-10 md:mb-0 pl-10">
              <h2 className="text-5xl md:text-6xl font-bold pb-6 title text-white">Fisioterapeuta en Monterrey</h2>
              <p className="text-xl mb-8 text-neutral-200">
                Recupera tu bienestar y vuelve a sentirte en control. En Monterrey y a domicilio, te ofrecemos atención personalizada para aliviar el dolor, mejorar tu movilidad y devolver la estabilidad a tu vida. ¡No esperes más para empezar tu recuperación!
              </p>
              <a href="/contact" className="px-6 py-3 mt-4 bg-white text-blue-500 font-bold rounded-lg shadow-md hover:bg-blue-50 transition">
                Agenda tu sesión hoy
              </a>
            </div>
            <img src="/images/2.jpg" className="md:w-1/2 w-full max-h-[40rem] object-cover" alt="Tecnología médica avanzada" />
          </div>
        </section>

        <section className="flex flex-col-reverse md:flex-row items-center max-sm:p-8 bg-neutral-100">
          <img src="/images/1.jpg" className="md:w-1/3 w-full max-h-[60rem] object-cover" alt="Tecnología médica avanzada" />
          <div className=" lg:w-2/3">
            <div id="servicios" className="">
              <div className="container mx-auto px-4 py-8">
                <div className="max-w-2xl mx-auto text-center mb-16">
                  <h2 className="text-4xl font-bold mb-4 text-gray-800 title">
                    Recupera tu movilidad y tu salud
                  </h2>
                  <p className="text-gray-600">
                    Brindamos atención médica especializada con los más altos estándares de calidad
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="border border-neutral-300 p-6 max-sm:aspect-square"
                    >

                      {/* Content */}
                      <div className="space-y-4 h-full flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-900 title">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {service.description}
                          </p></div>
                        <span className="text-2xl font-bold text-gray-800 group-hover:text-gray-900">
                          ${service.pricing}
                        </span>
                        <a href="/contact" className="mt-6 flex items-center">
                          <span className="mr-2">Contactar ahora</span>
                          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonios" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center title">Lo que dicen nuestros pacientes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Laura S.", comment: "Desde la primera sesión sentí un cambio. Chema y su equipo realmente se enfocan en cada detalle de mi recuperación. Me siento acompañada en cada paso." },
                { name: "Miguel R.", comment: "Nunca había recibido un diagnóstico tan claro y rápido, me dio confianza y me ayudó a entender mi tratamiento. ¡Muy recomendados!" },
                { name: "Isabel T.", comment: "Después de varias sesiones, me siento como nueva. El equipo de Chema tiene una forma única de tratar al paciente, y eso marca toda la diferencia. ¡Gracias por devolverme mi bienestar!" },
                { name: "Juan P.", comment: "Sufría de dolor crónico en la espalda y, después de trabajar con Chema, he recuperado mi calidad de vida. No creí que pudiera sentirme tan bien nuevamente." },
                { name: "Sofía G.", comment: "Cada sesión es única y personalizada. Me han enseñado tanto sobre cómo cuidar mi cuerpo y prevenir lesiones futuras. Son realmente expertos en lo que hacen." },
                { name: "Carlos M.", comment: "Buscaba un fisioterapeuta de confianza y lo encontré con Chema. La dedicación y el conocimiento del equipo me han ayudado a superar una lesión que pensé que sería permanente." },
              ].map((testimonial, index) => (
                <Card key={index} className="bg-white">
                  <CardContent className="pt-6">
                    <p className="italic mb-4">"{testimonial.comment}"</p>
                    <p className="font-semibold">{testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

      </main>

    </div>
  )
}
