
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { SecurityUtils } from '@/utils/security';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  errorId: string;
}

export class SecurityErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, errorId: '' };
  }

  static getDerivedStateFromError(error: Error): State {
    // Generate unique error ID for tracking
    const errorId = `sec_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    return {
      hasError: true,
      errorId
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log security-related errors
    SecurityUtils.logSecurityEvent('COMPONENT_ERROR', {
      error: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      errorId: this.state.errorId
    });
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <h3 className="text-red-800 font-semibold mb-2">
            Error de Seguridad
          </h3>
          <p className="text-red-700 text-sm">
            Se ha detectado un error. Por favor, recarga la página.
          </p>
          <p className="text-red-600 text-xs mt-2">
            ID de Error: {this.state.errorId}
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}
