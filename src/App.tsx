export default function App() {
  return <h1>RivenTeam 리디자인 시작</h1>;
import Gallery from './components/Gallery'

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Hero />
      <Pricing />
      <Gallery />  {/* 여기 추가 */}
    </div>
  );
}
