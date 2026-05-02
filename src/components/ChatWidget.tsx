import { useState, useRef, useEffect } from 'react';
import './ChatWidget.css';

// A URL do Web App do Google Apps Script configurada nas variáveis de ambiente.
const SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL || '';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

export function ChatWidget() {

  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: 'Olá! Sou a Malu, assistente da EEMTI Professora Maria Luíza Saboia. Como posso ajudar?', sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);



  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { id: Date.now(), text: userMessage, sender: 'user' }]);
    setIsLoading(true);

    try {
      if (!SCRIPT_URL) {
         throw new Error("URL do Web App não configurada em VITE_APPS_SCRIPT_URL.");
      }

      const url = new URL(SCRIPT_URL);
      url.searchParams.append('text', userMessage);
      url.searchParams.append('userName', 'Visitante do Site');

      const response = await fetch(url.toString(), {
        method: 'GET',
      });

      if (!response.ok) {
         throw new Error("Erro na requisição.");
      }

      const data = await response.json();
      
      if (data.success) {
        setMessages(prev => [...prev, { id: Date.now(), text: data.reply, sender: 'bot' }]);
      } else {
        setMessages(prev => [...prev, { id: Date.now(), text: `Desculpe, ocorreu um erro: ${data.error}`, sender: 'bot' }]);
      }
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      setMessages(prev => [...prev, { id: Date.now(), text: 'Desculpe, não consegui conectar ao servidor no momento. Verifique a URL do App Script.', sender: 'bot' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-widget-container">
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="chat-avatar">M</div>
              <h3>A Malu tá ON!</h3>
            </div>

          </div>
          <div className="chat-body">
            {messages.map((msg) => (
              <div key={msg.id} className={`chat-message ${msg.sender}`}>
                <div className="message-content">{msg.text}</div>
              </div>
            ))}
            {isLoading && (
              <div className="chat-message bot">
                <div className="message-content typing-indicator">
                  <span></span><span></span><span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="chat-footer">
            <input 
              type="text" 
              value={input} 
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Digite sua mensagem..."
              disabled={isLoading}
            />
            <button onClick={sendMessage} disabled={isLoading || !input.trim()}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" fill="currentColor"/>
              </svg>
            </button>
          </div>
        </div>
    </div>
  );
}
