import { connect }        from 'react-redux';
import { withRouter }     from 'react-router';
import mapDispatchToProps from './mapDispatchToProps';
import mapStateToProps    from './mapStateToProps';

export default (Component, includeRouter = false) => {
  const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Component);

  if (!includeRouter) return connectedComponent;
  return withRouter(connectedComponent);
};
