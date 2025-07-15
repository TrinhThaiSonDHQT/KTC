export const baseUrl = 'https://server.aptech.io';
export const defaultHeader = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: `Bearer ${
    typeof window !== 'undefined'
      ? localStorage.getItem('token')
      : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ0dW5nbnRAc29mdGVjaC52biIsImVtYWlsIjoidHVuZ250QHNvZnRlY2gudm4iLCJzdWIiOjEsImFwcGxpY2F0aW9uIjoiT25saW5lIFNob3AgLSBBUEkiLCJyb2xlcyI6W3siaWQiOjEsIm5hbWUiOiJBZG1pbmlzdHJhdG9ycyJ9LHsiaWQiOjIsIm5hbWUiOiJNYW5hZ2VycyJ9XSwiaWF0IjoxNzUyMDkxMjkyLCJleHAiOjE3ODM2NDg4OTJ9.doBBWgZoVTfG5OlE--3ARLGDHYO73XrC0A7VeZIG1pk'
  }`,
};
