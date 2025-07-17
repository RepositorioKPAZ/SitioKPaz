
// Security utilities for input validation and sanitization
export const SecurityUtils = {
  // Sanitize string input to prevent XSS
  sanitizeInput: (input: string): string => {
    if (typeof input !== 'string') return '';
    
    return input
      .replace(/[<>]/g, '') // Remove potential HTML tags
      .replace(/javascript:/gi, '') // Remove javascript: protocol
      .replace(/on\w+=/gi, '') // Remove event handlers
      .trim()
      .slice(0, 1000); // Limit length to prevent buffer overflow attempts
  },

  // Enhanced email validation with security considerations
  isValidEmail: (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const sanitized = SecurityUtils.sanitizeInput(email);
    
    // Check for suspicious patterns
    const suspiciousPatterns = [
      /script/i,
      /javascript/i,
      /vbscript/i,
      /onload/i,
      /onerror/i
    ];
    
    const hasSuspiciousContent = suspiciousPatterns.some(pattern => 
      pattern.test(sanitized)
    );
    
    return emailRegex.test(sanitized) && 
           !hasSuspiciousContent && 
           sanitized.length <= 254; // RFC 5321 limit
  },

  // Enhanced phone validation
  isValidPhone: (phone: string): boolean => {
    const sanitized = SecurityUtils.sanitizeInput(phone);
    const phoneRegex = /^\+?[\d\s\-\(\)]{8,20}$/;
    
    return phoneRegex.test(sanitized) && 
           sanitized.replace(/\D/g, '').length >= 8 &&
           sanitized.replace(/\D/g, '').length <= 15;
  },

  // Validate names and company names
  isValidName: (name: string): boolean => {
    const sanitized = SecurityUtils.sanitizeInput(name);
    const nameRegex = /^[a-zA-ZÀ-ÿ\u00C0-\u017F\s\-\.\']{2,100}$/;
    
    return nameRegex.test(sanitized) && 
           sanitized.length >= 2 && 
           sanitized.length <= 100;
  },

  // Validate text content (messages, positions, etc.)
  isValidText: (text: string, maxLength: number = 500): boolean => {
    const sanitized = SecurityUtils.sanitizeInput(text);
    
    // Check for suspicious patterns
    const suspiciousPatterns = [
      /<script/i,
      /javascript:/i,
      /data:text\/html/i,
      /vbscript:/i
    ];
    
    const hasSuspiciousContent = suspiciousPatterns.some(pattern => 
      pattern.test(sanitized)
    );
    
    return !hasSuspiciousContent && 
           sanitized.length >= 2 && 
           sanitized.length <= maxLength;
  },

  // Log security events for monitoring
  logSecurityEvent: (event: string, details: any = {}) => {
    const timestamp = new Date().toISOString();
    const logEntry = {
      timestamp,
      event,
      details,
      userAgent: navigator.userAgent,
      url: window.location.href
    };
    
    console.warn('[SECURITY EVENT]', logEntry);
    
    // In production, this could send to a monitoring service
    // Example: sendToMonitoringService(logEntry);
  }
};

// Rate limiting utility for form submissions
export const RateLimiter = {
  attempts: new Map<string, { count: number; lastAttempt: number }>(),
  
  canAttempt: (identifier: string, maxAttempts: number = 5, windowMs: number = 300000): boolean => {
    const now = Date.now();
    const record = RateLimiter.attempts.get(identifier);
    
    if (!record) {
      RateLimiter.attempts.set(identifier, { count: 1, lastAttempt: now });
      return true;
    }
    
    // Reset if window has passed
    if (now - record.lastAttempt > windowMs) {
      RateLimiter.attempts.set(identifier, { count: 1, lastAttempt: now });
      return true;
    }
    
    // Check if within limits
    if (record.count < maxAttempts) {
      record.count++;
      record.lastAttempt = now;
      return true;
    }
    
    SecurityUtils.logSecurityEvent('RATE_LIMIT_EXCEEDED', {
      identifier,
      attempts: record.count,
      windowMs
    });
    
    return false;
  }
};
