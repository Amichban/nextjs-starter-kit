import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon } from "lucide-react"

interface Assessment {
  name: string
  date: string
}

export default function UpcomingAssessments() {
  const assessments: Assessment[] = [
    { name: "Annual Assessment", date: "June 15, 2024" },
    { name: "Quarterly Review", date: "September 30, 2023" },
  ]

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Upcoming Assessments</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          View and schedule your upcoming data governance assessments.
        </p>
        <ul className="space-y-3">
          {assessments.map((assessment, index) => (
            <li key={index} className="flex items-center justify-between">
              <div className="flex items-center">
                <CalendarIcon className="h-5 w-5 text-muted-foreground mr-2" />
                <span>{assessment.name}</span>
              </div>
              <span className="text-sm text-muted-foreground">{assessment.date}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}