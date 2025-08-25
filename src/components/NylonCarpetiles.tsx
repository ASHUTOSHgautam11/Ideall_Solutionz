import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

export function NylonCarpetiles({ onBack, onCollectionSelect }: { 
  onBack: () => void;
  onCollectionSelect: (collectionId: string) => void;
}) {
  const collections = [
    {
      id: 'urban-concrete',
      name: 'Urban Concrete Series',
      code: 'UC-2401',
      description: 'Contemporary nylon carpet tiles featuring weathered concrete aesthetics perfect for modern office environments',
      mainImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      keyFeatures: [
        'Solution-dyed nylon 6,6 fibers',
        'Textured concrete-inspired pattern', 
        'Class 33 commercial rating',
        'Anti-static properties'
      ],
      colorCount: 6,
      applications: ['Corporate offices', 'Meeting rooms', 'Reception areas'],
      sustainability: 'Cradle to Cradle Certified'
    },
    {
      id: 'professional-texture',
      name: 'Professional Texture Series',
      code: 'PT-2402', 
      description: 'High-performance nylon carpetiles designed for demanding commercial environments with superior durability',
      mainImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
      keyFeatures: [
        'Enhanced nylon 6,6 construction',
        'Multi-level loop construction',
        'Superior soil hiding properties',
        'Moisture barrier backing'
      ],
      colorCount: 6,
      applications: ['Executive offices', 'Conference centers', 'Legal firms'],
      sustainability: 'GREENGUARD Gold certified'
    },
    {
      id: 'executive-comfort',
      name: 'Executive Comfort Series',
      code: 'EC-2403',
      description: 'Luxurious nylon carpet tiles offering premium comfort and sophisticated design for executive environments',
      mainImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      keyFeatures: [
        'Premium cut pile construction',
        'Enhanced acoustic properties',
        'Luxury aesthetic appeal',
        'Superior underfoot comfort'
      ],
      colorCount: 8,
      applications: ['Executive suites', 'Boardrooms', 'VIP lounges'],
      sustainability: 'NSF 140 Platinum'
    },
    {
      id: 'performance-plus',
      name: 'Performance Plus Series',
      code: 'PP-2404',
      description: 'Ultra-durable nylon carpet tiles engineered for high-traffic commercial spaces with exceptional wear resistance',
      mainImage: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop',
      keyFeatures: [
        'Ultra-high density construction',
        'Enhanced wear resistance',
        'Soil and stain protection',
        'Extended warranty coverage'
      ],
      colorCount: 10,
      applications: ['Retail spaces', 'Hospitality', 'Healthcare facilities'],
      sustainability: 'Green Label Plus certified'
    },
    {
      id: 'modern-weave',
      name: 'Modern Weave Series', 
      code: 'MW-2405',
      description: 'Innovative woven nylon carpet tiles combining traditional craftsmanship with contemporary design aesthetics',
      mainImage: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop',
      keyFeatures: [
        'Innovative weave pattern',
        'Dimensional texture effects',
        'Color-coordinated backing',
        'Precision edge technology'
      ],
      colorCount: 12,
      applications: ['Design studios', 'Creative offices', 'Boutique hotels'],
      sustainability: 'Carbon neutral manufacturing'
    },
    {
      id: 'acoustic-solution',
      name: 'Acoustic Solution Series',
      code: 'AS-2406',
      description: 'Specialized nylon carpet tiles designed for superior sound absorption and noise reduction in open office environments',
      mainImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop',
      keyFeatures: [
        'Enhanced sound absorption',
        'Noise reduction technology',
        'Open office optimization',
        'Comfort backing system'
      ],
      colorCount: 8,
      applications: ['Open offices', 'Call centers', 'Libraries'],
      sustainability: 'Recyclable backing material'
    }
  ];

  return (
    <div className="space-y-12">
      {/* Header Navigation */}
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={onBack} className="text-primary">
          ← Back to Carpet & Carpet Tiles
        </Button>
        <div className="text-right">
          <Badge variant="secondary" className="mb-2">Premium Collection</Badge>
          <p className="text-sm text-muted-foreground">Professional Grade Nylon Carpetiles</p>
        </div>
      </div>

      {/* Main Header */}
      <div className="text-center space-y-4 max-w-4xl mx-auto">
        <h1 className="text-primary">Nylon Carpetiles Collection</h1>
        <p className="text-xl text-muted-foreground">
          Premium solution-dyed nylon carpet tiles engineered for demanding commercial environments
        </p>
        <p className="text-muted-foreground">
          Our comprehensive nylon carpetile collection combines superior performance with sophisticated aesthetics, 
          offering unmatched durability and design flexibility for professional spaces.
        </p>
      </div>

      {/* Collections Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {collections.map((collection) => (
          <Card 
            key={collection.id} 
            className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            onClick={() => onCollectionSelect(collection.id)}
          >
            <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
              <ImageWithFallback
                src={collection.mainImage}
                alt={`${collection.name} collection showcase`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <CardHeader className="space-y-3">
              <div className="flex items-start justify-between">
                <CardTitle className="text-lg text-primary group-hover:text-secondary transition-colors">
                  {collection.name}
                </CardTitle>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">{collection.code}</Badge>
                <Badge variant="secondary" className="text-xs">{collection.colorCount} Colors</Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <CardDescription className="text-sm line-clamp-2">
                {collection.description}
              </CardDescription>
              
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm text-primary mb-2">Key Features</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {collection.keyFeatures.slice(0, 2).map((feature) => (
                      <li key={feature} className="flex items-start">
                        <span className="text-secondary mr-2 mt-0.5">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm text-primary mb-2">Applications</h4>
                  <p className="text-xs text-muted-foreground">
                    {collection.applications.join(', ')}
                  </p>
                </div>
                
                <div className="pt-2 border-t border-border">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Sustainability:</span>
                    <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                      {collection.sustainability}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Collection Overview Stats */}
      <div className="bg-muted rounded-xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-primary mb-4">Collection Overview</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Our nylon carpetile collection offers comprehensive solutions for every commercial flooring requirement
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center space-y-2">
            <div className="text-2xl text-primary">{collections.length}</div>
            <p className="text-sm text-muted-foreground">Collections Available</p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-2xl text-primary">{collections.reduce((acc, col) => acc + col.colorCount, 0)}+</div>
            <p className="text-sm text-muted-foreground">Color Options</p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-2xl text-primary">100%</div>
            <p className="text-sm text-muted-foreground">Solution-Dyed Nylon</p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-2xl text-primary">Class 33</div>
            <p className="text-sm text-muted-foreground">Commercial Rating</p>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="text-center space-y-6 max-w-3xl mx-auto">
        <div className="bg-secondary/10 rounded-xl p-8">
          <h3 className="text-primary mb-4">Explore Our Collections</h3>
          <p className="text-muted-foreground mb-6">
            Click on any collection above to view detailed specifications, color options, and technical information. 
            Our team is ready to assist with samples and project consultation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Request Sample Pack
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