import React from 'react'

function Player() {
  return (
    // <div className="player">
      <div className="player__container">
        <audio className="audio" controls>
          <source
            src="https://www.bensound.com/bensound-music/bensound-buddy.mp3"
            type="audio/mp3"
          />
          Your browser does not support the audio element.
        </audio>
        <div className="player__controls">
          <button
            className="controls__play-button"
            data-icon="P"
            aria-label="play pause toggle"
          >
            <svg
              className="controls__svg controls__play-icon"
              width="16"
              height="20"
              viewBox="0 0 16 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.2578 8.62536C16.2474 9.27629 16.2474 10.7237 15.2578 11.3746L2.56208 19.725C1.46363 20.4475 -8.59461e-07 19.6622 -8.02119e-07 18.3503L-7.21088e-08 1.64966C-1.47664e-08 0.337816 1.46363 -0.447463 2.56208 0.275023L15.2578 8.62536Z"
                fill="white"
              />
            </svg>
            <svg
              className="controls__svg controls__pause-icon disabled"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="2" width="4" height="16" rx="1" fill="white" />
              <rect x="11" width="4" height="16" rx="1" fill="white" />
            </svg>
          </button>
          <div className="song-item">
            <div className="song-item__wrap">
              <div className="song-item__name-wrap song-item__name-wrap_type_current">
                Поезия &mdash; Мукулатура feat. Саша
                Петровgggggggggggggggggggggggggggggggggggggggggggggggggggggg
                {/* <span
                    className="song-item__detail song-item__detail_type_number"
                    >&#8470;6</span
                > */}
                {/* <span
                        className="song-item__detail song-item__detail_type_name"
                        >Поезия &mdash;</span
                    >
                    <span
                        className="song-item__detail song-item__detail_type_author"
                        >Мукулатура feat. Саша Петровgggggggggggggggggggggggggggggggg</span
                    > */}
              </div>
              {/* <progress
                className="song-item__time-progress"
                max="200"
                value="50"
            ></progress> */}
              <div className="song-item__timer">
                <span aria-label="timer">00:00</span>
              </div>
            </div>
            <div className="song-item__timeline">
              <div id="playhead"></div>
              <div className="hover-playhead" data-content="1:00"></div>
            </div>
          </div>
          <button className="controls__lyrics-release-button">
            Текст песни
          </button>
          <button className="controls__open-details-button">
            <svg
              className="controls__svg controls__arrow-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12.6402 8.23178L12 7.69829L11.3598 8.23178L5.35982 13.2318L6.64018 14.7682L12 10.3017L17.3598 14.7682L18.6402 13.2318L12.6402 8.23178Z"
                fill="white"
              />
            </svg>
            <svg
              className="controls__svg controls__cross-icon disabled"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM10.5867 12L7.05116 8.46447L8.46537 7.05025L12.0009 10.5858L15.5364 7.05025L16.9507 8.46447L13.4151 12L16.9507 15.5355L15.5364 16.9497L12.0009 13.4142L8.46537 16.9497L7.05116 15.5355L10.5867 12Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <div className="player__details-container">
          <p className="details__title">Релизы:</p>
          <ul className="details__songs-list">
            <li className="details__song-item">
              <div className="song-item__name-wrap song-item__name-wrap_type_release">
                {/* <span className="song-item__detail song-item__detail_type_number">&#8470;6</span> */}
                <span className="song-item__detail song-item__detail_type_name">
                  Поезия &mdash;
                </span>
                <span className="song-item__detail song-item__detail_type_author">
                  Мукулатура feat. Саша Петров
                </span>
              </div>
            </li>
            <li className="details__song-item">
              <div className="song-item__name-wrap song-item__name-wrap_type_release">
                {/* <span className="song-item__detail song-item__detail_type_number">&#8470;6</span> */}
                <span className="song-item__detail song-item__detail_type_name">
                  Поезия &mdash;
                </span>
                <span className="song-item__detail song-item__detail_type_author">
                  Мукулатура feat. Саша Петров
                </span>
              </div>
            </li>
            <li className="details__song-item">
              <div className="song-item__name-wrap song-item__name-wrap_type_release">
                {/* <span className="song-item__detail song-item__detail_type_number"
                    >&#8470;6</span> */}
                <span className="song-item__detail song-item__detail_type_name">
                  Поезия &mdash;
                </span>
                <span className="song-item__detail song-item__detail_type_author">
                  Мукулатура feat. Саша Петров
                </span>
              </div>
            </li>
            <li className="details__song-item">
              <div className="song-item__name-wrap song-item__name-wrap_type_release">
                {/* <span className="song-item__detail song-item__detail_type_number">&#8470;6</span> */}
                <span className="song-item__detail song-item__detail_type_name">
                  Поезия &mdash;
                </span>
                <span className="song-item__detail song-item__detail_type_author">
                  Мукулатура feat. Саша Петров
                </span>
              </div>
            </li>
          </ul>
          <p className="details__song-text">
            Мой милый милый мальчик
            <br />
            Моя милая милая девочка
            <br />
            Никогда не знаешь что будет дальше
            <br />В этой гадкой зиме
          </p>
        </div>
      </div>
    // </div>
  )
}

export default Player