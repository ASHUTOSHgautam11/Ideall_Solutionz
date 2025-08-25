import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

export function DeckingTiles({ onBack }: { onBack: () => void }) {
  const products = [
    {
      name: 'WPC Outdoor',
      description: 'Weather-resistant Wood Plastic Composite decking tiles for outdoor applications',
      features: ['Weather resistant', 'Anti-slip surface', 'UV protection', 'Easy installation', 'Maintenance-free'],
      applications: ['Balconies', 'Terraces', 'Pool areas', 'Rooftop decks', 'Garden pathways'],
      specifications: ['Size: 300x300mm, 600x600mm', 'Thickness: 22-25mm', 'Load capacity: 500kg/m²'],
      benefits: ['No rotting or splintering', 'Fade resistant colors', 'Interlocking system', 'Drainage channels']
    },
    {
      name: 'WPC Indoor',
      description: 'Premium Wood Plastic Composite tiles designed for indoor decorative applications',
      features: ['Scratch resistant', 'Water resistant', 'Easy cleaning', 'Natural wood appearance', 'Stable dimensions'],
      applications: ['Bathrooms', 'Kitchens', 'Saunas', 'Spa areas', 'Indoor pools'],
      specifications: ['Size: 300x300mm, 400x400mm', 'Thickness: 15-20mm', 'Density: 1.2g/cm³'],
      benefits: ['Comfortable underfoot', 'Slip resistant', 'Quick installation', 'Eco-friendly materials']
    }
  ];

  const features = [
    {
      title: 'Durability',
      description: 'Engineered to withstand extreme weather conditions and heavy foot traffic',
      icon: '🛡️'
    },
    {
      title: 'Sustainability',
      description: 'Made from recycled materials with minimal environmental impact',
      icon: '♻️'
    },
    {
      title: 'Versatility',
      description: 'Suitable for both residential and commercial applications',
      icon: '🔧'
    },
    {
      title: 'Aesthetics',
      description: 'Natural wood appearance without the maintenance requirements',
      icon: '✨'
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
          <h1 className="text-primary">Decking Tiles</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Premium WPC (Wood Plastic Composite) decking tiles combining the beauty of natural wood 
            with the durability of modern composite materials for both indoor and outdoor applications.
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
                  <h4 className="text-primary mb-2">Key Benefits</h4>
                  <ul className="space-y-1">
                    {product.benefits.map((benefit) => (
                      <li key={benefit} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-accent mr-2 mt-1">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Features */}
        <div className="bg-muted rounded-xl p-8">
          <h3 className="text-primary mb-6 text-center">Why Choose WPC Decking Tiles</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h4 className="text-primary mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Installation Guide */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Installation Process</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs text-primary">1</div>
                  <div>
                    <h4 className="text-primary text-sm">Surface Preparation</h4>
                    <p className="text-xs text-muted-foreground">Clean, level, and dry the installation surface</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs text-primary">2</div>
                  <div>
                    <h4 className="text-primary text-sm">Layout Planning</h4>
                    <p className="text-xs text-muted-foreground">Plan tile layout and starting position</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs text-primary">3</div>
                  <div>
                    <h4 className="text-primary text-sm">Tile Installation</h4>
                    <p className="text-xs text-muted-foreground">Connect interlocking tiles systematically</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs text-primary">4</div>
                  <div>
                    <h4 className="text-primary text-sm">Final Inspection</h4>
                    <p className="text-xs text-muted-foreground">Check alignment and secure connections</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Maintenance Guidelines</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-3">
                <div>
                  <h4 className="text-primary text-sm mb-2">Regular Cleaning</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Sweep or vacuum regularly</li>
                    <li>• Mop with mild soap solution</li>
                    <li>• Remove stains immediately</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-primary text-sm mb-2">Periodic Maintenance</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Check drainage channels</li>
                    <li>• Inspect interlocking connections</li>
                    <li>• Remove debris from gaps</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Color & Finish Options */}
        <div className="bg-primary/5 rounded-xl p-8">
          <h3 className="text-primary mb-6 text-center">Available Colors & Finishes</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="w-20 h-20 bg-gradient-to-br from-amber-700 to-amber-900 rounded-lg mx-auto mb-3"></div>
              <h4 className="text-primary mb-1">Teak</h4>
              <p className="text-xs text-muted-foreground">Classic golden brown with wood grain texture</p>
            </div>
            <div>
              <div className="w-20 h-20 bg-gradient-to-br from-stone-600 to-stone-800 rounded-lg mx-auto mb-3"></div>
              <h4 className="text-primary mb-1">Grey Oak</h4>
              <p className="text-xs text-muted-foreground">Contemporary grey with subtle wood pattern</p>
            </div>
            <div>
              <div className="w-20 h-20 bg-gradient-to-br from-red-800 to-red-900 rounded-lg mx-auto mb-3"></div>
              <h4 className="text-primary mb-1">Mahogany</h4>
              <p className="text-xs text-muted-foreground">Rich reddish-brown with natural grain</p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center space-y-6">
          <h3 className="text-primary">Transform Your Outdoor Spaces</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover how our WPC decking tiles can enhance your outdoor and indoor areas 
            with the perfect combination of beauty, durability, and low maintenance.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              View Color Samples
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
              Installation Guide
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}