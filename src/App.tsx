import s from './App.module.scss'
import Background from './components/Background/Background'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

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
