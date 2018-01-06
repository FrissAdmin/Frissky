import { connect }        from 'react-redux';
import { withRouter }     from 'react-router';
import mapDispatchToProps from './mapDispatchToProps';
import mapStateToProps    from './mapStateToProps';

export default (Component) => withRouter(connect(mapStateToProps, mapDispatchToProps)(Component));
