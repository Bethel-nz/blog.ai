export default function Env() {
	const currentEnv = process.env.NODE_ENV;
	console.log(currentEnv);
	if (currentEnv === 'development') return false;
	return true;
}
