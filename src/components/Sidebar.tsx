import React from 'react'
import { motion } from 'framer-motion'
import { 
  ChevronRightIcon, 
  HomeIcon, 
  DocumentIcon, 
  ChartBarIcon,
  CogIcon,
  UserIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

interface SidebarProps {
  onToggle: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ onToggle }) => {
  const menuItems = [
    { icon: HomeIcon, label: 'Home', active: false },
    { icon: DocumentIcon, label: 'Documents', active: true },
    { icon: ChartBarIcon, label: 'Analytics', active: false },
    { icon: UserIcon, label: 'Users', active: false },
    { icon: ClockIcon, label: 'Recent', active: false },
    { icon: CogIcon, label: 'Settings', active: false },
  ]

  return (
    <div className="h-full w-70 bg-white border-r border-gray-200 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">I</span>
            </div>
            <span className="font-semibold text-gray-900">INTUIT</span>
          </div>
          <button 
            onClick={onToggle}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <ChevronRightIcon className="h-4 w-4 text-gray-500" />
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a
                href="#"
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  item.active
                    ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Document Tree */}
      <div className="p-4 border-t border-gray-200">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
          Documents
        </h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-sm">
            <ChevronRightIcon className="h-4 w-4 text-gray-400" />
            <DocumentIcon className="h-4 w-4 text-gray-400" />
            <span className="text-gray-700">Main Document</span>
          </div>
          <div className="flex items-center space-x-2 text-sm ml-4">
            <ChevronRightIcon className="h-4 w-4 text-gray-400" />
            <span className="text-gray-700">Account Information</span>
          </div>
          <div className="flex items-center space-x-2 text-sm ml-4">
            <ChevronRightIcon className="h-4 w-4 text-gray-400" />
            <span className="text-gray-700">Requested Services</span>
          </div>
          <div className="flex items-center space-x-2 text-sm ml-4">
            <ChevronRightIcon className="h-4 w-4 text-gray-400" />
            <span className="text-blue-600 font-medium">Traffic Flow Details</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar 