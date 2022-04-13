import { ToolbarButton } from './toolbar_button';
import { render, screen, fireEvent } from '@testing-library/react';

describe('toolbar button', () => {
	it('should render successfully', () => {
		const {container} = render(<ToolbarButton type="close"/>);

		expect(container).toMatchSnapshot();
	});

	it('should render correctly when hovered', () => {
		const {container} = render(<ToolbarButton type={'minimize'}/>)

		const button = screen.getByRole('button');

		fireEvent.mouseOver(button);

		expect(container).toMatchSnapshot();
	});

	it('should have a round div inside on hover', () => {
		const {container} = render(
			<ToolbarButton type={'close'}/>
		);

		const button = screen.getByRole('button');

		fireEvent.mouseOver(button, {});

		expect(container.childElementCount).toEqual(1);

		const child = button.children[0];
		expect(child).toBeInstanceOf(HTMLDivElement);
	});
});
