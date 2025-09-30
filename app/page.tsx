import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, TrendingUp, Users, Zap, Lightbulb, Star, Award, Phone, MessageCircle } from 'lucide-react'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* Hero Section - Más impactante */}
      <section className="relative py-20 md:py-32 flex items-center justify-center overflow-hidden">
        {/* Background con efecto de luz */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lau-cam-yellow/20 via-transparent to-transparent"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lau-cam-yellow/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-lau-cam-blue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 bg-lau-cam-yellow/10 text-lau-cam-yellow px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Star className="h-4 w-4" />
              Líderes en Tecnología de Iluminación
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-4">
              <span className="bg-gradient-to-r from-lau-cam-yellow via-white to-lau-cam-blue bg-clip-text text-transparent">
                LAU-CAM
              </span>
            </h1>
            <p className="text-xl md:text-3xl text-slate-300 mb-6 max-w-4xl mx-auto leading-relaxed font-light">
              Iluminamos el futuro con <span className="text-lau-cam-yellow font-semibold">tecnología LED</span> y 
              soluciones inteligentes que transforman espacios
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link href="/projects">
              <Button size="lg" className="group bg-lau-cam-yellow text-slate-900 hover:bg-lau-cam-yellow/90 text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-lau-cam-yellow/25 transition-all duration-300">
                Ver Proyectos
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="https://wa.me/5493512576096" target='_blank'>
              <Button variant="outline" size="lg" className="text-black border-white/30 hover:bg-white/10 text-lg px-8 py-6 rounded-full backdrop-blur-sm">
                Contactar Ahora
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-lau-cam-yellow mb-2">500+</div>
              <div className="text-slate-400 text-sm">Proyectos Completados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-lau-cam-yellow mb-2">15+</div>
              <div className="text-slate-400 text-sm">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-lau-cam-yellow mb-2">100%</div>
              <div className="text-slate-400 text-sm">Eficiencia Energética</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-lau-cam-yellow mb-2">24/7</div>
              <div className="text-slate-400 text-sm">Soporte Técnico</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-lau-cam-yellow/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-lau-cam-yellow rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Proyectos Destacados */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
              Proyectos <span className="text-lau-cam-yellow">Destacados</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Descubre algunos de nuestros proyectos más innovadores que han transformado espacios 
              con iluminación
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Proyecto 1 */}
            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white dark:bg-slate-800">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://instagram.fcor10-3.fna.fbcdn.net/v/t39.30808-6/479967712_615970891183725_5263874893491816145_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4MTA4MC5zZHIuZjMwODA4LmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fcor10-3.fna.fbcdn.net&_nc_cat=109&_nc_oc=Q6cZ2QEiza9YLPT-8wgUt2vi4eJ1pjDfQSSm3-iWmWtQDWUOZKhrXXe8xO956Y1NBZJwYoE&_nc_ohc=RZAZQs17880Q7kNvwGVHwOt&_nc_gid=B36cJniVwY5HzQ_ktQbvvA&edm=AP4sbd4AAAAA&ccb=7-5&ig_cache_key=MzE3MTY1NDE4MDkzMDMwMjMwNQ%3D%3D.3-ccb7-5&oh=00_AfbgcCdVolEmvZSPkBPKQfxOn0hoM66DLHLwWp2kP8Stww&oe=68E0CE3F&_nc_sid=7a9f4b"
                  alt="Complejo Deportivo Elenia - Iluminación LED nocturna"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-green-500/10 text-green-500 px-3 py-1 rounded-full text-sm font-medium">Deportivo</span>
                  <span className="text-slate-500 text-sm">2024</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-green-500 transition-colors">
                  Complejo Deportivo Elenia
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Iluminación LED completa para complejo deportivo con 3 canchas de fútbol, 6 canchas de pádel, restaurante y estacionamiento
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Córdoba, Argentina</span>
                </div>
              </CardContent>
            </Card>

            {/* Proyecto 2 */}
            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white dark:bg-slate-800">
              <div className="relative h-64 bg-gradient-to-br from-lau-cam-blue/20 to-slate-600/20 flex items-center justify-center">
                <Zap className="h-24 w-24 text-lau-cam-blue group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-lau-cam-blue/10 text-lau-cam-blue px-3 py-1 rounded-full text-sm font-medium">Complejo</span>
                  <span className="text-slate-500 text-sm">2024</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-lau-cam-blue transition-colors">
                Complejo Jockey club
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Iluminación LED de alta potencia para nave industrial con control automático y sensores de movimiento
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Córdoba, Argentina</span>
                </div>
              </CardContent>
            </Card>

            {/* Proyecto 3 */}
            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white dark:bg-slate-800">
              <div className="relative h-64 bg-gradient-to-br from-lau-cam-yellow/20 to-orange-500/20 flex items-center justify-center">
                <Award className="h-24 w-24 text-lau-cam-yellow group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-orange-500/10 text-orange-500 px-3 py-1 rounded-full text-sm font-medium">Colegio</span>
                  <span className="text-slate-500 text-sm">2024</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors">
                Colegio La Salle
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Diseño de iluminación arquitectónica para vivienda con sistema domótico y control por zonas
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Córdoba, Argentina</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/projects">
              <Button size="lg" className="group bg-slate-900 text-white hover:bg-slate-800 text-lg px-8 py-6 rounded-full">
                Ver Todos los Proyectos
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestros <span className="text-lau-cam-yellow">Servicios</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Soluciones integrales de iluminación que combinan tecnología de vanguardia 
              con eficiencia energética y diseño innovador
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group text-center p-8 hover:shadow-2xl transition-all duration-500 border-lau-cam-yellow/20 hover:border-lau-cam-yellow/40 bg-gradient-to-br from-lau-cam-yellow/5 to-transparent">
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-lau-cam-yellow/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-10 w-10 text-lau-cam-yellow" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-lau-cam-yellow transition-colors">Eficiencia Energética</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Sistemas LED de última generación que reducen el consumo energético hasta un 80% 
                  manteniendo la máxima calidad de iluminación
                </p>
              </CardContent>
            </Card>
            
            <Card className="group text-center p-8 hover:shadow-2xl transition-all duration-500 border-lau-cam-blue/20 hover:border-lau-cam-blue/40 bg-gradient-to-br from-lau-cam-blue/5 to-transparent">
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-lau-cam-blue/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-10 w-10 text-lau-cam-blue" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-lau-cam-blue transition-colors">Tecnología LED</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Soluciones de iluminación inteligente con control automático, programable 
                  y conectividad IoT para máxima eficiencia
                </p>
              </CardContent>
            </Card>
            
            <Card className="group text-center p-8 hover:shadow-2xl transition-all duration-500 border-lau-cam-yellow/20 hover:border-lau-cam-yellow/40 bg-gradient-to-br from-lau-cam-yellow/5 to-transparent">
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-lau-cam-yellow/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-10 w-10 text-lau-cam-yellow" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-lau-cam-yellow transition-colors">Proyectos Personalizados</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Diseño e implementación de sistemas de iluminación únicos adaptados 
                  a cada espacio y necesidad específica
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lau-cam-yellow/10 via-transparent to-transparent"></div>
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-lau-cam-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-lau-cam-yellow/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            ¿Listo para <span className="text-lau-cam-yellow">Iluminar</span> tu Proyecto?
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Únete a más de 500 clientes satisfechos que han transformado sus espacios 
            con nuestra tecnología de iluminación de vanguardia
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
  <a href="https://wa.me/5493512576096" target="_blank" rel="noopener noreferrer">
    <Button size="lg" className="group bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300">
      <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
      WhatsApp Rápido
    </Button>
  </a>
</div>

          {/* Trust indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-lau-cam-yellow mb-2">500+</div>
              <div className="text-slate-400 text-sm">Proyectos Exitosos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-lau-cam-yellow mb-2">15+</div>
              <div className="text-slate-400 text-sm">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-lau-cam-yellow mb-2">100%</div>
              <div className="text-slate-400 text-sm">Clientes Satisfechos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-lau-cam-yellow mb-2">24/7</div>
              <div className="text-slate-400 text-sm">Soporte Técnico</div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="https://wa.me/5493512576096" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-110 flex items-center justify-center"
        >
          <MessageCircle className="h-6 w-6" />
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-slate-900 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            ¡Escríbenos por WhatsApp!
          </div>
        </a>
      </div>
    </div>
  )
}