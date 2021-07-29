import React from 'react';

interface Options {
	ignoreFunctions?: boolean
}

// TYPE INFERENCE WITH GENERIC PROPS MAY NOT WORK

function pure<TargetProps extends {}>(TargetComponent: React.ComponentType<TargetProps>, options: Options = {}) {

	return class Pure extends React.PureComponent<TargetProps>{

		render() {
			return <TargetComponent {...this.props as TargetProps} />
		}
	}
}

export default pure;