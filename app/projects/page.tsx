'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { 
  Search, 
  Filter, 
  Lightbulb, 
  Zap, 
  Award, 
  Building, 
  Home, 
  Factory,
  Calendar,
  MapPin,
  ArrowRight,
  Eye,
  ExternalLink
} from 'lucide-react'

const projects = [
  {
    id: 1,
    title: "Complejo Deportivo Nocturno - Elenia",
    category: "Deportivo",
    location: "Córdoba, Argentina",
    date: "2024",
    image: "https://instagram.fcor10-3.fna.fbcdn.net/v/t39.30808-6/479967712_615970891183725_5263874893491816145_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwODB4MTA4MC5zZHIuZjMwODA4LmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=instagram.fcor10-3.fna.fbcdn.net&_nc_cat=109&_nc_oc=Q6cZ2QEiza9YLPT-8wgUt2vi4eJ1pjDfQSSm3-iWmWtQDWUOZKhrXXe8xO956Y1NBZJwYoE&_nc_ohc=RZAZQs17880Q7kNvwGVHwOt&_nc_gid=B36cJniVwY5HzQ_ktQbvvA&edm=AP4sbd4AAAAA&ccb=7-5&ig_cache_key=MzE3MTY1NDE4MDkzMDMwMjMwNQ%3D%3D.3-ccb7-5&oh=00_AfbgcCdVolEmvZSPkBPKQfxOn0hoM66DLHLwWp2kP8Stww&oe=68E0CE3F&_nc_sid=7a9f4b",
    description: "Instalación completa de iluminación LED para complejo deportivo Elenia con 3 canchas de fútbol de césped artificial, 6 canchas de pádel, restaurante y amplias zonas de estacionamiento. Sistema de iluminación nocturna que permite actividades deportivas las 24 horas.",
    features: ["3 canchas de fútbol iluminadas", "6 canchas de pádel con iluminación LED", "Restaurante y área de servicios", "Estacionamiento LED completo", "Columnas metálicas especializadas", "Control de iluminación por zonas"],
    icon: Award,
    color: "bg-green-500/10 text-green-500 border-green-500/20"
  },
  {
    id: 2,
    title: "Iluminación LED Industrial - Proyecto Fábrica",
    category: "Industrial",
    location: "Madrid, España",
    date: "2024",
    image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Instalación completa de iluminación LED de alta potencia para nave industrial con control automático y sensores de movimiento",
    features: ["LED de alta potencia", "Control automático", "Sensores de movimiento", "Ahorro energético 80%"],
    icon: Factory,
    color: "bg-lau-cam-blue/10 text-lau-cam-blue border-lau-cam-blue/20"
  },
  {
    id: 3,
    title: "Proyecto Residencial - Casa Moderna",
    category: "Residencial",
    location: "Barcelona, España",
    date: "2024",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Diseño de iluminación arquitectónica para vivienda unifamiliar con sistema domótico y control por zonas",
    features: ["Iluminación arquitectónica", "Control domótico", "Diseño personalizado", "Eficiencia energética"],
    icon: Home,
    color: "bg-orange-500/10 text-orange-500 border-orange-500/20"
  },
  {
    id: 4,
    title: "Iluminación Comercial - Tienda Retail",
    category: "Comercial",
    location: "Valencia, España",
    date: "2024",
    image: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Sistema de iluminación LED para espacio comercial con control de temperatura de color y regulación de intensidad",
    features: ["Temperatura de color regulable", "Control de intensidad", "Diseño comercial", "Ahorro energético 70%"],
    icon: Building,
    color: "bg-lau-cam-yellow/10 text-lau-cam-yellow border-lau-cam-yellow/20"
  },
  {
    id: 5,
    title: "Proyecto LED Exterior - Iluminación Pública",
    category: "Exterior",
    location: "Sevilla, España",
    date: "2023",
    image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Instalación de iluminación LED para vía pública con sistema de control centralizado y sensores de luz natural",
    features: ["LED exterior resistente", "Control centralizado", "Sensores de luz natural", "Mantenimiento reducido"],
    icon: Award,
    color: "bg-green-500/10 text-green-500 border-green-500/20"
  },
  {
    id: 6,
    title: "Oficinas Corporativas - Edificio de Negocios",
    category: "Oficinas",
    location: "Bilbao, España",
    date: "2023",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Iluminación LED inteligente para oficinas con sensores de presencia, control de brillo automático y diseño ergonómico",
    features: ["Sensores de presencia", "Control de brillo automático", "Diseño ergonómico", "Confort visual"],
    icon: Building,
    color: "bg-purple-500/10 text-purple-500 border-purple-500/20"
  },
  {
    id: 7,
    title: "Hotel Boutique - Iluminación Atmosférica",
    category: "Hotelería",
    location: "Málaga, España",
    date: "2023",
    image: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Diseño de iluminación atmosférica para hotel con efectos de color dinámicos, control por zonas y programación horaria",
    features: ["Efectos de color dinámicos", "Control por zonas", "Programación horaria", "Atmósfera personalizable"],
    icon: Award,
    color: "bg-pink-500/10 text-pink-500 border-pink-500/20"
  },
  {
    id: 8,
    title: "Proyecto LED Industrial - Almacén Logístico",
    category: "Industrial",
    location: "Zaragoza, España",
    date: "2023",
    image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Iluminación LED de alta eficiencia para almacén logístico con sistema de control inteligente y sensores de movimiento",
    features: ["LED de alta eficiencia", "Control inteligente", "Sensores de movimiento", "Ahorro energético 85%"],
    icon: Factory,
    color: "bg-lau-cam-blue/10 text-lau-cam-blue border-lau-cam-blue/20"
  },
  {
    id: 9,
    title: "Villa de Lujo - Iluminación Arquitectónica",
    category: "Residencial",
    location: "Marbella, España",
    date: "2023",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Proyecto de iluminación arquitectónica para villa de lujo con sistema domótico completo y efectos especiales",
    features: ["Iluminación arquitectónica", "Sistema domótico completo", "Efectos especiales", "Diseño personalizado"],
    icon: Home,
    color: "bg-orange-500/10 text-orange-500 border-orange-500/20"
  }
]

