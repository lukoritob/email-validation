import { render, screen } from '@testing-library/react';
import LoginForm from '.';

test('renders sign in page', () => {
    render(<LoginForm />);
    const signInText = screen.getByText("Sign in");
    expect(signInText).toBeInTheDocument();
});

// Add more unit test here
describe('validateForm', () => {
    it('should return "Invalid email address. Please enter a valid email address." when email is invalid', () => {
        const event = { preventDefault: jest.fn() };
        const data = new FormData();
        data.append('email', 'invalidemail');
        data.append('password', 'Password123!');
        event.currentTarget = data;

        const spy = jest.spyOn(global.console, 'log');

        let alertMessage;
        const setShowAlert = (message) => { alertMessage = message; }

        validateForm(event, setShowAlert);
        expect(alertMessage).toBe("Invalid email address. Please enter a valid email address.");
        expect(spy).not.toHaveBeenCalled();
    });

    it('should return "Invalid password. Please make sure its at least 8 characters long, contains both uppercase and lowercase letters, a numerical digit, and a special character." when password is invalid', () => {
        const event = { preventDefault: jest.fn() };
        const data = new FormData();
        data.append('email', 'valid@email.com');
        data.append('password', 'password');
        event.currentTarget = data;

        const spy = jest.spyOn(global.console, 'log');

        let alertMessage;
        const setShowAlert = (message) => { alertMessage = message; }

        validateForm(event, setShowAlert);
        expect(alertMessage).toBe("Invalid password. Please make sure it's at least 8 characters long, contains both uppercase and lowercase letters, a numerical digit, and a special character.");
        expect(spy).not.toHaveBeenCalled();
    });

    it('should return "Login Successful" when email and password are valid', () => {
        const event = { preventDefault: jest.fn() };
        const data = new FormData();
        data.append('email', 'valid@email.com');
        data.append('password', 'Password123!');
        event.currentTarget = data;

        const spy = jest.spyOn(global.console, 'log');

        let alertMessage;
        const setShowAlert = (message) => { alertMessage = message; }

        validateForm(event, setShowAlert);
        expect(alertMessage).toBe("Login Successful");
        expect(spy).not.toHaveBeenCalled();
    });
});