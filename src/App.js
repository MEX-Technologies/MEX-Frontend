import React from 'react';
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  Content,
  Button,
  Heading,
  Tag,
  FeatureFlags,
} from '@carbon/react';
import {
  Wallet,
  ShoppingCart,
  Globe,
  Security,
  Lightning,
  Money,
  ArrowRight,
  Menu,
  EarthAmericas,
  Growth,
} from '@carbon/icons-react';
import './App.css';

function App() {
  return (
    <FeatureFlags flags={{ 'enable-v11-release': true }}>
      <div className="app">
        <Header aria-label="MEX">
          <SkipToContent />
          <HeaderName href="#" prefix="MEX">
            On-Chain Banking
          </HeaderName>
          <HeaderNavigation aria-label="MEX">
            <HeaderMenuItem href="#features">Features</HeaderMenuItem>
            <HeaderMenuItem href="#how-it-works">How It Works</HeaderMenuItem>
            <HeaderMenuItem href="#benefits">Benefits</HeaderMenuItem>
          </HeaderNavigation>
          <HeaderGlobalBar>
            <HeaderGlobalAction aria-label="Menu" tooltipAlignment="end">
              <Menu size={20} />
            </HeaderGlobalAction>
          </HeaderGlobalBar>
        </Header>

        <Content>
          {/* Hero Section */}
          <section className="hero-section">
            <div className="container">
              <div className="hero-content">
                <div className="hero-logo">
                  <img src="/logo.jpeg" alt="MEX Logo" className="logo-image" />
                </div>
                <Heading className="hero-heading">
                  On-Chain is Banking.
                </Heading>
                <div className="hero-subheading">
                  <span className="hero-subheading-text">Payments. Cards. Crypto</span>
                </div>
                <p className="hero-description">
                  Join the movement with thousands of others.
                </p>
                <div className="hero-cta-text">
                  <Heading className="hero-cta-heading">
                    Say Good-bye to your Bank.
                  </Heading>
                </div>
                <div className="hero-actions">
                  <Button size="lg" renderIcon={ArrowRight}>
                    Get Started
                  </Button>
                  <Button kind="tertiary" size="lg">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="features-section">
            <div className="container">
              <div className="section-header">
                <Heading className="section-heading">Banking Services</Heading>
                <p className="section-description">
                  On-chain banking solutions for cross-border payments, remittances, 
                  and emerging markets
                </p>
              </div>
              <div className="features-grid">
                <div className="feature-card">
                  <div className="feature-icon">
                    <Wallet size={48} />
                  </div>
                  <Heading className="feature-heading">USDC Banking</Heading>
                  <p className="feature-description">
                    On-chain banking with USD Coin (USDC) for global remittances 
                    and emerging markets. Fully-backed stablecoin pegged to the US dollar. 
                    Instant, transparent, and secure for global citizens.
                  </p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">
                    <Money size={48} />
                  </div>
                  <Heading className="feature-heading">USDT Remittances</Heading>
                  <p className="feature-description">
                    Send remittances worldwide using Tether (USDT), especially 
                    powerful for emerging markets. Instant cross-border transfers 
                    with low fees, high liquidity, and 24/7 availability.
                  </p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">
                    <ShoppingCart size={48} />
                  </div>
                  <Heading className="feature-heading">Card Banking</Heading>
                  <p className="feature-description">
                    Bridge on-chain and real-world banking with card payments. 
                    Seamless credit and debit card support for instant 
                    processing and secure cross-border transactions.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section id="benefits" className="benefits-section">
            <div className="container">
              <div className="section-header">
                <Heading className="section-heading">Why Choose MEX?</Heading>
                <p className="section-description">
                  The on-chain bank built for global citizens and emerging markets. 
                  Experience borderless banking with blockchain technology and 
                  real-world payment solutions.
                </p>
              </div>
              <div className="benefits-grid">
                <div className="benefit-item">
                  <div className="benefit-icon-wrapper">
                    <Lightning size={32} className="benefit-icon" />
                  </div>
                  <Heading className="benefit-heading">Lightning Fast</Heading>
                  <p className="benefit-description">
                    Complete transactions in minutes, not days. 
                    Blockchain-powered transfers are instant.
                  </p>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon-wrapper">
                    <Security size={32} className="benefit-icon" />
                  </div>
                  <Heading className="benefit-heading">Secure & Safe</Heading>
                  <p className="benefit-description">
                    Bank-level security with encryption and 
                    blockchain transparency for every transaction.
                  </p>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon-wrapper">
                    <Globe size={32} className="benefit-icon" />
                  </div>
                  <Heading className="benefit-heading">For Global Citizens & Emerging Markets</Heading>
                  <p className="benefit-description">
                    Built for global citizens and emerging markets. Send remittances 
                    anywhere in the world, supporting multiple currencies 
                    and regions without borders. Financial inclusion for all.
                  </p>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon-wrapper">
                    <Money size={32} className="benefit-icon" />
                  </div>
                  <Heading className="benefit-heading">Low Fees</Heading>
                  <p className="benefit-description">
                    Competitive rates with transparent pricing. 
                    No hidden fees or surprise charges.
                  </p>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon-wrapper">
                    <Growth size={32} className="benefit-icon" />
                  </div>
                  <Heading className="benefit-heading">Emerging Markets Focus</Heading>
                  <p className="benefit-description">
                    On-chain banking designed for emerging markets. 
                    Financial inclusion through accessible, low-cost 
                    cross-border payment solutions.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section id="how-it-works" className="how-it-works-section">
            <div className="container">
              <div className="section-header">
                <Heading className="section-heading">How It Works</Heading>
                <p className="section-description">
                  Start banking without borders in three simple steps
                </p>
              </div>
              <div className="steps-grid">
                <div className="step-item">
                  <div className="step-number">1</div>
                  <Heading className="step-heading">Join as Global Citizen</Heading>
                  <p className="step-description">
                    Sign up in minutes with your email and 
                    complete identity verification. Open your 
                    on-chain bank account instantly.
                  </p>
                </div>
                <div className="step-item">
                  <div className="step-number">2</div>
                  <Heading className="step-heading">Choose Banking Method</Heading>
                  <p className="step-description">
                    Select USDC, USDT, or card banking 
                    for your cross-border payments and remittances.
                  </p>
                </div>
                <div className="step-item">
                  <div className="step-number">3</div>
                  <Heading className="step-heading">Bank Without Borders</Heading>
                  <p className="step-description">
                    Send remittances and payments instantly across borders 
                    with real-time tracking. Experience true borderless banking.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="cta-section">
            <div className="container">
              <div className="cta-content">
                <Heading className="cta-heading">
                  Ready to Bank Without Borders?
                </Heading>
                <p className="cta-description">
                  Join thousands of global citizens and emerging market users 
                  using MEX for cross-border payments and remittances. 
                  Open your on-chain bank account today.
                </p>
                <Button size="lg" renderIcon={ArrowRight}>
                  Join the waitlist
                </Button>
              </div>
            </div>
          </section>
        </Content>
      </div>
    </FeatureFlags>
  );
}

export default App;

