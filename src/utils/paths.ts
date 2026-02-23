export const getAssetPath = (path: string): string => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    // Ensure we don't double slash if path starts with /
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${basePath}${cleanPath}`;
};
