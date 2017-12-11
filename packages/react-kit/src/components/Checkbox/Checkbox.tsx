import * as React from 'react';
import { Component, EventHandler, ChangeEvent, ComponentClass, ChangeEventHandler } from 'react';
import { PURE } from '@devexperts/utils/lib/react/pure';
import classnames from 'classnames';

import { withTheme } from '@devexperts/utils/lib/react/withTheme';
import { ObjectClean } from 'typelevel-ts';
import { PartialKeys } from '@devexperts/utils/lib/object/object';
import { TControlProps } from '../Control/Control';

export const CHECKBOX = Symbol('Checkbox');

export type TFullCheckboxProps = TControlProps<boolean> & {
	id?: string,
	checkMark: React.ReactElement<any> | React.ReactText,
	isDisabled?: boolean,
	theme: {
		container?: string,
		container_isDisabled?: string,
		input?: string,
		view?: string,
		view_isDisabled?: string,
		icon?: string,
		icon_isChecked?: string,
		icon_isDisabled?: string
	}
};

@PURE
class RawCheckbox extends Component<TFullCheckboxProps> {
	render() {
		const {
			id,
            checkMark,
			isDisabled,
			value,
			theme
		} = this.props;

		const iconClassName = classnames(theme.icon, {
			[theme.icon_isChecked as string]: value,
			[theme.icon_isDisabled as string]: isDisabled
		});
		const viewClassName = classnames(theme.view, {
			[theme.view_isDisabled as string]: isDisabled
		});

		return (
			<span className={theme.container}>
				<input type="checkbox"
				       id={id}
				       checked={value || false}
				       disabled={isDisabled}
				       onChange={this.handleChange}
				       className={theme.input}/>
				<span className={viewClassName}>
					<span className={iconClassName}>
						{checkMark}
					</span>
				</span>
			</span>
		);
	}

	handleChange: ChangeEventHandler<HTMLInputElement> = element => {
		this.props.onValueChange(element.target.checked);
	};
}

export type TCheckboxProps = ObjectClean<PartialKeys<TFullCheckboxProps, 'theme'>>;
export const Checkbox: ComponentClass<TCheckboxProps> = withTheme(CHECKBOX)(RawCheckbox);