import "../styles/components/VideoDemonstration.css";

const VideoDemonstration = () => {
  return (
    <div className="main_demostrationContainer">
      <h1 className="main_demostrationTitle">Видео демонстрация</h1>
      <iframe
        className="main_demostrationVideo"
        src="https://www.youtube.com/embed/eTYrREwkdUI?si=Gmi9gC5LAaikPAeh"
        allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; loop web-share"
      ></iframe>
    </div>
  );
};

export default VideoDemonstration;
