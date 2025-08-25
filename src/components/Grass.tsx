import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Grass({ onBack }: { onBack: () => void }) {
  const products = [
    {
      name: 'Sports Grass',
      description: 'Professional-grade artificial grass designed specifically for sports applications',
      features: ['FIFA certified options', 'Shock absorption', 'Weather resistant', 'High durability'],
      applications: ['Football fields', 'Tennis courts', 'Multi-sport facilities', 'Training grounds'],
      specifications: ['Pile height: 40-60mm', 'Stitch rate: 150-200/m', 'Drainage system included'],
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop'
    },
    {
      name: 'Artificial Grass',
      description: 'Premium synthetic grass for landscaping and decorative applications',
      features: ['Natural appearance', 'Low maintenance', 'UV resistant', 'Pet-friendly options'],
      applications: ['Residential gardens', 'Commercial landscaping', 'Rooftop gardens', 'Play areas'],
      specifications: ['Pile height: 25-40mm', 'Multiple color variations', 'Soft texture finish'],
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop'
    },
    {
      name: 'PE Turf',
      description: 'Polyethylene-based artificial turf offering excellent durability and comfort',
      features: ['Soft texture', 'Realistic look', 'Fade resistant', 'Easy installation'],
      applications: ['Residential lawns', 'Playground surfaces', 'Decorative areas', 'Indoor applications'],
      specifications: ['PE fiber construction', 'Density: 16,800 stitches/m²', 'Backing: PP+Net+SBR'],
      image: 'https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=600&h=400&fit=crop'
    },

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
          <h1 className="text-primary">Artificial & Sports Grass</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            High-quality artificial grass solutions for sports, landscaping, and specialized applications. 
            Sourced from certified manufacturers with proven performance records.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {products.map((product) => (
            <Card key={product.name} className="h-full">
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
          ))}
        </div>

        {/* Quality Assurance Section */}
        <div className="bg-muted rounded-xl p-8">
          <h3 className="text-primary mb-6 text-center">Quality Standards & Certifications</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <h4 className="text-primary mb-2">Performance Testing</h4>
              <p className="text-sm text-muted-foreground">
                Rigorous testing for durability, UV resistance, and performance standards
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-accent rounded-full"></div>
              </div>
              <h4 className="text-primary mb-2">Safety Compliance</h4>
              <p className="text-sm text-muted-foreground">
                Certified for safety standards including heavy metals and environmental impact
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-secondary rounded-full"></div>
              </div>
              <h4 className="text-primary mb-2">Installation Support</h4>
              <p className="text-sm text-muted-foreground">
                Complete installation guidance and technical support services
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center space-y-6">
          <h3 className="text-primary">Ready to Discuss Your Grass Requirements?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Contact our artificial grass specialists for detailed product specifications, 
            samples, and customized solutions for your project.
          </p>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Request Product Samples
          </Button>
        </div>
      </div>
    </div>
  );
}