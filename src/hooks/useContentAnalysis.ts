import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import type { ContentSection, ContentGap, CopyRecommendation, ImplementationStep } from '../lib/supabase'

export function useContentSections() {
  const [sections, setSections] = useState<ContentSection[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchSections() {
      try {
        const { data, error } = await supabase
          .from('content_sections')
          .select('*')
          .order('placement_order')

        if (error) throw error
        setSections(data || [])
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch content sections')
      } finally {
        setLoading(false)
      }
    }

    fetchSections()
  }, [])

  return { sections, loading, error }
}

export function useContentGaps() {
  const [gaps, setGaps] = useState<ContentGap[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchGaps() {
      try {
        const { data, error } = await supabase
          .from('content_gaps')
          .select('*')
          .order('impact_score', { ascending: false })

        if (error) throw error
        setGaps(data || [])
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch content gaps')
      } finally {
        setLoading(false)
      }
    }

    fetchGaps()
  }, [])

  return { gaps, loading, error }
}

export function useCopyRecommendations() {
  const [recommendations, setRecommendations] = useState<CopyRecommendation[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchRecommendations() {
      try {
        const { data, error } = await supabase
          .from('copy_recommendations')
          .select('*')
          .order('section_reference')

        if (error) throw error
        setRecommendations(data || [])
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch recommendations')
      } finally {
        setLoading(false)
      }
    }

    fetchRecommendations()
  }, [])

  return { recommendations, loading, error }
}

export function useImplementationSteps() {
  const [steps, setSteps] = useState<ImplementationStep[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchSteps() {
      try {
        const { data, error } = await supabase
          .from('implementation_steps')
          .select('*')
          .order('step_number')

        if (error) throw error
        setSteps(data || [])
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch implementation steps')
      } finally {
        setLoading(false)
      }
    }

    fetchSteps()
  }, [])

  return { steps, loading, error }
}
