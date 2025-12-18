export const VALID_LOCATIONS = ['soho', 'covent-garden'] as const;

export type LocationSlug = typeof VALID_LOCATIONS[number];

export const isValidLocation = (location: string): location is LocationSlug => {
    return VALID_LOCATIONS.includes(location as LocationSlug);
};

export const LOCATION_DISPLAY_NAMES: Record<LocationSlug, string> = {
    'soho': 'Soho',
    'covent-garden': 'Covent Garden'
};
