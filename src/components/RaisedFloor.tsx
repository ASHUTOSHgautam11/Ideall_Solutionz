import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

export function RaisedFloor({ onBack }: { onBack: () => void }) {
  const systems = [
    {
      name: 'Steel Pedestal System',
      description: 'Heavy-duty steel pedestals with adjustable height for commercial applications',
      features: ['Load capacity: 1000-1500 kg/m²', 'Height range: 100-1200mm', 'Seismic resistance', 'Corrosion protection'],
      applications: ['Data centers', 'Trading floors', 'Control rooms', 'Server rooms']
    },
    {
      name: 'Aluminum System',
      description: 'Lightweight aluminum construction ideal for moderate load applications',
      features: ['Load capacity: 500-800 kg/m²', 'Height range: 50-600mm', 'Lightweight design', 'Easy installation'],
      applications: ['Offices', 'Broadcasting studios', 'Clean rooms', 'Computer rooms']
    },
    {
      name: 'Concrete Panel System',
      description: 'High-strength concrete panels for maximum durability and fire resistance',
      features: ['Fire resistant', 'High load capacity', 'Excellent stability', 'Sound dampening'],
      applications: ['Industrial facilities', 'High-security areas', 'Heavy equipment rooms']
    }
  ];

  const panelTypes = [
    {
      type: 'Calcium Sulfate',
      properties: ['High load capacity', 'Fire resistant', 'Moisture resistant', 'Smooth finish'],
      sizes: ['600x600mm', '500x500mm'],
      thickness: ['28mm', '32mm', '38mm']
    },
    {
      type: 'Steel Encased',
      properties: ['Maximum strength', 'Welded construction', 'Anti-static options', 'Precise dimensions'],
      sizes: ['600x600mm'],
      thickness: ['30mm', '35mm', '40mm']
    },
    {
      type: 'Aluminum',
      properties: ['Lightweight', 'Corrosion resistant', 'Easy handling', 'Perforated options'],
      sizes: ['600x600mm', '500x500mm'],
      thickness: ['25mm', '30mm']
    }
  ];

  const benefits = [
    {
      title: 'Cable Management',
      description: 'Complete under-floor space for power, data, and HVAC distribution',
      icon: '🔌'
    },
    {
      title: 'Accessibility',
      description: 'Easy access to services without disrupting workspace above',
      icon: '🔧'
    },
    {
      title: 'Load Distribution',
      description: 'Even load distribution with high capacity for heavy equipment',
      icon: '⚖️'
    },
    {
      title: 'Environmental Control',
      description: 'Improved airflow and climate control through under-floor plenum',
      icon: '🌡️'
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
          <h1 className="text-primary">Raised Floor Systems</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Professional raised access floor systems providing flexible infrastructure solutions 
            for modern commercial environments with comprehensive cable management and service access.
          </p>
        </div>

        {/* System Types */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-primary mb-4">Pedestal Systems</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Choose from our range of pedestal systems designed to meet specific load requirements and installation conditions.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {systems.map((system) => (
              <Card key={system.name} className="h-full">
                <CardHeader>
                  <CardTitle className="text-primary">{system.name}</CardTitle>
                  <CardDescription>{system.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-primary mb-2">Key Features</h4>
                    <ul className="space-y-1">
                      {system.features.map((feature) => (
                        <li key={feature} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-primary mb-2">Applications</h4>
                    <div className="flex flex-wrap gap-2">
                      {system.applications.map((app) => (
                        <Badge key={app} variant="secondary" className="text-xs">
                          {app}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Panel Types */}
        <div className="bg-muted rounded-xl p-8">
          <h3 className="text-primary mb-6 text-center">Access Floor Panels</h3>
          <div className="grid lg:grid-cols-3 gap-6">
            {panelTypes.map((panel) => (
              <Card key={panel.type}>
                <CardHeader>
                  <CardTitle className="text-primary">{panel.type}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-primary mb-2">Properties</h4>
                    <ul className="space-y-1">
                      {panel.properties.map((prop) => (
                        <li key={prop} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-accent mr-2 mt-1">✓</span>
                          {prop}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-primary text-sm mb-2">Sizes</h4>
                      {panel.sizes.map((size) => (
                        <p key={size} className="text-xs text-muted-foreground">{size}</p>
                      ))}
                    </div>
                    <div>
                      <h4 className="text-primary text-sm mb-2">Thickness</h4>
                      {panel.thickness.map((thick) => (
                        <p key={thick} className="text-xs text-muted-foreground">{thick}</p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-primary mb-4">System Benefits</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Raised floor systems provide comprehensive solutions for modern facility infrastructure requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h4 className="text-primary mb-2">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Load Classifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-muted/50 rounded">
                  <span className="text-primary">Light Duty</span>
                  <span className="text-sm text-muted-foreground">250-500 kg/m²</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted/50 rounded">
                  <span className="text-primary">Medium Duty</span>
                  <span className="text-sm text-muted-foreground">500-1000 kg/m²</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted/50 rounded">
                  <span className="text-primary">Heavy Duty</span>
                  <span className="text-sm text-muted-foreground">1000-1500 kg/m²</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted/50 rounded">
                  <span className="text-primary">Extra Heavy</span>
                  <span className="text-sm text-muted-foreground">1500+ kg/m²</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Standards Compliance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-1">✓</span>
                  EN 12825 - European raised floor standard
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-1">✓</span>
                  CISCA - Ceilings & Interior Systems Construction
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-1">✓</span>
                  UL Listed components and systems
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-1">✓</span>
                  ASTM testing protocols compliance
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-1">✓</span>
                  Seismic zone certifications available
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Installation Process */}
        <div className="bg-primary/5 rounded-xl p-8">
          <h3 className="text-primary mb-6 text-center">Professional Installation Process</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary text-xl">1</span>
              </div>
              <h4 className="text-primary mb-2">Site Survey</h4>
              <p className="text-sm text-muted-foreground">
                Comprehensive site assessment and load requirement analysis
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary text-xl">2</span>
              </div>
              <h4 className="text-primary mb-2">Layout Design</h4>
              <p className="text-sm text-muted-foreground">
                Detailed floor plan with pedestal and panel positioning
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
              <h4 className="text-primary mb-2">Testing</h4>
              <p className="text-sm text-muted-foreground">
                Load testing and system verification before handover
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center space-y-6">
          <h3 className="text-primary">Engineer Your Perfect Floor Solution</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our raised floor specialists can design and implement the ideal access floor system 
            for your specific requirements and facility needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Technical Consultation
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
              Load Calculator
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}