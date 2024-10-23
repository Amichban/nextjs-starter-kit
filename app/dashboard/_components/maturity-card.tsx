import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function MaturityCard() {
  const currentLevel = 3
  const targetLevel = 5
  const progress = (currentLevel / targetLevel) * 100

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Maturity Level</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          View your organization&apos;s current data governance maturity level.
        </p>
        <div className="flex justify-between mb-2">
          <div>
            <p className="text-sm font-medium">Current Level</p>
            <p className="text-2xl font-bold">Level {currentLevel}</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium">Target Level</p>
            <p className="text-2xl font-bold">Level {targetLevel}</p>
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