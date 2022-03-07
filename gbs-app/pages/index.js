import { Sidebar } from "../components/Molecules/Sidebar/index"
import { Header } from "../components/Molecules/Header/index"
import { Footer } from "../components/Molecules/Footer/index"
import { Panel } from "../components/Atoms/Panel"

export default function Home() {
  return (
    <div className="page">
      <div className="wrapper">
        <Header />
        <main className="main">
          <Sidebar />
          <section>
            <div>
              <div className="section_left">
                <div className="section_left--header">
                  <h1 className="h1--primary">Variables</h1>
                </div>
                <div className="section_panel section_panel--left">
                  <Panel />
                </div>
              </div>
              <div className="section_right">
                <div className="section_right--header">
                  <h1 className="h1--primary">Results</h1>
                </div>
                <div className="section_panel section_panel--right">
                  <Panel />
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  )
}
