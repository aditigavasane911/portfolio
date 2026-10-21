import React from "react";

// ============================================================================
// Authentic Brand SVGs for Tools & Technologies
// Crisp, retina-ready, scalable vector graphics matching official brand specs
// ============================================================================

export function VSCodeLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.472 2.052a1.44 1.44 0 0 0-1.408.318L6.876 10.39 3.036 7.476a.96.96 0 0 0-1.28.16l-.88.98a.96.96 0 0 0 .11 1.34l3.43 2.92-3.43 2.92a.96.96 0 0 0-.11 1.34l.88.98a.96.96 0 0 0 1.28.16l3.84-2.914 9.188 8.02a1.44 1.44 0 0 0 1.408.318 1.44 1.44 0 0 0 .936-1.35V3.402a1.44 1.44 0 0 0-.936-1.35z"
        fill="#0065A9"
      />
      <path
        d="M17.472 2.052a1.44 1.44 0 0 0-1.408.318L6.876 10.39l3.35 2.85 7.246-6.32a.72.72 0 0 1 1.008.06.72.72 0 0 1-.06 1.008L11.53 14.12l6.942 6.06V3.402a1.44 1.44 0 0 0-.936-1.35z"
        fill="#007ACC"
      />
      <path
        d="M18.472 20.18l-6.942-6.06-1.31 1.14 7.246 6.32a.72.72 0 0 0 1.006-.05z"
        fill="#1F9CF0"
      />
      <path
        d="M18.472 3.82a.72.72 0 0 0-1.006-.05L6.876 10.39l1.31 1.14 9.28-8.11a.72.72 0 0 0 1.006.4z"
        fill="#007ACC"
      />
    </svg>
  );
}

export function AntigravityLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="agy-grad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00E5FF" />
          <stop offset="35%" stopColor="#7C3AED" />
          <stop offset="70%" stopColor="#EC4899" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
      </defs>
      <path d="M12 2.5L21.5 19H17.2L12 9.5L6.8 19H2.5L12 2.5Z" fill="url(#agy-grad)" />
      <path d="M12 9.5L14.8 15H9.2L12 9.5Z" fill="#FFFFFF" opacity="0.85" />
    </svg>
  );
}

export function IntelliJLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4.5" fill="#000000" />
      <path d="M3 18.5L6.5 3.5L20 6.5L18 20.5L3 18.5Z" fill="url(#ij-grad)" />
      <rect x="2.5" y="2.5" width="19" height="19" rx="3.5" fill="#000000" />
      <defs>
        <linearGradient id="ij-grad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FE2857" />
          <stop offset="50%" stopColor="#FF318C" />
          <stop offset="100%" stopColor="#087CFA" />
        </linearGradient>
      </defs>
      <path d="M5.5 17.5H11.5V19H5.5V17.5Z" fill="#FFFFFF" />
      <path d="M6 5.5H8.5V14H6V5.5Z" fill="#FFFFFF" />
      <path
        d="M12.5 12H15C16.4 12 17.5 10.9 17.5 9.5C17.5 8.1 16.4 7 15 7H12.5V14H15C16.4 14 17.5 12.9 17.5 11.5"
        stroke="#FFFFFF"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function AndroidStudioLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10.5" fill="#3DDC84" />
      <path d="M7 14L12 5L17 14H7Z" fill="#073042" />
      <circle cx="12" cy="12" r="2.5" fill="#3DDC84" />
      <path
        d="M5.5 7.5L7.5 9.5M18.5 7.5L16.5 9.5"
        stroke="#073042"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function GitHubLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export function GitLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.62 10.88L13.12 2.38a1.59 1.59 0 0 0-2.25 0l-2 2 3.12 3.12a1.88 1.88 0 0 1 2.38 2.38l3.1 3.1a1.88 1.88 0 1 1-1.12 1.13l-2.83-2.83v5.1a1.88 1.88 0 1 1-1.6 0v-5.46a1.88 1.88 0 0 1-.94-2.47L7.87 5.37 2.38 10.88a1.59 1.59 0 0 0 0 2.25l8.5 8.5a1.59 1.59 0 0 0 2.25 0l8.5-8.5a1.59 1.59 0 0 0-.01-2.25z"
        fill="#F05032"
      />
    </svg>
  );
}

