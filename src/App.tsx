import Hero from './components/Hero'
import Pricing from './components/Pricing'
import Gallery from './components/Gallery'

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Hero />
      <Pricing />
      <Gallery />
    </div>
  );
}
