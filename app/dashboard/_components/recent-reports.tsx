import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileIcon, DownloadIcon } from "lucide-react"

interface Report {
  name: string
  downloadUrl: string
}

export default function RecentReports() {
  const reports: Report[] = [
    { name: "Q2 2023 Report", downloadUrl: "#" },
    { name: "Q1 2023 Report", downloadUrl: "#" },
  ]

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Recent Reports</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          Access your latest data governance maturity reports.
        </p>
        <ul className="space-y-3">
          {reports.map((report, index) => (
            <li key={index} className="flex items-center justify-between">
              <div className="flex items-center">
                <FileIcon className="h-5 w-5 text-muted-foreground mr-2" />
                <span>{report.name}</span>
              </div>
              <a
                href={report.downloadUrl}
                className="text-primary hover:text-primary-dark transition-colors"
                aria-label={`Download ${report.name}`}
              >
                <DownloadIcon className="h-5 w-5" />
              </a>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}