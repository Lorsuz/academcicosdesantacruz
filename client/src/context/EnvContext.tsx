import { useContext } from 'react';
import { EnvContext } from '../providers/EnvProvider';

export const useEnv = (): any => {
	return useContext(EnvContext);
};
