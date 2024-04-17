export const AppRoutes = {
	homePage: '/',
	executiveBoard: '/executive-board',
	school: '/school',
	followUps: '/follow-ups',
	followUp: '/follow-ups/:id',
	history: '/history',
	foundation: '/foundation',
	trajectory: '/trajectory',
	placements: '/placements',
	presidents: '/presidents',
	awards: '/awards',
	pavilion: '/pavilion',
	fans: '/fans',
	sambas: '/sambas',
	samba: '/sambas/:id',
	carnivalDecades: '/carnivals/decades',
	carnivalDecade: '/carnivals/decades/',
	carnival: '/carnivals/',
	site: '/site',

	sign: '/sign',
	fanMember: '/fan-member',

	supporterMember: '/supporter-member',

	store: '/store',
	storeProducts: '/store/products',
	storeProduct: '/store/products/:id',
	storeCart: '/store/cart',

	auth: '/auth',
	user: '/auth/user',
	userDetails: '/auth/user/details',
	userAccount: '/auth/user/account',
	userAccountProfile: '/auth/user/account/profile',
	userAccountAddress: '/auth/user/account/address',
	userAccountPassword: '/auth/user/account/password'
};

// export class AppRoutes {
// 	static homePage = { root: ['/'] };
// 	static board = { root: ['/board'] };
// 	static supporterMember = { root: ['/supporter-member'] };
// 	static sign = { root: ['/sign'] };
// 	static fanMember = { root: ['/fan-member'] };

// 	static store = {
// 		root: ['/store'],
// 		products: { root: ['products'] },
// 		product: { root: ['products/:id'] },
// 		cart: { root: ['cart'] }
// 	};

// 	static auth = {
// 		root: ['/auth'],
// 		user: {
// 			root: ['user'],
// 			account: {
// 				root: ['account'],
// 				profile: { root: ['profile'] }
// 			}
// 		}
// 	};

// 	static {
// 		AppRoutes.buildRoutes(AppRoutes);
// 	}

// 	private static buildRoutes(obj: any, parentRoute: string = ''): void {
// 		for (const key in obj) {
// 			if (typeof obj[key] === 'object' && obj[key].hasOwnProperty('root')) {
// 				const { root } = obj[key];
// 				if (root[0]) {
// 					const formattedRoot = root[0].startsWith('/') ? root[0].substring(1) : root[0];
// 					const route = `${parentRoute}/${formattedRoot}`;
// 					obj[key].root[1] = route;
// 					this.buildRoutes(obj[key], route);
// 				}
// 			}
// 		}
// 	}
// }
