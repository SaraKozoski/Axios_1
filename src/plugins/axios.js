import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MGZiMDE3NTc1NzAyMDFkNDljMjdjZmVmODU1OTEzZCIsIm5iZiI6MTczMjY0MzE4Ni4zMDMwMTMzLCJzdWIiOiI2NzQ2MDdkYzA2NDI0YmRlMjcwNGYyMTEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.jfrNK63ytn6b3OGZEbRXpZeNaLeXlORHItYDmCIFwC4`,
  },
});

export default api;
