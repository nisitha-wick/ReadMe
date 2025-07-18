import { useEffect, useState } from "react"
import { UserPreferences } from "../types"
import { DEFAULT_PREFERENCES } from "../lib/constants"

// manages user preferences in local storage
export const usePreferences = () => {
    const [preferences, setPreferences] = useState<UserPreferences>(DEFAULT_PREFERENCES);

    useEffect(() => {
        const saved = localStorage.getItem('readmePreferences');
        if (saved) {
            setPreferences(JSON.parse(saved)); // use saved preferences
        }
    }, []);

    // update preferences and save to local storage
    const updatePreferences = (newPreferences: Partial<UserPreferences>) => {
        const updated = {...preferences, ...newPreferences};
        setPreferences(updated);
        localStorage.setItem('readmePreferences', JSON.stringify(updated));
    };

    return {preferences, updatePreferences}

}