export function PostmanLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="11" fill="#FF6C37" />
      <path
        d="M17.8 8.8c-.3-.4-.8-.7-1.3-.7h-5.2c-.3 0-.6.1-.8.4L6.8 12.2c-.4.4-.4 1.1 0 1.5l1.6 1.6c.4.4 1.1.4 1.5 0l3.7-3.7h2.8c.6 0 1.1-.5 1.1-1.1 0-.6-.5-1.1-1.1-1.1h-2.1l1.4-1.4h2.1c.3 0 .5.1.7.3l-.8.5z"
        fill="#FFFFFF"
      />
      <circle cx="15.8" cy="6.2" r="1.3" fill="#FFFFFF" />
    </svg>
  );
}

export function FigmaLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 24C10.2091 24 12 22.2091 12 20V16H8C5.79086 16 4 17.7909 4 20C4 22.2091 5.79086 24 8 24Z"
        fill="#0ACF83"
      />
      <path d="M4 12C4 9.79086 5.79086 8 8 8H12V16H8C5.79086 16 4 14.2091 4 12Z" fill="#A259FF" />
      <path d="M4 4C4 1.79086 5.79086 0 8 0H12V8H8C5.79086 8 4 6.20914 4 4Z" fill="#F24E1E" />
      <path d="M12 0H16C18.2091 0 20 1.79086 20 4C20 6.20914 18.2091 8 16 8H12V0Z" fill="#FF7262" />
      <path
        d="M20 12C20 14.2091 18.2091 16 16 16C13.7909 16 12 14.2091 12 12C12 9.79086 13.7909 8 16 8C18.2091 8 20 9.79086 20 12Z"
        fill="#1ABCFE"
      />
    </svg>
  );
}

export function N8nLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 12a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4 4 4 0 0 1 4-4h2a4 4 0 0 1 4 4 4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4 4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"
        stroke="#EA4B71"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ReplitLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 3H11V8.5H3V3Z" fill="#F26207" />
      <path d="M11 8.5H19V14H11V8.5Z" fill="#F26207" />
      <path d="M3 14H11V19.5H3V14Z" fill="#F26207" />
    </svg>
  );
}

export function DockerLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M23.5 12.2c-.3-.2-1.5-.7-2.8-.2-.3-.8-.9-1.5-1.7-1.9l-.6-.3-.3.6c-.5 1-1.2 1.6-2.1 1.7H2.8c-.4 1.8.1 4 1.4 5.6 1.4 1.7 3.6 2.6 6.3 2.6 6.5 0 11.2-4.1 12.3-7.7.7.1 1.4.1 1.9-.2.2-.1.4-.4.4-.6-.2-.3-.4-.5-.6-.5z"
        fill="#2496ED"
      />
      <rect x="7" y="9" width="2" height="2" rx=".2" fill="#2496ED" />
      <rect x="9.5" y="9" width="2" height="2" rx=".2" fill="#2496ED" />
      <rect x="12" y="9" width="2" height="2" rx=".2" fill="#2496ED" />
      <rect x="9.5" y="6.5" width="2" height="2" rx=".2" fill="#2496ED" />
      <rect x="12" y="6.5" width="2" height="2" rx=".2" fill="#2496ED" />
      <rect x="14.5" y="9" width="2" height="2" rx=".2" fill="#2496ED" />
      <rect x="4.5" y="9" width="2" height="2" rx=".2" fill="#2496ED" />
    </svg>
  );
}

export function XAMPPLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4.5" fill="#FB7A24" />
      <path d="M7 7L17 17M17 7L7 17" stroke="#FFFFFF" strokeWidth="3.2" strokeLinecap="round" />
    </svg>
  );
}

export function WindowsLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 4L10.5 2.8V11H2.5V4Z" fill="#0078D4" />
      <path d="M12 2.6L21.5 1.2V11H12V2.6Z" fill="#0078D4" />
      <path d="M2.5 12.5H10.5V20.7L2.5 19.5V12.5Z" fill="#0078D4" />
      <path d="M12 12.5H21.5V22.3L12 20.9V12.5Z" fill="#0078D4" />
    </svg>
  );
}

