// ===== VAPI =====
export const ASSISTANT_ID = process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID || '';

// ===== Voice =====
export const DEFAULT_VOICE = 'daniel';

export const VOICE_SETTINGS = {
    stability: 0.5,
    similarityBoost: 0.8,
    style: 0.5,
    useSpeakerBoost: true,
};

// ===== Upload =====
export const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB

export const ACCEPTED_PDF_TYPES = {
    'application/pdf': ['.pdf'],
};

export const ACCEPTED_IMAGE_TYPES = {
    'image/jpeg': ['.jpg', '.jpeg'],
    'image/png': ['.png'],
    'image/webp': ['.webp'],
};