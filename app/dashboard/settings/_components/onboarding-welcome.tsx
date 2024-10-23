import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Clock } from "lucide-react"

export default function OnboardingWelcome() {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <div className="text-sm font-medium text-muted-foreground mb-2">onboarding</div>
        <CardTitle className="text-3xl font-bold mb-4">Getting Started with Data Governance Pulse</CardTitle>
        <p className="text-muted-foreground">
          To start using Data Governance Pulse, add the required information to your
          business profile.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
            Start your company profile
            <span className="ml-2">→</span>
          </Button>
          <Button variant="ghost" className="text-indigo-600 hover:text-indigo-700">
            Get to know the functions
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start space-x-4">
            <FileText className="w-6 h-6 text-muted-foreground" />
            <div>
              <h3 className="font-semibold mb-2">What information do I need?</h3>
              <p className="text-sm text-muted-foreground">
                You will be asked to provide standard information about your business, such as
                contact information and industry. Set up your panelist group (Colleagues filling in the surveys) and your Stakehoders group (Stakeholders being notified and accessing surveys results).
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Clock className="w-6 h-6 text-muted-foreground" />
            <div>
              <h3 className="font-semibold mb-2">How long does it take?</h3>
              <p className="text-sm text-muted-foreground">
                Complete your business profile in less than 5 minutes and start sending your first assessment right away.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}