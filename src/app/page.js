import Card from '@/components/Card'
import ContainProducts from '@/components/ContainProducts'
import Navbar from '@/components/Navbar'


export default function Home() {
  return (
     <div>
      <Navbar/>
       <main className="flex flex-col items-center h-screen pt-44 relative bg-slate-800">
        <h1 className='text-3xl font-semibold absolute top-28 text-white'>productos a vender</h1>
        <ContainProducts/>
      </main>
     </div>

  )
}
