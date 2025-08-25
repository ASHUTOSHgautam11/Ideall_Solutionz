import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export function OurProducts() {
  const tradeCategories = [
    {
      name: "Floorings",
      description: "Comprehensive sourcing solutions for premium flooring materials from global manufacturers",
      subcategories: [
        "Engineered Hardwood",
        "Solid Wood Parquet", 
        "Luxury Vinyl Tiles (LVT)",
        "Laminate Flooring",
        "Natural Stone",
        "Ceramic & Porcelain Tiles",
        "Bamboo Flooring",
        "Cork Flooring"
      ],
      services: ["Factory Audits", "Quality Testing", "Sample Coordination", "Bulk Procurement"],
      regions: ["Europe", "North America", "Southeast Asia", "China"]
    },
    {
      name: "Furniture",
      description: "Global procurement of designer and commercial furniture from verified manufacturers",
      subcategories: [
        "Residential Collections",
        "Office Furniture",
        "Hospitality Solutions",
        "Outdoor Furniture",
        "Custom Manufacturing",
        "Modular Systems",
        "Luxury Pieces",
        "Contract Furniture"
      ],
      services: ["Supplier Verification", "Production Monitoring", "Logistics Coordination", "Quality Control"],
      regions: ["Italy", "Germany", "China", "Malaysia"]
    },
    {
      name: "Fabrics",
      description: "Premium textile sourcing from renowned mills and specialty fabric manufacturers worldwide",
      subcategories: [
        "Upholstery Fabrics",
        "Curtain Materials",
        "Wall Coverings",
        "Technical Textiles",
        "Fire Retardant Fabrics",
        "Acoustic Materials",
        "Outdoor Fabrics",
        "Specialty Weaves"
      ],
      services: ["Mill Partnerships", "Color Matching", "Bulk Orders", "Custom Specifications"],
      regions: ["Europe", "Turkey", "India", "Japan"]
    },
    {
      name: "Fashion Walls",
      description: "Innovative wall solutions and architectural elements from leading design manufacturers",
      subcategories: [
        "3D Wall Panels",
        "Decorative Cladding",
        "Metal Accents",
        "Wood Slats",
        "Stone Veneers",
        "Acoustic Panels",
        "LED Integration",
        "Modular Systems"
      ],
      services: ["Design Coordination", "Installation Support", "Technical Specifications", "Project Management"],
      regions: ["Germany", "Italy", "Scandinavia", "North America"]
    }
  ];

  const procurementServices = [
    {
      title: "Supplier Network Management",
      description: "Curated network of verified manufacturers and suppliers across key global markets",
      features: ["Factory Audits", "Capability Assessments", "Financial Verification", "Quality Certifications"]
    },
    {
      title: "Quality Assurance Programs",
      description: "Comprehensive quality control from initial samples through final delivery",
      features: ["Pre-production Samples", "In-line Inspections", "Final Quality Checks", "Compliance Testing"]
    },
    {
      title: "Trade Facilitation Services",
      description: "Complete handling of international trade documentation and logistics",
      features: ["Customs Clearance", "Shipping Coordination", "Documentation", "Risk Management"]
    },
    {
      title: "Market Intelligence",
      description: "Regular market analysis and trend insights for strategic procurement decisions",
      features: ["Price Monitoring", "Trend Analysis", "Supply Chain Intelligence", "Risk Assessments"]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-primary">Trade Categories</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Comprehensive international procurement solutions across four specialized categories, 
          backed by our global network of verified manufacturers and suppliers.
        </p>
      </div>

      {/* Trade Categories */}
      <div className="grid lg:grid-cols-2 gap-8">
        {tradeCategories.map((category, index) => (
          <Card key={index} className="h-full group hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-3">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                {category.name}
              </CardTitle>
              <CardDescription className="text-base">{category.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="mb-3 text-primary">Product Subcategories:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {category.subcategories.map((sub, subIndex) => (
                    <Badge key={subIndex} variant="outline" className="text-xs justify-start">
                      {sub}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="mb-3 text-primary">Trade Services:</h4>
                <div className="flex flex-wrap gap-2">
                  {category.services.map((service, serviceIndex) => (
                    <Badge key={serviceIndex} variant="secondary" className="text-xs">
                      {service}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-3 text-primary">Key Sourcing Regions:</h4>
                <div className="flex flex-wrap gap-2">
                  {category.regions.map((region, regionIndex) => (
                    <Badge key={regionIndex} className="text-xs bg-primary/10 text-primary hover:bg-primary/20">
                      {region}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Procurement Services */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-primary mb-4">Comprehensive Procurement Services</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            End-to-end trade facilitation services designed to streamline your international procurement process
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {procurementServices.map((service, index) => (
            <Card key={index} className="group hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary text-lg">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Process Overview */}
      <div className="bg-muted rounded-xl p-8">
        <h3 className="text-center text-primary mb-8">Our Procurement Process</h3>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full mx-auto mb-4 flex items-center justify-center font-medium">
              1
            </div>
            <h4 className="mb-2 text-primary">Requirements Analysis</h4>
            <p className="text-sm text-muted-foreground">
              Detailed understanding of your specifications, quality standards, and delivery requirements.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full mx-auto mb-4 flex items-center justify-center font-medium">
              2
            </div>
            <h4 className="mb-2 text-primary">Supplier Matching</h4>
            <p className="text-sm text-muted-foreground">
              Identification and verification of the best-fit suppliers from our global network.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full mx-auto mb-4 flex items-center justify-center font-medium">
              3
            </div>
            <h4 className="mb-2 text-primary">Quality Assurance</h4>
            <p className="text-sm text-muted-foreground">
              Comprehensive quality control throughout the production and delivery process.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full mx-auto mb-4 flex items-center justify-center font-medium">
              4
            </div>
            <h4 className="mb-2 text-primary">Delivery & Support</h4>
            <p className="text-sm text-muted-foreground">
              Complete logistics coordination with ongoing support throughout the project lifecycle.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-primary/5 rounded-xl p-8">
        <h3 className="text-primary mb-4">Ready to Streamline Your Procurement?</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Partner with Ideall Solutionz for comprehensive international trade solutions. 
          Our expertise in quality sourcing and trade facilitation ensures your procurement success.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Start your procurement journey</p>
            <p className="text-primary font-medium">Contact our trade specialists</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Global sourcing network</p>
            <p className="text-primary font-medium">Verified manufacturer partners</p>
          </div>
        </div>
      </div>
    </div>
  );
}