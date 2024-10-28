import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Heart, Brain, Activity, Users, Calendar, ArrowRight, Phone, Mail, MapPin, Check } from "lucide-react"

const services = [
  {
    icon: <Heart />,
    title: "Cardiología",
    description: "Cuidado avanzado del corazón con tecnología de última generación.",
    color: "text-red-500",
    borderColor: "group-hover:border-red-200",
    shadowColor: "group-hover:shadow-red-100",
    bgGradient: "group-hover:bg-gradient-to-br from-red-50 to-white"
  },
  {
    icon: <Brain />,
    title: "Neurología",
    description: "Diagnóstico y tratamiento preciso de trastornos neurológicos.",
    color: "text-purple-500",
    borderColor: "group-hover:border-purple-200",
    shadowColor: "group-hover:shadow-purple-100",
    bgGradient: "group-hover:bg-gradient-to-br from-purple-50 to-white"
  },
  {
    icon: <Users />,
    title: "Neumología",
    description: "Evaluación y terapia respiratoria con equipos de vanguardia.",
    color: "text-blue-500",
    borderColor: "group-hover:border-blue-200",
    shadowColor: "group-hover:shadow-blue-100",
    bgGradient: "group-hover:bg-gradient-to-br from-blue-50 to-white"
  },
  {
    icon: <Activity />,
    title: "Medicina Deportiva",
    description: "Optimización del rendimiento y recuperación para atletas.",
    color: "text-green-500",
    borderColor: "group-hover:border-green-200",
    shadowColor: "group-hover:shadow-green-100",
    bgGradient: "group-hover:bg-gradient-to-br from-green-50 to-white"
  },
  {
    icon: <Users />,
    title: "Terapia Familiar",
    description: "Apoyo psicológico integral para fortalecer lazos familiares.",
    color: "text-yellow-500",
    borderColor: "group-hover:border-yellow-200",
    shadowColor: "group-hover:shadow-yellow-100",
    bgGradient: "group-hover:bg-gradient-to-br from-yellow-50 to-white"
  },
  {
    icon: <Calendar />,
    title: "Nutrición Personalizada",
    description: "Planes de alimentación adaptados a tu estilo de vida y metas.",
    color: "text-indigo-500",
    borderColor: "group-hover:border-indigo-200",
    shadowColor: "group-hover:shadow-indigo-100",
    bgGradient: "group-hover:bg-gradient-to-br from-indigo-50 to-white"
  },
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
        <section className="bg-gradient-to-b from-blue-500 to-cyan-500 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 title">Revoluciona tu salud con VitaNova</h2>
                <p className="text-xl mb-8">Descubre un nuevo nivel de atención médica integral. Combinamos tecnología de vanguardia con un enfoque holístico para tu bienestar.</p>
                <Button size="lg" className="bg-white text-blue-500 hover:bg-blue-100">
                  Agenda tu consulta <ArrowRight className="ml-2" />
                </Button>
              </div>
              <div className="md:w-1/2">
                <img src="/images/treatment.jpg" alt="Tecnología médica avanzada" className="rounded-lg shadow-2xl" />
              </div>
            </div>
          </div>
        </section>
        <section id="servicios" className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">
                Nuestros Servicios Integrales
              </h2>
              <p className="text-gray-600">
                Brindamos atención médica especializada con los más altos estándares de calidad
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`group relative bg-white p-6 rounded-xl border border-gray-100
                transition-all duration-300 ease-in-out transform hover:-translate-y-1
                ${service.borderColor} ${service.shadowColor} ${service.bgGradient}
                hover:shadow-xl cursor-pointer`}
                >
                  {/* Icon Container */}
                  {/* <div className={`${service.color} mb-6 transition-transform duration-300 group-hover:scale-110`}>
                {React.cloneElement(service.icon, {
                  size: 40,
                  strokeWidth: 1.5,
                  className: "transition-all duration-300 ease-in-out"
                })}
              </div> */}

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Call to action */}
                  <div className="mt-6 flex items-center text-primary font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="mr-2">Más información</span>
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 rounded-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100 pointer-events-none">
                    <div className="absolute inset-0 transform rotate-3">
                      <div className={`w-full h-full rounded-xl ${service.borderColor} border-2 opacity-10`}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="tecnologia" className="relative py-24 overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600">
            <div className="absolute inset-0 bg-[url('/api/placeholder/800/600')] mix-blend-overlay opacity-10"></div>
          </div>

          {/* Content */}
          <div className="relative container mx-auto px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-white">
                Tecnología de Vanguardia
              </h2>
              <p className="text-purple-100">
                Equipamiento médico de última generación para brindar la mejor atención
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image Column */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl opacity-75 blur-lg group-hover:opacity-100 transition duration-300"></div>
                <div className="relative">
                  <img
                    src="/images/ligas.jpg"
                    alt="Equipo médico avanzado"
                    className=""
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent rounded-lg"></div>
                </div>
              </div>

              {/* Content Column */}
              <div className="space-y-8">
                <ul className="space-y-6">
                  {technologies.map((tech, index) => (
                    <li
                      key={index}
                      className="group flex items-start space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition duration-300"
                    >
                      <div className="flex-shrink-0 p-2 bg-green-400 bg-opacity-20 rounded-full group-hover:bg-opacity-30 transition duration-300">
                        <Check className="h-5 w-5 text-green-300" />
                      </div>
                      <div>
                        <h3 className="font-medium text-white mb-1">{tech.title}</h3>
                        <p className="text-purple-100 text-sm">{tech.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Custom Button */}
                <button className="group relative inline-flex items-center px-6 py-3 bg-white rounded-lg font-medium text-purple-600 hover:bg-purple-50 transition duration-300">
                  <span>Conoce más sobre nuestra tecnología</span>
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition duration-300" />
                  <div className="absolute inset-0 rounded-lg border-2 border-white opacity-20 group-hover:scale-105 transition duration-300"></div>
                </button>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-purple-900/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
        </section>

        <section id="testimonios" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Lo que dicen nuestros pacientes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Laura S.", comment: "La atención en VitaNova es excepcional. Los médicos realmente se preocupan por tu bienestar integral." },
                { name: "Miguel R.", comment: "Gracias a la tecnología avanzada, pudieron diagnosticar mi condición rápidamente. ¡Estoy muy agradecido!" },
                { name: "Isabel T.", comment: "El enfoque holístico de VitaNova ha transformado mi salud. Me siento mejor que nunca." },
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
