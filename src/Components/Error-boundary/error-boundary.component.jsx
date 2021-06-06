import React from 'react';

import './error-boundary.styles.scss'

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }


    // 1. Errorboundary component is responsible for encountered errors and displaying 404 page
  
    // If error is caught
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }

  
    // Reset error state
    handleClick = () => {
      this.setState({
        hasError: false
      })
    }
  
    // if no error has been caught then renders child components i.e. the application
    render() {

      if (this.state.hasError) {
        return (
            <div className="error-boundary">
                <div className='wrapper'>
                    <div className="content">
                        <h1>Psst, there's nothing here.</h1>
                        <p>Let's get back home. </p>
                        <div className="buttons">
                            <a href='/' onClick={this.handleClick}> Home </a>
                        </div>
                
                    </div>
                </div>
            </div>
        )
      }
  
      return this.props.children; 
    }
  }

export default ErrorBoundary;