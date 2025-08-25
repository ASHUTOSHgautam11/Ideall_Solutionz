import logoImage from 'figma:asset/4cfa79314b08f88112ddf1fc78f8dd1354168b69.png';

export function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8">
        <div className="space-y-6">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center justify-center">
              <img 
                src={logoImage} 
                alt="Ideall Solutionz - Our Sourcing, Your Strength" 
                className="h-32 w-auto"
              />
            </div>
          </div>
          <h1 className="text-4xl text-primary max-w-4xl">Your Global Procurement Partner for Premium Interior Solutions</h1>
          <p className="text-xl text-muted-foreground max-w-4xl">
            Ideall Solutionz specializes in international trade and procurement solutions for 
            Floorings, Furniture, Fabrics, and Fashion Walls. We navigate global markets to source 
            the finest products while ensuring quality control and seamless trade facilitation.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="bg-secondary/20 px-6 py-3 rounded-full">
            <span className="text-primary font-medium">Global Sourcing Network</span>
          </div>
          <div className="bg-secondary/20 px-6 py-3 rounded-full">
            <span className="text-primary font-medium">Quality Assurance</span>
          </div>
          <div className="bg-secondary/20 px-6 py-3 rounded-full">
            <span className="text-primary font-medium">Trade Facilitation</span>
          </div>
        </div>
      </div>

      {/* Our Trade Categories */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-primary mb-4">Our Trade Specializations</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Four core categories where we excel in international sourcing, quality control, and procurement solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="group p-6 bg-card rounded-lg border hover:shadow-lg transition-all duration-300 hover:border-accent/50">
            <div className="w-16 h-16 bg-accent/20 rounded-lg mb-4 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
              <div className="w-8 h-8 bg-accent rounded"></div>
            </div>
            <h3 className="mb-3 text-primary">Floorings</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Premium flooring solutions sourced from global manufacturers with stringent quality standards.
            </p>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Carpet & Carpet Tiles</li>
              <li>• Vinyl Floorings & Laminates</li>
              <li>• Engineered & Solid Wood</li>
            </ul>
          </div>

          <div className="group p-6 bg-card rounded-lg border hover:shadow-lg transition-all duration-300 hover:border-accent/50">
            <div className="w-16 h-16 bg-accent/20 rounded-lg mb-4 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
              <div className="w-8 h-8 bg-accent rounded"></div>
            </div>
            <h3 className="mb-3 text-primary">Furniture</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Curated furniture collections from renowned manufacturers worldwide with comprehensive quality verification.
            </p>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Residential Collections</li>
              <li>• Commercial Solutions</li>
              <li>• Custom Manufacturing</li>
            </ul>
          </div>

          <div className="group p-6 bg-card rounded-lg border hover:shadow-lg transition-all duration-300 hover:border-accent/50">
            <div className="w-16 h-16 bg-accent/20 rounded-lg mb-4 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
              <div className="w-8 h-8 bg-accent rounded"></div>
            </div>
            <h3 className="mb-3 text-primary">Fabrics</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Luxury textiles and specialty fabrics sourced from premier mills with rigorous quality testing.
            </p>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Upholstery Materials</li>
              <li>• Window Treatments</li>
              <li>• Technical Fabrics</li>
            </ul>
          </div>

          <div className="group p-6 bg-card rounded-lg border hover:shadow-lg transition-all duration-300 hover:border-accent/50">
            <div className="w-16 h-16 bg-accent/20 rounded-lg mb-4 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
              <div className="w-8 h-8 bg-accent rounded"></div>
            </div>
            <h3 className="mb-3 text-primary">Fashion Walls</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Innovative wall solutions and decorative systems from leading global innovators in architectural design.
            </p>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• 3D Wall Panels</li>
              <li>• Decorative Cladding</li>
              <li>• Architectural Elements</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Our Expertise */}
      <div className="bg-muted rounded-xl p-12 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-primary mb-4">Why Partner with Ideall Solutionz?</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Our expertise in international trade, combined with our commitment to quality and reliability, 
            makes us the ideal partner for your procurement needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
              <div className="w-8 h-8 bg-primary rounded-full"></div>
            </div>
            <h4 className="mb-3 text-primary">Global Network</h4>
            <p className="text-sm text-muted-foreground">
              Established relationships with premium manufacturers and suppliers across key markets worldwide, 
              ensuring access to the finest products at competitive prices.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
              <div className="w-8 h-8 bg-primary rounded-full"></div>
            </div>
            <h4 className="mb-3 text-primary">Quality Assurance</h4>
            <p className="text-sm text-muted-foreground">
              Comprehensive quality control processes including factory audits, product testing, and 
              compliance verification to ensure every item meets international standards.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
              <div className="w-8 h-8 bg-primary rounded-full"></div>
            </div>
            <h4 className="mb-3 text-primary">Trade Expertise</h4>
            <p className="text-sm text-muted-foreground">
              Expert navigation of international trade regulations, customs procedures, and logistics 
              to ensure smooth and efficient procurement processes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}