import { UserPreferences } from "../types";

// available badge colors
export const BADGE_COLORS = [
  'brightgreen', 'green', 'yellowgreen', 'yellow', 'orange', 'red', 
  'blue', 'lightgrey', 'success', 'important', 'critical', 'informational'
] as const;

// default user settings for first visit
export const DEFAULT_PREFERENCES: UserPreferences = {
  preferredTemplate: 'standard',
  includeSections: ['installation', 'usage', 'contributing'],
  aiPreferences: {
    tone: 'professional',
    detailLevel: 'medium'
  }
};