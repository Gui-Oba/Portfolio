/**
 * Optimize image URL for faster loading
 * Appends size parameters for local images
 */
export function optimizeImageUrl(url, width = 500, height = 300) {
  if (!url) return '';
  
  // For local images, add size hints as query params
  if (url.startsWith('/')) {
    return `${url}?w=${width}&h=${height}`;
  }
  
  return url;
}
