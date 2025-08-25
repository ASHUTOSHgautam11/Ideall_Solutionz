import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CarpetCarpetTiles({ onBack, onNylonCarpetileSelect }: { onBack: () => void; onNylonCarpetileSelect?: () => void }) {
  const products = [
    {
      name: 'Nylon Carpetiles',
      description: 'High-performance nylon carpet tiles suitable for commercial and residential applications',
      features: ['Stain resistant', 'High durability', 'Easy installation', 'Modular design'],
      applications: ['Office spaces', 'Hotels', 'Retail environments'],
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
      clickable: true
    },
    {
      name: 'Polypropylene Tiles',
      description: 'Cost-effective carpet tiles with excellent stain resistance and easy maintenance',
      features: ['Moisture resistant', 'Easy to clean', 'Budget-friendly', 'Fade resistant'],
      applications: ['Educational facilities', 'Healthcare', 'Light commercial'],
      image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&h=400&fit=crop'
    },
    {
      name: 'Wool Blend Tiles',
      description: 'Premium natural fiber carpet tiles offering luxury feel and superior performance',
      features: ['Natural insulation', 'Flame resistant', 'Luxurious texture', 'Eco-friendly'],
      applications: ['Executive offices', 'Hotels', 'High-end residential'],
      image: 'https://images.unsplash.com/photo-1558618644-fcd25c85cd64?w=600&h=400&fit=crop'
    },
    {
      name: 'Solution Dyed Nylon',
      description: 'Advanced solution-dyed nylon tiles with exceptional colorfastness and durability',
      features: ['UV stable', 'Permanent color', 'High traffic rated', 'Bleach cleanable'],
      applications: ['Airports', 'Hospitals', 'Educational institutions'],
      image: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=600&h=400&fit=crop'
    },
    {
      name: 'Polyester Tiles',
      description: 'Soft-touch polyester carpet tiles ideal for comfort-focused environments',
      features: ['Soft texture', 'Color variety', 'Acoustic properties', 'Recyclable'],
      applications: ['Libraries', 'Meeting rooms', 'Residential areas'],
      image: 'https://images.unsplash.com/photo-1564540574859-0dfb63816403?w=600&h=400&fit=crop'
    },
    {
      name: 'Modular Planks',
      description: 'Innovative plank-format carpet tiles for contemporary linear designs',
      features: ['Linear aesthetics', 'Easy installation', 'Design flexibility', 'Low maintenance'],
      applications: ['Modern offices', 'Retail spaces', 'Corporate environments'],
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop'
    },
    {
      name: 'Cushion Back Tiles',
      description: 'Comfort-enhanced carpet tiles with integrated cushion backing system',
      features: ['Enhanced comfort', 'Sound absorption', 'Thermal insulation', 'Easy replacement'],
      applications: ['Call centers', 'Open offices', 'Healthcare facilities'],
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&h=400&fit=crop'
    },
    {
      name: 'Berber Style Tiles',
      description: 'Traditional berber pattern carpet tiles with modern performance features',
      features: ['Classic design', 'High durability', 'Soil hiding', 'Versatile styling'],
      applications: ['Commercial lobbies', 'Hospitality', 'Traditional offices'],
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=600&h=400&fit=crop'
    },
    {
      name: 'Cut & Loop Tiles',
      description: 'Textured carpet tiles combining cut and loop pile construction',
      features: ['Textured surface', 'Pattern interest', 'Durability', 'Stain hiding'],
      applications: ['Retail environments', 'Hospitality suites', 'Commercial spaces'],
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&h=400&fit=crop'
    },
    {
      name: 'Eco-Friendly Tiles',
      description: 'Sustainable carpet tiles made from recycled and renewable materials',
      features: ['Recycled content', 'Low emissions', 'Sustainable backing', 'Cradle-to-cradle'],
      applications: ['Green buildings', 'LEED projects', 'Eco-conscious offices'],
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop'
    },
    {
      name: 'Graphic Pattern Tiles',
      description: 'Bold geometric and graphic pattern carpet tiles for statement floors',
      features: ['Bold patterns', 'Design impact', 'Mix & match', 'Creative layouts'],
      applications: ['Creative agencies', 'Youth centers', 'Modern retail'],
      image: 'https://images.unsplash.com/photo-1600607688960-e095d9d80981?w=600&h=400&fit=crop'
    }
  ];

  const handleProductClick = (product: typeof products[0]) => {
    if (product.clickable && product.name === 'Nylon Carpetiles' && onNylonCarpetileSelect) {
      onNylonCarpetileSelect();
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={onBack} className="text-primary">
          ← Back to Product Categories
        </Button>
        <Badge variant="secondary">Flooring Solutions</Badge>
      </div>

      <div className="text-center space-y-4">
        <h1 className="text-primary">Carpet & Carpet Tiles</h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Comprehensive range of carpet tiles and modular flooring solutions for commercial and residential applications. 
          Our collection features premium materials, innovative construction, and diverse design options to meet any project requirement.
        </p>
      </div>

      {/* Products Grid */}
      <div className="space-y-8">
        <div className="grid lg:grid-cols-2 gap-6">
          {products.map((product) => (
            <Card 
              key={product.name} 
              className={`h-full overflow-hidden ${
                product.clickable && product.name === 'Nylon Carpetiles' 
                  ? 'cursor-pointer hover:shadow-lg transition-shadow' 
                  : ''
              }`}
              onClick={() => handleProductClick(product)}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={`${product.name} interior room shot`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-primary flex items-center justify-between">
                  {product.name}
                  {product.clickable && product.name === 'Nylon Carpetiles' && (
                    <span className="text-xs text-accent">View Details →</span>
                  )}
                </CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm text-primary mb-2">Key Features</h4>
                  <div className="grid grid-cols-2 gap-1 text-xs text-muted-foreground">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center">
                        <span className="text-secondary mr-1">•</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm text-primary mb-2">Applications</h4>
                  <div className="text-xs text-muted-foreground">
                    {product.applications.join(' • ')}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Professional Services Section */}
      <div className="bg-muted rounded-xl p-8 mt-12">
        <div className="text-center mb-8">
          <h2 className="text-primary mb-4">Professional Carpet Tile Solutions</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            From specification to installation, our comprehensive carpet tile services ensure your flooring project 
            meets the highest standards of quality, performance, and aesthetic appeal.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
              <span className="text-primary">📋</span>
            </div>
            <h4 className="text-primary">Specification Support</h4>
            <p className="text-xs text-muted-foreground">Technical guidance for optimal product selection</p>
          </div>
          <div className="space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
              <span className="text-primary">🎨</span>
            </div>
            <h4 className="text-primary">Design Consultation</h4>
            <p className="text-xs text-muted-foreground">Professional design and layout planning services</p>
          </div>
          <div className="space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
              <span className="text-primary">🔧</span>
            </div>
            <h4 className="text-primary">Installation Support</h4>
            <p className="text-xs text-muted-foreground">Professional installation guidance and oversight</p>
          </div>
          <div className="space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
              <span className="text-primary">🛡️</span>
            </div>
            <h4 className="text-primary">Maintenance Programs</h4>
            <p className="text-xs text-muted-foreground">Ongoing maintenance and care recommendations</p>
          </div>
        </div>
      </div>
    </div>
  );
}