
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Crown, Zap, Trophy, Play, RotateCcw, TrendingUp, Sparkles, AlertCircle } from 'lucide-react';

interface GameItem {
  id: number;
  x: number;
  y: number;
  type: 'coin' | 'fud';
  speed: number;
}

const WealthGame: React.FC = () => {
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'gameover'>('idle');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => Number(localStorage.getItem('usd1life_highscore') || 0));
  const [playerPos, setPlayerPos] = useState(50); // percentage for visual rendering
  
  const containerRef = useRef<HTMLDivElement>(null);
  const playerXRef = useRef<number>(50); // Accurate real-time X for physics
  const [items, setItems] = useState<GameItem[]>([]);
  const requestRef = useRef<number>();
  const lastTimeRef = useRef<number>();
  const spawnTimerRef = useRef<number>(0);

  const startGame = () => {
    setGameState('playing');
    setScore(0);
    setItems([]);
    setPlayerPos(50);
    playerXRef.current = 50;
    spawnTimerRef.current = 0;
    lastTimeRef.current = performance.now();
  };

  const updateHighScore = useCallback((newScore: number) => {
    if (newScore > highScore) {
      setHighScore(newScore);
      localStorage.setItem('usd1life_highscore', newScore.toString());
    }
  }, [highScore]);

  const updateGame = useCallback((time: number) => {
    if (lastTimeRef.current !== undefined) {
      const deltaTime = time - lastTimeRef.current;
      
      // Difficulty scaling - slowed down significantly
      const difficultyMultiplier = 1 + (score / 100000000); 
      // Slower spawn rate: base 1000ms, min 400ms
      const spawnInterval = Math.max(400, 1000 / difficultyMultiplier);

      spawnTimerRef.current += deltaTime;
      
      // Spawn logic
      if (spawnTimerRef.current > spawnInterval) {
        spawnTimerRef.current = 0;
        const isFud = Math.random() > 0.82; // Slightly fewer FUD items
        setItems(prev => [
          ...prev,
          {
            id: Math.random(),
            x: Math.random() * 90 + 5,
            y: -10,
            type: isFud ? 'fud' : 'coin',
            // Falling speed reduced (base was ~0.18, now ~0.10)
            speed: (0.10 + Math.random() * 0.08) * difficultyMultiplier
          }
        ]);
      }

      // Physics and Movement
      setItems(prev => {
        const nextItems: GameItem[] = [];
        let hitFud = false;
        let gatheredWealth = 0;
        const currentX = playerXRef.current;

        for (const item of prev) {
          const newY = item.y + (item.speed * deltaTime);
          
          // Collision: Y check (Player is at bottom area) and X check (width)
          const isAtPlayerHeight = newY > 84 && newY < 94;
          const distanceX = Math.abs(item.x - currentX);
          
          if (isAtPlayerHeight && distanceX < (item.type === 'coin' ? 8 : 6)) {
            if (item.type === 'coin') {
              gatheredWealth += 1000000;
              continue; // Successfully collected
            } else {
              hitFud = true;
              break;
            }
          }

          if (newY < 105) {
            nextItems.push({ ...item, y: newY });
          }
        }

        if (gatheredWealth > 0) setScore(s => s + gatheredWealth);
        if (hitFud) setGameState('gameover');
        
        return nextItems;
      });
    }
    
    lastTimeRef.current = time;
    if (gameState === 'playing') {
      requestRef.current = requestAnimationFrame(updateGame);
    }
  }, [gameState, score]);

  useEffect(() => {
    if (gameState === 'playing') {
      requestRef.current = requestAnimationFrame(updateGame);
    } else {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      if (gameState === 'gameover') {
        updateHighScore(score);
      }
    }
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [gameState, updateGame, score, updateHighScore]);

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!containerRef.current || gameState !== 'playing') return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const clampedX = Math.max(5, Math.min(95, x));
    playerXRef.current = clampedX;
    setPlayerPos(clampedX);
  };

  return (
    <section id="arena" className="py-32 bg-[#050505] relative overflow-hidden border-y border-yellow-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-black tracking-[0.5em] text-yellow-500 uppercase mb-4">Interactive Arena</h2>
          <p className="text-4xl md:text-6xl font-playfair font-black text-white italic">The <span className="gold-gradient">Gilded</span> Ascent</p>
          <p className="text-gray-400 mt-4 text-lg">Build the life you deserve. Accumulate $USD1 wealth with surgical precision.</p>
        </div>

        <div 
          ref={containerRef}
          onPointerMove={handlePointerMove}
          className="relative h-[650px] w-full max-w-4xl mx-auto glass-card rounded-[3rem] border-yellow-500/20 overflow-hidden cursor-none shadow-[0_0_100px_rgba(191,149,63,0.1)] touch-none select-none"
        >
          {/* Real-time Dashboard */}
          <div className="absolute top-10 left-10 z-20 pointer-events-none">
            <div className="flex flex-col bg-black/40 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/5">
              <span className="text-[10px] font-black text-yellow-500/60 uppercase tracking-[0.4em] mb-1">Live Wealth</span>
              <span className="text-3xl font-black font-playfair text-white">${score.toLocaleString()}</span>
            </div>
          </div>
          <div className="absolute top-10 right-10 z-20 text-right pointer-events-none">
             <div className="flex flex-col bg-black/40 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/5">
               <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em] mb-1">Portfolio Record</span>
               <span className="text-2xl font-black font-playfair gold-gradient">${highScore.toLocaleString()}</span>
             </div>
          </div>

          {gameState === 'idle' && (
            <div className="absolute inset-0 flex flex-col items-center justify-center z-30 bg-black/80 backdrop-blur-md transition-all">
              <div className="p-8 bg-yellow-500/10 rounded-full mb-10 ring-2 ring-yellow-500/20 animate-pulse">
                <Crown className="w-20 h-20 text-yellow-500 drop-shadow-[0_0_15px_rgba(191,149,63,0.5)]" />
              </div>
              <h3 className="text-4xl font-black font-playfair text-white mb-6 italic">Enter the Inner Circle</h3>
              <p className="text-gray-400 mb-12 text-center max-w-md px-8 leading-relaxed font-light">
                Secure the <span className="text-yellow-500 font-bold">$USD1LIFE</span> legacy. Collect golden nodes to build your net worth. Avoid the red FUD clouds that cause mass liquidations.
              </p>
              <button 
                onClick={startGame}
                className="gold-bg text-black px-16 py-6 rounded-full font-black flex items-center gap-4 hover:scale-105 transition-transform shadow-[0_0_40px_rgba(191,149,63,0.5)] active:scale-95"
              >
                <Play className="w-6 h-6 fill-black" /> COMMENCE ASCENT
              </button>
            </div>
          )}

          {gameState === 'gameover' && (
            <div className="absolute inset-0 flex flex-col items-center justify-center z-30 bg-black/95 backdrop-blur-2xl">
              <div className="mb-6 p-5 bg-red-600/20 rounded-full border border-red-500/30">
                <AlertCircle className="w-14 h-14 text-red-500 animate-pulse" />
              </div>
              <h3 className="text-6xl font-black font-playfair text-red-600 mb-4 italic tracking-tighter">LIQUIDATED</h3>
              <p className="text-gray-500 uppercase tracking-[0.5em] font-black text-xs mb-3">Portfolio Loss Sustained</p>
              <p className="text-5xl font-black font-playfair gold-gradient mb-16">${score.toLocaleString()}</p>
              <button 
                onClick={startGame}
                className="glass-card border-yellow-500/40 text-white px-16 py-6 rounded-full font-black flex items-center gap-4 hover:bg-yellow-500/20 transition-all hover:scale-105 active:scale-95"
              >
                <RotateCcw className="w-6 h-6" /> RESTORE ASSETS
              </button>
            </div>
          )}

          {/* Playing State Elements */}
          {gameState === 'playing' && (
            <div className="w-full h-full relative">
              {items.map((item) => (
                <div 
                  key={item.id}
                  className="absolute pointer-events-none will-change-transform"
                  style={{ 
                    left: `${item.x}%`, 
                    top: `${item.y}%`, 
                    transform: 'translate(-50%, -50%)' 
                  }}
                >
                  {item.type === 'coin' ? (
                    <div className="relative">
                      <div className="absolute inset-0 bg-yellow-400 blur-lg opacity-30 animate-pulse" />
                      <div className="relative p-3 bg-gradient-to-br from-yellow-200 via-yellow-500 to-yellow-800 rounded-full shadow-[0_0_25px_rgba(255,215,0,0.6)] border border-yellow-100/40">
                        <Zap className="w-6 h-6 text-black fill-black" />
                      </div>
                    </div>
                  ) : (
                    <div className="relative p-5 bg-red-950/40 border border-red-500/40 rounded-3xl backdrop-blur-sm flex items-center gap-4 group">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-ping" />
                      <span className="text-xs font-black text-red-500 uppercase tracking-[0.3em]">FUD</span>
                    </div>
                  )}
                </div>
              ))}

              {/* The Player - Gilded Crown */}
              <div 
                className="absolute bottom-16 flex flex-col items-center pointer-events-none will-change-transform"
                style={{ 
                  left: `${playerPos}%`, 
                  transform: 'translateX(-50%)' 
                }}
              >
                <div className="relative">
                  <div className="absolute inset-x-0 bottom-0 h-8 bg-yellow-500/20 blur-2xl rounded-full translate-y-6" />
                  <div className="relative z-10 p-2">
                    <Crown className="w-18 h-18 text-yellow-500 fill-yellow-500/20 drop-shadow-[0_0_35px_rgba(191,149,63,0.9)]" />
                  </div>
                </div>
                {/* Visual trail */}
                <div className="h-1 w-28 bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent mt-4 rounded-full blur-[2px]" />
              </div>
            </div>
          )}

          {/* Luxury Aesthetics */}
          <div className="absolute inset-0 pointer-events-none border-[24px] border-yellow-500/5 rounded-[3rem] mix-blend-overlay" />
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_100%,rgba(191,149,63,0.1),transparent_50%)]" />
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 text-center opacity-60">
           <div className="flex flex-col items-center gap-3">
              <Sparkles className="w-6 h-6 text-yellow-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Low-Latency Execution</span>
           </div>
           <div className="flex flex-col items-center gap-3">
              <TrendingUp className="w-6 h-6 text-yellow-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Institutional Volatility</span>
           </div>
           <div className="flex flex-col items-center gap-3">
              <Trophy className="w-6 h-6 text-yellow-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">The Winner's Portfolio</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default WealthGame;
