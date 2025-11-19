
export interface Episode {
  id: string;
  number: number;
  title: string;
  url: string;
}

export interface Anime {
  id: number;
  titulo: string;
  descricao: string;
  imagem: string;
  slug: string;
  episodios: number; // Quantidade total
  categoria: string;
  video: string; // Trailer ou episódio 1 padrão
  providerId?: string;
  episodiosList?: Episode[]; // Lista detalhada
  magnetLink?: string; // Link para download via Torrent
  
  // Metadados adicionais (AniList)
  averageScore?: number;
  popularity?: number;
  status?: string;
  ano?: number;
  format?: string;
}

export interface AnimeRecommendation {
  title: string;
  reason: string;
  genre: string;
}

export interface User {
  name: string;
  email: string;
  password: string; // Em produção, isso deveria ser hash
  role: 'admin' | 'user';
}

export enum AuthStatus {
  LOGGED_OUT,
  LOGGED_IN
}
