#!/usr/bin/env node

// This script helps with deployment configuration
// It sets the ELEVENTY_RUN_MODE to "build" for production builds

process.env.ELEVENTY_RUN_MODE = "build";

// Import and run the Eleventy build
import { execSync } from 'child_process';

try {
    console.log('Building for production...');
    execSync('npx @11ty/eleventy', { stdio: 'inherit' });
    console.log('Build completed successfully!');
} catch (error) {
    console.error('Build failed:', error.message);
    process.exit(1);
} 