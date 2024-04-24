import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	// assetsInclude: ['**/*.mp3', '**/*.wav', '**/*.ogg', '**/*.jpeg', '**/*.png', '**/*.svg'],
	assetsInclude: /\.(png|jpe?g|gif|svg)$/i,
	base: '/',
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			
			'@page': path.resolve(__dirname, './src/pages'),
			'@router': path.resolve(__dirname, './src/router'),
			
			'@component': path.resolve(__dirname, './src/components'),
			'@layout': path.resolve(__dirname, './src/components/layouts'),
			'@partial': path.resolve(__dirname, './src/components/partials'),

			'@util': path.resolve(__dirname, './src/utils'),
			'@redux': path.resolve(__dirname, './src/utils/redux'),
			'@config': path.resolve(__dirname, './src/utils/configs'),
			'@schema': path.resolve(__dirname, './src/utils/schemas'),
			'@formatter': path.resolve(__dirname, './src/utils/formatters'),
			'@validator': path.resolve(__dirname, './src/utils/validators'),
			'@library': path.resolve(__dirname, './src/utils/libraries'),
			
			'@hook': path.resolve(__dirname, './src/hooks'),
			'@service': path.resolve(__dirname, './src/services'),
			'@constant': path.resolve(__dirname, './src/constants'),
			'@type': path.resolve(__dirname, './src/types'),
			'@context': path.resolve(__dirname, './src/context'),
			'@route': path.resolve(__dirname, './src/routes'),
			'@store': path.resolve(__dirname, './src/store'),
			'@api': path.resolve(__dirname, './src/api'),
			'@mock': path.resolve(__dirname, './src/mock'),
			'@icon': path.resolve(__dirname, './src/icons'),
			'@locale': path.resolve(__dirname, './src/locales'),
			'@typing': path.resolve(__dirname, './src/typings'),
			'@view': path.resolve(__dirname, './src/views'),

			'@style': path.resolve(__dirname, './public/styles'),
			'@json': path.resolve(__dirname, './public/jsons'),
			'@image': path.resolve(__dirname, './public/assets/images'),
			'@audio': path.resolve(__dirname, './public/assets/audios	'),
			'@video': path.resolve(__dirname, './public/assets/videos	'),
		}
	}
});
