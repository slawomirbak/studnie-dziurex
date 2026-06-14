import s from './App.module.scss'
import Background from './components/Background'
import Header from './components/Header'
import Hero from './components/Hero'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className={s.page}>
      <Background />
      <Header />
      <main>
        <Hero />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
