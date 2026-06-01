import { Card } from '../../../../core/components/card/card';

export const Login: React.FC = () => {
    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const user = {
            username: formData.get('username') as string,
            password: formData.get('password') as string,
        };
        console.log('Login data:', user);
    };

    return (
        <Card title="Login">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </Card>
    );
};
