import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  PlusIcon, 
  DocumentIcon, 
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'

const MainContent: React.FC = () => {
  return (
    <div className="flex-1 bg-white">
      {/* Header */}
      <div className="border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <DocumentIcon className="h-6 w-6 text-gray-500" />
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Account Information</h1>
              <p className="text-sm text-gray-500">Manage account details and service requests</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <PlusIcon className="h-4 w-4 mr-1" />
              Add Request
            </Button>
            <Button size="sm">
              Save Changes
            </Button>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="p-6 space-y-6">
        {/* Service Dependency Graph */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Service Dependency Graph</CardTitle>
            <CardDescription>
              Network topology and service relationships
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              {/* Network Diagram */}
              <div className="w-full h-64 bg-gray-50 rounded-lg p-6 mb-4">
                <div className="relative h-full">
                  {/* Service Nodes */}
                  <div className="absolute top-8 left-8 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                    N
                  </div>
                  <div className="absolute top-8 left-32 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                    A
                  </div>
                  <div className="absolute top-16 left-56 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                    P
                  </div>
                  <div className="absolute top-8 left-80 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                    1
                  </div>
                  <div className="absolute top-32 left-80 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                    2
                  </div>
                  <div className="absolute top-20 left-104 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                    E
                  </div>
                  <div className="absolute top-20 left-128 w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                    S
                  </div>
                  
                  {/* Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full">
                    <defs>
                      <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                              refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#10b981" />
                      </marker>
                      <marker id="arrowhead-warning" markerWidth="10" markerHeight="7" 
                              refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#f59e0b" />
                      </marker>
                    </defs>
                    
                    {/* NAT GW -> ALB */}
                    <line x1="68" y1="32" x2="128" y2="32" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrowhead)"/>
                    
                    {/* ALB -> APIM */}
                    <line x1="176" y1="32" x2="224" y2="40" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrowhead)"/>
                    
                    {/* APIM -> App1 */}
                    <line x1="280" y1="40" x2="320" y2="32" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrowhead)"/>
                    
                    {/* APIM -> App2 */}
                    <line x1="280" y1="40" x2="320" y2="56" stroke="#f59e0b" strokeWidth="3" markerEnd="url(#arrowhead-warning)"/>
                    
                    {/* App1 -> Envoy */}
                    <line x1="368" y1="32" x2="416" y2="44" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrowhead)"/>
                    
                    {/* App2 -> Envoy */}
                    <line x1="368" y1="56" x2="416" y2="44" stroke="#f59e0b" strokeWidth="3" markerEnd="url(#arrowhead-warning)"/>
                    
                    {/* Envoy -> Service */}
                    <line x1="464" y1="44" x2="512" y2="44" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrowhead)"/>
                  </svg>
                  
                  {/* Service Labels */}
                  <div className="absolute top-2 left-4 text-sm font-medium text-gray-700">NAT GW</div>
                  <div className="absolute top-2 left-32 text-sm font-medium text-gray-700">ALB</div>
                  <div className="absolute top-2 left-56 text-sm font-medium text-gray-700">APIM</div>
                  <div className="absolute top-2 left-80 text-sm font-medium text-gray-700">App1</div>
                  <div className="absolute top-48 left-80 text-sm font-medium text-gray-700">App2</div>
                  <div className="absolute top-2 left-104 text-sm font-medium text-gray-700">Envoy</div>
                  <div className="absolute top-2 left-128 text-sm font-medium text-gray-700">Service</div>
                </div>
              </div>
              
              {/* Legend */}
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <span className="font-medium">Healthy Connection</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                  <span className="font-medium">Warning Connection</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <span className="font-medium">Error Connection</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Service Status Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <ExclamationTriangleIcon className="h-5 w-5 text-yellow-500" />
              <span>Service Status</span>
            </CardTitle>
            <CardDescription>
              Current status of requested services
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-medium text-green-800">Account Verification</span>
                </div>
                <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">
                  Completed
                </span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <ExclamationTriangleIcon className="h-5 w-5 text-yellow-500" />
                  <span className="text-sm font-medium text-yellow-800">Service Configuration</span>
                </div>
                <span className="text-xs text-yellow-600 bg-yellow-100 px-2 py-1 rounded-full">
                  In Progress
                </span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <DocumentIcon className="h-5 w-5 text-blue-500" />
                  <span className="text-sm font-medium text-blue-800">Documentation Review</span>
                </div>
                <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                  Pending
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default MainContent 