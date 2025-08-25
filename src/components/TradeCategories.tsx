import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

export function TradeCategories({ onFlooringCategorySelect }: { onFlooringCategorySelect?: (category: string) => void }) {
  const categories = [
    {
      title: 'Floorings',
      description: 'Premium flooring solutions sourced from global manufacturers with stringent quality standards.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
      subcategories: [
        { name: 'Carpet & Carpet Tiles', clickable: true, key: 'carpet-carpet-tiles' },
        { name: 'Artificial and Sports Grass', clickable: true, key: 'grass' },
        { name: 'Vinyl Floorings & Laminates', clickable: true, key: 'vinyl-laminates' },
        { name: 'Engineered & Solid Wood', clickable: true, key: 'engineered-solid-wood' },
        { name: 'Decking Tiles', clickable: true, key: 'decking-tiles' },
        { name: 'Raised Floor', clickable: true, key: 'raised-floor' }
      ],
      qualities: [
        'Factory inspection protocols',
        'Material durability testing',
        'Installation compatibility verification',
        'Environmental compliance certification'
      ]
    },
    {
      title: 'Furniture',
      description: 'Curated furniture collections from renowned manufacturers worldwide with comprehensive quality verification.',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop',
      subcategories: [
        'Residential Collections',
        'Commercial Solutions',
        'Custom Manufacturing',
        'Office Furniture Systems',
        'Hospitality Furnishings'
      ],
      qualities: [
        'Structural integrity testing',
        'Material composition verification',
        'Finish quality assessment',
        'Ergonomic standards compliance'
      ]
    },
    {
      title: 'Fabrics',
      description: 'Luxury textiles and specialty fabrics sourced from premier mills with rigorous quality testing.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      subcategories: [
        'Upholstery Materials',
        'Window Treatments',
        'Technical Fabrics',
        'Performance Textiles',
        'Sustainable Fiber Options'
      ],
      qualities: [
        'Colorfastness testing',
        'Wear resistance evaluation',
        'Fire safety compliance',
        'Textile composition analysis'
      ]
    },
    {
      title: 'Fashion Walls',
      description: 'Innovative wall solutions and decorative systems from leading global innovators in architectural design.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop',
      subcategories: [
        '3D Wall Panels',
        'Decorative Cladding',
        'Architectural Elements',
        'Modular Wall Systems',
        'Artistic Surface Treatments'
      ],
      qualities: [
        'Installation system verification',
        'Material stability testing',
        'Acoustic performance evaluation',
        'Environmental impact assessment'
      ]
    }
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4 max-w-4xl mx-auto">
        <h1 className="text-primary">Product Categories</h1>
        <p className="text-xl text-muted-foreground">
          Comprehensive procurement solutions across four specialized categories of premium interior products
        </p>
        <p className="text-muted-foreground">
          Each category represents years of established relationships with leading global manufacturers, 
          backed by rigorous quality assurance protocols and expert trade facilitation services.
        </p>
      </div>

      {/* Category Grid */}
      <div className="space-y-16">
        {categories.map((category, index) => (
          <div key={category.title} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
            {/* Content */}
            <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
              <div className="space-y-4">
                <h2 className="text-primary">{category.title}</h2>
                <p className="text-muted-foreground text-lg">
                  {category.description}
                </p>
              </div>

              {/* Subcategories */}
              <div className="space-y-3">
                <h4 className="text-primary">Product Categories</h4>
                <div className="flex flex-wrap gap-2">
                  {category.subcategories.map((sub) => {
                    const subCategory = typeof sub === 'string' ? { name: sub, clickable: false } : sub;
                    
                    if (category.title === 'Floorings' && subCategory.clickable && onFlooringCategorySelect) {
                      const categoryKey = subCategory.key || subCategory.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
                      return (
                        <Button
                          key={subCategory.name}
                          variant="secondary"
                          size="sm"
                          className="text-xs h-auto py-1 px-2 hover:bg-primary hover:text-primary-foreground"
                          onClick={() => onFlooringCategorySelect(categoryKey)}
                        >
                          {subCategory.name}
                        </Button>
                      );
                    }
                    
                    return (
                      <Badge key={subCategory.name} variant="secondary" className="text-xs">
                        {subCategory.name}
                      </Badge>
                    );
                  })}
                </div>
              </div>

              {/* Quality Standards */}
              <div className="space-y-3">
                <h4 className="text-primary">Quality Assurance</h4>
                <ul className="space-y-2">
                  {category.qualities.map((quality) => (
                    <li key={quality} className="text-sm text-muted-foreground flex items-start">
                      <span className="text-accent mr-2 mt-1">•</span>
                      {quality}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Image */}
            <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
              <div 
                className="aspect-[4/3] rounded-xl bg-muted bg-cover bg-center"
                style={{ backgroundImage: `url(${category.image})` }}
              >
                <div className="w-full h-full rounded-xl bg-gradient-to-br from-primary/20 to-transparent flex items-end p-6">
                  <div className="bg-background/90 backdrop-blur-sm rounded-lg p-4">
                    <h3 className="text-primary mb-1">{category.title}</h3>
                    <p className="text-xs text-muted-foreground">Global Sourcing Network</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trade Process */}
      <div className="bg-muted rounded-xl p-12 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-primary mb-4">Our Trade Process</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            A systematic approach to international procurement that ensures quality, compliance, and efficiency at every step.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-primary text-xl">1</span>
            </div>
            <h4 className="mb-3 text-primary">Market Research</h4>
            <p className="text-sm text-muted-foreground">
              Comprehensive analysis of global suppliers, pricing trends, and quality benchmarks to identify optimal sourcing opportunities.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-primary text-xl">2</span>
            </div>
            <h4 className="mb-3 text-primary">Supplier Verification</h4>
            <p className="text-sm text-muted-foreground">
              Rigorous vetting process including factory audits, certification verification, and production capability assessment.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-primary text-xl">3</span>
            </div>
            <h4 className="mb-3 text-primary">Quality Control</h4>
            <p className="text-sm text-muted-foreground">
              Multi-stage inspection protocols from production monitoring through pre-shipment verification and compliance testing.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-primary text-xl">4</span>
            </div>
            <h4 className="mb-3 text-primary">Trade Facilitation</h4>
            <p className="text-sm text-muted-foreground">
              Expert handling of documentation, customs procedures, logistics coordination, and delivery management.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center space-y-6 max-w-3xl mx-auto">
        <h3 className="text-primary">Ready to Explore Partnership Opportunities?</h3>
        <p className="text-muted-foreground">
          Connect with our trade specialists to discuss your procurement requirements and discover how 
          our global sourcing network can strengthen your supply chain.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="bg-secondary/20 px-6 py-3 rounded-full">
            <span className="text-primary font-medium">Global Reach</span>
          </div>
          <div className="bg-secondary/20 px-6 py-3 rounded-full">
            <span className="text-primary font-medium">Quality Guaranteed</span>
          </div>
          <div className="bg-secondary/20 px-6 py-3 rounded-full">
            <span className="text-primary font-medium">Trade Expertise</span>
          </div>
        </div>
      </div>
    </div>
  );
}