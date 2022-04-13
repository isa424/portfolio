import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home page', () => {
	it('should render correctly', () => {
		const {container} = render(<Home/>);

		const span = screen.getByText(/open a file/i);

		expect(span).toBeInTheDocument();
		expect(container).toMatchSnapshot();
	});
});
