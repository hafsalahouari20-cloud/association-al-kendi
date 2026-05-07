// Route paths
export const ROUTE_PATHS = {
  HOME: '/',
};

// Types
export interface Member {
  role: string;
  name: string;
  title: string;
}

export interface Activity {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface Event {
  id: number;
  title: string;
  description: string;
  type: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'bot';
  content: string;
  timestamp: Date;
}
