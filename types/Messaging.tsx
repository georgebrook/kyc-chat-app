export interface Message {
  id: string;
  text: string;
  sender: 'desktop' | 'mobile';
  timestamp?: number;
}