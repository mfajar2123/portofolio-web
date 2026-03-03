# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Enable corepack for pnpm
RUN corepack enable

# Copy package.json and lockfile
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the application
COPY . .

# Build the Nuxt application
RUN pnpm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Set appropriate environment variables
ENV NODE_ENV=production
ENV PORT=3001
ENV HOST=0.0.0.0

# Copy the built output from the builder stage
COPY --from=builder /app/.output ./.output

# Expose the application port
EXPOSE 3001

# Start the Nuxt 3 server
CMD ["node", ".output/server/index.mjs"]
