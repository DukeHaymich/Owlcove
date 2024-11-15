import DOMPurify from "isomorphic-dompurify";

function sanitizeHTML(text: string) {
  return DOMPurify.sanitize(text, {USE_PROFILES: {html: true}});
}

export {
  sanitizeHTML
}