export function LinuxLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="12" cy="13" rx="6" ry="8" fill="#F8C43A" />
      <ellipse cx="12" cy="13.5" rx="5" ry="7" fill="#FFFFFF" />
      <path d="M6 13c0-4 2.5-9 6-9s6 5 6 9-2 7-6 7-6-3-6-7z" fill="#000000" />
      <ellipse cx="12" cy="14.5" rx="4" ry="5.5" fill="#FFFFFF" />
      <circle cx="10" cy="8" r="1.2" fill="#FFFFFF" />
      <circle cx="14" cy="8" r="1.2" fill="#FFFFFF" />
      <circle cx="10.4" cy="8" r=".6" fill="#000000" />
      <circle cx="13.6" cy="8" r=".6" fill="#000000" />
      <path d="M10 10.5c.8.8 3.2.8 4 0-.4 1.2-3.6 1.2-4 0z" fill="#E69500" />
      <ellipse cx="8" cy="20" rx="3" ry="1.2" fill="#E69500" />
      <ellipse cx="16" cy="20" rx="3" ry="1.2" fill="#E69500" />
    </svg>
  );
}

export function FirebaseLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.6 18.5L6.8 4.7a.6.6 0 0 1 1.1-.2L11 10.4 4.6 18.5z" fill="#FFA000" />
      <path d="M14.2 8.3l-2.4-4.5a.6.6 0 0 0-1.1 0L4.6 18.5l9.6-10.2z" fill="#F57C00" />
      <path
        d="M12.9 21.2a2.3 2.3 0 0 1-1.8 0L3.5 17.1l8.1-15.3c.3-.6 1.2-.5 1.4.1l2.4 4.6 4.1 7.8-6.6 6.9z"
        fill="#FFCA28"
      />
    </svg>
  );
}

export function JavaLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.8 17.5c2.3.2 4.6.2 6.8-.4 0 0 .5.7-.6 1.2-2.3 1.1-6.7.7-6.2-.8z" fill="#5382A1" />
      <path d="M8.2 15.2c2.1.2 4.1.2 6.1-.3 0 0 .4.6-.5 1-2 1-5.9.6-5.6-.7z" fill="#5382A1" />
      <path
        d="M12.2 12.3c1.2-1.3.8-2.6-.4-3.7-.8-.8-1-1.5-.7-2.3.3-.8 1.1-1.4 1.1-1.4s-.8.6-1.1 1.3c-.4.9-.3 1.8.5 2.6.9.9 1.1 1.7.6 2.5 0 0 .3.4 0 1z"
        fill="#E76F00"
      />
      <path
        d="M14.5 9.8c.8-.8.5-1.7-.3-2.4-.5-.5-.7-1-.5-1.5.2-.5.7-.9.7-.9s-.5.4-.7.9c-.3.6-.2 1.2.3 1.7.6.6.7 1.1.4 1.6 0 0 .2.3.1.6z"
        fill="#E76F00"
      />
      <path d="M6 19.8c3.5.7 8.5.7 12 0 0 0-1.8 1.4-6 1.4s-6-1.4-6-1.4z" fill="#5382A1" />
    </svg>
  );
}

export function PythonLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.9 2c-3.1 0-2.9 1.3-2.9 1.3v1.4h5.9v.9H6.8S4 5.3 4 8.5s2.5 3.3 2.5 3.3h1.5v-2.1s-.1-2.5 2.5-2.5h4.3s2.4.1 2.4-2.4V4.7S17.4 2 11.9 2zm-1.6 1.3c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z"
        fill="#3776AB"
      />
      <path
        d="M12.1 22c3.1 0 2.9-1.3 2.9-1.3v-1.4H9.1v-.9h8.1s2.8.3 2.8-2.9-2.5-3.3-2.5-3.3h-1.5v2.1s.1 2.5-2.5 2.5H9.2s-2.4-.1-2.4 2.4v3.1s-.2 2.7 5.3 2.7zm1.6-1.3c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z"
        fill="#FFD438"
      />
    </svg>
  );
}

