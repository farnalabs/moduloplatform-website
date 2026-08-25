export const ROUTES = [
  {
    path: '/',
    file: 'index.html',
    title: 'Modulo: an agent governance platform for your agentic SDLC',
    marker: 'Agent governance for your agentic SDLC',
  },
]

export const ALL_ROUTES = ROUTES

export function decodeEntities(html) {
  return html
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&')
}
