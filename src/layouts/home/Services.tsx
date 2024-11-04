import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Heart, Brain, Activity, Users, Calendar, ArrowRight, Phone, Mail, MapPin, Check } from "lucide-react"

const services = [
  {
    icon: <Heart />,
    title: "Masaje de descarga",
    description: "Masaje de 30 minutos.",
    pricing: 350,
  },
  {
    icon: <Brain />,
    title: "Masaje reductivo (linfatico)",
    description: "",
    pricing: 400,
  },
  {
    icon: <Users />,
    title: "Ajuste quieropractico",
    description: "Ajuste de columna.",
    pricing: 150,
  },
  {
    icon: <Activity />,
    title: "Plan de entrenamiento",
    description: "Optimización del rendimiento y recuperación para atletas.",
    pricing: 500,
  },
  { icon: <Calendar />, title: "Ajuste quiropractico de cuerpo completo", description: "", pricing: 400 },
];

const technologies = [
  {
    title: "Resonancia Magnética de Alta Resolución",
    description: "Imágenes detalladas para diagnósticos precisos"
  },
  {
    title: "Tomografía Computarizada 4D",
    description: "Visualización avanzada en tiempo real"
  },
  {
    title: "Sistemas de Monitoreo Cardíaco en Tiempo Real",
    description: "Seguimiento continuo y alertas inmediatas"
  },
  {
    title: "Plataforma de Telemedicina Integrada",
    description: "Atención médica remota de calidad"
  },
  {
    title: "Análisis Genético Personalizado",
    description: "Medicina de precisión basada en tu ADN"
  }
];

export default function ClinicaSaludIntegral() {
  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-grow">
        <section className="bg-gradient-to-b from-blue-500 to-cyan-500 text-white">
          <div>
            <div className="flex flex-col md:flex-row items-center lg:pl-8 max-sm:p-8">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h2 className="text-5xl md:text-6wxl font-bold mb-6 title">Fisioterapeuta en Monterrey</h2>
                <p className="text-xl mb-8">Encuentranos en Monterrey o solicita un servicio de fisioterapia a domicilio y recupera tu movilidad y estabilidad.</p>
              </div>
              <img src="/images/1.jpg" className="md:w-1/2 w-full max-h-[40rem] object-cover" alt="Tecnología médica avanzada" />
            </div>
          </div>
        </section>
        <section className="flex flex-col md:flex-row items-center max-sm:p-8 bg-neutral-100">
          <img src="/images/1.jpg" className="md:w-1/3 w-full max-h-[60rem] object-cover" alt="Tecnología médica avanzada" />
          <div className=" w-2/3">


            <div id="servicios" className="">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto text-center mb-16">
                  <h2 className="text-4xl font-bold mb-4 text-gray-800 title">
                    Recupera tu movilidad y tu salud
                  </h2>
                  <p className="text-gray-600">
                    Brindamos atención médica especializada con los más altos estándares de calidad
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className=""
                    >

                      {/* Content */}
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-900">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {service.description}
                        </p>
                        <span className="text-xl font-semibold text-gray-800 group-hover:text-gray-900">
                          ${service.pricing}
                        </span>
                      </div>

                      {/* Call to action */}
                      <div className="mt-6 flex items-center text-primary font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <span className="mr-2">Más información</span>
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
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
                { name: "Laura S.", comment: "La atención en Chema es excepcional. Los médicos realmente se preocupan por tu bienestar integral." },
                { name: "Miguel R.", comment: "Gracias a la tecnología avanzada, pudieron diagnosticar mi condición rápidamente. ¡Estoy muy agradecido!" },
                { name: "Isabel T.", comment: "El enfoque holístico de Chema ha transformado mi salud. Me siento mejor que nunca." },
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