export function CLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L3 7.2v9.6L12 22l9-5.2V7.2L12 2z" fill="#00599C" />
      <path d="M12 4.1L5 8.1v7.8l7 4 7-4V8.1L12 4.1z" fill="#A8B9CC" />
      <path
        d="M14.8 8.8c-.8-.5-1.8-.7-2.8-.7-2.6 0-4.5 1.7-4.5 4s1.9 4 4.5 4c1 0 2-.2 2.8-.7v-2.2c-.7.5-1.5.8-2.3.8-1.5 0-2.5-1-2.5-2s1-2 2.5-2c.8 0 1.6.3 2.3.8V8.8z"
        fill="#00599C"
      />
    </svg>
  );
}

export function JavaScriptLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="3.5" fill="#F7DF1E" />
      <path
        d="M7.5 18.5c.8.5 1.7.8 2.6.8 1.4 0 2.2-.7 2.2-2.1v-7.4h-2.1v7.3c0 .5-.3.8-.8.8-.4 0-.8-.2-1.1-.4l-.8 1zm7.8-.3c1 .6 2.1 1 3.2 1 1.9 0 3-.9 3-2.3 0-1.4-.9-2.1-2.4-2.7l-.8-.3c-.9-.4-1.3-.7-1.3-1.3 0-.6.5-1.1 1.4-1.1.9 0 1.6.3 2.2.7l.7-1.4c-.7-.4-1.6-.7-2.7-.7-2 0-3.1 1.1-3.1 2.5 0 1.3.8 2 2.2 2.6l.8.3c1 .4 1.5.8 1.5 1.4 0 .7-.6 1.2-1.7 1.2-1 0-2-.4-2.6-.9l-.7 1.5z"
        fill="#000000"
      />
    </svg>
  );
}

export function TypeScriptLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="3.5" fill="#3178C6" />
      <path
        d="M6 10h6.5v2H10v7H7.7v-7H6v-2zm8.5 7.7c.9.5 1.9.8 2.9.8 1.6 0 2.6-.7 2.6-1.9 0-1.2-.8-1.8-2.2-2.4l-.8-.3c-.9-.4-1.3-.8-1.3-1.4 0-.7.6-1.2 1.6-1.2.9 0 1.8.3 2.4.7l.8-1.6c-.8-.5-1.9-.8-3.1-.8-2.2 0-3.5 1.2-3.5 2.8 0 1.4.9 2.2 2.4 2.8l.8.3c1 .4 1.5.8 1.5 1.5 0 .8-.7 1.3-1.8 1.3-1.1 0-2.2-.4-2.9-1l-.8 1.6z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function ReactLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse
        cx="12"
        cy="12"
        rx="3.5"
        ry="9.5"
        transform="rotate(30 12 12)"
        stroke="#61DAFB"
        strokeWidth="1.4"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="3.5"
        ry="9.5"
        transform="rotate(90 12 12)"
        stroke="#61DAFB"
        strokeWidth="1.4"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="3.5"
        ry="9.5"
        transform="rotate(150 12 12)"
        stroke="#61DAFB"
        strokeWidth="1.4"
      />
      <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
    </svg>
  );
}

export function NextLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="11" fill="currentColor" />
      <path
        d="M15.5 8.5v7l-6-7.8h-1.5v10.5h1.8v-6.9l5.9 7.7h1.6V8.5h-1.8z"
        fill="#000000"
        className="dark:fill-[#000000] fill-[#FFFFFF]"
      />
    </svg>
  );
}

export function NodeLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l9 5.2v10.5L12 23l-9-5.3V7.2L12 2z" stroke="#5FA04E" strokeWidth="2" />
      <path d="M12 6.5l5.5 3.2v6.4L12 19.3l-5.5-3.2V9.7L12 6.5z" fill="#5FA04E" />
    </svg>
  );
}

export function ExpressLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="2"
        y="17"
        fontSize="16"
        fontWeight="800"
        fontFamily="system-ui, sans-serif"
        letterSpacing="-0.06em"
      >
        ex
      </text>
    </svg>
  );
}

