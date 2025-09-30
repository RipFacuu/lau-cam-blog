'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, Phone, MapPin, MessageCircle, Clock, Send } from 'lucide-react'

export default function ContactPage() {
  const whatsappNumber = '5493512576096'
  
  const handleWhatsAppClick = (message?: string) => {
    const defaultMessage = message || '¡Hola! Me gustaría consultar sobre sus servicios de iluminación LED.'
    const encodedMessage = encodeURIComponent(defaultMessage)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  const quickMessages = [
    {
      title: 'Cotización de Proyecto',
      message: '¡Hola! Quisiera solicitar una cotización para un proyecto de iluminación LED.',
      icon: Send
    },
    {
      title: 'Consulta Técnica',
      message: '¡Hola! Tengo algunas consultas técnicas sobre productos de iluminación LED.',
      icon: MessageCircle
    },
    {
      title: 'Asesoramiento',
      message: '¡Hola! Me gustaría recibir asesoramiento sobre qué solución de iluminación es mejor para mi espacio.',
      icon: Phone
    }
  ]

  return (
    <div className="py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            Contacto
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes un proyecto de iluminación en mente? Contáctanos por WhatsApp 
            y recibe atención inmediata de nuestro equipo de expertos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* WhatsApp Quick Actions */}
          <div className="space-y-6">
            <Card className="border-2 border-green-500/20">
              <CardHeader className="bg-gradient-to-r from-green-500/10 to-green-600/10">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <MessageCircle className="h-6 w-6 text-green-600" />
                  Chatea con Nosotros
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="text-center">
                  <p className="text-muted-foreground mb-6">
                    Escríbenos directamente por WhatsApp para una respuesta inmediata. 
                    ¡Estamos aquí para ayudarte!
                  </p>
                  
                  <Button 
                    onClick={() => handleWhatsAppClick()}
                    size="lg"
                    className="w-full bg-green-500 hover:bg-green-600 text-white text-lg h-14"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Iniciar Chat por WhatsApp
                  </Button>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-semibold mb-4 text-center">O elige un mensaje rápido:</h3>
                  <div className="space-y-3">
                    {quickMessages.map((item, index) => {
                      const Icon = item.icon
                      return (
                        <button
                          key={index}
                          onClick={() => handleWhatsAppClick(item.message)}
                          className="w-full text-left p-4 rounded-lg border hover:border-green-500 hover:bg-green-50 transition-all group"
                        >
                          <div className="flex items-center gap-3">
                            <div className="bg-green-100 group-hover:bg-green-200 p-2 rounded-lg transition-colors">
                              <Icon className="h-5 w-5 text-green-600" />
                            </div>
                            <div>
                              <h4 className="font-medium group-hover:text-green-600 transition-colors">
                                {item.title}
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                Click para enviar este mensaje
                              </p>
                            </div>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-5 w-5 text-lau-cam-blue mt-1" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:lcaminos@lau-cam.com" className="text-muted-foreground hover:text-lau-cam-blue transition-colors">
                      lcaminos@lau-cam.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="h-5 w-5 text-lau-cam-blue mt-1" />
                  <div>
                    <h4 className="font-medium">Teléfono / WhatsApp</h4>
                    <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-green-600 transition-colors">
                      +54 9 3512 57-6096
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Click para abrir WhatsApp</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="h-5 w-5 text-lau-cam-blue mt-1" />
                  <div>
                    <h4 className="font-medium">Ubicación</h4>
                    <p className="text-muted-foreground">
                      Córdoba, Argentina<br />
                      Servicios en toda la región
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-lau-cam-yellow" />
                  Horarios de Atención
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Lunes - Viernes</span>
                    <span className="font-medium">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábados</span>
                    <span className="font-medium">10:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingos</span>
                    <span className="text-muted-foreground">Cerrado</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-sm text-green-800">
                    <strong>WhatsApp disponible 24/7</strong> - Te responderemos lo antes posible
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-lau-cam-blue/5 to-lau-cam-yellow/5">
              <CardHeader>
                <CardTitle>¿Por qué WhatsApp?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>Respuesta inmediata a tus consultas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>Envía fotos de tu espacio fácilmente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>Asesoramiento personalizado en tiempo real</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>Cotizaciones rápidas y sin compromiso</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}