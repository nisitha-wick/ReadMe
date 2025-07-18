// Defining user preferences
export interface UserPreferences {
    preferredTemplate: 'minimal' | 'standard' | 'detailed'; // template selection
    includeSections: string[];
    aiPreferences: {
        tone: 'professional' | 'friendly' | 'technical'; // AI formality
        detailLevel: 'low' | 'medium' | 'high'; // README detailing
    };
    analyzedRepos?: string[]; // list of repos user analyzed
    lastUsedTemplate?: string;
}

// Badge config
export interface BadgeConfig {
    subject: string; // left
    status: string; // right
    color: string;
}

// Info about the logged in GitHub user
export interface GitHubUser {
    access_token: string; // for authenticated reqs
    profile: {
        login: string;
        avatar_url: string;
    };
}