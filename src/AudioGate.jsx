import { playAudioSequence } from "./utils/voice-bot";

const AudioGate = ({ onAllow }) => {
  const handleClick = async () => {
    try {
      playAudioSequence([ 'Silent' ])
      onAllow(); // только если успешно
    } catch (err) {
      console.error("Не удалось воспроизвести аудио:", err);
      alert("Невозможно включить звук — разрешите его в настройках браузера.");
    }
  };

  return (
    <div className="h-screen w-screen bg-black text-white flex items-center justify-center flex-col gap-4">
      <h1 className="text-xl mb-4">Нажмите, чтобы включить звук</h1>
      <button
        onClick={handleClick}
        className="bg-blue-500 px-6 py-3 text-lg rounded hover:bg-blue-600 transition"
      >
        Разрешить аудио
      </button>
    </div>
  );
};

export default AudioGate;
