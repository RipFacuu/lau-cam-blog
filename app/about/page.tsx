import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Target, Users, Lightbulb, Award, Zap, Leaf, ShieldCheck, TrendingUp } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre Nosotros | LAU-CAM - Expertos en Iluminación LED',
  description: 'Conoce más sobre LAU-CAM, líderes en tecnología de iluminación LED en Córdoba, Argentina. Más de 15 años transformando espacios con soluciones innovadoras y sostenibles.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'Sobre Nosotros | LAU-CAM - Expertos en Iluminación LED',
    description: 'Conoce más sobre LAU-CAM, líderes en tecnología de iluminación LED en Córdoba, Argentina. Más de 15 años transformando espacios con soluciones innovadoras y sostenibles.',
    url: 'https://www.lau-cam.com/about',
  },
}

export default function AboutPage() {
  return (
    <div className="space-y-16 py-8">
      {/* Hero */}
      <section className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
          Sobre Nosotros
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Somos líderes en tecnología de iluminación LED en Córdoba, Argentina, 
          con más de 15 años de experiencia transformando espacios con soluciones 
          innovadoras, eficientes y sostenibles
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Card className="p-8">
            <CardContent className="pt-6 space-y-4">
              <Target className="h-12 w-12 text-lau-cam-blue" />
              <h2 className="text-2xl font-bold">Nuestra Misión</h2>
              <p className="text-muted-foreground leading-relaxed">
                Proporcionar soluciones de iluminación LED de alta calidad que 
                transformen espacios, mejoren la eficiencia energética y contribuyan 
                al cuidado del medio ambiente, ofreciendo a nuestros clientes tecnología 
                de vanguardia con el mejor servicio personalizado.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8">
            <CardContent className="pt-6 space-y-4">
              <Lightbulb className="h-12 w-12 text-lau-cam-yellow" />
              <h2 className="text-2xl font-bold">Nuestra Visión</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ser la empresa referente en iluminación LED en Argentina, 
                liderando la transformación hacia espacios más eficientes y sostenibles, 
                e inspirando el cambio hacia un futuro consciente 
                con el medio ambiente.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nuestros Valores</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Los principios que iluminan cada proyecto y solución que entregamos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center space-y-4">
              <div className="bg-lau-cam-yellow/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-lau-cam-yellow" />
              </div>
              <h3 className="font-semibold">Excelencia</h3>
              <p className="text-sm text-muted-foreground">
                Productos certificados y de la más alta calidad con garantía
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-lau-cam-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Leaf className="h-8 w-8 text-lau-cam-blue" />
              </div>
              <h3 className="font-semibold">Sostenibilidad</h3>
              <p className="text-sm text-muted-foreground">
                Comprometidos con el cuidado del medio ambiente y la eficiencia energética
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-lau-cam-yellow/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Zap className="h-8 w-8 text-lau-cam-yellow" />
              </div>
              <h3 className="font-semibold">Innovación</h3>
              <p className="text-sm text-muted-foreground">
                Tecnología LED e iluminación inteligente para el futuro
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-lau-cam-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <ShieldCheck className="h-8 w-8 text-lau-cam-blue" />
              </div>
              <h3 className="font-semibold">Confianza</h3>
              <p className="text-sm text-muted-foreground">
                Más de 15 años de experiencia respaldando cada proyecto con profesionalismo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">¿Por Qué Elegirnos?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experiencia, calidad y compromiso en cada proyecto
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6">
            <CardContent className="pt-6 space-y-3">
              <div className="bg-lau-cam-blue/10 w-12 h-12 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-lau-cam-blue" />
              </div>
              <h3 className="text-xl font-semibold">Ahorro Energético</h3>
              <p className="text-muted-foreground">
                Reducción de hasta 80% en consumo energético comparado con iluminación tradicional
              </p>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardContent className="pt-6 space-y-3">
              <div className="bg-lau-cam-yellow/10 w-12 h-12 rounded-lg flex items-center justify-center">
                <Award className="h-6 w-6 text-lau-cam-yellow" />
              </div>
              <h3 className="text-xl font-semibold">Proyectos Personalizados</h3>
              <p className="text-muted-foreground">
                Diseñamos soluciones a medida para cada espacio y necesidad específica
              </p>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardContent className="pt-6 space-y-3">
              <div className="bg-lau-cam-blue/10 w-12 h-12 rounded-lg flex items-center justify-center">
                <ShieldCheck className="h-6 w-6 text-lau-cam-blue" />
              </div>
              <h3 className="text-xl font-semibold">Servicio Integral</h3>
              <p className="text-muted-foreground">
                Desde el diseño hasta la instalación y mantenimiento, te acompañamos en todo
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}