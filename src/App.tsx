import { useState } from 'react'
import { motion } from 'framer-motion'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import RightPanel from './components/RightPanel'
import TrafficFlowTable from './components/TrafficFlowTable'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <motion.div
        initial={{ x: -280 }}
        animate={{ x: sidebarOpen ? 0 : -280 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed left-0 top-0 h-screen w-70 bg-white shadow-lg z-30 overflow-y-auto"
      >
        <Sidebar onToggle={() => setSidebarOpen(!sidebarOpen)} />
      </motion.div>

      {/* Main Content Area */}
      <div className={`flex-1 flex transition-all duration-300 ${sidebarOpen ? 'ml-70' : 'ml-0'}`}>
        <div className="flex-1 flex flex-col min-h-screen">
          {/* Primary Content */}
          <div className="flex-1">
            <MainContent />
            <div className="p-6">
              <TrafficFlowTable />
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-80 border-l border-gray-200 bg-white h-screen overflow-y-auto sticky top-0">
          <RightPanel />
        </div>
      </div>
    </div>
  )
}

export default App 