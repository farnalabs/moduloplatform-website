export const ROUTES = [
  {
    path: '/',
    file: 'index.html',
    title: 'Modulo: your self-hosted software factory',
    marker: 'What is a software factory, and how do you run one you own?'
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
