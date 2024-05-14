import React, { useEffect, useState } from 'react';

import { BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs';
import { FaVolumeHigh, FaVolumeLow, FaVolumeOff, FaVolumeXmark } from 'react-icons/fa6';

import plotImage from '@image/Plot/plot-2024.jpeg';
import song from '/public/assets/audios/plot-song.mp3';

import styled from 'styled-components';

const PlotSongLogic = (): React.FunctionComponentElement<JSX.Element> => {
	const [audio] = useState(new Audio(song));
	const [audioIsPlaying, setAudioIsPlaying] = useState(false);
	const [audioProgress, setAudioProgress] = useState(0);
	const [audioVolume, setAudioVolume] = useState(1);
	const [audioVolumeSaved, setAudioVolumeSaved] = useState(audioVolume);
	const [bars, setBars] = useState<Array<JSX.Element>>(
		Array.from({ length: 150 }).map((_, index) => (
			<div
				className='bar'
				key={index}
				style={{
					animation: `ocilation 1s infinite alternate ${index * (Math.random() * 0.05)}s`,
					animationPlayState: 'paused'
				}}
			></div>
		))
	);

	const toggleAudioIsPlaying = (): void => {
		audioIsPlaying ? audio?.pause() : audio?.play();
		setAudioIsPlaying(prev => !prev);
	};

	const updateBarsAnimationState = (): void => {
		setBars(prevBars =>
			prevBars.map(bar => {
				const animationPlayState = audioIsPlaying ? 'running' : 'paused';
				return React.cloneElement(bar, { style: { ...bar.props.style, animationPlayState } });
			})
		);
	};

	const updateAudioProgress = (): void => {
		setAudioProgress((audio.currentTime / audio.duration) * 100);
	};

	const updateAudioVolume = (newVolume: number): void => {
		audio.volume = newVolume;
		setAudioVolume(newVolume);
	};
	const toggleMuteVolume = (): void => {
		setAudioVolumeSaved(audioVolume);
		if (audioVolume === 0) {
			updateAudioVolume(audioVolumeSaved);
		} else {
			updateAudioVolume(0);
		}
	};

	useEffect(() => {
		audio.loop = true;
		audio.addEventListener('timeupdate', updateAudioProgress);
		return () => {
			audio.removeEventListener('timeupdate', updateAudioProgress);
		};
	}, []);

	useEffect(() => {
		updateBarsAnimationState();
	}, [audioIsPlaying]);

	return (
		<StyledComponent>
			<div className='disc-cover'>
				<img src={plotImage} alt='Logo Enredo-2024' />
				<div className='icons'>
					<button onClick={toggleAudioIsPlaying}>{audioIsPlaying ? <BsFillPauseFill /> : <BsFillPlayFill />}</button>
					<div className='player-bars'>{bars}</div>
				</div>
			</div>
			<div className='audio'>
				<div className='progress'>
					<div className='button'>
						<button onClick={toggleAudioIsPlaying}>{audioIsPlaying ? <BsFillPauseFill /> : <BsFillPlayFill />}</button>
					</div>
					<div className='range'>
						<input
							type='range'
							className='audio-progress'
							min='0'
							max='100'
							step='0.01'
							value={audioProgress}
							onChange={e => {
								const value = parseFloat(e.target.value);
								audio.currentTime = (value / 100) * audio.duration;
								updateAudioProgress();
							}}
						/>
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
			align-items: center;
			background: rgba(0, 0, 0, 0.6);
			border-radius: 6px;
			display: flex;
			height: 100%;
			justify-content: center;
			left: 0;
			opacity: 0.7;
			position: absolute;
			top: 0;
			transition: 300ms;
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

			.player-bars {
				display: flex;
				position: absolute;
				bottom: 0px;

				.bar {
					margin: 0 2px;
					background: #000;
					border-radius: 10px 10px 0px 0px;
					width: 1px;
					height: 50px;
					border: 2px solid #fff;
					border-bottom: none;
					transform: translateY(45px);
				}

				@keyframes ocilation {
					from {
						transform: translateY(45px);
					}

					to {
						transform: translateY(0px);
					}
				}
			}
		}

		&:hover .icons {
			opacity: 1;
		}
	}
	.audio {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		padding: 0px 20px;
		height: 50px;
		gap: 25px;
		background: #ffffff;
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
		border-radius: 60px;
		justify-content: center;
		align-items: center;

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
						color: #000000;
						font-size: 1.5rem;
					}
				}
			}

			.range {
				width: 100%;
				display: flex;
				input[type='range'] {
					appearance: none;
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
			&.progress {
				grid-column: 1/9;
				align-items: center;
			}
			&.volume {
				align-items: center;
				grid-column: 9/13;
			}
		}
	}
	@media screen {
		@media (max-width: 1100px) {
	grid-column: 2/12;
			
		}
	}
`;

export default PlotSongLogic;
