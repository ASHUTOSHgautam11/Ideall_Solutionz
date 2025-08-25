import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

export function EngineeredSolidWood({ onBack }: { onBack: () => void }) {
  const products = [
    {
      name: 'Engineered Wood',
      description: 'Multi-layer wood flooring with enhanced stability and moisture resistance',
      features: ['Dimensional stability', 'Multiple installation methods', 'Real wood veneer', 'Refinishable surface'],
      applications: ['Residential homes', 'Commercial offices', 'Hospitality venues', 'Retail spaces'],
      specifications: ['Total thickness: 12-20mm', 'Top layer: 2-6mm', 'Plywood/HDF core'],
      species: ['Oak', 'Walnut', 'Maple', 'Cherry', 'Ash', 'Hickory']
    },
    {
      name: 'Solid Wood',
      description: 'Traditional solid hardwood flooring offering timeless beauty and longevity',
      features: ['100% solid wood', 'Multiple refinishing cycles', 'Natural variations', 'Long-term value'],
      applications: ['Premium residences', 'Historic renovations', 'Executive offices', 'Luxury retail'],
      specifications: ['Thickness: 18-22mm', 'Width: 70-180mm', 'Length: 300-2200mm'],
      species: ['Oak', 'Teak', 'Mahogany', 'Walnut', 'Pine', 'Bamboo']
    }
  ];

  const finishOptions = [
    { name: 'Natural Oil', description: 'Penetrating oil finish that enhances wood grain' },
    { name: 'UV Lacquer', description: 'Durable factory-applied protective coating' },
    { name: 'Brushed', description: 'Textured surface highlighting wood character' },
    { name: 'Smoked', description: 'Heat-treated for distinctive color variations' },
    { name: 'Distressed', description: 'Aged appearance with character marks' },
    { name: 'Hand-scraped', description: 'Artisanal texture with traditional appeal' }
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
          <h1 className="text-primary">Engineered & Solid Wood</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Premium wood flooring solutions sourced from sustainable forests and leading manufacturers worldwide, 
            offering natural beauty and exceptional quality for discerning projects.
          </p>
        </div>

        {/* Product Comparison */}
        <div className="grid lg:grid-cols-2 gap-8">
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

                <div>
                  <h4 className="text-primary mb-2">Available Species</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.species.map((species) => (
                      <Badge key={species} variant="outline" className="text-xs">
                        {species}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Finish Options */}
        <div className="bg-muted rounded-xl p-8">
          <h3 className="text-primary mb-6 text-center">Available Finishes & Treatments</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {finishOptions.map((finish) => (
              <div key={finish.name} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-primary rounded"></div>
                </div>
                <h4 className="text-primary mb-2">{finish.name}</h4>
                <p className="text-sm text-muted-foreground">{finish.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quality & Sustainability */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Quality Standards</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-1">✓</span>
                  Grade selection and quality control
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-1">✓</span>
                  Moisture content verification
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-1">✓</span>
                  Dimensional accuracy testing
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-1">✓</span>
                  Finish durability assessment
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-1">✓</span>
                  Installation system verification
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Sustainability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-1">🌱</span>
                  FSC certified sustainable sources
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-1">🌱</span>
                  PEFC chain of custody verified
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-1">🌱</span>
                  Low VOC emissions certified
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-1">🌱</span>
                  Responsible harvesting practices
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-1">🌱</span>
                  Carbon footprint documentation
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Installation Services */}
        <div className="bg-primary/5 rounded-xl p-8">
          <h3 className="text-primary mb-6 text-center">Complete Installation Support</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary text-xl">1</span>
              </div>
              <h4 className="text-primary mb-2">Site Assessment</h4>
              <p className="text-sm text-muted-foreground">
                Subfloor evaluation and environmental condition analysis
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary text-xl">2</span>
              </div>
              <h4 className="text-primary mb-2">Preparation</h4>
              <p className="text-sm text-muted-foreground">
                Subfloor preparation and moisture barrier installation
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary text-xl">3</span>
              </div>
              <h4 className="text-primary mb-2">Installation</h4>
              <p className="text-sm text-muted-foreground">
                Professional installation by certified technicians
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary text-xl">4</span>
              </div>
              <h4 className="text-primary mb-2">Finishing</h4>
              <p className="text-sm text-muted-foreground">
                Final sanding, finishing, and quality inspection
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center space-y-6">
          <h3 className="text-primary">Discover Our Wood Flooring Collection</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Contact our wood flooring specialists to explore our extensive range of species, 
            finishes, and custom options for your next project.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Browse Wood Species
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
              Request Samples
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}