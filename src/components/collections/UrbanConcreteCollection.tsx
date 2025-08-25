import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function UrbanConcreteCollection({ onBack }: { onBack: () => void }) {
  const product = {
    name: 'Urban Concrete Series',
    code: 'UC-2401',
    description: 'Contemporary nylon carpet tiles featuring weathered concrete aesthetics perfect for modern office environments',
    mainImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
    features: [
      'Solution-dyed nylon 6,6 fibers',
      'Textured concrete-inspired pattern',
      'Class 33 commercial rating',
      'Anti-static properties',
      'Stain-resistant treatment',
      'Easy installation system'
    ],
    specifications: {
      construction: 'Tufted loop pile',
      fiberContent: '100% Solution-dyed Nylon 6,6',
      pileHeight: '6.5mm',
      tileSize: '50cm x 50cm',
      totalThickness: '9.5mm',
      tuftsPerSqm: '200,000',
      backing: 'Recycled bitumen with fiberglass'
    },
    performance: {
      wearRating: 'Class 33 - Heavy Commercial',
      lightFastness: 'ISO 105-B02 Grade 6',
      staticGeneration: '< 2kV (AATCC 134)',
      flammability: 'Class 1 (BS EN 13501-1)',
      soundAbsorption: 'αw = 0.15 (ISO 354)',
      indentationResistance: 'Grade A (ISO 3416)'
    },
    applications: [
      'Corporate offices',
      'Meeting rooms',
      'Reception areas',
      'Co-working spaces',
      'Professional services',
      'Open plan offices'
    ],
    colors: [
      { name: 'Metropolitan Grey', code: 'MG-01', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=300&fit=crop' },
      { name: 'Urban Charcoal', code: 'UC-02', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=300&fit=crop&sat=-100' },
      { name: 'Industrial Concrete', code: 'IC-03', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=300&fit=crop&brightness=0.8' },
      { name: 'Modern Stone', code: 'MS-04', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=300&fit=crop&sepia=20' },
      { name: 'Business Grey', code: 'BG-05', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=300&fit=crop&contrast=1.2' },
      { name: 'Executive Slate', code: 'ES-06', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=300&fit=crop&brightness=0.6' }
    ],
    sustainability: [
      'Cradle to Cradle Certified',
      'Green Label Plus certified',
      'Recyclable backing material',
      'Low VOC emissions',
      'Contains recycled content',
      'Carbon neutral manufacturing'
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop'
    ]
  };

  return (
    <div className="space-y-12">
      {/* Header Navigation */}
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={onBack} className="text-primary">
          ← Back to Nylon Carpetiles Collection
        </Button>
        <div className="text-right">
          <Badge variant="secondary" className="mb-2">Premium Series</Badge>
          <p className="text-sm text-muted-foreground">{product.code}</p>
        </div>
      </div>

      {/* Product Hero */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <h1 className="text-primary">{product.name}</h1>
              <Badge variant="outline">{product.code}</Badge>
            </div>
            <p className="text-muted-foreground text-xl">{product.description}</p>
          </div>

          {/* Key Features */}
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

        {/* Product Image */}
        <div className="aspect-[4/3] rounded-xl overflow-hidden bg-muted">
          <ImageWithFallback
            src={product.mainImage}
            alt={`${product.name} installed in modern office environment`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Product Gallery */}
      <div className="space-y-6">
        <h2 className="text-primary">Installation Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {product.galleryImages.map((image, index) => (
            <div key={index} className="aspect-square rounded-lg overflow-hidden bg-muted">
              <ImageWithFallback
                src={image}
                alt={`${product.name} installation example ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Specifications */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Technical Specifications */}
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

        {/* Performance Ratings */}
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

        {/* Applications */}
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

      {/* Color Options */}
      <div className="space-y-6">
        <h2 className="text-primary">Available Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {product.colors.map((color) => (
            <Card key={color.code} className="group cursor-pointer hover:shadow-md transition-shadow">
              <div className="aspect-square rounded-t-lg overflow-hidden">
                <ImageWithFallback
                  src={color.image}
                  alt={`${color.name} color option`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4 text-center">
                <p className="text-sm">{color.name}</p>
                <p className="text-xs text-muted-foreground">{color.code}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Sustainability */}
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

      {/* Installation & Maintenance */}
      <div className="bg-primary/5 rounded-xl p-12">
        <div className="text-center mb-10">
          <h2 className="text-primary mb-4">Installation & Maintenance</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Professional installation guidance and maintenance protocols to ensure optimal performance and longevity
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
              <span className="text-primary text-xl">1</span>
            </div>
            <h4 className="text-primary">Pre-Installation</h4>
            <p className="text-sm text-muted-foreground">
              Subfloor preparation, moisture testing, and acclimatization requirements for optimal installation results.
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
              <span className="text-primary text-xl">2</span>
            </div>
            <h4 className="text-primary">Professional Installation</h4>
            <p className="text-sm text-muted-foreground">
              Quarter-turn or ashlar installation patterns with precision cutting and seamless edge alignment.
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
              <span className="text-primary text-xl">3</span>
            </div>
            <h4 className="text-primary">Maintenance Protocol</h4>
            <p className="text-sm text-muted-foreground">
              Regular vacuuming, spot cleaning procedures, and professional deep cleaning schedules.
            </p>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="text-center space-y-6 max-w-3xl mx-auto">
        <div className="bg-secondary/10 rounded-xl p-8">
          <h3 className="text-primary mb-4">Ready to Specify This Product?</h3>
          <p className="text-muted-foreground mb-6">
            Contact our specialists for samples, detailed specifications, and project consultation for the Urban Concrete Series.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Request Samples
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
              Technical Support
            </Button>
            <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary/5">
              Download Data Sheet
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}