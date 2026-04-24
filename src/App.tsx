import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from './pages/Index'
import Dashboard from './pages/Dashboard'
import Investments from './pages/Investments'
import TokenDetails from './pages/TokenDetails'
import BuyTokens from './pages/BuyTokens'
import Wallet from './pages/Wallet'
import Auth from './pages/Auth'
import Certificates from './pages/Certificates'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/investments" element={<Investments />} />
        <Route path="/token/:id" element={<TokenDetails />} />
        <Route path="/buy-tokens" element={<BuyTokens />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
