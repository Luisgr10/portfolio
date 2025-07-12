export interface LinkPreviewResponse {
  title: string;
  description: string;
  image: string;
  url: string;
}

interface CachedPreview {
  data: LinkPreviewResponse;
  timestamp: number;
}

const ONE_DAY_MS = 24 * 60 * 60 * 1000;

export async function fetchLinkPreview(link: string): Promise<LinkPreviewResponse> {
  const cacheKey = `linkpreview_${link}`;
  const cached = localStorage.getItem(cacheKey);
  if (cached) {
    const parsed: CachedPreview = JSON.parse(cached);
    if (Date.now() - parsed.timestamp < ONE_DAY_MS) {
      return parsed.data;
    }
  }

  const apiKey = import.meta.env.VITE_LINKPREVIEW_API_KEY;
  const endpoint = `https://api.linkpreview.net/?key=${apiKey}&q=${encodeURIComponent(link)}`;
  const res = await fetch(endpoint);
  if (!res.ok) throw new Error('Error fetching link preview');
  const data: LinkPreviewResponse = await res.json();
  const toCache: CachedPreview = { data, timestamp: Date.now() };
  localStorage.setItem(cacheKey, JSON.stringify(toCache));
  return data;
} 