import { useState, useEffect } from 'react';
import './App.css';

const QUOTES = [
  { text: 'Жизнь — это то, что происходит с тобой, пока ты строишь другие планы.', author: 'Джон Леннон' },
  { text: 'Единственный способ делать великие дела — любить то, что ты делаешь.', author: 'Стив Джобс' },
  { text: 'Не бойся медленно идти, бойся стоять на месте.', author: 'Китайская пословица' },
  { text: 'Тот, кто не рискует, не пьёт шампанского.', author: 'Народная мудрость' },
  { text: 'Сложнее всего начать действовать, всё остальное зависит только от упорства.', author: 'Амелия Эрхарт' },
  { text: 'Всё, что нас не убивает, делает нас сильнее.', author: 'Фридрих Ницше' },
  { text: 'Знание — сила.', author: 'Фрэнсис Бэкон' },
];

function App() {
  const [quote, setQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadQuote = () => {
    setIsLoading(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * QUOTES.length);
      setQuote(QUOTES[randomIndex]);
      setIsLoading(false);
    }, 800);
  };

  useEffect(() => {
    loadQuote();
  }, []);

  return (
      <div className="app">
        <div className="card">
          <h1 className="title">Случайная цитата</h1>

          {isLoading ? (
              <p className="loading">Загрузка…</p>
          ) : (
              <>
                <p className="quote-text">«{quote.text}»</p>
                <p className="quote-author">— {quote.author}</p>
              </>
          )}

          <button
              className="btn"
              onClick={loadQuote}
              disabled={isLoading}
          >
            Показать другую цитату
          </button>
        </div>
      </div>
  );
}

export default App;