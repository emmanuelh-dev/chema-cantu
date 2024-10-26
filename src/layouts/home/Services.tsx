import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Heart, Brain, Activity, Users, Calendar, ArrowRight, Phone, Mail, MapPin, Check } from "lucide-react"

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
                <img src="/placeholder.svg?height=400&width=600" alt="Tecnología médica avanzada" className="rounded-lg shadow-2xl" />
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Nuestros Servicios Integrales</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: <Heart className="h-10 w-10 text-red-500" />, title: "Cardiología", description: "Cuidado avanzado del corazón con tecnología de última generación." },
                { icon: <Brain className="h-10 w-10 text-purple-500" />, title: "Neurología", description: "Diagnóstico y tratamiento preciso de trastornos neurológicos." },
                { icon: <Users className="h-10 w-10 text-blue-500" />, title: "Neumología", description: "Evaluación y terapia respiratoria con equipos de vanguardia." },
                { icon: <Activity className="h-10 w-10 text-green-500" />, title: "Medicina Deportiva", description: "Optimización del rendimiento y recuperación para atletas." },
                { icon: <Users className="h-10 w-10 text-yellow-500" />, title: "Terapia Familiar", description: "Apoyo psicológico integral para fortalecer lazos familiares." },
                { icon: <Calendar className="h-10 w-10 text-indigo-500" />, title: "Nutrición Personalizada", description: "Planes de alimentación adaptados a tu estilo de vida y metas." },
              ].map((service, index) => (
                <Card key={index} className="transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-4">
                      {service.icon}
                      <span>{service.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="tecnologia" className="py-20 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Tecnología de Vanguardia</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img src="/placeholder.svg?height=400&width=600" alt="Equipo médico avanzado" className="rounded-lg shadow-2xl" />
              </div>
              <div>
                <ul className="space-y-4">
                  {[
                    "Resonancia Magnética de Alta Resolución",
                    "Tomografía Computarizada 4D",
                    "Sistemas de Monitoreo Cardíaco en Tiempo Real",
                    "Plataforma de Telemedicina Integrada",
                    "Análisis Genético Personalizado",
                  ].map((tech, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <Check className="h-6 w-6 text-green-300" />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-8 bg-white text-purple-500 hover:bg-purple-100">
                  Conoce más sobre nuestra tecnología
                </Button>
              </div>
            </div>
          </div>
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
