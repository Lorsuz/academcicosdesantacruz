import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import { BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs';
import { FaVolumeHigh, FaVolumeLow, FaVolumeOff, FaVolumeXmark } from 'react-icons/fa6';
import styled from 'styled-components';
import WaveSurfer from 'wavesurfer.js';
import plotImage from '../assets/images/Plot/plot-2024.jpeg';
import audioSong from '../assets/audios/plot-song.mp3';
import { formatTime } from '../utils/FormatTime';

const PlotSongLogic: React.FC = () => {
	const [audioIsPlaying, setAudioIsPlaying] = useState(false);
	const [audioVolume, setAudioVolume] = useState(1);
	const [audioCurrentTime, setAudioCurrentTime] = useState('00:00');
	const [audioTotalTime, setAudioTotalTime] = useState('00:00');

	const toggleAudioIsPlaying = (): void => {
		setAudioIsPlaying(prev => !prev);
	};

	const updateAudioVolume = (newVolume: number): void => {
		setAudioVolume(newVolume);
	};

	const toggleMuteVolume = (): void => {
		updateAudioVolume(audioVolume === 0 ? 1 : 0);
	};

	const waveformRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);

	if (waveformRef.current === undefined) {
		waveformRef.current = null as HTMLDivElement | null;
	}
	const wavesurferRef = useRef<WaveSurfer>();

	useEffect(() => {
		if (!waveformRef.current) return;

		wavesurferRef.current = WaveSurfer.create({
			container: waveformRef.current,
			waveColor: '#afbac2',
			progressColor: '#e74c3c',
			cursorColor: '#3ce753',
			barWidth: 3,
			barRadius: 5,
			height: 25,
			normalize: true,
			backend: 'MediaElement',
			cursorWidth: 3
		});

		wavesurferRef.current.load(audioSong);

		wavesurferRef.current.on('ready', () => {
			if (wavesurferRef.current) {
				const durationInSeconds = Math.floor(wavesurferRef.current.getDuration());
				setAudioTotalTime(formatTime(durationInSeconds));
			}
		});

		const handleChangeProgress = (): void => {
			if (wavesurferRef.current) {
				const currentTimeInSeconds = Math.floor(wavesurferRef.current.getCurrentTime());
				setAudioCurrentTime(formatTime(currentTimeInSeconds));
			}
		};

		wavesurferRef.current.on('audioprocess', handleChangeProgress);

		wavesurferRef.current.on('interaction', handleChangeProgress);

		return () => {
			if (wavesurferRef.current) {
				wavesurferRef.current.destroy();
			}
		};
	}, []);

	useEffect(() => {
		if (wavesurferRef.current) {
			if (audioIsPlaying) {
				wavesurferRef.current.play();
			} else {
				wavesurferRef.current.pause();
			}
		}
	}, [audioIsPlaying]);

	useEffect(() => {
		if (wavesurferRef.current) {
			wavesurferRef.current.setVolume(audioVolume);
		}
	}, [audioVolume]);

	return (
		<StyledComponent>
			<div className='disc-cover'>
				<img src={plotImage} alt='Logo Enredo-2024' />
				<div className='icons'>
					<div className='play-pause'>
						<button className='play-pause' onClick={toggleAudioIsPlaying}>
							{audioIsPlaying ? <BsFillPauseFill /> : <BsFillPlayFill />}
						</button>
					</div>
					<div className='song-player'>
						<div className='progress'>
							<div className='button'>
								<button onClick={toggleAudioIsPlaying}>
									{audioIsPlaying ? <BsFillPauseFill /> : <BsFillPlayFill />}
								</button>
							</div>
							<div className='range'>
								<div className='time current'>
									<span>{audioCurrentTime}</span>
								</div>
								<div ref={waveformRef} className='bar'></div>
								<div className='time total'>
									<span>{audioTotalTime}</span>
								</div>
							</div>
						</div>
						<div className='volume'>
							<div className='button'>
								<button onClick={toggleMuteVolume}>
									{audioVolume === 0 ? (
										<FaVolumeXmark />
									) : audioVolume < 0.25 ? (
										<FaVolumeOff />
									) : audioVolume < 1 ? (
										<FaVolumeLow />
									) : (
										<FaVolumeHigh />
									)}
								</button>
							</div>
							<div className='range'>
								<input
									type='range'
									className='audio-volume'
									min='0'
									max='1'
									step='0.01'
									value={audioVolume}
									onChange={e => {
										const value = parseFloat(e.target.value);
										updateAudioVolume(value);
									}}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</StyledComponent>
	);
};