export function FlutterLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.5 2.5L4 12l2.9 2.9L19.3 2.5H13.5z" fill="#02569B" />
      <path d="M13.5 13.5L8.5 18.5l2.9 2.9 7.9-7.9H13.5z" fill="#0175C2" />
      <path d="M10.8 16.2L13.5 18.9h5.8l-5-5-3.5 2.3z" fill="#13B9FD" />
    </svg>
  );
}

export function DartLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 12l8-8h8v4l-8 8H4v-4z" fill="#0175C2" />
      <path d="M12 12l8-8v8l-8 8v-8z" fill="#00B4AB" />
      <path d="M4 12l8 8h8v-4l-8-8H4v4z" fill="#29B6F6" />
    </svg>
  );
}

export function FastAPILogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="11" fill="#059669" />
      <path d="M12.5 4.5L6.5 13.5H12L11 19.5L17.5 10.5H12l.5-6z" fill="#FFFFFF" />
    </svg>
  );
}

export function MySQLLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.8 6.5C17.2 4.2 14.2 3.2 11.5 4c-3.2 1-5.4 3.8-5.8 7.1-.3 2.4.4 4.8 2 6.6.5.6 1.2 1.1 1.9 1.4.2-.3.4-.6.6-1-1.3-.5-2.3-1.6-2.7-3-.4-1.3-.2-2.8.5-4 .9-1.5 2.5-2.5 4.2-2.7 2.2-.2 4.4.8 5.6 2.6.4.6.7 1.3.8 2.1.2-.3.4-.7.6-1.1-.1-.7-.4-1.3-.7-2z"
        fill="#00758F"
      />
      <path
        d="M19 13.5c-.3 1.2-1 2.3-2 3-1.4 1-3.2 1.3-4.8.8-.3.3-.7.5-1.1.7 1.8.8 3.9.6 5.5-.5 1.3-.9 2.2-2.3 2.5-3.8.1-.1 0-.2-.1-.2z"
        fill="#F29111"
      />
    </svg>
  );
}

export function PostgreSQLLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2C6.5 2 2 6.5 2 12c0 2.2.7 4.3 2 6l1.2-1.2C4.4 15.4 4 13.8 4 12c0-4.4 3.6-8 8-8s8 3.6 8 8c0 1.8-.6 3.5-1.6 4.9l1.4 1.4c1.4-1.8 2.2-4 2.2-6.3 0-5.5-4.5-10-10-10z"
        fill="#4169E1"
      />
      <path
        d="M14.5 9.5c0-1.4-1.1-2.5-2.5-2.5S9.5 8.1 9.5 9.5c0 1.2.8 2.2 2 2.4v4.6h2V12c1.1-.3 2-1.3 2-2.5z"
        fill="#336791"
      />
    </svg>
  );
}

export function SupabaseLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.2 21.6c-.6.8-1.9.4-1.9-.6V13h8.3c1 0 1.5 1.2.8 1.9l-7.2 6.7z" fill="#3ECF8E" />
      <path d="M10.8 2.4c.6-.8 1.9-.4 1.9.6V11H4.4c-1 0-1.5-1.2-.8-1.9l7.2-6.7z" fill="#249361" />
    </svg>
  );
}

export function PyTorchLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.5 3a7.5 7.5 0 0 0-5 13.1l1.5-1.5a5.5 5.5 0 1 1 7.4-7.4l1.5-1.5A7.5 7.5 0 0 0 13.5 3z"
        fill="#EE4C2C"
      />
      <circle cx="16.5" cy="5.5" r="1.2" fill="#EE4C2C" />
    </svg>
  );
}

export function TensorFlowLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.5L4 7v10l3.5-2V9.5L12 6.5v15l3.5-2v-5.5L20 12V7L12 2.5z" fill="#FF6F00" />
    </svg>
  );
}

export function OpenCVLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="7" r="4" stroke="#ED1C24" strokeWidth="2.2" />
      <circle cx="7.5" cy="15.5" r="4" stroke="#00B22D" strokeWidth="2.2" />
      <circle cx="16.5" cy="15.5" r="4" stroke="#5C3EE8" strokeWidth="2.2" />
    </svg>
  );
}

export function SocketIOLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v5h-2V7zm0 7h2v3h-2v-3z"
      />
    </svg>
  );
}
