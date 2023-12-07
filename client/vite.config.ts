import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	// assetsInclude: ['**/*.mp3', '**/*.wav', '**/*.ogg', '**/*.jpeg', '**/*.png', '**/*.svg'],
	assetsInclude: /\.(png|jpe?g|gif|svg)$/i,
	base: '/home',
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@assets': path.resolve(__dirname, 'src/assets'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@pages': path.resolve(__dirname, 'src/pages'),
			'@styles': path.resolve(__dirname, 'src/styles'),
			'@utils': path.resolve(__dirname, 'src/utils'),
			'@partials': path.resolve(__dirname, 'src/partials'),
			'@hooks': path.resolve(__dirname, 'src/hooks'),
			'@services': path.resolve(__dirname, 'src/services'),
			'@constants': path.resolve(__dirname, 'src/constants'),
			'@types': path.resolve(__dirname, 'src/types'),
			'@context': path.resolve(__dirname, 'src/context'),
			'@config': path.resolve(__dirname, 'src/config'),
			'@routes': path.resolve(__dirname, 'src/routes'),
			'@store': path.resolve(__dirname, 'src/store'),
			'@api': path.resolve(__dirname, 'src/api'),
			'@mock': path.resolve(__dirname, 'src/mock'),
			'@layouts': path.resolve(__dirname, 'src/layouts'),
			'@icons': path.resolve(__dirname, 'src/icons'),
			'@images': path.resolve(__dirname, 'src/images'),
			'@locales': path.resolve(__dirname, 'src/locales'),
			'@typings': path.resolve(__dirname, 'src/typings'),
			'@views': path.resolve(__dirname, 'src/views')
		}
	}
});
