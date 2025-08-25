import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function ModernWeaveCollection({ onBack }: { onBack: () => void }) {
  const product = {
    name: 'Modern Weave Series',
    code: 'MW-2405',
    description: 'Innovative woven nylon carpet tiles combining traditional craftsmanship with contemporary design aesthetics',
    mainImage: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop',
    features: [
      'Innovative weave pattern',
      'Dimensional texture effects',
      'Color-coordinated backing',
      'Precision edge technology',
      'Contemporary aesthetics',
      'Artisan-inspired design'
    ],
    specifications: {
      construction: 'Innovative woven pattern',
      fiberContent: '100% Designer Nylon 6,6',
      pileHeight: '7.5mm',
      tileSize: '50cm x 50cm',
      totalThickness: '11.0mm',
      tuftsPerSqm: '190,000',
      backing: 'Designer comfort composite'
    },
    performance: {
      wearRating: 'Class 32 - General Commercial',
      lightFastness: 'ISO 105-B02 Grade 7',
      staticGeneration: '< 1.5kV (AATCC 134)',
      flammability: 'Class 1 (BS EN 13501-1)',
      soundAbsorption: 'αw = 0.25 (ISO 354)',
      indentationResistance: 'Grade A (ISO 3416)'
    },
    applications: [
      'Design studios',
      'Creative offices',
      'Boutique hotels',
      'Art galleries',
      'Innovation centers',
      'Contemporary workspaces'
    ],
    colors: [
      { name: 'Artisan Beige', code: 'AB-01', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=300&fit=crop&sepia=25' },
      { name: 'Creative Charcoal', code: 'CC-02', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=300&fit=crop&brightness=0.4' },
      { name: 'Designer Grey', code: 'DG-03', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=300&fit=crop&sat=-40' },
      { name: 'Studio Blue', code: 'SB-04', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=300&fit=crop&hue=200&sat=30' },
      { name: 'Modern Moss', code: 'MM-05', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=300&fit=crop&hue=100&sat=40' },
      { name: 'Contemporary Copper', code: 'CC-06', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=300&fit=crop&hue=20&sat=60' },
      { name: 'Innovative Ivory', code: 'II-07', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=300&fit=crop&brightness=1.2&sat=-20' },
      { name: 'Trendy Teal', code: 'TT-08', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=300&fit=crop&hue=180&sat=50' },
      { name: 'Artistic Amber', code: 'AA-09', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=300&fit=crop&hue=45&sat=70' },
      { name: 'Visionary Violet', code: 'VV-10', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=300&fit=crop&hue=270&sat=40' },
      { name: 'Creative Crimson', code: 'CC-11', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=300&fit=crop&hue=350&sat=60' },
      { name: 'Modern Midnight', code: 'MM-12', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=300&fit=crop&brightness=0.15&hue=240' }
    ],
    sustainability: [
      'Carbon neutral manufacturing',
      'Cradle to Cradle Bronze',
      'Green Label certified',
      '40% recycled content',
      'Sustainable design focus',
      'Eco-conscious production'
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop'
    ]
  };

  return (
    <div className="space-y-12">
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={onBack} className="text-primary">
          ← Back to Nylon Carpetiles Collection
        </Button>
        <div className="text-right">
          <Badge variant="secondary" className="mb-2">Design Series</Badge>
          <p className="text-sm text-muted-foreground">{product.code}</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <h1 className="text-primary">{product.name}</h1>
              <Badge variant="outline">{product.code}</Badge>
            </div>
            <p className="text-muted-foreground text-xl">{product.description}</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-primary">Key Features</h3>
            <div className="grid grid-cols-1 gap-2">
              {product.features.map((feature) => (
                <div key={feature} className="text-muted-foreground flex items-start">
                  <span className="text-accent mr-2 mt-1">•</span>
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Request Samples
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
              Download Specs
            </Button>
          </div>
        </div>

        <div className="aspect-[4/3] rounded-xl overflow-hidden bg-muted">
          <ImageWithFallback
            src={product.mainImage}
            alt={`${product.name} in creative environment`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-primary">Design Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {product.galleryImages.map((image, index) => (
            <div key={index} className="aspect-square rounded-lg overflow-hidden bg-muted">
              <ImageWithFallback
                src={image}
                alt={`${product.name} design example ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <Card className="h-full">
          <CardHeader>
            <CardTitle className="text-primary">Technical Specifications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="flex justify-between items-start">
                <span className="text-sm text-muted-foreground capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}:
                </span>
                <span className="text-sm text-right">{value}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="h-full">
          <CardHeader>
            <CardTitle className="text-primary">Performance Ratings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {Object.entries(product.performance).map(([key, value]) => (
              <div key={key} className="space-y-1">
                <span className="text-sm text-muted-foreground capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </span>
                <p className="text-sm">{value}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="h-full">
          <CardHeader>
            <CardTitle className="text-primary">Ideal Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {product.applications.map((application) => (
                <div key={application} className="text-sm text-muted-foreground flex items-start">
                  <span className="text-secondary mr-2 mt-1">✓</span>
                  {application}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-primary">Color Palette - 12 Designer Options</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {product.colors.map((color) => (
            <Card key={color.code} className="group cursor-pointer hover:shadow-md transition-shadow">
              <div className="aspect-square rounded-t-lg overflow-hidden">
                <ImageWithFallback
                  src={color.image}
                  alt={`${color.name} color option`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-3 text-center">
                <p className="text-xs">{color.name}</p>
                <p className="text-xs text-muted-foreground">{color.code}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="bg-muted rounded-xl p-8">
        <h2 className="text-primary mb-6">Sustainability & Certifications</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {product.sustainability.map((cert) => (
            <div key={cert} className="bg-background rounded-lg p-4 text-center">
              <p className="text-sm">{cert}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center space-y-6 max-w-3xl mx-auto">
        <div className="bg-secondary/10 rounded-xl p-8">
          <h3 className="text-primary mb-4">Creative Design Solution</h3>
          <p className="text-muted-foreground mb-6">
            Bring artistic vision to life with the Modern Weave Series. Explore our full color range and design possibilities.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Request Design Samples
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
              Design Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}