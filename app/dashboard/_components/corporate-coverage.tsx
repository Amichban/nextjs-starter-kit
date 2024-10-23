import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface CoverageProps {
  currentCoverage: number
  targetCoverage: number
}

export default function CorporateCoverage({ currentCoverage = 80, targetCoverage = 100 }: CoverageProps) {
  const progress = (currentCoverage / targetCoverage) * 100

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Corporate Coverage</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          Overview of your organization&apos;s data governance coverage.
        </p>
        <div className="flex justify-between mb-2">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Current Coverage</p>
            <p className="text-2xl font-bold">{currentCoverage}%</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-muted-foreground">Target Coverage</p>
            <p className="text-2xl font-bold">{targetCoverage}%</p>
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-primary h-2.5 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </CardContent>
    </Card>
  )
}
