import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

export function PartnerWithUs() {
  const partnershipTypes = [
    {
      title: 'Trade Partners',
      description: 'Established importers and distributors seeking reliable sourcing partners',
      benefits: [
        'Access to our verified supplier network',
        'Comprehensive quality assurance protocols',
        'Trade facilitation and logistics support',
        'Market intelligence and pricing insights'
      ],
      requirements: [
        'Established business operations',
        'Import/export experience',
        'Financial capability for trade financing',
        'Quality standards alignment'
      ]
    },
    {
      title: 'Design Professionals',
      description: 'Architects, interior designers, and design firms requiring premium materials',
      benefits: [
        'Access to exclusive manufacturer collections',
        'Custom product development capabilities',
        'Project-specific sourcing solutions',
        'Design consultation and technical support'
      ],
      requirements: [
        'Active design practice or certification',
        'Project portfolio demonstration',
        'Client base requiring premium materials',
        'Professional reference verification'
      ]
    },
    {
      title: 'Retail Partners',
      description: 'Premium retailers and showrooms seeking unique product offerings',
      benefits: [
        'Exclusive territory arrangements',
        'Marketing and sales support',
        'Inventory management assistance',
        'Brand partnership opportunities'
      ],
      requirements: [
        'Established retail presence',
        'Premium market positioning',
        'Financial stability and creditworthiness',
        'Brand alignment with quality standards'
      ]
    },
    {
      title: 'Project Developers',
      description: 'Large-scale residential and commercial development projects',
      benefits: [
        'Volume pricing advantages',
        'Project timeline coordination',
        'Specification and compliance support',
        'Dedicated project management team'
      ],
      requirements: [
        'Minimum project value thresholds',
        'Established development track record',
        'Technical specification capabilities',
        'Project financing confirmation'
      ]
    }
  ];

  const contactInfo = [
    {
      title: 'Office Address',
      details: [
        '71 Ubi Crescent, #06-06',
        'Excalibur Centre',
        'Singapore 408571'
      ],
      note: 'Primary operational base for Asian and global trade facilitation'
    },
    {
      title: 'Contact Information',
      details: [
        'Tel: +65 63254142',
        'Fax: +65 63254840',
        'Email: contact-us@ideallss.com'
      ],
      note: 'Connect with our trade specialists for comprehensive procurement solutions'
    },
    {
      title: 'Business Services',
      details: [
        'Partnership Development',
        'Trade Consultation',
        'Quality Assurance Services'
      ],
      note: 'Strategic relationships with manufacturers and suppliers worldwide'
    }
  ];

  return (
    <div className="space-y-16">
      {/* Header */}
      <div className="text-center space-y-4 max-w-4xl mx-auto">
        <h1 className="text-primary">Connect With Us</h1>
        <p className="text-xl text-muted-foreground">
          Join our global network of trade partners and unlock access to premium procurement solutions
        </p>
        <p className="text-muted-foreground">
          Ideall Solutionz offers comprehensive partnership opportunities for established businesses 
          seeking reliable international trade solutions and access to our verified global supplier network.
        </p>
      </div>

      {/* Partnership Types */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-primary mb-4">Partnership Opportunities</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We work with various types of partners across the interior design and construction value chain
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {partnershipTypes.map((type) => (
            <Card key={type.title} className="h-full">
              <CardHeader>
                <CardTitle className="text-primary">{type.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {type.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-primary mb-3">Partnership Benefits</h4>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit) => (
                      <li key={benefit} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-accent mr-2 mt-1">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-primary mb-3">Requirements</h4>
                  <ul className="space-y-2">
                    {type.requirements.map((requirement) => (
                      <li key={requirement} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-secondary mr-2 mt-1">•</span>
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-muted rounded-xl p-12 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-primary mb-4">Connect With Our Team</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Ready to explore partnership opportunities? Our trade specialists are available to discuss 
            your procurement requirements and partnership potential.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {contactInfo.map((info) => (
            <div key={info.title} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <h4 className="mb-4 text-primary">{info.title}</h4>
              <div className="space-y-2 mb-4">
                {info.details.map((detail) => (
                  <p key={detail} className="text-sm text-muted-foreground">{detail}</p>
                ))}
              </div>
              <p className="text-xs text-muted-foreground italic">{info.note}</p>
            </div>
          ))}
        </div>

        <div className="text-center space-y-6">
          <div className="bg-background rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-primary mb-4">Get Started Today</h3>
            <p className="text-muted-foreground mb-6">
              Contact us to discuss your partnership interests and procurement requirements. 
              Our team will work with you to identify the best collaboration approach for your business.
            </p>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-4 justify-center">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Partnership Inquiry
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  Request Information
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                All partnership inquiries are handled confidentially with comprehensive business verification processes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-primary mb-4">Why Choose Ideall Solutionz</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Our commitment to excellence and comprehensive trade expertise makes us the ideal partner for your procurement needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-accent/20 rounded-full mx-auto flex items-center justify-center">
              <div className="w-10 h-10 bg-accent rounded-full"></div>
            </div>
            <h4 className="text-primary">Established Network</h4>
            <p className="text-sm text-muted-foreground">
              Years of relationship building with premium manufacturers across key global markets, 
              ensuring access to the finest products and most competitive terms.
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-primary/20 rounded-full mx-auto flex items-center justify-center">
              <div className="w-10 h-10 bg-primary rounded-full"></div>
            </div>
            <h4 className="text-primary">Quality Assurance</h4>
            <p className="text-sm text-muted-foreground">
              Comprehensive quality control protocols including factory audits, product testing, 
              and compliance verification to ensure every item meets international standards.
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-secondary/20 rounded-full mx-auto flex items-center justify-center">
              <div className="w-10 h-10 bg-secondary rounded-full"></div>
            </div>
            <h4 className="text-primary">Trade Expertise</h4>
            <p className="text-sm text-muted-foreground">
              Deep expertise in international trade regulations, customs procedures, and logistics 
              to ensure smooth and efficient procurement processes for all partners.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center space-y-6 max-w-3xl mx-auto">
        <div className="bg-primary/5 rounded-xl p-8">
          <h3 className="text-primary mb-4">Our Sourcing, Your Strength</h3>
          <p className="text-muted-foreground mb-6">
            Partner with Ideall Solutionz and leverage our global procurement expertise to strengthen 
            your supply chain and expand your market opportunities.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Badge variant="secondary" className="px-4 py-2">
              Global Reach
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              Quality Guaranteed
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              Trade Expertise
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              Reliable Partnership
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}