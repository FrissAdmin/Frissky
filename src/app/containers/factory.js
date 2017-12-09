import { connect }        from 'react-redux';
import mapDispatchToProps from './mapDispatchToProps';
import mapStateToProps    from './mapStateToProps';

export default (Component) => connect(mapStateToProps, mapDispatchToProps)(Component);
