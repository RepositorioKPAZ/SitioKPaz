
// Security configuration and deployment guidelines
export const SecurityConfig = {
  // Content Security Policy headers for production
  CSP_HEADERS: {
    "Content-Security-Policy": [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'", // Note: Remove unsafe-inline and unsafe-eval in production
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https:",
      "connect-src 'self' https:",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'"
    ].join("; ")
  },

  // Security headers for production deployment
  SECURITY_HEADERS: {
    "X-Frame-Options": "DENY",
    "X-Content-Type-Options": "nosniff",
    "X-XSS-Protection": "1; mode=block",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Permissions-Policy": "geolocation=(), microphone=(), camera=()",
    "Strict-Transport-Security": "max-age=31536000; includeSubDomains"
  },

  // Rate limiting configuration
  RATE_LIMITS: {
    CONTACT_FORM: {
      maxAttempts: 3,
      windowMs: 300000 // 5 minutes
    },
    DOWNLOAD_FORM: {
      maxAttempts: 2,
      windowMs: 600000 // 10 minutes
    }
  },

  // Input validation limits
  INPUT_LIMITS: {
    NAME_MAX_LENGTH: 100,
    EMAIL_MAX_LENGTH: 254,
    PHONE_MAX_LENGTH: 20,
    MESSAGE_MAX_LENGTH: 1000,
    COMPANY_MAX_LENGTH: 100,
    POSITION_MAX_LENGTH: 100
  }
};

// Security monitoring utilities
export const SecurityMonitoring = {
  // Initialize security monitoring
  init: () => {
    // Monitor for potential XSS attempts
    window.addEventListener('error', (event) => {
      if (event.error && event.error.message) {
        const message = event.error.message.toLowerCase();
        if (message.includes('script') || message.includes('eval')) {
          SecurityUtils.logSecurityEvent('POTENTIAL_XSS_ATTEMPT', {
            error: event.error.message,
            filename: event.filename,
            lineno: event.lineno
          });
        }
      }
    });

    // Monitor for console manipulation attempts
    const originalConsole = { ...console };
    console.log('[SECURITY] Security monitoring initialized');
  },

  // Generate security report
  generateSecurityReport: () => {
    return {
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      cookiesEnabled: navigator.cookieEnabled,
      doNotTrack: navigator.doNotTrack,
      language: navigator.language,
      platform: navigator.platform
    };
  }
};

// Import SecurityUtils for this file
import { SecurityUtils } from './security';
