import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Alert, AlertDescription } from './ui/alert'
import { Separator } from './ui/separator'
import { ScrollArea } from './ui/scroll-area'
import {
  FileText,
  AlertCircle,
  Lightbulb,
  CheckSquare,
  TrendingUp,
  ArrowRight,
  Download
} from 'lucide-react'
import {
  useContentSections,
  useContentGaps,
  useCopyRecommendations,
  useImplementationSteps
} from '../hooks/useContentAnalysis'
import { Button } from './ui/button'

export function ContentStrategyDashboard() {
  const { sections, loading: sectionsLoading } = useContentSections()
  const { gaps, loading: gapsLoading } = useContentGaps()
  const { recommendations, loading: recsLoading } = useCopyRecommendations()
  const { steps, loading: stepsLoading } = useImplementationSteps()
  const [activeTab, setActiveTab] = useState('overview')

  const loading = sectionsLoading || gapsLoading || recsLoading || stepsLoading

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'destructive'
      case 'Medium': return 'default'
      case 'Low': return 'secondary'
      default: return 'default'
    }
  }

  const exportToText = () => {
    let content = '# SPROUT VENTURES ACADEMY - CONTENT STRATEGY ANALYSIS\n\n'
    content += '## EXECUTIVE SUMMARY\n\n'
    content += `Total Content Sections Analyzed: ${sections.length}\n`
    content += `Strategic Gaps Identified: ${gaps.length}\n`
    content += `High Priority Gaps: ${gaps.filter(g => g.priority === 'High').length}\n`
    content += `Copy Recommendations: ${recommendations.length}\n`
    content += `Implementation Steps: ${steps.length}\n\n`

    content += '## 1. CONTENT INVENTORY REPORT\n\n'
    sections.forEach((section, idx) => {
      content += `### ${idx + 1}. ${section.section_name} (${section.section_type})\n`
      content += `**Current Copy:** ${section.content_text}\n`
      content += `**Character Count:** ${section.character_count}\n\n`
    })

    content += '\n## 2. GAP ANALYSIS\n\n'
    gaps.forEach((gap, idx) => {
      content += `### ${idx + 1}. ${gap.gap_category} [${gap.priority} Priority - Impact: ${gap.impact_score}/10]\n`
      content += `**Current State:** ${gap.current_state}\n`
      content += `**Recommended Addition:** ${gap.recommended_addition}\n`
      content += `**Placement:** ${gap.placement_suggestion}\n\n`
    })

    content += '\n## 3. COPY RECOMMENDATIONS\n\n'
    recommendations.forEach((rec, idx) => {
      content += `### ${idx + 1}. ${rec.section_reference}\n`
      content += `**Conversion Goal:** ${rec.conversion_goal}\n`
      if (rec.original_copy) {
        content += `**Original:** ${rec.original_copy}\n`
      }
      content += `**Recommended:** ${rec.recommended_copy}\n`
      content += `**Rationale:** ${rec.rationale}\n\n`
    })

    content += '\n## 4. IMPLEMENTATION GUIDE\n\n'
    steps.forEach((step) => {
      content += `### Step ${step.step_number}: ${step.section_affected}\n`
      content += `**Action:** ${step.action_required}\n`
      if (step.current_content) {
        content += `**Current:** ${step.current_content}\n`
      }
      if (step.new_content) {
        content += `**New:** ${step.new_content}\n`
      }
      if (step.formatting_notes) {
        content += `**Notes:** ${step.formatting_notes}\n`
      }
      content += '\n'
    })

    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'sprout-ventures-content-strategy.txt'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-slate-200">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                Content Strategy Analysis
              </h1>
              <p className="text-lg text-slate-600">
                Sprout Ventures Academy - Comprehensive Website Audit
              </p>
              <p className="text-sm text-slate-500 mt-2">
                Analysis Date: {new Date().toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
            <Button onClick={exportToText} className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export Report
            </Button>
          </div>
        </div>

        {loading ? (
          <Card>
            <CardContent className="py-12">
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <span className="ml-3 text-slate-600">Loading analysis data...</span>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 bg-white p-1 rounded-lg shadow">
              <TabsTrigger value="overview" className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                <span className="hidden sm:inline">Overview</span>
              </TabsTrigger>
              <TabsTrigger value="inventory" className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span className="hidden sm:inline">Inventory</span>
              </TabsTrigger>
              <TabsTrigger value="gaps" className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                <span className="hidden sm:inline">Gaps</span>
              </TabsTrigger>
              <TabsTrigger value="recommendations" className="flex items-center gap-2">
                <Lightbulb className="w-4 h-4" />
                <span className="hidden sm:inline">Copy</span>
              </TabsTrigger>
              <TabsTrigger value="implementation" className="flex items-center gap-2">
                <CheckSquare className="w-4 h-4" />
                <span className="hidden sm:inline">Steps</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                    Executive Summary
                  </CardTitle>
                  <CardDescription>
                    Key findings and strategic recommendations for Sprout Ventures Academy
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-slate-200">
                      <div className="text-2xl font-bold text-blue-600">{sections.length}</div>
                      <div className="text-sm text-slate-600">Content Sections</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-slate-200">
                      <div className="text-2xl font-bold text-orange-600">
                        {gaps.filter(g => g.priority === 'High').length}
                      </div>
                      <div className="text-sm text-slate-600">High Priority Gaps</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-slate-200">
                      <div className="text-2xl font-bold text-green-600">{recommendations.length}</div>
                      <div className="text-sm text-slate-600">Copy Updates</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-slate-200">
                      <div className="text-2xl font-bold text-purple-600">{steps.length}</div>
                      <div className="text-sm text-slate-600">Action Steps</div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold text-lg mb-3">Top 5 Priority Actions</h3>
                    <div className="space-y-3">
                      {gaps
                        .filter(g => g.priority === 'High')
                        .slice(0, 5)
                        .map((gap, idx) => (
                          <Alert key={gap.id} className="border-orange-200 bg-orange-50">
                            <AlertCircle className="h-4 w-4 text-orange-600" />
                            <AlertDescription>
                              <div className="flex items-start justify-between gap-4">
                                <div>
                                  <span className="font-semibold">{idx + 1}. {gap.gap_category}</span>
                                  <p className="text-sm text-slate-600 mt-1">
                                    {gap.recommended_addition.substring(0, 120)}...
                                  </p>
                                </div>
                                <Badge variant="destructive">Impact: {gap.impact_score}/10</Badge>
                              </div>
                            </AlertDescription>
                          </Alert>
                        ))}
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold text-lg mb-3">Strategic Focus Areas</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white p-4 rounded-lg border border-slate-200">
                        <h4 className="font-semibold text-blue-600 mb-2">Conversion Optimization</h4>
                        <p className="text-sm text-slate-600">
                          Clear pricing, reduced friction, enhanced CTAs with specific trial terms
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-slate-200">
                        <h4 className="font-semibold text-green-600 mb-2">Trust Building</h4>
                        <p className="text-sm text-slate-600">
                          Quantifiable outcomes, detailed testimonials, security assurances
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-slate-200">
                        <h4 className="font-semibold text-purple-600 mb-2">Transparency</h4>
                        <p className="text-sm text-slate-600">
                          Curriculum details, timeline expectations, platform previews
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="inventory" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-blue-600" />
                    Content Inventory Report
                  </CardTitle>
                  <CardDescription>
                    Complete audit of existing website copy organized by section and placement
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[600px] pr-4">
                    <div className="space-y-4">
                      {sections.map((section) => (
                        <div key={section.id} className="border border-slate-200 rounded-lg p-4 bg-white hover:shadow-md transition-shadow">
                          <div className="flex items-start justify-between gap-4 mb-2">
                            <div>
                              <h3 className="font-semibold text-slate-900">{section.section_name}</h3>
                              <div className="flex items-center gap-2 mt-1">
                                <Badge variant="outline">{section.section_type}</Badge>
                                <span className="text-xs text-slate-500">
                                  Position: #{section.placement_order}
                                </span>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-medium text-slate-600">
                                {section.character_count} chars
                              </div>
                            </div>
                          </div>
                          <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                            {section.content_text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="gaps" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-orange-600" />
                    Strategic Gap Analysis
                  </CardTitle>
                  <CardDescription>
                    Missing content opportunities prioritized by conversion impact
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[600px] pr-4">
                    <div className="space-y-4">
                      {gaps.map((gap, idx) => (
                        <div
                          key={gap.id}
                          className="border-l-4 border-slate-200 rounded-r-lg p-4 bg-white hover:shadow-md transition-shadow"
                          style={{
                            borderLeftColor: gap.priority === 'High' ? '#f97316' : gap.priority === 'Medium' ? '#3b82f6' : '#94a3b8'
                          }}
                        >
                          <div className="flex items-start justify-between gap-4 mb-3">
                            <h3 className="font-semibold text-slate-900">
                              {idx + 1}. {gap.gap_category}
                            </h3>
                            <div className="flex items-center gap-2">
                              <Badge variant={getPriorityColor(gap.priority)}>
                                {gap.priority}
                              </Badge>
                              <Badge variant="outline">
                                Impact: {gap.impact_score}/10
                              </Badge>
                            </div>
                          </div>

                          <div className="space-y-3">
                            <div>
                              <span className="text-xs font-semibold text-slate-500 uppercase">Current State</span>
                              <p className="text-sm text-slate-600 mt-1">{gap.current_state}</p>
                            </div>

                            <div className="bg-green-50 border border-green-200 rounded p-3">
                              <span className="text-xs font-semibold text-green-700 uppercase">Recommended Addition</span>
                              <p className="text-sm text-slate-700 mt-1">{gap.recommended_addition}</p>
                            </div>

                            <div className="flex items-start gap-2">
                              <ArrowRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                              <div>
                                <span className="text-xs font-semibold text-slate-500 uppercase">Placement</span>
                                <p className="text-sm text-slate-600">{gap.placement_suggestion}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="recommendations" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-yellow-600" />
                    Copy Recommendations
                  </CardTitle>
                  <CardDescription>
                    Revised content designed for maximum conversion while fitting existing design constraints
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[600px] pr-4">
                    <div className="space-y-4">
                      {recommendations.map((rec) => (
                        <div key={rec.id} className="border border-slate-200 rounded-lg p-4 bg-white hover:shadow-md transition-shadow">
                          <div className="flex items-start justify-between gap-4 mb-3">
                            <h3 className="font-semibold text-slate-900">{rec.section_reference}</h3>
                            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                              {rec.conversion_goal}
                            </Badge>
                          </div>

                          {rec.original_copy && (
                            <div className="mb-3 pb-3 border-b border-slate-200">
                              <span className="text-xs font-semibold text-slate-500 uppercase">Original</span>
                              <p className="text-sm text-slate-600 mt-1 line-through opacity-75">
                                {rec.original_copy}
                              </p>
                            </div>
                          )}

                          <div className="bg-green-50 border border-green-200 rounded p-3 mb-3">
                            <span className="text-xs font-semibold text-green-700 uppercase">Recommended Copy</span>
                            <p className="text-sm text-slate-900 mt-1 font-medium">
                              {rec.recommended_copy}
                            </p>
                            {rec.character_limit && (
                              <p className="text-xs text-slate-500 mt-2">
                                Character limit: {rec.character_limit} | Current: {rec.recommended_copy.length}
                              </p>
                            )}
                          </div>

                          <div>
                            <span className="text-xs font-semibold text-slate-500 uppercase">Rationale</span>
                            <p className="text-sm text-slate-600 mt-1">{rec.rationale}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="implementation" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckSquare className="w-5 h-5 text-green-600" />
                    Implementation Guide
                  </CardTitle>
                  <CardDescription>
                    Step-by-step instructions for updating content within existing design constraints
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[600px] pr-4">
                    <div className="space-y-4">
                      {steps.map((step) => (
                        <div key={step.id} className="border border-slate-200 rounded-lg p-4 bg-white hover:shadow-md transition-shadow">
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                              <span className="text-lg font-bold text-blue-600">{step.step_number}</span>
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-slate-900 mb-1">{step.section_affected}</h3>
                              <p className="text-sm text-blue-600 mb-3">{step.action_required}</p>

                              {step.current_content && (
                                <div className="mb-3 pb-3 border-b border-slate-200">
                                  <span className="text-xs font-semibold text-slate-500 uppercase">Current</span>
                                  <p className="text-sm text-slate-600 mt-1">{step.current_content}</p>
                                </div>
                              )}

                              {step.new_content && (
                                <div className="bg-green-50 border border-green-200 rounded p-3 mb-3">
                                  <span className="text-xs font-semibold text-green-700 uppercase">New Content</span>
                                  <p className="text-sm text-slate-900 mt-1">{step.new_content}</p>
                                </div>
                              )}

                              {step.formatting_notes && (
                                <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
                                  <span className="text-xs font-semibold text-yellow-700 uppercase">Formatting Notes</span>
                                  <p className="text-sm text-slate-700 mt-1">{step.formatting_notes}</p>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        )}
      </div>
    </div>
  )
}
