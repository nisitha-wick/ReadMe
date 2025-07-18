export interface UserPreferences {
    preferredTemplate: 'minimal' | 'standard' | 'detailed';
    includeSections: string[];
    aiPreferences: {
        tone: 'professional' | 'friendly' | 'technical';
        detailLevel: 'low' | 'medium' | 'high';
    };
    analyzedRepos?: string[];
    lastUsedTemplate?: string;
}

export interface BadgeConfig {
    subject: string;
    status: string;
    color: string;
}

export interface GitHubUser {
    access_token: string;
    profile: {
        login: string;
        avatar_url: string;
    };
}