import s from './App.module.scss'
import Background from './components/Background/Background'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <div className={s.page}>
      <Background />
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  )
}
