import { Fragment } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { publicRoutes } from "./routes"
import { DedaultLayout } from "./components/Layout"

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component
                        let Layout = DedaultLayout
                        
                        if (route.layout) {
                            Layout = route.layout 
                        } else if (route.layout === null) {
                            Layout = Fragment
                        }
                        
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            ></Route>
                        )
                    })}
                </Routes>
            </div>
        </Router>
    )
}

export default App
