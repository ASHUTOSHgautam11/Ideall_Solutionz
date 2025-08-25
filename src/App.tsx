import { useState } from 'react';
import { Button } from './components/ui/button';
import { HomePage } from './components/HomePage';
import { OurHistory } from './components/OurHistory';
import { TradeCategories } from './components/TradeCategories';
import { PartnerWithUs } from './components/PartnerWithUs';
import { CarpetCarpetTiles } from './components/CarpetCarpetTiles';
import { NylonCarpetiles } from './components/NylonCarpetiles';
import { Grass } from './components/Grass';
import { VinylFlooringLaminates } from './components/VinylFlooringLaminates';
import { EngineeredSolidWood } from './components/EngineeredSolidWood';
import { DeckingTiles } from './components/DeckingTiles';
import { RaisedFloor } from './components/RaisedFloor';
import { UrbanConcreteCollection } from './components/collections/UrbanConcreteCollection';
import { ProfessionalTextureCollection } from './components/collections/ProfessionalTextureCollection';
import { ExecutiveComfortCollection } from './components/collections/ExecutiveComfortCollection';
import { PerformancePlusCollection } from './components/collections/PerformancePlusCollection';
import { ModernWeaveCollection } from './components/collections/ModernWeaveCollection';
import { AcousticSolutionCollection } from './components/collections/AcousticSolutionCollection';
import logoImage from 'figma:asset/4cfa79314b08f88112ddf1fc78f8dd1354168b69.png';

// Simple navigation component
function SimpleNavigation({ currentPage, onPageChange }: { currentPage: string; onPageChange: (page: string) => void }) {
  const pages = [
    { id: 'home', label: 'Home' },
    { id: 'history', label: 'Our Story' },
    { id: 'products', label: 'Product Categories' },
    { id: 'contact', label: 'Connect With Us' }
  ];

  return (
    <nav className="border-b bg-background sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img 
              src={logoImage} 
              alt="Ideall Solutionz" 
              className="h-10 w-auto mr-4"
              onClick={() => onPageChange('home')}
              style={{ cursor: 'pointer' }}
            />
            <div className="hidden sm:block">
              <h2 className="text-primary">Ideall Solutionz</h2>
              <p className="text-xs text-muted-foreground">Our Sourcing, Your Strength</p>
            </div>
          </div>
          <div className="flex space-x-1">
            {pages.map((page) => (
              <Button
                key={page.id}
                variant={currentPage === page.id ? "default" : "ghost"}
                onClick={() => onPageChange(page.id)}
                size="sm"
                className="text-xs sm:text-sm"
              >
                {page.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleFlooringCategorySelect = (category: string) => {
    setCurrentPage(`flooring-${category}`);
  };

  const handleBackToTradeCategories = () => {
    setCurrentPage('products');
  };

  const handleNylonCarpetileSelect = () => {
    setCurrentPage('nylon-carpetiles');
  };

  const handleBackToCarpetTiles = () => {
    setCurrentPage('flooring-carpet-carpet-tiles');
  };

  const handleNylonCollectionSelect = (collectionId: string) => {
    setCurrentPage(`collection-${collectionId}`);
  };

  const handleBackToNylonCarpetiles = () => {
    setCurrentPage('nylon-carpetiles');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'history':
        return <OurHistory />;
      case 'products':
        return <TradeCategories onFlooringCategorySelect={handleFlooringCategorySelect} />;
      case 'contact':
        return <PartnerWithUs />;
      case 'flooring-carpet-carpet-tiles':
        return <CarpetCarpetTiles onBack={handleBackToTradeCategories} onNylonCarpetileSelect={handleNylonCarpetileSelect} />;
      case 'nylon-carpetiles':
        return <NylonCarpetiles onBack={handleBackToCarpetTiles} onCollectionSelect={handleNylonCollectionSelect} />;
      case 'collection-urban-concrete':
        return <UrbanConcreteCollection onBack={handleBackToNylonCarpetiles} />;
      case 'collection-professional-texture':
        return <ProfessionalTextureCollection onBack={handleBackToNylonCarpetiles} />;
      case 'collection-executive-comfort':
        return <ExecutiveComfortCollection onBack={handleBackToNylonCarpetiles} />;
      case 'collection-performance-plus':
        return <PerformancePlusCollection onBack={handleBackToNylonCarpetiles} />;
      case 'collection-modern-weave':
        return <ModernWeaveCollection onBack={handleBackToNylonCarpetiles} />;
      case 'collection-acoustic-solution':
        return <AcousticSolutionCollection onBack={handleBackToNylonCarpetiles} />;
      case 'flooring-grass':
        return <Grass onBack={handleBackToTradeCategories} />;
      case 'flooring-vinyl-laminates':
        return <VinylFlooringLaminates onBack={handleBackToTradeCategories} />;
      case 'flooring-engineered-solid-wood':
        return <EngineeredSolidWood onBack={handleBackToTradeCategories} />;
      case 'flooring-decking-tiles':
        return <DeckingTiles onBack={handleBackToTradeCategories} />;
      case 'flooring-raised-floor':
        return <RaisedFloor onBack={handleBackToTradeCategories} />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SimpleNavigation currentPage={currentPage} onPageChange={setCurrentPage} />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {renderPage()}
      </main>
      
      <footer className="bg-muted mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center mb-4">
              <img 
                src={logoImage} 
                alt="Ideall Solutionz" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-primary">Ideall Solutionz Singapore PTE LTD</p>
            <p className="text-sm text-muted-foreground">
              International Trade Organization • Global Procurement Solutions
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs text-muted-foreground max-w-4xl mx-auto">
              <div>
                <h4 className="text-primary mb-2">Floorings</h4>
                <p>Premium global sourcing</p>
              </div>
              <div>
                <h4 className="text-primary mb-2">Furniture</h4>
                <p>Curated collections worldwide</p>
              </div>
              <div>
                <h4 className="text-primary mb-2">Fabrics</h4>
                <p>Luxury textiles & materials</p>
              </div>
              <div>
                <h4 className="text-primary mb-2">Fashion Walls</h4>
                <p>Innovative wall solutions</p>
              </div>
            </div>
            <div className="border-t border-border pt-4 mt-6">
              <p className="text-xs text-muted-foreground font-medium mb-2">
                Our Sourcing, Your Strength
              </p>
              <p className="text-xs text-muted-foreground">
                &copy; 2025 Ideall Solutionz Singapore PTE LTD. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}