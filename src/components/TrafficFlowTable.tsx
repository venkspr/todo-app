import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { CheckCircleIcon, XCircleIcon, ClockIcon } from '@heroicons/react/24/outline'

const TrafficFlowTable: React.FC = () => {
  const trafficData = [
    {
      id: 1,
      source: 'Class NAT GW',
      destination: 'Regional Health',
      throughput: '2.5 ms',
      latency: '1950 RPS',
      status: 'healthy',
      health: 'All regions healthy'
    },
    {
      id: 2,
      source: 'APIM A2B',
      destination: 'All regions healthy',
      throughput: '10.2 ms',
      latency: '1160 RPS',
      status: 'healthy',
      health: 'All regions healthy'
    },
    {
      id: 3,
      source: 'APIM App1',
      destination: 'All regions healthy',
      throughput: '3.3 ms',
      latency: '1150 RPS',
      status: 'healthy',
      health: 'All regions healthy'
    },
    {
      id: 4,
      source: 'APIM Envoy',
      destination: 'All regions healthy',
      throughput: '0.65 %',
      latency: '1150 RPS',
      status: 'warning',
      health: 'Some regions degraded'
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy':
        return <CheckCircleIcon className="h-5 w-5 text-green-500" />
      case 'warning':
        return <ClockIcon className="h-5 w-5 text-yellow-500" />
      case 'error':
        return <XCircleIcon className="h-5 w-5 text-red-500" />
      default:
        return <CheckCircleIcon className="h-5 w-5 text-gray-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy':
        return 'text-green-600 bg-green-50'
      case 'warning':
        return 'text-yellow-600 bg-yellow-50'
      case 'error':
        return 'text-red-600 bg-red-50'
      default:
        return 'text-gray-600 bg-gray-50'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Traffic Flow Details (6 hops)</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Source</TableHead>
                <TableHead>Destination</TableHead>
                <TableHead>Throughput</TableHead>
                <TableHead>Latency</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Health</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {trafficData.map((row, index) => (
                <motion.tr
                  key={row.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <TableCell className="font-medium">{row.source}</TableCell>
                  <TableCell>{row.destination}</TableCell>
                  <TableCell>{row.throughput}</TableCell>
                  <TableCell>{row.latency}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(row.status)}
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(row.status)}`}>
                        {row.status}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm text-gray-600">{row.health}</span>
                  </TableCell>
                </motion.tr>
              ))}
            </TableBody>
          </Table>
          
          {/* Summary Icons */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-center space-x-8">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                  <div className="w-6 h-6 bg-blue-500 rounded"></div>
                </div>
                <span className="text-xs text-gray-500">NAT GW</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-2">
                  <div className="w-6 h-6 bg-green-500 rounded"></div>
                </div>
                <span className="text-xs text-gray-500">ALB</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-2">
                  <div className="w-6 h-6 bg-yellow-500 rounded"></div>
                </div>
                <span className="text-xs text-gray-500">APIM</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-2">
                  <div className="w-6 h-6 bg-purple-500 rounded"></div>
                </div>
                <span className="text-xs text-gray-500">App1</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-2">
                  <div className="w-6 h-6 bg-red-500 rounded"></div>
                </div>
                <span className="text-xs text-gray-500">Envoy</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-2">
                  <div className="w-6 h-6 bg-gray-500 rounded"></div>
                </div>
                <span className="text-xs text-gray-500">Service</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default TrafficFlowTable 