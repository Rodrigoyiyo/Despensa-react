import { AuthProvider } from './auth/context/AuthProvider';
import { AppRouter } from './router/AppRouter';

export const AppDespensa = () => {
    return (
        <AuthProvider>
            <AppRouter />
        </AuthProvider>
       
    );
}