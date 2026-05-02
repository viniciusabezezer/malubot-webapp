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
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: 'Olá! Sou a Malu, assistente da EEMTI Professora Maria Luíza Saboia. Como posso ajudar?', sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Close chat when clicking outside
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        chatWindowRef.current &&
        !chatWindowRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    // Use a small delay so the opening click doesn't immediately close it
    const timer = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
    }, 100);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

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
      {!isOpen && (
        <button className="chat-fab" onClick={() => setIsOpen(true)} aria-label="Abrir chat">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" fill="currentColor"/>
          </svg>
        </button>
      )}

      {isOpen && (
        <div className="chat-window" ref={chatWindowRef}>
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="chat-avatar">M</div>
              <h3>A Malu tá ON!</h3>
            </div>
            <button className="close-btn" onClick={() => setIsOpen(false)} aria-label="Fechar chat">
              ×
            </button>
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
      )}
    </div>
  );
}
