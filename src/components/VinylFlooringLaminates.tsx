import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

export function VinylFlooringLaminates({ onBack }: { onBack: () => void }) {
  const products = [
    {
      name: 'Vinyl Rolls',
      description: 'Wide-format vinyl flooring rolls for seamless large area installations',
      features: ['Seamless installation', 'Water resistant', 'Easy maintenance', 'Commercial grade'],
      applications: ['Healthcare facilities', 'Retail spaces', 'Educational institutions', 'Hospitality'],
      specifications: ['Width: 2-4 meters', 'Thickness: 2-4mm', 'Wear layer: 0.3-0.7mm']
    },
    {
      name: 'LVT (Luxury Vinyl Tile)',
      description: 'Premium luxury vinyl tiles with realistic wood and stone appearances',
      features: ['Realistic textures', 'Click-lock system', 'Waterproof core', 'Scratch resistant'],
      applications: ['Residential interiors', 'Boutique retail', 'Executive offices', 'Showrooms'],
      specifications: ['Size: 150x900mm - 230x1220mm', 'Thickness: 4-8mm', 'Wear layer: 0.3-0.7mm']
    },
    {
      name: 'SPC (Stone Plastic Composite)',
      description: 'Rigid core vinyl flooring with enhanced stability and durability',
      features: ['100% waterproof', 'Dimensional stability', 'Heavy-duty core', 'Easy installation'],
      applications: ['Basements', 'Bathrooms', 'Commercial kitchens', 'High-traffic areas'],
      specifications: ['Thickness: 4-8mm', 'SPC core: 3.5-5mm', 'Density: 2.0-2.1g/cm³']
    },
    {
      name: 'Laminates',
      description: 'High-pressure laminate flooring with authentic wood appearances',
      features: ['Natural wood textures', 'AC rating system', 'Easy click installation', 'Fade resistant'],
      applications: ['Residential homes', 'Offices', 'Retail environments', 'Hospitality spaces'],
      specifications: ['Thickness: 7-12mm', 'AC3-AC5 ratings', 'HDF core construction']
    },
    {
      name: 'Woven Vinyl',
      description: 'Textile-backed vinyl flooring combining comfort with durability',
      features: ['Soft underfoot', 'Sound absorption', 'Dimensional stability', 'Design flexibility'],
      applications: ['Healthcare', 'Senior living', 'Educational facilities', 'Hospitality'],
      specifications: ['Total thickness: 2.5-3.2mm', 'Textile backing', 'Enhanced comfort']
    }
  ];

  const advantages = [
    {
      title: 'Water Resistance',
      description: 'Superior moisture protection suitable for wet areas and high-humidity environments',
      icon: '💧'
    },
    {
      title: 'Easy Maintenance',
      description: 'Simple cleaning requirements with excellent stain and spill resistance',
      icon: '🧽'
    },
    {
      title: 'Design Versatility',
      description: 'Extensive range of colors, patterns, and textures to match any design aesthetic',
      icon: '🎨'
    },
    {
      title: 'Installation Speed',
      description: 'Quick and efficient installation with minimal disruption to operations',
      icon: '⚡'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Button variant="ghost" onClick={onBack} className="text-primary">
          ← Back to Product Categories
        </Button>
      </div>
      
      <div className="space-y-6">
        <div className="text-center space-y-4">
          <h1 className="text-primary">Vinyl Flooring & Laminates</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Comprehensive range of vinyl and laminate flooring solutions from leading global manufacturers, 
            offering durability, style, and performance for diverse applications.
          </p>
        </div>

        {/* Product Grid */}
        <div className="space-y-8">
          {products.map((product, index) => (
            <div key={product.name} className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <Card className={`h-full ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <CardHeader>
                  <CardTitle className="text-primary">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-primary mb-2">Key Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature) => (
                        <Badge key={feature} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-primary mb-2">Applications</h4>
                    <ul className="space-y-1">
                      {product.applications.map((app) => (
                        <li key={app} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-primary mb-2">Specifications</h4>
                    <ul className="space-y-1">
                      {product.specifications.map((spec) => (
                        <li key={spec} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-secondary mr-2 mt-1">▪</span>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 bg-background/90 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <div className="w-10 h-10 bg-primary rounded-full"></div>
                    </div>
                    <h3 className="text-primary mb-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">Premium Quality Sourcing</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Advantages Section */}
        <div className="bg-muted rounded-xl p-8">
          <h3 className="text-primary mb-6 text-center">Why Choose Our Vinyl & Laminate Solutions</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage) => (
              <div key={advantage.title} className="text-center">
                <div className="text-3xl mb-4">{advantage.icon}</div>
                <h4 className="text-primary mb-2">{advantage.title}</h4>
                <p className="text-sm text-muted-foreground">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Support */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Technical Specifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <h4 className="text-primary">Performance Standards</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• EN 649 Commercial vinyl classification</li>
                  <li>• ASTM F1700 resilient floor covering standards</li>
                  <li>• AC rating system for laminate durability</li>
                  <li>• FloorScore certified for indoor air quality</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Installation Support</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <h4 className="text-primary">Services Provided</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Technical installation guidelines</li>
                  <li>• Subfloor preparation specifications</li>
                  <li>• Adhesive and tools recommendations</li>
                  <li>• Project consultation and support</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact CTA */}
        <div className="text-center space-y-6">
          <h3 className="text-primary">Explore Our Vinyl & Laminate Collection</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Connect with our flooring specialists to discuss your project requirements, 
            view samples, and receive detailed technical specifications.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Request Sample Kit
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
              Technical Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}