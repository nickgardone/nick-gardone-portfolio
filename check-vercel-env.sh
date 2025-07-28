#!/bin/bash

# Script to check if required environment variables are set in Vercel
# This script requires the Vercel CLI to be installed and configured
# Install with: npm install -g vercel
# Configure with: vercel login

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null
then
    echo "Vercel CLI could not be found"
    echo "Install it with: npm install -g vercel"
    echo "Then configure with: vercel login"
    exit 1
fi

# Get the current project name
PROJECT_NAME=$(vercel inspect --format=json | jq -r '.name' 2>/dev/null)

if [ -z "$PROJECT_NAME" ] || [ "$PROJECT_NAME" == "null" ]; then
    echo "Could not determine Vercel project name"
    echo "Make sure you're running this script from within your Vercel project directory"
    echo "Or specify the project name with: vercel inspect <project-name> --format=json"
    exit 1
fi

echo "Checking environment variables for project: $PROJECT_NAME"
echo "=================================================="

# Required environment variables
REQUIRED_VARS=("GMAIL_USER" "GMAIL_PASS" "NEXT_PUBLIC_RECAPTCHA_SITE_KEY" "RECAPTCHA_SECRET_KEY")

# Get environment variables from Vercel
ENV_VARS=$(vercel env ls --format=json 2>/dev/null)

if [ -z "$ENV_VARS" ] || [ "$ENV_VARS" == "null" ]; then
    echo "Could not fetch environment variables"
    echo "Make sure you're logged into Vercel CLI and have access to this project"
    exit 1
fi

# Check each required variable
ALL_SET=true

for var in "${REQUIRED_VARS[@]}"; do
    # Check if variable exists (value will be masked)
    EXISTS=$(echo "$ENV_VARS" | jq -r --arg var "$var" '.[] | select(.key == $var) | .key' 2>/dev/null)
    
    if [ -n "$EXISTS" ]; then
        echo "✅ $var: Set"
    else
        echo "❌ $var: Not set"
        ALL_SET=false
    fi
done

echo ""
if [ "$ALL_SET" = true ]; then
    echo "🎉 All required environment variables are set!"
    echo "You can now redeploy your application to apply the configuration."
else
    echo "⚠️  Some required environment variables are missing."
    echo "Please set the missing variables using:"
    echo "  vercel env add <variable-name>"
    echo ""
    echo "Required variables:"
    for var in "${REQUIRED_VARS[@]}"; do
        echo "  - $var"
    done
fi
