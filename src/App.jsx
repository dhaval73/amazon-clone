
import { Route, Routes } from 'react-router'
import Body_layout from './components/body_components/Body_layout'
import Home_page from './components/body_components/Home/Home_page'
import Header_page from './components/header_components/Header_page'
import Footer_page from './components/footer_components/Footer_page'
import { ProductProvider } from './provider/ProductProvider'


function App() {
  return (<>
 <Header_page /> 
    <Routes>
      <Route path="/" element={<Body_layout />}>
        <Route index element={
          <ProductProvider>
            <Home_page />
          </ProductProvider>
          } />
        {/* <Route path="settings" element={<Settings />} /> */}
      </Route>
    </Routes>
    <Footer_page/>
  </>
  )
}

export default App