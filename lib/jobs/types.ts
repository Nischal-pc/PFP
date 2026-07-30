/**
 * Job posting data types and interfaces for PFP Canada admin and public job management.
 *
 * Validates: Requirements 5.1, 5.2, 6.1
 */

/**
 * Job status enum for job posting lifecycle
 * - 'active': Published and visible on public careers page
 * - 'inactive': Archived or closed, hidden from public
 * - 'draft': Work in progress, not yet published
 */
export type JobStatus = "active" | "inactive" | "draft";

/**
 * Core Job interface representing a complete job posting
 * Includes all fields required for both admin management and public display
 */
export interface Job {
  /** Unique identifier for the job posting (UUID format) */
  id: string;

  /** Job title (e.g., "Fire Alarm Technician", "Service Manager") */
  title: string;

  /** Job location (e.g., "Calgary, AB", "Vancouver, BC") */
  location: string;

  /** Short summary/excerpt displayed in job listings (max 160 characters recommended) */
  summary: string;

  /** Full job description (supports HTML or Markdown formatting) */
  description: string;

  /** Array of job requirements (e.g., "5+ years experience", "Valid driver's license") */
  requirements: string[];

  /** Current status of the job posting */
  status: JobStatus;

  /** ISO 8601 timestamp when job was created */
  createdAt: string;

  /** ISO 8601 timestamp when job was last updated */
  updatedAt: string;
}

/**
 * Input type for creating new job postings
 * Excludes auto-generated fields (id, timestamps)
 */
export interface CreateJobInput {
  /** Job title */
  title: string;

  /** Job location */
  location: string;

  /** Job summary for listings */
  summary: string;

  /** Full job description */
  description: string;

  /** Array of job requirements */
  requirements: string[];

  /** Initial status (typically 'draft' or 'active') */
  status: JobStatus;
}

/**
 * Input type for updating existing job postings
 * All fields are optional to allow partial updates
 */
export type UpdateJobInput = Partial<CreateJobInput>;
