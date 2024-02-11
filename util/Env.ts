export default function Env() {
	const currentEnv = process.env.NODE_ENV;
	if (currentEnv === 'development') return true;
	return false;
}