const StyledComponent = styled.section`
	grid-column: 7/12;

	.disc-cover {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		width: 100%;
		box-shadow:
			-10px -10px 10px 0 #fff,
			10px 10px 10px 0 rgba(0, 0, 0, 0.6);
		height: auto;
		overflow: hidden;
		margin: 0 auto 50px;
		border-radius: 6px;

		img {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			object-fit: cover;
		}

		.icons {
			background: rgba(0, 0, 0, 0.6);
			border-radius: 6px;
			display: grid;
			grid-template-columns: repeat(11, 1fr);
			grid-template-rows: repeat(11, 1fr);
			height: 100%;
			left: 0;
			opacity: 0.7;
			position: absolute;
			top: 0;
			transition: 300ms;
			width: 100%;

			.play-pause {
				grid-column: 6/7;
				grid-row: 6/7;
				align-items: center;
				justify-content: center;
				display: flex;
				align-self: center;
				justify-self: center;
				justify-items: center;
				width: 100%;
				button {
					align-items: center;
					border-radius: 50%;
					border: 3px solid transparent;
					cursor: pointer;
					display: flex;
					height: 80px;
					justify-content: center;
					transition: 300ms;
					width: 80px;

					background: #000;

					* {
						color: #ffffff;
					}

					font-size: 4rem;
					margin-right: 8px;

					&:hover {
						border: 3px solid white;
					}
				}
			}

			.song-player {
				display: flex;
				grid-template-columns: repeat(12, 1fr);
				padding: 0px 20px;
				height: 50px;
				gap: 25px;
				box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
				border-radius: 60px;
				justify-content: center;
				align-items: center;
				grid-column: 2/11;
				grid-row: 10/11;

				> div {
					display: flex;
					width: 100%;
					gap: 10px;

					.button {
						display: flex;
						justify-content: center;
						align-items: center;
						button {
							display: flex;
							justify-content: center;
							align-items: center;
							* {
								color: #ffffff;
								font-size: 1.5rem;
							}
						}
					}

					&.progress {
						width: 90%;
						* {
							/* outline: 1px dotted; */
						}
						.range {
							width: 100%;
							display: flex;
							justify-content: center;
							align-items: center;
							gap: 10px;
							.time {
								span {
									font-size: 0.8rem;
									font-family: monospace;
								}
								&.current {
								}
								&.total {
								}
							}
							.bar {
								width: 100%;
							}
						}
					}
					&.volume {
						width: 5%;
						position: relative;
						.button {
						}
						.range {
							width: 100%;
							overflow: hidden;
							input[type='range'] {
								-webkit-appearance: none;
								height: 3px;
								background: var(--color-primary);
								width: 100%;
								border-radius: 50px;
							}

							input[type='range']::-webkit-slider-thumb {
								-webkit-appearance: none;
								width: 10px;
								height: 10px;
								border-radius: 50%;
								background: var(--color-primary);
								cursor: pointer;
							}

							input[type='range']::-webkit-slider-runnable-track {
								/* -webkit-appearance: none; */
								/* width: 100%; */
								/* height: 10px; */
								/* cursor: pointer; */
								/* background: #912c2c;  */
								/* border-radius: 5px; */
								/* position: relative; */
							}
						}
						&:hover {
							width: 25%;
							~ .progress {
								width: 65%;
							}
						}
					}
				}
			}
		}

		&:hover .icons {
			opacity: 1;
		}
	}
	* {
		/* outline: 1px dotted; */
	}

	@media screen {
		@media (max-width: 1100px) {
			grid-column: 2/12;
		}
	}
`;

export default PlotSongLogic;
