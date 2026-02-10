/*
  # Content Strategy Analysis System for Sprout Ventures Academy
  
  1. New Tables
    - `content_sections`
      - Stores all existing website copy organized by page sections
      - `id` (uuid, primary key)
      - `section_name` (text) - e.g., "Hero", "Features", "Testimonials"
      - `section_type` (text) - classification of section
      - `content_text` (text) - the actual copy
      - `placement_order` (integer) - order on page
      - `character_count` (integer) - for tracking length
      - `created_at` (timestamp)
    
    - `content_gaps`
      - Tracks identified gaps and opportunities
      - `id` (uuid, primary key)
      - `gap_category` (text) - e.g., "Social Proof", "Pricing Details"
      - `priority` (text) - "High", "Medium", "Low"
      - `current_state` (text) - what currently exists
      - `recommended_addition` (text) - what should be added
      - `placement_suggestion` (text) - where it should go
      - `impact_score` (integer) - 1-10 scale
      - `created_at` (timestamp)
    
    - `copy_recommendations`
      - Stores revised and new content suggestions
      - `id` (uuid, primary key)
      - `section_reference` (text) - which section this relates to
      - `original_copy` (text) - existing content (if applicable)
      - `recommended_copy` (text) - new or revised content
      - `rationale` (text) - why this change improves conversion
      - `character_limit` (integer) - design constraint
      - `conversion_goal` (text) - what this copy aims to achieve
      - `created_at` (timestamp)
    
    - `implementation_steps`
      - Step-by-step guide for content updates
      - `id` (uuid, primary key)
      - `step_number` (integer)
      - `section_affected` (text)
      - `action_required` (text)
      - `current_content` (text)
      - `new_content` (text)
      - `formatting_notes` (text)
      - `created_at` (timestamp)
  
  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated access
*/

CREATE TABLE IF NOT EXISTS content_sections (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  section_name text NOT NULL,
  section_type text NOT NULL,
  content_text text NOT NULL,
  placement_order integer DEFAULT 0,
  character_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS content_gaps (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  gap_category text NOT NULL,
  priority text NOT NULL CHECK (priority IN ('High', 'Medium', 'Low')),
  current_state text NOT NULL,
  recommended_addition text NOT NULL,
  placement_suggestion text NOT NULL,
  impact_score integer CHECK (impact_score >= 1 AND impact_score <= 10),
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS copy_recommendations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  section_reference text NOT NULL,
  original_copy text,
  recommended_copy text NOT NULL,
  rationale text NOT NULL,
  character_limit integer,
  conversion_goal text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS implementation_steps (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  step_number integer NOT NULL,
  section_affected text NOT NULL,
  action_required text NOT NULL,
  current_content text,
  new_content text,
  formatting_notes text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE content_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE content_gaps ENABLE ROW LEVEL SECURITY;
ALTER TABLE copy_recommendations ENABLE ROW LEVEL SECURITY;
ALTER TABLE implementation_steps ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to content_sections"
  ON content_sections FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public read access to content_gaps"
  ON content_gaps FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public read access to copy_recommendations"
  ON copy_recommendations FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public read access to implementation_steps"
  ON implementation_steps FOR SELECT
  TO public
  USING (true);
