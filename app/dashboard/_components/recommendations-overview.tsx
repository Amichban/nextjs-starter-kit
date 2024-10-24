"use client";

import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

type Category = 'Low' | 'Medium' | 'High'

interface InitiativeCardProps {
  title: string
  description: string
  impact: Category
  effort: Category
  status: number
  onViewDetails: () => void
}

const getCategoryColor = (category: Category) => {
  switch (category) {
    case 'High':
      return 'bg-[hsl(var(--chart-1))] text-white'
    case 'Medium':
      return 'bg-[hsl(var(--chart-3))] text-white'
    case 'Low':
      return 'bg-[hsl(var(--chart-2))] text-white'
    default:
      return 'bg-[hsl(var(--chart-5))] text-white'
  }
}

const InitiativeCard: React.FC<InitiativeCardProps> = ({
  title,
  description,
  impact,
  effort,
  status,
  onViewDetails
}) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <span className="text-sm font-medium mr-2">Impact:</span>
            <Badge variant="secondary" className={getCategoryColor(impact)}>
              {impact}
            </Badge>
          </div>
          <div className="flex items-center">
            <span className="text-sm font-medium mr-2">Effort:</span>
            <Badge variant="secondary" className={getCategoryColor(effort)}>
              {effort}
            </Badge>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">Status:</span>
          <span className="text-lg font-bold text-primary">{status}%</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-primary text-primary-foreground" onClick={onViewDetails}>
          View Details
        </Button>
      </CardFooter>
    </Card>
  )
}

const RecommendationsOverview: React.FC = () => {
  const initiatives = [
    {
      title: "Implement Data Quality Monitoring",
      description: "Set up automated data quality checks and monitoring processes.",
      impact: "High" as const,
      effort: "Medium" as const,
      status: 25
    },
    {
      title: "Establish Data Governance Committee",
      description: "Form a cross-functional team to oversee data governance initiatives.",
      impact: "High" as const,
      effort: "Low" as const,
      status: 0
    },
    {
      title: "Develop Data Catalog",
      description: "Create a comprehensive inventory of data assets across the organization.",
      impact: "Medium" as const,
      effort: "High" as const,
      status: 50
    },
    {
      title: "Implement Data Access Controls",
      description: "Enhance data security by implementing role-based access controls.",
      impact: "High" as const,
      effort: "Medium" as const,
      status: 10
    }
  ]

  return (
    <div className="container mx-auto p-4">
     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {initiatives.map((initiative, index) => (
          <InitiativeCard
            key={index}
            {...initiative}
            onViewDetails={() => console.log(`View details for ${initiative.title}`)}
          />
        ))}
      </div>
    </div>
  )
}

export default RecommendationsOverview