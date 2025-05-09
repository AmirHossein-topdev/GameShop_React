import React, { useRef, useEffect, useState } from "react";
import Swal from "sweetalert2"; // وارد کردن SweetAlert2
import { VscSnake } from "react-icons/vsc"; // وارد کردن آیکن
const GRID_SIZE = 20;
const CELL_SIZE = 24;
const CANVAS_SIZE = GRID_SIZE * CELL_SIZE;

const getRandomCoord = () => ({
  x: Math.floor(Math.random() * GRID_SIZE),
  y: Math.floor(Math.random() * GRID_SIZE),
});

const SnakeGame = () => {
  const canvasRef = useRef(null);
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState(getRandomCoord());
  const [dir, setDir] = useState({ x: 0, y: 0 });
  const [speed, setSpeed] = useState(150);
  const [score, setScore] = useState(0);
  const [running, setRunning] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [shake, setShake] = useState(false);

  useEffect(() => {
    // نمایش دکمه بعد از ۵ ثانیه
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // لرزش دکمه هر ۳ ثانیه
    if (showButton) {
      const shakeInterval = setInterval(() => {
        setShake(true); // فعال کردن لرزش
        setTimeout(() => setShake(false), 500); // بعد از ۰.۵ ثانیه لرزش را متوقف می‌کنیم
      }, 3000); // هر ۳ ثانیه

      return () => clearInterval(shakeInterval); // پاک کردن اینترول زمانی که دکمه نمایش داده شد
    }
  }, [showButton]);

  const handleButtonClick = (event) => {
    event.preventDefault(); // جلوگیری از اسکرول صفحه
    document.body.style.overflow = "hidden"; // غیرفعال کردن اسکرول

    Swal.fire({
      title: "بازی شروع شد!",
      text: "میتونی با بازی کردن امتیاز جمع کنی و تخفیف بگیری.",
      icon: "info",
      confirmButtonText: "اوکی",
    }).then((result) => {
      if (result.isConfirmed) {
        setShowModal(true); // بعد از تایید وارد بازی شو
      }
    });
  };

  // بعد از بستن modal اسکرول را دوباره فعال کنید
  const closeModal = () => {
    document.body.style.overflow = "auto"; // فعال کردن اسکرول
    setShowModal(false);
  };

  useEffect(() => {
    // Show the button after 5 seconds
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (gameOver) {
      // ذخیره امتیاز در sessionStorage
      localStorage.setItem("score", score);

      Swal.fire({
        title: "بازی تمام شد!",
        text: `امتیاز شما: ${score}`,
        icon: "error",
        confirmButtonText: "اوکی",
      });
    }
  }, [gameOver, score]);

  useEffect(() => {
    if (showButton) {
      const shakeInterval = setInterval(() => {
        setShake((prev) => !prev);
      }, 3000);

      return () => clearInterval(shakeInterval);
    }
  }, [showButton]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const { key } = e;
      if (key === "ArrowUp" && dir.y === 0) setDir({ x: 0, y: -1 });
      if (key === "ArrowDown" && dir.y === 0) setDir({ x: 0, y: 1 });
      if (key === "ArrowLeft" && dir.x === 0) setDir({ x: -1, y: 0 });
      if (key === "ArrowRight" && dir.x === 0) setDir({ x: 1, y: 0 });
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [dir]);

  useEffect(() => {
    if (!running || gameOver) return;

    const interval = setInterval(() => {
      setSnake((prev) => {
        const newHead = { x: prev[0].x + dir.x, y: prev[0].y + dir.y };

        if (
          newHead.x < 0 ||
          newHead.y < 0 ||
          newHead.x >= GRID_SIZE ||
          newHead.y >= GRID_SIZE ||
          prev.some((seg) => seg.x === newHead.x && seg.y === newHead.y)
        ) {
          setGameOver(true);
          setRunning(false);
          return prev;
        }

        const newSnake = [newHead, ...prev];
        if (newHead.x === food.x && newHead.y === food.y) {
          setScore((s) => s + 1);
          setFood(getRandomCoord());
          if (speed > 50) setSpeed((s) => s - 5);
        } else {
          newSnake.pop();
        }
        return newSnake;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [dir, running, food, speed, gameOver]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

    const gradient = ctx.createLinearGradient(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    gradient.addColorStop(0, "#0f172a");
    gradient.addColorStop(1, "#1e293b");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

    ctx.fillStyle = "#f43f5e";
    ctx.shadowColor = "#f43f5e";
    ctx.shadowBlur = 10;
    ctx.fillRect(
      food.x * CELL_SIZE + 2,
      food.y * CELL_SIZE + 2,
      CELL_SIZE - 4,
      CELL_SIZE - 4
    );

    snake.forEach(({ x, y }, i) => {
      ctx.fillStyle = i === 0 ? "#2dd4bf" : "#67e8f9";
      ctx.shadowColor = i === 0 ? "#2dd4bf" : "#67e8f9";
      ctx.shadowBlur = 6;
      ctx.beginPath();
      ctx.roundRect(
        x * CELL_SIZE + 2,
        y * CELL_SIZE + 2,
        CELL_SIZE - 4,
        CELL_SIZE - 4,
        6
      );
      ctx.fill();
    });
    ctx.shadowBlur = 0;
  }, [snake, food]);

  const startGame = () => {
    setSnake([{ x: 10, y: 10 }]);
    setFood(getRandomCoord());
    setDir({ x: 0, y: -1 });
    setSpeed(150);
    setScore(0);
    setGameOver(false);
    setRunning(true);
  };

  //   {"کنترل لمسی"}

  useEffect(() => {
    let touchStartX = 0;
    let touchStartY = 0;

    const handleTouchStart = (e) => {
      if (e.cancelable) e.preventDefault(); // جلوگیری از اسکرول
      const touch = e.touches[0];
      touchStartX = touch.clientX;
      touchStartY = touch.clientY;
    };

    const handleTouchEnd = (e) => {
      if (e.cancelable) e.preventDefault(); // جلوگیری از pull-to-refresh
      const touch = e.changedTouches[0];
      const deltaX = touch.clientX - touchStartX;
      const deltaY = touch.clientY - touchStartY;

      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > 30 && dir.x === 0) setDir({ x: 1, y: 0 });
        if (deltaX < -30 && dir.x === 0) setDir({ x: -1, y: 0 });
      } else {
        if (deltaY > 30 && dir.y === 0) setDir({ x: 0, y: 1 });
        if (deltaY < -30 && dir.y === 0) setDir({ x: 0, y: -1 });
      }
    };

    const gameArea = document.getElementById("snake-game-area");
    if (gameArea) {
      gameArea.addEventListener("touchstart", handleTouchStart, {
        passive: false,
      });
      gameArea.addEventListener("touchend", handleTouchEnd, { passive: false });
    }

    return () => {
      if (gameArea) {
        gameArea.removeEventListener("touchstart", handleTouchStart);
        gameArea.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [dir]);

  return (
    <div className="flex flex-col items-center">
      {showModal && (
        <div
          id="snake-game-area"
          className="fixed inset-0 backdrop-blur-lg bg-black/50 flex items-center justify-center z-50"
        >
          <div className="bg-slate-800 p-6 rounded-xl shadow-2xl border border-cyan-500 flex flex-col items-center space-y-4 relative">
            <button
              onClick={() => {
                setShowModal(false);
                setRunning(false);
              }}
              className="absolute top-2 right-3 text-white text-2xl hover:text-red-400"
            >
              ×
            </button>
            <h1 className="text-4xl font-bold text-cyan-300 drop-shadow-md">
              🐍 Snake Game
            </h1>
            <canvas
              ref={canvasRef}
              width={CANVAS_SIZE}
              height={CANVAS_SIZE}
              className="bg-slate-900 rounded-xl shadow-2xl border border-cyan-500 w-full max-w-[90vw] h-auto"
            />

            <div className="flex gap-6">
              {!running && (
                <button
                  onClick={startGame}
                  className="bg-cyan-600 px-6 py-2 text-white text-lg font-semibold rounded hover:bg-cyan-700 shadow-md"
                >
                  {gameOver ? "Restart" : "Start"}
                </button>
              )}
              <div className="text-white text-lg">Score: {score}</div>
            </div>
            {gameOver && (
              <div className="text-red-400 text-lg">💀 Game Over!</div>
            )}
          </div>
        </div>
      )}

      {/* New button for game */}
      {showButton && (
        <button
          onClick={handleButtonClick}
          className={`fixed bottom-5 right-5 p-3 bg-cyan-500 z-50 text-black rounded-full shadow-xl transition-transform duration-300 ${
            shake ? "animate-shake" : ""
          }`}
        >
          <VscSnake size={30} />
        </button>
      )}
    </div>
  );
};

export default SnakeGame;
