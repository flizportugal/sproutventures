import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type ContentSection = {
  id: string
  section_name: string
  section_type: string
  content_text: string
  placement_order: number
  character_count: number
  created_at: string
}

export type ContentGap = {
  id: string
  gap_category: string
  priority: 'High' | 'Medium' | 'Low'
  current_state: string
  recommended_addition: string
  placement_suggestion: string
  impact_score: number
  created_at: string
}

export type CopyRecommendation = {
  id: string
  section_reference: string
  original_copy: string | null
  recommended_copy: string
  rationale: string
  character_limit: number | null
  conversion_goal: string
  created_at: string
}

export type ImplementationStep = {
  id: string
  step_number: number
  section_affected: string
  action_required: string
  current_content: string | null
  new_content: string | null
  formatting_notes: string | null
  created_at: string
}
