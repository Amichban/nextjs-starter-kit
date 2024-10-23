import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { BarChartComponent } from './_components/bar-chart'
import { BarChartBetter } from './_components/bar-chart-better'
import MaturityCard from './_components/maturity-card'
import UpcomingAssessments from './_components/upcoming-assessments'
import RecentReports from './_components/recent-reports'
import CorporateCoverage from './_components/corporate-coverage'
import DataGovernanceTable from './_components/data-governance-table'
import RecommendationsOverview from './_components/recommendations-overview'

export default async function Dashboard() {
  return (
    <div className='flex flex-col px-4 pt-4 gap-4'>
      {/* Title for the Cards Section */}
      <h2 className="text-xl font-bold mb-4">Overview</h2>
      <div className='flex flex-row justify-center items-start flex-nowrap gap-4'>
        <MaturityCard />
        <UpcomingAssessments />
        <RecentReports />
        <CorporateCoverage currentCoverage={20} targetCoverage={100} />
      </div>
      
      {/* Title for the Recent Assessments Section */}
      <h2 className="text-xl font-bold mb-4">Recent Assessments</h2>
      <DataGovernanceTable />
      
      {/* Title for the Trends Section */}
      <h2 className="text-xl font-bold mb-4">Trends</h2>
      <div className='grid grid-cols-2 gap-4'>
        <BarChartComponent />
        <BarChartBetter />
      </div>
      
      {/* Title for the Recommendations Section */}
      <h2 className="text-xl font-bold mb-4">Recommendations</h2>
      <div className='flex flex-row justify-center items-start flex-nowrap gap-4'>
        <RecommendationsOverview />
      </div>
    </div>
  )
}
