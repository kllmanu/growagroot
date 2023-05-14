import dynamic from 'next/dynamic'

const GameWrapper = dynamic(
  () => import('../components/GameWrapper'),
  { ssr: false }
)
export default function Home() {
  return (
    <main className="bg-[#412126]">
      <GameWrapper />
    </main>
  );
}


// header: #342326