const categories = ["Todos", "Deportivo", "Comercial", "Industrial", "Residencial", "Exterior", "Oficinas", "Hotelería"]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === "Todos" || project.category === selectedCategory
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lau-cam-yellow/10 via-transparent to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lau-cam-yellow/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-lau-cam-blue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Nuestros <span className="text-lau-cam-yellow">Proyectos</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Descubre más de 500 proyectos de iluminación que han transformado espacios 
            con tecnología LED y diseño innovador
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => {
              const IconComponent = project.icon
              return (
                <Card 
                  key={project.id} 
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white dark:bg-slate-800 card-hover"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-64 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center">
                    <IconComponent className="h-24 w-24 text-slate-400 group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    
                    {/* Overlay with project info */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="text-white">
                        <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                        <p className="text-sm text-slate-200 line-clamp-2">{project.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className={`${project.color} border`}>
                        {project.category}
                      </Badge>
                      <span className="text-slate-500 text-sm">{project.date}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-lau-cam-yellow transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                      <MapPin className="h-4 w-4" />
                      <span>{project.location}</span>
                    </div>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.features.slice(0, 2).map((feature, idx) => (
                        <span 
                          key={idx}
                          className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                      {project.features.length > 2 && (
                        <span className="text-xs text-slate-500">
                          +{project.features.length - 2} más
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Button variant="outline" size="sm" className="group">
                        <Eye className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                        Ver Detalles
                      </Button>
                      <Button variant="ghost" size="sm" className="group">
                        <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-12 w-12 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-600 dark:text-slate-300 mb-2">
                No se encontraron proyectos
              </h3>
              <p className="text-slate-500 mb-6">
                Intenta ajustar los filtros o términos de búsqueda
              </p>
              <Button onClick={() => { setSearchTerm(""); setSelectedCategory("Todos"); }}>
                Limpiar Filtros
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-lau-cam-blue to-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Tienes un Proyecto en Mente?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Cuéntanos sobre tu proyecto y te ayudaremos a crear la solución de iluminación perfecta
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-lau-cam-yellow text-slate-900 hover:bg-lau-cam-yellow/90">
              Solicitar Consulta
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white/30 hover:bg-white/10">
              Ver Portfolio Completo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
